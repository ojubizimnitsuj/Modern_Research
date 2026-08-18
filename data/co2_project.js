const co2_solid_carbon = {
  "id": "co2_solid_carbon",
  "title": "Atmospheric CO₂ → Solid Carbon",
  "status": "In progress",
  "dateStarted": "2026",
  "currentQuestion": "Can carbon captured from the atmosphere be transformed into a stable solid carbon material in a process that is scientifically feasible, energetically defensible, and ultimately capable of meaningful carbon removal?",
  "distinctions": [
    "AI-assisted findings are subject to verification.",
    "This is a public record of a personal research project."
  ],
  "prompts": [
    {
      "id": "01",
      "status": "Completed",
      "title": "Scientific Reconnaissance",
      "goal": "Establish the scientific and computational landscape of CO₂ → solid carbon conversion.",
      "findings": [
        {
          "type": "AI-assisted findings",
          "text": "Converting atmospheric CO₂ into stable solid carbon is thermodynamically challenging but scientifically possible. The most significant hurdles are energy efficiency, catalyst deactivation (coking), and continuous product separation."
        },
        {
          "type": "Published evidence",
          "text": "Four major candidate technology families exist: 1. Molten-salt electrolysis, 2. Liquid-metal systems, 3. Tandem electrochemical–thermochemical processes, 4. H₂-assisted thermochemical reduction."
        },
        {
          "type": "Current interpretation",
          "text": "Molten salts and liquid metals offer interesting pathways but face massive scalability and continuous extraction challenges. Thermochemical pathways rely heavily on green hydrogen availability."
        },
        {
          "type": "Unknown",
          "text": "It is unknown if the energy required to drive these endothermic reactions can be sourced purely from renewables at a scale that actually results in net carbon removal."
        }
      ],
      "sources": [
        {
          "title": "Room temperature CO2 reduction to solid carbon species on liquid metals featuring atomically thin ceria interfaces",
          "authors": "Esrafilzadeh, D., et al.",
          "journal": "Nature Communications",
          "year": 2019
        },
        {
          "title": "One-Pot Synthesis of Carbon Nanofibers from CO2",
          "authors": "Ren, J., et al.",
          "journal": "Nano Letters",
          "year": 2015
        },
        {
          "title": "Tandem electrocatalytic-thermocatalytic synthesis of carbon nanofibers from CO2",
          "authors": "Xie, Z., et al.",
          "journal": "Nature Catalysis",
          "year": 2024
        }
      ]
    },
    {
      "id": "02",
      "status": "Completed",
      "title": "Thermodynamic Foundations",
      "goal": "Establish the fundamental thermodynamic baseline for converting CO₂ into stable solid carbon.",
      "method": "Theoretical calculations using standard thermodynamic data from NIST-JANAF (298.15 K, 1 atm) computed via Python.",
      "findings": [
        {
          "type": "AI-assisted findings",
          "text": "The theoretical minimum work (ΔG) to directly split pure CO₂ into graphite and O₂ at standard conditions is +394.4 kJ/mol. Obtaining CO₂ from ambient air (420 ppm) adds a theoretical minimum separation penalty of +19.3 kJ/mol."
        },
        {
          "type": "Calculations",
          "text": "Pathway A (Direct): ΔH = +393.5 kJ/mol, ΔS = -2.9 J/mol-K, ΔG = +394.4 kJ/mol. Pathway B (Hydrogen): ΔG = -79.9 kJ/mol (spontaneous, but relies on energy-intensive green H₂)."
        },
        {
          "type": "Current interpretation",
          "text": "Increasing temperature does not lower the thermodynamic energy requirement; it only improves kinetics. Hydrogen-assisted reduction shifts the energy penalty to the H₂ generation step."
        },
        {
          "type": "Unknown",
          "text": "The practical process penalties, particularly the energy required to separate solid carbon from liquid mediums, remain unknown."
        }
      ],
      "sources": [
        {
          "title": "NIST-JANAF Thermochemical Tables",
          "authors": "NIST",
          "journal": "Standard Reference Data",
          "year": 1998
        }
      ],
      "recommended_next_question": "What is the process-level energy balance of leading continuous reactor designs, focusing on carbon separation energy?"
    },
    {
      "id": "03",
      "status": "Completed",
      "title": "Comparative Pathway Analysis",
      "goal": "Compare the major technically credible pathways for converting CO2 into solid elemental carbon.",
      "method": "Literature review and comparative analysis against thermodynamic baselines.",
      "pathways_investigated": ["Direct Electrochemical Reduction", "Molten-Salt Electrolysis", "Liquid-Metal Systems", "Hydrogen-Assisted Thermochemical Reduction"],
      "findings": [
        {
          "type": "AI-assisted findings",
          "text": "Molten-salt electrolysis shows the most promise for utilizing low-concentration CO2 and producing varied carbon morphologies at high rates, but faces immense challenges in continuous carbon separation."
        },
        {
          "type": "AI-assisted findings",
          "text": "The gap between thermodynamic theoretical minimum energy and practical process-level energy is often a factor of 2 to 3, largely due to heating, overpotentials, and separation penalties."
        },
        {
          "type": "Current interpretation",
          "text": "Continuous removal of solid carbon without catalyst or electrolyte loss is the universal bottleneck for industrial scalability across all pathways."
        }
      ],
      "evidence_quality": "Ranging from Level 1 (Bosch, Molten-salt) to Level 4 (Liquid metals).",
      "quantitative_results": "Thermodynamic minimum: ~394 kJ/mol CO2. Experimental requirements often exceed 800 kJ/mol (Molten Salt) or 700 kJ/mol (Hydrogen-assisted).",
      "sources": [
        {
          "title": "Room temperature CO2 reduction to solid carbon species on liquid metals featuring atomically thin ceria interfaces",
          "journal": "Nature Communications",
          "year": 2019,
          "doi": "10.1038/s41467-019-08824-8"
        },
        {
          "title": "Molten salt electrolysis: promising technology to capture and transform CO2 into valuable carbon materials",
          "journal": "The Royal Society of Chemistry",
          "year": 2024,
          "doi": "10.1039/D4EE02672G"
        }
      ],
      "uncertainties": "Exact energy penalty for carbon separation from molten salts; long term stability of liquid metal systems in continuous operation.",
      "conclusions": "Molten-salt electrolysis is the most viable path for simultaneous capture and conversion, but separation engineering is unsolved.",
      "recommended_next_investigation": "Investigate the process-level energy and engineering design for separating solid carbon from a continuous molten-salt reactor."
    }
  ]
};
// Add to a global store to allow app.js to find it by ID
window.projectDatabase = window.projectDatabase || {};
window.projectDatabase['co2_solid_carbon'] = co2_solid_carbon;
