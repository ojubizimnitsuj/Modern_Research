# Phase 1 Reconnaissance: CO₂ to Solid Carbon

## Key Findings
Converting atmospheric CO₂ into stable solid carbon is thermodynamically challenging but scientifically possible. While CO₂ mineralization (forming solid carbonates) is relatively well-established, reducing CO₂ directly to elemental or allotropic carbon requires significant energy to break the strong C=O double bonds. Recent breakthroughs have demonstrated laboratory-scale conversion using molten salts, liquid metals, and tandem catalytic processes, producing high-value materials like carbon nanotubes (CNTs) and nanofibers (CNFs). The most significant hurdles are energy efficiency, catalyst deactivation (coking), and continuous product separation.

## Major Technology Pathways

1. **Molten Salt Electrolysis**
   - **Basic Chemical Concept**: Electrochemical reduction of CO₂ absorbed in molten alkali carbonates (e.g., Li₂CO₃) at high temperatures (500–800°C).
   - **Approximate Maturity/Evidence Level**: Experimental / Lab-scale.
   - **Type of Carbon Product**: Carbon nanotubes (CNTs), carbon nanofibers (CNFs), graphite.
   - **Atmospheric CO₂ Potential**: Yes, molten salts can directly absorb CO₂ from the air.
   - **Most Important Scientific Obstacle**: High thermal energy requirements and rapid degradation of electrodes.

2. **Liquid Metal Catalysis**
   - **Basic Chemical Concept**: Use of low-melting-point, active liquid metals (e.g., Galinstan alloyed with Cerium) to catalytically reduce CO₂ at or near room temperature.
   - **Approximate Maturity/Evidence Level**: Early Experimental / Proof-of-concept.
   - **Type of Carbon Product**: Amorphous carbon, 2D graphitic carbon flakes.
   - **Atmospheric CO₂ Potential**: Theoretically possible, but low concentration in air might severely limit kinetics.
   - **Most Important Scientific Obstacle**: Continuous separation of the solid carbon product from the liquid metal catalyst without losing the metal.

3. **Tandem Electrocatalytic-Thermocatalytic Processes**
   - **Basic Chemical Concept**: A two-step process where CO₂ is first electrochemically reduced to an intermediate (like CO or syngas), which is then thermochemically decomposed over a solid catalyst to solid carbon and H₂.
   - **Approximate Maturity/Evidence Level**: Experimental / Lab-scale.
   - **Type of Carbon Product**: Carbon nanofibers (CNFs).
   - **Atmospheric CO₂ Potential**: Requires a separate concentration step (DAC) as the electrocatalyst requires pure CO₂ streams to avoid side reactions.
   - **Most Important Scientific Obstacle**: Overall system complexity, balancing the rates of two distinct reactors, and managing the high energy demand of the electrocatalysis step.

4. **Thermochemical Reduction (Bosch Reaction variant)**
   - **Basic Chemical Concept**: Reacting CO₂ with H₂ at high temperatures (450–600°C) over an iron or cobalt catalyst to form solid carbon and water.
   - **Approximate Maturity/Evidence Level**: Advanced Prototype (developed for aerospace, emerging for terrestrial CCU).
   - **Type of Carbon Product**: Elemental carbon, graphite.
   - **Atmospheric CO₂ Potential**: Only with pre-concentration.
   - **Most Important Scientific Obstacle**: Requires a massive, cheap supply of green H₂; otherwise, the process is not net-negative.

## Fundamental Scientific Questions
- **Thermodynamics**: What is the theoretical minimum energy (Gibbs free energy) required to reduce CO₂ to various solid carbon allotropes under different conditions?
- **Reaction Equilibrium**: In multi-phase high-temperature systems (like molten salts), what is the equilibrium speciation of carbon and oxygen?
- **Reaction Kinetics**: What are the rate-limiting steps in breaking the C=O bond on various catalytic surfaces?
- **Catalyst Surface Behavior**: How does carbon deposit on solid catalysts, and what governs the morphology (amorphous vs. tubular)? How can active sites remain unblocked (preventing coking)?
- **Process Energy Balance**: What are the total heat and electron requirements for continuous operation, including separation and recycling?
- **Mass Balance & Carbon Yield**: What is the selectivity of these pathways toward solid carbon versus gaseous byproducts like CO or CH₄?
- **Impurity Handling**: How do O₂, N₂, and H₂O in atmospheric air affect the reduction mechanisms if direct integration is attempted?

