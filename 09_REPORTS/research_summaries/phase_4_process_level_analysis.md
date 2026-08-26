# Phase 4 — Process-Level Mass & Energy Balance
## Molten-Carbonate Electrolysis for CO₂ → Solid Carbon

This report investigates the specific process-level mass and energy balance for continuously converting CO₂ into solid carbon in a molten-carbonate electrolysis system. 

*Note: Following a rigorous scientific audit, this report distinguishes strictly between experimentally demonstrated parameters, derived limits, and engineering estimates, reflecting the current limitations of scaling laboratory demonstrations to industrial processes.*

---

## 1. Research Context
Previous phases established that the theoretical thermodynamic minimum for converting pure CO₂ to graphite is approximately 394.4 kJ/mol, and capturing it from the atmosphere adds a minimum mixing entropy penalty of +19.3 kJ/mol (total: 413.7 kJ/mol or ~2.56 MWh/tCO₂). Molten-carbonate electrolysis emerged as a leading candidate because the salts natively absorb CO₂ and reduce it to stable carbon. This phase quantifies the practical engineering penalties involved in continuous operation.

## 2. Central Research Question
> What is the specific process-level mass and energy balance for continuously converting CO₂ into solid carbon in a molten-carbonate electrolysis system, and how large can these practical penalties become relative to the thermodynamic minimum?

## 3. Define the Process System
The proposed continuous process flow comprises:
1. **Atmospheric Air / CO₂ Feed** *(Demonstrated batch)*
2. **Molten-Carbonate Reactor (500°C–800°C)** *(Demonstrated batch)*:
   - **Cathode Region:** CO₃²⁻ + 4e⁻ → C(s) + 3O²⁻
   - **Anode Region:** 2O²⁻ → O₂(g) + 4e⁻
3. **Regeneration:** CO₂(g) + O²⁻ → CO₃²⁻ *(Demonstrated batch)*
4. **Carbon Formation & Solid Extraction** *(Hypothetical continuous; batch harvest demonstrated)*
5. **Electrolyte Circulation & Make-up** *(Engineering assumption)*

## 4. Mass Balance (Derived Mathematically)
**Basis:** 1 tonne (1000 kg) CO₂ captured and converted.
- **Molar Mass CO₂:** 44.01 g/mol -> ~22,722 moles
- **Stoichiometry:** CO₂ → C + O₂
- **Carbon Produced:** 272.9 kg (1 tonne CO₂ * 12.011 / 44.01) at 100% yield.
- **Oxygen Produced:** 727.1 kg

## 5. Carbon Yield and Selectivity
**Experimental Literature:** Ren et al. (2015, *Nano Letters*) using molten Li₂CO₃ at 730°C report the successful synthesis of carbon nanofibers (CNFs).
- **Faradaic Efficiency (FE):** Do not assume a generic 75%–95% range as a universal property of molten-carbonate electrolysis. Individual experiments report varying FE values that depend heavily on operating temperature, electrode material, current density, electrolyte composition, and applied voltage. While some batch experiments achieve >90% FE at specifically optimized laboratory points, what Faradaic efficiency can be maintained during continuous industrial operation remains unknown.
- **Competing Reactions:** CO gas generation (Boudouard reaction) occurs at higher temperatures.
- **Anodic Efficiency:** Generally reported as high (O₂ evolution) in specific primary literature, though long-term degradation affects this.

## 6. Electrical Energy Requirement
- **Thermodynamic Reversible Voltage:** ~1.02 V (Derived mathematically at 298K). This is a thermodynamic reversible limit, not a practical operating voltage.
- **Experimentally Reported Cell Voltages:** Primary literature such as Ren et al. (2015) typically operates batch reactors at higher voltages (e.g., 3.0 V to 5.0 V) to drive rapid CNF growth.
- **Projected Future Operating Voltage:** The value of 2.2 V is an *engineering estimate* for what an optimized, future industrial cell might target. It is absolutely not currently demonstrated as an industrial operating point.
- **Voltage vs Current Density:** Voltage heavily depends on current density. Low voltages (<2.0 V) might be achievable at extremely low current densities (low throughput), while high throughput demands higher voltages.

## 7. Thermal Energy Requirement
- **Calculated Thermodynamic Requirements:** The minimum theoretical enthalpy of reaction (heat) is derived mathematically.
- **Calculated Sensible/Process Heat:** Heating the incoming reactants to reactor temperature.
- **Assumed Heat Losses & Recovery:** The electrochemical reaction at high overpotentials generates Joule heating. However, maintaining system temperature requires balancing this with convective/radiative heat losses and assumed heat-recovery performance. The 500–1500 kWh/tCO₂ range is strictly an *engineering scenario assumption* used to model potential net thermal requirements. It has not been experimentally demonstrated for this process.

## 8. Carbon Separation — The Central Engineering Problem
Continuous extraction of dense solid carbon from molten salts remains unsolved at scale.
- **Mechanical Skimming/Filtration:** (Proposed/Hypothetical).
- **Electrode Harvesting:** (Demonstrated Batch). Removing and washing the cathode. Not continuous.
- **Assumed Separation Energy:** The model uses an assumed sensitivity parameter of 2.0–10.0 kWh/kgC. The purpose of this parameter is to explore how separation could affect the process, not to claim that real separation requires 2–10 kWh/kgC. This assumption currently has no defensible literature basis for continuous industrial molten-carbonate electrolysis.

