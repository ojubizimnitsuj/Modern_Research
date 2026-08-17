document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.documentElement;
  
  // Check local storage or system preference
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

  // Project Data Loading Logic
  const projectContainer = document.getElementById('project-container');
  if (projectContainer) {
    // Determine project ID from URL, fallback to co2_solid_carbon for now
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'co2_solid_carbon';

    // We use the global window.projectDatabase populated by the data JS files
    // to avoid CORS errors when opening local files in the browser.
    const data = window.projectDatabase && window.projectDatabase[projectId];
    
    if (data) {
      renderProject(data, projectContainer);
    } else {
      projectContainer.innerHTML = `<p>Error loading project data: Project '${projectId}' not found.</p>`;
    }
  }
});

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
    html += `
      <article class="prompt">
        <span class="prompt-number">Prompt ${prompt.id} &mdash; ${prompt.status}</span>
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
            ${prompt.sources.map(s => `
              <li><strong>${s.authors}</strong> "${s.title}." <em>${s.journal}</em> (${s.year}).</li>
            `).join('')}
          </ul>
        </div>
      </article>
    `;
  });

  html += `</div>`;
  container.innerHTML = html;
}
