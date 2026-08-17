import math

def calc_thermo():
    # Temperature (K)
    T = 298.15
    R = 8.314 # J/(mol*K)
    
    # Thermodynamic data at 298.15 K, 1 atm
    # Enthalpy of formation (dH_f) in kJ/mol
    # Absolute Entropy (S) in J/(mol*K)
    # Source: NIST-JANAF Thermochemical Tables
    thermo_data = {
        "CO2(g)": {"dH_f": -393.5, "S": 213.8},
        "O2(g)": {"dH_f": 0.0, "S": 205.2},
        "C(graphite)": {"dH_f": 0.0, "S": 5.7},
        "C(amorphous)": {"dH_f": 15.0, "S": 4.5}, # Approximated/variable depending on structure
        "H2(g)": {"dH_f": 0.0, "S": 130.7},
        "H2O(l)": {"dH_f": -285.8, "S": 70.0},
        "H2O(g)": {"dH_f": -241.8, "S": 188.8}
    }
    
    def calculate_reaction(reactants, products, T=298.15):
        dH_rxn = 0
        dS_rxn = 0
        
        for species, coeff in products.items():
            dH_rxn += coeff * thermo_data[species]["dH_f"]
            dS_rxn += coeff * thermo_data[species]["S"]
            
        for species, coeff in reactants.items():
            dH_rxn -= coeff * thermo_data[species]["dH_f"]
            dS_rxn -= coeff * thermo_data[species]["S"]
            
        dG_rxn = dH_rxn - T * (dS_rxn / 1000.0) # convert dS to kJ
        
        return dH_rxn, dS_rxn, dG_rxn

    print("THERMODYNAMIC BASELINE CALCULATIONS (298.15 K, 1 atm)\n")

    # Pathway A: Direct CO2 Decomposition
    print("--- Pathway A: Direct CO2 Decomposition ---")
    print("Reaction: CO2(g) -> C(graphite) + O2(g)")
    dH_A, dS_A, dG_A = calculate_reaction({"CO2(g)": 1}, {"C(graphite)": 1, "O2(g)": 1})
    print(f"ΔH: {dH_A:+.2f} kJ/mol")
    print(f"ΔS: {dS_A:+.2f} J/(mol*K)")
    print(f"ΔG: {dG_A:+.2f} kJ/mol (Minimum Reversible Work)")
    print()

    # Pathway B: Hydrogen-Assisted Reduction (Bosch-like)
    print("--- Pathway B: Hydrogen-Assisted Reduction ---")
    print("Reaction: CO2(g) + 2H2(g) -> C(graphite) + 2H2O(l)")
    dH_B, dS_B, dG_B = calculate_reaction({"CO2(g)": 1, "H2(g)": 2}, {"C(graphite)": 1, "H2O(l)": 2})
    print(f"ΔH: {dH_B:+.2f} kJ/mol")
    print(f"ΔS: {dS_B:+.2f} J/(mol*K)")
    print(f"ΔG: {dG_B:+.2f} kJ/mol")
    print("Note: At realistic reactor temperatures (e.g., 500°C) producing H2O(g), ΔG becomes much less favorable.")
    print()

    # Atmospheric Concentration Penalty
    print("--- Atmospheric CO2 Concentration Penalty ---")
    ppm_co2 = 420.0
    P_co2 = ppm_co2 / 1e6 # atm
    # Minimum work of separation = RT ln(P0 / P_co2) assuming ideal gas mixture and perfect separation
    W_sep = R * T * math.log(1.0 / P_co2) / 1000.0 # kJ/mol
    print(f"CO2 Concentration in air: {ppm_co2} ppm")
    print(f"Minimum Thermodynamic Work of Separation: {W_sep:+.2f} kJ/mol")
    print(f"Total Min Work for DAC + Direct Decomposition: {(dG_A + W_sep):+.2f} kJ/mol")
    print()

    # Carbon Product Comparison
    print("--- Carbon Product Comparison (Direct Decomposition) ---")
    print("Reaction: CO2(g) -> C(amorphous) + O2(g)")
    dH_A_amorph, dS_A_amorph, dG_A_amorph = calculate_reaction({"CO2(g)": 1}, {"C(amorphous)": 1, "O2(g)": 1})
    print(f"ΔG (Amorphous): {dG_A_amorph:+.2f} kJ/mol")
    print(f"Difference vs Graphite: {(dG_A_amorph - dG_A):+.2f} kJ/mol energy penalty")
    print()

if __name__ == "__main__":
    calc_thermo()
