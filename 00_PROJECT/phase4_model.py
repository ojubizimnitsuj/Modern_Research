import os
import matplotlib.pyplot as plt
import numpy as np

def run_model():
    os.makedirs("00_PROJECT/figures", exist_ok=True)
    
    # Constants
    F = 96485  # C/mol
    M_CO2 = 44.01  # g/mol
    M_C = 12.011  # g/mol
    M_salt = 73.89  # Li2CO3 approx g/mol
    n_e = 4  # electrons per mol CO2 -> C
    
    # 1. Mass Balance Basis (1 tonne CO2 feed)
    m_CO2_in = 1000  # kg
    mol_CO2 = (m_CO2_in * 1000) / M_CO2  # mol
    m_C_out = (mol_CO2 * M_C) / 1000  # kg (100% yield basis)
    
    # 2. Scenarios Definition (Explicitly labeling evidence vs assumptions)
    scenarios = {
        "Theoretical Minimum": {
            "V": 1.02, "FE": 1.00, "Yield": 1.00, 
            "Sep_Energy_kWh_kgC": 0.0, "Thermal_kWh_tCO2": 0.0, "Capture_kWh_tCO2": 0.0, "Entrainment": 0.0
        },
        "Optimistic Estimate": {
            "V": 2.20, "FE": 0.90, "Yield": 0.95, 
            "Sep_Energy_kWh_kgC": 2.0, "Thermal_kWh_tCO2": 500.0, "Capture_kWh_tCO2": 300.0, "Entrainment": 0.01 # 1%
        },
        "Conservative Estimate": {
            "V": 3.00, "FE": 0.75, "Yield": 0.85, 
            "Sep_Energy_kWh_kgC": 10.0, "Thermal_kWh_tCO2": 1500.0, "Capture_kWh_tCO2": 600.0, "Entrainment": 0.10 # 10%
        }
    }
    
    results = []
    
    for name, params in scenarios.items():
        # E (kJ) = V * n * F / FE
        e_electrolysis_kJ_mol = (params["V"] * n_e * F) / (params["FE"] * 1000)
        e_electrolysis_kWh_tCO2 = (e_electrolysis_kJ_mol / M_CO2) * (1000 / 3.6)
        
        actual_C_kg = m_C_out * params["Yield"]
        sep_energy_kWh_tCO2 = params["Sep_Energy_kWh_kgC"] * actual_C_kg
        cap_energy_kWh_tCO2 = params["Capture_kWh_tCO2"]
        heat_energy_kWh_tCO2 = params["Thermal_kWh_tCO2"]
        
        salt_loss_kg = actual_C_kg * params["Entrainment"]
        
        total_kWh_tCO2 = e_electrolysis_kWh_tCO2 + sep_energy_kWh_tCO2 + cap_energy_kWh_tCO2 + heat_energy_kWh_tCO2
        
        results.append({
            "Scenario": name,
            "Electrolysis": e_electrolysis_kWh_tCO2,
            "Capture": cap_energy_kWh_tCO2,
            "Thermal": heat_energy_kWh_tCO2,
            "Separation": sep_energy_kWh_tCO2,
            "Total": total_kWh_tCO2,
            "SaltLoss": salt_loss_kg
        })

    # Plot 1: Energy Breakdown
    fig, ax = plt.subplots(figsize=(9, 6))
    names = [r['Scenario'] for r in results]
    cap = [r['Capture'] for r in results]
    elec = [r['Electrolysis'] for r in results]
    therm = [r['Thermal'] for r in results]
    sep = [r['Separation'] for r in results]

    ax.bar(names, cap, label='Capture (Assumption)')
    ax.bar(names, elec, bottom=cap, label='Electrolysis (Extrapolated)')
    bottom2 = [i+j for i,j in zip(cap, elec)]
    ax.bar(names, therm, bottom=bottom2, label='Thermal (Assumption)')
    bottom3 = [i+j for i,j in zip(bottom2, therm)]
    ax.bar(names, sep, bottom=bottom3, label='Separation (Assumption)')

    plt.title('Energy Breakdown by Scenario (kWh / tCO2)')
    plt.ylabel('Energy (kWh / tCO2)')
    plt.legend()
    plt.grid(axis='y', linestyle='--', alpha=0.7)
    plt.tight_layout()
    plt.savefig('00_PROJECT/figures/energy_breakdown_audit.png', dpi=300)
    plt.close()

    # Plot 2: Electrolyte Consumption vs. Entrainment
    entrainment_rates = np.linspace(0.001, 0.20, 20)
    salt_losses = entrainment_rates * m_C_out
    
    fig, ax = plt.subplots(figsize=(7, 5))
    ax.plot(entrainment_rates * 100, salt_losses, 'r-', linewidth=2)
    ax.set_title('Salt Make-up Required vs Entrainment')
    ax.set_xlabel('Salt Entrainment in Carbon Product (%)')
    ax.set_ylabel('Salt Loss (kg per tCO2 processed)')
    ax.grid(True, linestyle='--', alpha=0.7)
    plt.tight_layout()
    plt.savefig('00_PROJECT/figures/entrainment_sensitivity.png', dpi=300)
    plt.close()

if __name__ == "__main__":
    run_model()
