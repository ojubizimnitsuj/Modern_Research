# Phase 2 Thermodynamic Foundations

## Executive Summary
This report establishes the fundamental thermodynamic baseline for converting CO₂ into stable solid carbon. The theoretical minimum work (Gibbs free energy, ΔG) required to split CO₂ into graphite and oxygen at standard conditions (298.15 K, 1 atm) is +394.4 kJ/mol. Obtaining CO₂ from ambient air (420 ppm) adds a minimum theoretical separation penalty of +19.3 kJ/mol. These fundamental limits are dictated by physics, irrespective of the catalyst, temperature, or process used.

## Thermodynamic System Definition
To avoid conflating distinct physical processes, the system is divided as follows:
- **A. Chemical conversion**: CO₂ → solid carbon + oxygen/byproducts. This represents the absolute core thermodynamic penalty of breaking the C=O bonds.
- **B. Carbon-source preparation**: Concentrating CO₂ from 420 ppm in atmospheric air to 1 atm pure CO₂.
- **C. Process requirements**: Heating, cooling, separating solid carbon from liquid mediums, and compressing gases. (Not quantified in this fundamental baseline).
- **D. Complete carbon-removal system**: The sum of A, B, and C.

This analysis strictly isolates A and B.

## Fundamental Reactions
The core reactions evaluated are:
- **Pathway A (Direct Decomposition)**: CO₂(g) → C(s) + O₂(g)
- **Pathway B (Hydrogen-Assisted)**: CO₂(g) + 2H₂(g) → C(s) + 2H₂O(l/g) *(Note: While liquid water is the standard state at 298 K, actual reactors operate at 400-600°C producing steam, which alters the thermodynamics)*.

## Thermodynamic Data and Sources
All fundamental values are sourced from the NIST-JANAF Thermochemical Tables at standard state (298.15 K, 1 atm):
- CO₂(g): ΔH_f = -393.5 kJ/mol, S = 213.8 J/(mol·K)
- O₂(g): ΔH_f = 0.0 kJ/mol, S = 205.2 J/(mol·K)
- C(graphite): ΔH_f = 0.0 kJ/mol, S = 5.7 J/(mol·K)
- H₂(g): ΔH_f = 0.0 kJ/mol, S = 130.7 J/(mol·K)
- H₂O(l): ΔH_f = -285.8 kJ/mol, S = 70.0 J/(mol·K)

*Note: Amorphous carbon lacks a single precise thermodynamic state due to structural variability, but it is less stable than graphite. An estimated ΔH_f of +15 kJ/mol and S of 4.5 J/(mol·K) are used for comparison based on literature estimates for non-graphitic disordered carbon.*

## ΔH Analysis (Enthalpy)
- **Pathway A**: ΔH = +393.5 kJ/mol. Highly endothermic. This represents the heat energy required if the reaction could occur reversibly with no entropy penalty.
- **Pathway B**: ΔH = -178.1 kJ/mol (at 298K). Exothermic. The oxidation of hydrogen to water releases more heat than is required to reduce the CO₂ to carbon. *(Note: At realistic reactor temperatures producing steam, this exothermicity decreases to approximately -90.1 kJ/mol)*.

## ΔS Analysis (Entropy)
- **Pathway A**: ΔS = -2.9 J/(mol·K). Slightly negative because a gas (CO₂) is converted into a solid (C) and a gas (O₂), maintaining similar total moles of gas, but slightly reducing structural entropy.
- **Pathway B**: ΔS = -329.5 J/(mol·K). Highly negative due to the conversion of 3 moles of gas (1 CO₂ + 2 H₂) into 1 mole of solid (C) and 2 moles of liquid (H₂O). *(If producing steam, ΔS is much less negative at approx -91.9 J/mol·K)*.

## ΔG Analysis (Gibbs Free Energy)
- **Pathway A**: ΔG = +394.4 kJ/mol. The reaction is strongly non-spontaneous. 
- **Pathway B**: ΔG = -79.9 kJ/mol (at 298K). The reaction is thermodynamically spontaneous at room temperature, driven by the strong chemical energy already present in H₂. *(However, at a realistic Bosch reaction temperature like 500°C producing steam, ΔG becomes much less favorable and reaches equilibrium limits, preventing 100% conversion)*.

## Minimum Reversible Work
For a steady-state flow process at constant temperature and pressure, the minimum reversible work required is exactly equal to the change in Gibbs free energy (ΔG).
- Minimum work to directly split pure CO₂: **394.4 kJ/mol**. 
This is what physics requires in the reversible limit. Any practical process will require more energy due to overpotentials, kinetic barriers, and heat losses.

## Carbon Product Comparison
- **Graphite**: The most thermodynamically stable form (ΔG = +394.4 kJ/mol for CO₂ → C + O₂).
- **Amorphous Carbon**: Because it is less stable than graphite (higher enthalpy), producing amorphous carbon fundamentally requires *more* energy. Using our estimate (ΔH_f = +15 kJ/mol), the ΔG requirement rises to approximately +409.7 kJ/mol.
- **Result**: Producing high-value disordered or nanostructured carbon inherently carries a thermodynamic penalty compared to producing bulk graphite.