## Important Experimental Evidence

1. **Room temperature CO₂ reduction to solid carbon species on liquid metals featuring atomically thin ceria interfaces**
   - **Year**: 2019
   - **Technology**: Liquid Metal Catalysis (Ga-In-Sn-Ce alloy)
   - **Reaction/Pathway**: Direct catalytic reduction at room temperature
   - **Carbon Product**: Amorphous carbon and graphitic flakes
   - **Experimental or Theoretical**: Experimental
   - **Major Operating Conditions**: Room temperature, liquid phase
   - **Most Important Result**: Demonstrated continuous CO₂ conversion without carbon coking on the catalyst surface.
   - **Most Important Limitation**: Scalability of the reactor and mechanical separation of carbon from the dense liquid metal.
   - **Evidence Level**: High (Primary Literature, *Nature Communications*)

2. **One-Pot Synthesis of Carbon Nanofibers from CO₂**
   - **Year**: 2015
   - **Technology**: Molten Salt Electrolysis
   - **Reaction/Pathway**: Electrolytic reduction of CO₂ in molten carbonates
   - **Carbon Product**: Carbon Nanofibers (CNFs)
   - **Experimental or Theoretical**: Experimental
   - **Major Operating Conditions**: High temperature (730°C), galvanized steel cathode
   - **Most Important Result**: High-yield production of high-value CNFs directly from CO₂.
   - **Most Important Limitation**: Extremely high energy input required to maintain molten state; electrode degradation.
   - **Evidence Level**: High (Primary Literature, *Nano Letters*)

3. **Tandem electrocatalytic-thermocatalytic synthesis of carbon nanofibers from CO₂**
   - **Year**: 2024
   - **Technology**: Tandem Electrocatalysis-Thermocatalysis
   - **Reaction/Pathway**: CO₂ → CO/H₂ (electro) → CNFs (thermo)
   - **Carbon Product**: Carbon Nanofibers (CNFs)
   - **Experimental or Theoretical**: Experimental
   - **Major Operating Conditions**: 400°C for the thermocatalytic step, ambient for electrocatalytic.
   - **Most Important Result**: Successfully coupled low-temperature CO₂ reduction with structural carbon growth.
   - **Most Important Limitation**: Multi-step process complexity and reliance on expensive Pd-based electrocatalysts.
   - **Evidence Level**: High (Primary Literature, *Nature Catalysis*)

## Relevant Computational Methods

| Scientific question | Computational method | Possible open-source tool |
| :--- | :--- | :--- |
| Thermodynamic equilibrium & Minimum Energy | Equilibrium calculation | Cantera |
| Reaction kinetics & Gas-phase pathways | Kinetic modeling | Cantera |
| Multiphase chemistry (Molten Salts) | Thermodynamic/speciation modeling | Reaktoro |
| Catalyst surface behavior & electronic structure | Quantum chemistry (DFT) | PySCF / ASE + Quantum ESPRESSO |
| Process energy balance & Flowsheeting | Process simulation | DWSIM |
| Fluid/phase behavior (CO₂ handling) | Thermodynamic modeling | NeqSim |

## Candidate Open-Source Tools

- **Cantera**: 
  - *Answers*: Gas-phase and surface kinetics, thermodynamic equilibrium. 
  - *Inputs*: Reaction mechanisms, initial state (T, P, X). 
  - *Outputs*: Equilibrium compositions, reaction rates. 
  - *Suitability*: Highly suitable for modeling tandem or high-temperature gas pathways. 
  - *Difficulty*: Moderate. 
  - *Local Run*: Yes. 
  - *HPC*: Rarely needed for simple 0D/1D models.
- **Reaktoro**: 
  - *Answers*: Multiphase thermodynamic equilibrium (e.g., solid carbon precipitating from liquid). 
  - *Inputs*: Thermodynamic databases, chemical system elements. 
  - *Outputs*: Phase amounts, equilibrium states. 
  - *Suitability*: Extremely suitable for modeling the molten salt electrolysis pathway. 
  - *Difficulty*: Moderate to High (due to database preparation). 
  - *Local Run*: Yes. 
  - *HPC*: No.
