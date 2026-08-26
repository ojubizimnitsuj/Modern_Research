document.addEventListener('DOMContentLoaded', () => {
  // ── Theme Toggle ──────────────────────────────────────────────
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.documentElement;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.setAttribute('data-theme', 'dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  const urlParams = new URLSearchParams(window.location.search);

  // ── Project page: project.html?id=co2_solid_carbon ────────────
  const projectContainer = document.getElementById('project-container');
  if (projectContainer) {
    const projectId = urlParams.get('id') || 'co2_solid_carbon';
    const data = window.projectDatabase && window.projectDatabase[projectId];
    if (data) {
      renderProject(data, projectContainer);
    } else {
      projectContainer.innerHTML = `<p>Error: Project '${projectId}' not found.</p>`;
    }
  }

  // ── Report page: prompt.html?project=co2_solid_carbon&id=03 ───
  const reportContainer = document.getElementById('report-container');
  if (reportContainer) {
    const projectId = urlParams.get('project') || 'co2_solid_carbon';
    const promptId  = urlParams.get('id');
    const data      = window.projectDatabase && window.projectDatabase[projectId];

    if (!data || !promptId) {
      reportContainer.innerHTML = `<p>Error: Report not found.</p>`;
      return;
    }

    const prompt = data.prompts.find(p => p.id === promptId);
    if (!prompt || !prompt.report_file) {
      reportContainer.innerHTML = `<p>Error: No report file linked for Prompt ${promptId}.</p>`;
      return;
    }

    document.title = `${prompt.title} | Modern Research`;

    fetch(prompt.report_file)
      .then(res => {
        if (!res.ok) throw new Error(`Could not load file (HTTP ${res.status})`);
        return res.text();
      })
      .then(md => {
        // Determine the site root (handles GitHub Pages subdirectory deployments)
        const base = window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');

        const updatedLabel = prompt.lastUpdated
          ? (() => {
              try {
                const [y, m, d] = prompt.lastUpdated.split('-').map(Number);
                return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                  .format(new Date(y, m - 1, d));
              } catch (e) { return prompt.lastUpdated; }
            })()
          : null;

        reportContainer.innerHTML = `
          <a class="back-link" href="project.html?id=${projectId}">← Back to ${data.title}</a>
          <div class="prompt-report-header">
            <div style="display: flex; align-items: baseline; gap: 1rem; flex-wrap: wrap;">
              <span class="prompt-number">Prompt ${prompt.id} &mdash; ${prompt.status}</span>
              ${updatedLabel ? `<span style="font-family: var(--font-sans); font-size: 0.8rem; color: var(--text-muted);">Last updated: ${updatedLabel}</span>` : ''}
            </div>
          </div>
          <div class="report-content">
            ${marked.parse(md)}
          </div>
        `;

        // Fix all relative image src paths to absolute so they work on GitHub Pages
        reportContainer.querySelectorAll('img').forEach(img => {
          const src = img.getAttribute('src');
          if (src && !src.startsWith('http') && !src.startsWith('/') && !src.startsWith('data:')) {
            img.src = base + src;
          }
        });
      })
      .catch(err => {
        reportContainer.innerHTML = `<p style="color:red;">Error loading report: ${err.message}</p>`;
      });
  }
});

// ── Render project overview page ──────────────────────────────────
function renderProject(data, container) {
  let html = `
    <header class="project-header">
      <h1>${data.title}</h1>
      <div class="project-meta">
        <span><span class="status-badge">${data.status}</span></span>
        <span><strong>Started:</strong> ${data.dateStarted}</span>
        <span><strong>Completed Prompts:</strong> ${data.prompts.length}</span>
      </div>
    </header>

    <section class="project-description">
      <h2>Research Question</h2>
      <p><em>${data.currentQuestion}</em></p>

      <h3>Important Distinctions</h3>
      <ul class="sources-list">
        ${data.distinctions.map(d => `<li>${d}</li>`).join('')}
      </ul>
    </section>

    <div class="prompt-record">
      <h2>Chronological Research Record</h2>
  `;

  data.prompts.forEach(prompt => {
    const updatedLabel = prompt.lastUpdated
      ? (() => {
          try {
            // Parse as local date to avoid timezone shift (treat as YYYY-MM-DD local)
            const [y, m, d] = prompt.lastUpdated.split('-').map(Number);
            return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
              .format(new Date(y, m - 1, d));
          } catch (e) { return prompt.lastUpdated; }
        })()
      : null;

    html += `
      <article class="prompt">
        <div style="display: flex; align-items: baseline; gap: 1rem; flex-wrap: wrap;">
          <span class="prompt-number">Prompt ${prompt.id} &mdash; ${prompt.status}</span>
          ${updatedLabel ? `<span style="font-family: var(--font-sans); font-size: 0.8rem; color: var(--text-muted);">Last updated: ${updatedLabel}</span>` : ''}
        </div>
        <h3 class="prompt-title">${prompt.title}</h3>

        <div class="prompt-section">
          <div class="prompt-section-title">Goal</div>
          <p>${prompt.goal}</p>
        </div>

        <div class="prompt-section">
          <div class="prompt-section-title">Findings</div>
          ${prompt.findings.map(f => `
            <div style="margin-bottom: 1rem;">
              <span class="evidence-type evidence-${f.type.split(' ')[0].toLowerCase()}">${f.type}</span>
              <p style="margin-top: 0.2rem;">${f.text}</p>
            </div>
          `).join('')}
        </div>

        <div class="prompt-section">
          <div class="prompt-section-title">Sources</div>
          <ul class="sources-list">
            ${(prompt.sources || []).map(s => `
              <li><strong>${s.authors}</strong> "${s.title}." <em>${s.journal}</em> (${s.year}).</li>
            `).join('')}
          </ul>
        </div>

        ${prompt.report_file ? `
          <div style="margin-top: 1.5rem;">
            <a href="prompt.html?project=${data.id}&id=${prompt.id}"
               style="font-family: var(--font-sans); font-size: 0.9rem; font-weight: 600;">
              View Full Report &rarr;
            </a>
          </div>
        ` : ''}
      </article>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}