## 9. Electrolyte Management
- **Carbonate Entrainment (Assumption):** Molten salt freezes onto extracted carbon. Previous models assumed a fixed 10% entrainment rate. This is an *unvalidated assumption*. A sensitivity model has been added (0.1% to 20%), demonstrating that at 10% entrainment, ~27 kg of salt is lost per tonne of CO₂. At 1%, only 2.7 kg is lost. Electrolyte loss is primarily an economic/material constraint rather than an energetic one.

## 10. Atmospheric CO₂ Integration
Be precise about the distinction: carbonate chemistry is capable of absorbing CO₂ from gas streams, and laboratory demonstrations involving atmospheric or dilute CO₂ exist. However, a continuous industrial reactor processing ambient air at meaningful throughput has not been demonstrated.
- **Configuration A (Direct Absorption):** Ambient air directly contacts the high-temperature reactor. Direct integration of atmospheric air with a high-temperature molten-carbonate reactor presents potentially severe sensible-heat and mass-transfer challenges because CO₂ is highly dilute in air. However, the magnitude of the penalty depends strongly on reactor configuration, air preheating, heat recovery, contact strategy, and process integration. It should therefore be treated as an unresolved engineering question rather than a quantitatively established impossibility.
- **Configuration B (Separate DAC):** Ambient air is concentrated first. This imposes a distinct penalty (typically modeled around ~450 kWh/tCO₂) but protects the reactor from thermal shock and trace contaminants.
*Conclusion:* Laboratory atmospheric CO₂ uptake does not prove industrial direct-air operation. The mass-transfer and thermal integration consequences of scaling it to continuous throughput remain an unresolved engineering question.

## 11. Evidence, Assumptions, and Unknowns

| Parameter | Value/Range | Evidence Type | Source / Confidence | Used in Model? |
| :--- | :--- | :--- | :--- | :--- |
| Thermodynamic min voltage | ~1.02 V | Derived | NIST-JANAF (High) | Yes (Baseline) |
| Cell Voltage | 3.0V - 5.0V | Primary Lit | Ren et al., 2015 (High) | No (Reference only) |
| Future Cell Voltage | 2.2V - 3.0V | Eng. Estimate | Projection (Low) | Yes (Scenarios) |
| Faradaic Efficiency (FE) | Individual reported values vary | Primary Lit (Batch) | Condition-dependent | Yes (Scenario parameter) |
| Thermal Energy | 500 - 1500 kWh/tCO₂| Assumption | Unvalidated | Yes |
| Separation Energy | 2.0 - 10.0 kWh/kgC | Assumption | Unvalidated | Yes |
| Carbonate Entrainment | 0.1% - 20% | Assumption | Unvalidated | Yes (Sensitivity) |

## 12. First-Order Process Model in Python
An updated, parameterized Python model (`phase4_model.py`) calculates energy based on mass balances and Faraday's law, separating theoretical foundations from engineering assumptions. 

## 13. Scenario Analysis
*Note: These are illustrative model scenarios based on assumed parameters. Do NOT describe 7–14 MWh/tCO₂ as the expected industrial energy consumption. There is currently insufficient evidence to establish a reliable industrial energy range.*
1. **Theoretical Minimum:** 1.02 V, FE=100%, 0 kWh separation. Total: ~2,560 kWh/tCO₂ (Entirely derived).
2. **Optimistic Scenario:** 2.2 V, FE=90% (partially literature-grounded extrapolations), combined with High Heat Integration and 2.0 kWh/kgC separation (pure unvalidated assumptions). Total: ~7,300 kWh/tCO₂.
3. **Conservative Scenario:** 3.0 V, FE=75%, combined with Poor Heat Integration and 10.0 kWh/kgC separation (pure unvalidated assumptions). Total: ~14,200 kWh/tCO₂.

## 14. Sensitivity Analysis
The model reveals that **Cell Voltage** and **Separation Energy** dominate the process penalties. The industrial-scale energy requirement remains unresolved unless reliable experimental evidence for continuous separation and heat integration exists.

## 15. Graphics and Data Visualization
Figures generated by the parameterized model are located in the `00_PROJECT/figures/` directory.
- ![Energy Breakdown Audit](figures/energy_breakdown_audit.png)
- ![Entrainment Sensitivity](figures/entrainment_sensitivity.png)

## 16. Evidence Classification

| Finding | Status |
| :--- | :--- |
| Thermodynamic minimum | Derived / high confidence |
| CO₂ → solid carbon chemistry | Experimentally demonstrated |
| Molten-carbonate carbon production | Experimentally demonstrated at laboratory scale |
| Continuous carbon separation | Unproven |
| Industrial separation energy | Unknown |
| Industrial continuous energy consumption | Unknown |
| Direct atmospheric-air integration at industrial scale | Unproven |
| 7–14 MWh/tCO₂ scenarios | Illustrative model scenarios, not measured performance |

## 17. Final Research Judgment
Laboratory evidence demonstrates that molten-carbonate electrolysis can convert CO₂ into solid carbon, including structured carbon materials. However, the industrial feasibility of continuous atmospheric CO₂ conversion remains unresolved because continuous carbon separation, electrolyte management, heat integration, and realistic process-scale energy consumption have not yet been sufficiently demonstrated. Continuous carbon separation represents a major engineering research priority.