- **PySCF / ASE**: 
  - *Answers*: Catalyst binding energies, reaction barriers on surfaces (e.g., liquid metals). 
  - *Inputs*: Atomic coordinates, functionals, basis sets. 
  - *Outputs*: Electronic energies, optimized geometries. 
  - *Suitability*: Suitable for fundamental catalyst design, but very specialized. 
  - *Difficulty*: Very High. 
  - *Local Run*: Only for very small molecules. 
  - *HPC*: Strongly recommended for realistic catalyst surface models.
- **DWSIM**: 
  - *Answers*: Overall process energy consumption, mass balances. 
  - *Inputs*: Unit operations (reactors, separators), thermodynamics packages. 
  - *Outputs*: Flowsheets, energy penalties. 
  - *Suitability*: Crucial for evaluating if a pathway can be net-negative energetically. 
  - *Difficulty*: Moderate. 
  - *Local Run*: Yes. 
  - *HPC*: No.

## Major Unknowns
- **Energy Net-Negativity**: It is unknown if the energy required to drive these endothermic/high-activation-energy reactions can be sourced purely from renewables at a scale that actually results in net carbon removal.
- **Continuous Product Separation**: In liquid-phase reactors (molten salts, liquid metals), continuously extracting the solid carbon without losing the liquid medium remains largely unsolved.
- **Direct Air Integration**: It is unknown how trace atmospheric gases (like oxygen, which could re-oxidize the carbon or poison the catalyst) will impact the kinetics if direct air capture is integrated with the conversion step.

## Recommended Next Questions

1. **What is the theoretical thermodynamic energy penalty for each pathway?**
   - *Why it matters*: If a pathway violates basic energy efficiency constraints for net-negative carbon removal, it should be discarded early.
   - *Current Evidence*: Standard heats of formation are known.
   - *Unknown*: The practical minimum energy when accounting for phase changes and separation.
   - *Method*: Simple Python calculations and thermodynamic modeling (Cantera/Reaktoro).

2. **How can solid carbon be continuously separated from a liquid metal or molten salt reactor?**
   - *Why it matters*: Batch processes are insufficient for planetary-scale carbon removal; continuous operation is mandatory.
   - *Current Evidence*: Lab studies mostly run batch or semi-batch reactions and clean the electrodes/catalyst manually.
   - *Unknown*: Scalable physical/chemical separation mechanisms.
   - *Method*: Literature research (focusing on chemical engineering and metallurgy).

3. **Is it fundamentally better to use H₂ to strip oxygen from CO₂, or to use electrons directly?**
   - *Why it matters*: Determines whether we should focus research on thermochemical (Bosch-like) pathways or electrochemical pathways.
   - *Current Evidence*: Both work in the lab.
   - *Unknown*: The lifecycle exergy efficiency of green H₂ generation vs. direct electrochemical reduction.
   - *Method*: Process simulation (DWSIM) and literature review.

4. **Can any of these catalytic systems tolerate direct atmospheric air, or is a separate DAC unit strictly required?**
   - *Why it matters*: Coupling DAC directly to the reactor could save massive amounts of energy and capital.
   - *Current Evidence*: Molten carbonates naturally absorb CO₂ from air. Liquid metals are usually tested with pure CO₂.
   - *Unknown*: The effect of O₂ and moisture on the reduction kinetics and catalyst lifespan.
   - *Method*: Thermodynamic modeling (Reaktoro) to see equilibrium states with air impurities, followed by literature research on catalyst poisoning.

## Sources
- Esrafilzadeh, D., et al. "Room temperature CO2 reduction to solid carbon species on liquid metals featuring atomically thin ceria interfaces." *Nature Communications* (2019).
- Ren, J., et al. "One-Pot Synthesis of Carbon Nanofibers from CO2." *Nano Letters* (2015).
- Xie, Z., et al. "Tandem electrocatalytic-thermocatalytic synthesis of carbon nanofibers from CO2." *Nature Catalysis* (2024).
