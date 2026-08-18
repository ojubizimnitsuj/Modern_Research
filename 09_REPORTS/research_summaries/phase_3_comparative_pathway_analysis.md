# Executive Summary

Phase 3 evaluated four principal pathways for converting CO₂ to solid carbon: direct electrochemical reduction, molten-salt/carbonate electrolysis, liquid-metal systems, and hydrogen-assisted thermochemical reduction (Bosch reaction). The analysis shows a massive gap between thermodynamic minimums and experimental realities. While molten-salt systems show the most promise for producing varied carbon morphologies at high rates, they suffer from high energy penalties due to operating temperatures and separation challenges. Liquid metal systems offer near-room-temperature operation but lack continuous scalability. Hydrogen-assisted pathways are mature but fundamentally shift the energy burden to green hydrogen production.

# Research Question

Which technological pathways have a scientifically credible route from CO₂ to stable solid carbon, and how do they compare when evaluated using the same technical criteria?

# Evaluation Framework

Pathways were evaluated based on their mechanism, reducing energy source, operating conditions, experimental energy, carbon yield and morphology, atmospheric CO₂ compatibility, and capability for continuous operation at scale. Evidence quality was ranked from Level 1 (primary experimental) to Level 5 (speculative).

# Pathway A — Direct Electrochemical Reduction

- **Mechanism:** Direct reduction of CO₂ at the cathode, often in solid oxide or aqueous/non-aqueous electrolytes, producing carbon and oxygen.
- **Reducing Energy:** Electricity.
- **Operating Conditions:** Varies widely, room temperature for some aqueous to >800°C for Solid Oxide Electrolysis Cells (SOECs).
- **Carbon Product:** Typically amorphous carbon or mixed carbonaceous deposits.
- **Energy Requirements:** High overpotentials lead to significant energy losses; Faradaic efficiency is often low due to competing hydrogen evolution reaction (HER) in aqueous media.
- **Scalability:** Very limited continuous operation data; mostly laboratory batch.

# Pathway B — Molten-Salt / Molten-Carbonate Electrolysis

- **Mechanism:** CO₂ is absorbed into a molten carbonate melt (e.g., Li₂CO₃, Na₂CO₃, K₂CO₃) and reduced electrochemically at the cathode. Carbonate ions are reduced to C and O²⁻, and O²⁻ is oxidized at the anode.
- **Reducing Energy:** Electricity (and heat to maintain melt).
- **Operating Conditions:** 450°C to 800°C depending on eutectic mixture.
- **Carbon Product:** Can produce high-value multi-walled carbon nanotubes (MWCNTs), carbon nanofibers, and carbon nano-onions depending on salt and current density.
- **Energy Requirements:** Substantial heat required. Experimental voltages are often 2-3V (compared to ~1V thermodynamic).
- **Scalability:** Requires complex continuous removal of solid carbon from the molten salt without losing electrolyte, which remains a major engineering obstacle.

# Pathway C — Liquid-Metal Systems

- **Mechanism:** CO₂ is reduced on a liquid metal interface (e.g., Gallium, EGaIn, often with ceria nanoparticles) via triboelectrochemical or electrocatalytic processes.
- **Reducing Energy:** Electricity / mechanical energy.
- **Operating Conditions:** Near room temperature.
- **Carbon Product:** Carbonaceous sheets, amorphous carbon.
- **Energy Requirements:** Lower thermal requirements, but high overpotentials and electrical energy needed per mole of carbon.
- **Scalability:** Chiefly Level 4 (proof-of-concept). Carbon accumulates on the surface and requires mechanical separation (e.g., stirring or sonication). Continuous industrial scale not demonstrated.

# Pathway D — Hydrogen-Assisted Thermochemical Reduction

- **Mechanism:** Bosch reaction (CO₂ + 2H₂ ⇌ C(s) + 2H₂O), usually in two steps via reverse water-gas shift.
- **Reducing Energy:** Thermal energy + chemical energy of H₂.
- **Operating Conditions:** 530°C to 730°C, typically using Iron or Cobalt catalysts.
- **Carbon Product:** Graphite, carbon deposition on catalysts.
- **Energy Requirements:** The reaction is exothermic, but producing the green H₂ requires massive energy (via water electrolysis).
- **Scalability:** High maturity (developed for space life support). Biggest issue is catalyst fouling (coking) which deactivates the bed, requiring periodic replacement or regeneration.

# Additional Emerging Pathways

- **Tandem Electrocatalytic-Thermocatalytic Systems:** E.g., reducing CO₂ to CO electrochemically, then converting CO to solid carbon via thermochemical disproportionation (Boudouard reaction).

# Comparative Energy Analysis

- **Thermodynamic Minimum:** ~394 kJ/mol CO₂ (direct to graphite).
- **Molten Salt:** Often >800 kJ/mol when accounting for overpotentials and heating.
- **Hydrogen-Assisted:** The Bosch reaction itself is exothermic (-90 kJ/mol), but generating 2 moles of H₂ requires at least 474 kJ/mol theoretically, realistically >700 kJ/mol with electrolysis inefficiencies.
- **Gap:** Process-level energy (heating, cooling, separation) often exceeds theoretical minimum by a factor of 2 to 3.

# Comparative Carbon Product Analysis

- **Pathway A:** Amorphous carbon (low value, permanent storage).
- **Pathway B:** CNTs, nanofibers (high value, material utilization).
- **Pathway C:** Flakes/amorphous (low/medium value).
- **Pathway D:** Graphite/coke (medium value).
*Carbon removal feasibility requires permanent storage; high-value products are often used and potentially re-oxidized.*

