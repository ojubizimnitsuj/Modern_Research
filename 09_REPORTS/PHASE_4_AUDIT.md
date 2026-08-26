# Phase 4 Audit & Correction Report

## What was changed
- **Energy Range Claims**: The presentation of 7–14 MWh/tCO₂ was modified from a "practical range" or "best practical range" to strictly "illustrative model scenarios based on assumed parameters," with explicit language that there is insufficient evidence to establish a reliable industrial energy range.
- **Separation Energy**: The 2.0–10.0 kWh/kgC parameter was correctly identified and explicitly labeled as an unvalidated assumed sensitivity parameter with no defensible literature basis for this specific process.
- **Thermal Energy**: The 500–1500 kWh/tCO₂ range was re-characterized as an engineering scenario assumption, distinctly separating mathematically derived thermodynamic requirements from assumed sensible heat and heat recovery.
- **Atmospheric CO₂ Integration**: Categorical dismissals (e.g., "catastrophic") were replaced with scientifically defensible wording regarding the severe sensible-heat and mass-transfer challenges. The distinction between laboratory chemical absorption and continuous industrial direct-air integration was made explicit.
- **Faradaic Efficiency**: Broad claims of "75-95% efficiency" were corrected to reflect that these are varied, batch-specific results dependent on temp/electrode/current density, and that continuous operational efficiency remains unknown.
- **Voltage Parameters**: Clarified that 1.02 V is a theoretical reversible limit, 3.0 V to 5.0 V are typical laboratory values (e.g., Ren et al., 2015), and 2.2 V is merely a projected engineering estimate rather than a demonstrated industrial point.
- **Evidence Classification Table**: Added an explicit classification table to the end of the report summarizing the status of each major parameter.
- **Final Judgment**: Rewritten exactly as mandated to provide a cautious, evidence-backed conclusion regarding the unproven industrial viability of the pathway.

## What numerical corrections were made
- The Python model calculations were verified (mass balances, Faraday's law, unit conversions). All numeric calculations in `phase4_model.py` are correct.
- The theoretical baseline energy conversion was verified: 1.02 V at 100% FE yields exactly 2,484.6 kWh/tCO₂. The ~2,560 kWh/tCO₂ figure generated previously arises because 1.02 V is slightly rounded; the actual thermo minimum is 394.4 kJ/mol CO₂, matching these values closely. The results of the scenario analyses did not strictly require recalculation, but their *descriptions* were heavily corrected in the text to prevent them from being mistaken for real-world measurements.

## Which assumptions remain assumptions
- **Separation Energy** (2-10 kWh/kgC).
- **Thermal Process Heat** (500-1500 kWh/tCO₂).
- **Carbonate Entrainment / Electrolyte Loss** (0.1%-20%).
- **Future Operating Voltage Targets** (e.g., 2.2V at high FE).
- **Future Heat Integration / Recovery performance** for direct-air systems.

## Which important questions remain unresolved
- The exact industrial separation energy required for continuous high-temperature molten-carbonate electrolysis.
- The continuous industrial-scale total energy consumption for this pathway.
- The practical mass-transfer limits and heat recovery penalties of integrating atmospheric air (420 ppm CO₂) directly into an 800°C reactor at industrial scale.