## Pathway Comparison
- **Pathway A (Direct)**: Requires massive energy input (+394.4 kJ/mol) but requires only CO₂ as an input.
- **Pathway B (H₂-Assisted)**: Spontaneous (-79.9 kJ/mol), but only because the massive energy penalty was already paid to create the green H₂. Generating 2 moles of H₂ via water electrolysis requires a theoretical minimum work of +474 kJ (2 × 237 kJ/mol). Thus, the *overall* system thermodynamic minimum is equivalent to Pathway A (+394.4 kJ/mol).
- **Pathway C (Electrochemical)**: CO₂ + 4e⁻ → C + 2O²⁻. The fundamental thermodynamic requirement (in terms of minimum cell voltage) is derived directly from ΔG (+394.4 kJ/mol), resulting in a minimum theoretical potential of approximately 1.02 V (assuming 4 electrons per carbon).

## Atmospheric CO₂ Considerations
Obtaining CO₂ from atmospheric concentrations (420 ppm) to a pure 1 atm stream introduces an entropy of mixing penalty.
- **W_sep = RT ln(P₀ / P_CO₂)** = 8.314 × 298.15 × ln(1 / 0.00042) = +19.3 kJ/mol.
This is the absolute minimum thermodynamic work to concentrate the CO₂ from air. It is additive. 
Therefore, the total theoretical minimum work to go from atmospheric air to solid graphite is:
394.4 + 19.3 = **413.7 kJ/mol**.

## Temperature Dependence
- **Pathway A (Direct)**: Because ΔS is small and negative (-2.9 J/mol·K), ΔG *increases* slightly as temperature rises. Direct decomposition into C and O₂ is *less* thermodynamically favored at high temperatures. High temperatures in molten salt electrolysis are used entirely to overcome *kinetic* barriers and melt the salt, not to reduce the fundamental thermodynamic energy requirement. 
- **Equilibrium Shift (Boudouard Reaction)**: Above ~700°C, the Boudouard equilibrium (C + CO₂ ⇌ 2CO) shifts heavily to the right. Solid carbon is thermodynamically unstable in the presence of CO₂ at high temperatures. Thus, high-temperature molten salt processes (e.g., at 800°C) must actively fight thermodynamic equilibrium to deposit solid carbon, requiring continuous product removal and high electrochemical overpotentials.

## Computational Method
Calculations were performed using a small, transparent Python script (`thermo_baseline.py`) written for this analysis. The script uses exact standard formation values from the NIST-JANAF database and computes ΔH, ΔS, and ΔG directly. This was deemed more appropriate than complex simulation software (Cantera/Reaktoro) to ensure exact transparency of the baseline theoretical limits before introducing process-specific complexities.

## Reproducible Calculation
The script `00_PROJECT/thermo_baseline.py` contains the fully reproducible model. It explicitly defines T=298.15 K, the ideal gas constant R, atmospheric CO₂ ppm, and all input enthalpies and entropies. 

## Sanity Checks
- The calculated ΔH for direct decomposition (+393.5 kJ/mol) perfectly matches the negative of the standard heat of formation of CO₂, as expected by Hess's Law.
- The separation work for CO₂ (+19.3 kJ/mol) aligns with established literature values for theoretical minimum DAC energy (often cited as ~20 kJ/mol or ~450 kWh/tCO₂).

## What This Analysis Does NOT Tell Us
- The actual practical energy required (often 2x to 5x higher than the thermodynamic minimum).
- The kinetics or rate of the reaction (how fast the carbon forms).
- The process penalties (heating salts to 800°C, separating solid carbon from liquid metals).
- The capital expenditure or commercial viability of any specific catalyst.

## Key Results
1. **Theoretical Minimum Work (Pure CO₂)**: 394.4 kJ/mol
2. **Theoretical Minimum Work (Atmospheric CO₂)**: 413.7 kJ/mol
3. **Hydrogen Pathway Illusion**: H₂-assisted reduction appears spontaneous, but the energy is simply hidden in the external H₂ generation step.
4. **Temperature Penalty**: Increasing temperature does not lower the thermodynamic energy barrier for carbon formation; it only speeds up the kinetics.

## Remaining Questions
1. How large are the process energy penalties (heating, pumping, separation) compared to this 413.7 kJ/mol fundamental minimum?
2. By what mechanism does the liquid metal or molten salt lower the *activation energy* (kinetics) without altering the *thermodynamic minimum*?

## Recommended Next Investigation
Phase 3 should investigate the process-level energy balances (using DWSIM or similar) of the leading continuous reactor designs, specifically focusing on the energy required to continuously separate solid carbon from the liquid catalyst/salt medium, which currently represents the largest non-thermodynamic barrier to scalability.

## Sources
- NIST-JANAF Thermochemical Tables (standard reference data).
- Fundamental thermodynamics of separation (ideal gas mixing equations).