# Atmospheric CO₂ Compatibility

- **Direct Air:** Only Pathway B (Molten Carbonate) has shown some theoretical and limited experimental capability to directly absorb CO₂ from simulated air. Other pathways require concentrated CO₂ (Case 1 or 2).
- **Contaminants:** O₂ and H₂O severely disrupt Pathways A, C, and D by promoting side reactions or poisoning catalysts.

# Continuous Operation and Separation

- **Batch vs Continuous:** Almost all evidence is laboratory batch (Level 1/4).
- **Separation:** Pathway B requires extracting solid C from molten salts. Pathway C requires skimming C from liquid metal. Pathway D requires continuous catalyst replenishment or moving beds to handle coking. This is the largest universal process barrier.

# Scale and Technology Maturity

- **Pathway B:** Pilot scale attempts (e.g., Carbon2Value).
- **Pathway D:** Demonstration scale (aerospace applications).
- **Pathway C:** Laboratory scale.

# Evidence Quality

- **Pathway A:** Level 2
- **Pathway B:** Level 1/2
- **Pathway C:** Level 1/4 (Strong primary papers, but proof-of-concept for scale).
- **Pathway D:** Level 1/2

# Comparative Matrix

| Category | Pathway A | Pathway B | Pathway C | Pathway D |
|---|---|---|---|---|
| CO₂ feed | Concentrated | Concentrated/Air potential | Concentrated | Concentrated |
| Direct air capability | Incompatible | Proposed/Untested | Incompatible | Incompatible |
| CO₂ concentration required | High | Medium/Low | High | High |
| Main intermediate | CO or Formate | Carbonate ion | CO₂ radical | CO (RWGS) |
| Reducing energy source | Electricity | Electricity + Heat | Electricity | H₂ + Heat |
| Operating temperature | 20-800°C | 450-800°C | Room temp | 530-730°C |
| Operating pressure | 1 atm+ | 1 atm | 1 atm | 1 atm+ |
| Theoretical energy | 394 kJ/mol | 394 kJ/mol | 394 kJ/mol | 474 kJ/mol (for H₂) |
| Experimental energy | High | Med/High | High | High (electrolysis) |
| Voltage / heat requirement| High voltage | 2-3V + Heat | High voltage | High heat |
| Current density | Low | High | Low | N/A |
| Faradaic efficiency | Low | High | Medium | N/A |
| CO₂ conversion | Low | High | Medium | High |
| Carbon yield | Low | High | Medium | High |
| Carbon morphology | Amorphous | CNTs, Nanofibers | Flakes | Graphite |
| Carbon purity | Low/Med | High (if washed) | Med | High |
| Catalyst/electrode | Cu, Carbon, Oxide | Graphite, Ni, steel | Ga, EGaIn, Ceria | Fe, Co, Ni |
| Catalyst lifetime | Short | Medium | Unknown | Short (coking) |
| Carbon separation | Manual/Batch | Manual/Batch from melt | Skimming/Agitation | Catalyst replacement |
| Oxygen/byproducts | O₂, H₂ (aqueous) | O₂ | O₂ | H₂O |
| Water requirements | Low | Low | Low | High (for H₂) |
| Major energy penalties | Overpotential | Heating/Separation | Overpotential | Electrolysis |
| Main scalability obstacle | Low Faradaic efficiency | Carbon separation from salt | Continuous C removal | Catalyst fouling (coking) |
| Technology maturity | Low | Medium | Low | High |
| Evidence quality | Level 2 | Level 1 | Level 4 | Level 1 |

# Major Findings

1. **Separation is the bottleneck:** Removing solid carbon continuously without losing electrolyte or catalyst is unsolved at an industrial scale for all pathways.
2. **Energy gap:** The electrical and thermal energy actually consumed is typically 2x-3x the thermodynamic minimum.
3. **Capture vs Conversion:** Most pathways require highly pure CO₂. Molten carbonates are the only strong candidate for simultaneous capture and conversion.

# Major Unknowns

1. The exact process-level energy penalty of separating solid carbon from molten salts.
2. Long-term catalyst stability in liquid metal systems under continuous flow.

# Pathways Most Worth Further Investigation

- **Pathway B (Molten-Salt Electrolysis):** Because it has the strongest potential to utilize direct or low-concentration CO₂ and produces stable carbon structures.

# Pathways That Should Be Deprioritized

- **Pathway A (Direct Aqueous):** Dominated by the hydrogen evolution reaction.
- **Pathway C (Liquid Metal):** Outstanding fundamental science but currently lacks a credible continuous-flow reactor design.

# Recommended Phase 4 Investigation

Investigate the process-level energy and engineering design for separating solid carbon from a continuous molten-salt reactor. 

# Sources

- Ren, J., et al., "One-Pot Synthesis of Carbon Nanofibers from CO2," Nano Letters (2015). (DOI: 10.1021/acs.nanolett.5b02427)
- Esrafilzadeh, D., et al., "Room temperature CO2 reduction to solid carbon species on liquid metals featuring atomically thin ceria interfaces," Nature Communications (2019). (DOI: 10.1038/s41467-019-08824-8)
- "Molten salt electrolysis: promising technology to capture and transform CO2 into valuable carbon materials", RSC (2024). (DOI: 10.1039/D4EE02672G)
- NASA Technical Reports on Bosch Reaction for Space Life Support.
