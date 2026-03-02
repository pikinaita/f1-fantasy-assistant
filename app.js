const f1Calendar2026 = [
    { round: 1, gp: "Australia", city: "Melbourne", date: "2026-03-08", sprint: false, type: "Balanced" },
    { round: 2, gp: "China", city: "Shanghai", date: "2026-03-15", sprint: true, type: "Power" },
    { round: 3, gp: "Japan", city: "Suzuka", date: "2026-03-29", sprint: false, type: "Aero" },
    { round: 4, gp: "Bahrain", city: "Sakhir", date: "2026-04-12", sprint: false, type: "Power" },
    { round: 5, gp: "Saudi Arabia", city: "Jeddah", date: "2026-04-19", sprint: false, type: "Street" },
    { round: 6, gp: "Miami", city: "Miami", date: "2026-05-03", sprint: true, type: "Street" },
    { round: 7, gp: "Canada", city: "Montreal", date: "2026-05-24", sprint: true, type: "Power" },
    { round: 8, gp: "Monaco", city: "Monaco", date: "2026-06-07", sprint: false, type: "Street" },
    { round: 9, gp: "Spain", city: "Barcelona", date: "2026-06-14", sprint: false, type: "Aero" },
    { round: 10, gp: "Austria", city: "Spielberg", date: "2026-06-28", sprint: false, type: "Power" },
    { round: 11, gp: "Great Britain", city: "Silverstone", date: "2026-07-05", sprint: true, type: "Aero" },
    { round: 12, gp: "Belgium", city: "Spa", date: "2026-07-19", sprint: false, type: "Power" },
    { round: 13, gp: "Hungary", city: "Budapest", date: "2026-07-26", sprint: false, type: "Street" },
    { round: 14, gp: "Netherlands", city: "Zandvoort", date: "2026-08-23", sprint: true, type: "Aero" },
    { round: 15, gp: "Italy", city: "Monza", date: "2026-09-06", sprint: false, type: "Power" },
    { round: 16, gp: "Spain", city: "Madrid", date: "2026-09-13", sprint: false, type: "Street" },
    { round: 17, gp: "Azerbaijan", city: "Baku", date: "2026-09-26", sprint: false, type: "Street" },
    { round: 18, gp: "Singapore", city: "Singapore", date: "2026-10-11", sprint: true, type: "Street" },
    { round: 19, gp: "USA", city: "Austin", date: "2026-10-25", sprint: false, type: "Balanced" },
    { round: 20, gp: "Mexico", city: "Mexico City", date: "2026-11-01", sprint: false, type: "Aero" },
    { round: 21, gp: "Brazil", city: "Sao Paulo", date: "2026-11-08", sprint: false, type: "Balanced" },
    { round: 22, gp: "USA", city: "Las Vegas", date: "2026-11-21", sprint: false, type: "Power" },
    { round: 23, gp: "Qatar", city: "Lusail", date: "2026-11-29", sprint: false, type: "Power" },
    { round: 24, gp: "Abu Dhabi", city: "Yas Marina", date: "2026-12-06", sprint: false, type: "Balanced" }
];

const FIA_Agent = {
    name: "Comisario Fantasy Expert",
    analysisDate: "2026-02-24",
    assets: {
        constructors: [
            { id: "fer", name: "Ferrari", price: 23.3, expectedPoints: 38, sentiment: 1.8, reliability: 0.95, favored: ["Balanced", "Street"] },
            { id: "rb", name: "Red Bull", price: 28.2, expectedPoints: 45, sentiment: 1.5, reliability: 0.92, favored: ["Power", "Aero"] },
            { id: "mer", name: "Mercedes", price: 21.5, expectedPoints: 30, sentiment: 1.2, reliability: 0.98, favored: ["Balanced", "Aero"] },
            { id: "mcl", name: "McLaren", price: 24.8, expectedPoints: 35, sentiment: 1.4, reliability: 0.94, favored: ["Aero", "Power"] },
            { id: "am", name: "Aston Martin", price: 15.2, expectedPoints: 20, sentiment: 0.9, reliability: 0.90, favored: ["Street"] },
            { id: "aud", name: "Audi Sport", price: 18.0, expectedPoints: 22, sentiment: 1.3, reliability: 0.85, favored: ["Power"] },
            { id: "cad", name: "Cadillac GM", price: 12.5, expectedPoints: 12, sentiment: 0.6, reliability: 0.75, favored: ["Power"] }
        ],
        drivers: [
            { id: "ver", name: "Max Verstappen", teamId: "rb", price: 30.5, expectedPoints: 48, sentiment: 1.9, reliability: 0.96 },
            { id: "lec", name: "Charles Leclerc", teamId: "fer", price: 22.1, expectedPoints: 35, sentiment: 1.7, reliability: 0.94 },
            { id: "ham", name: "Lewis Hamilton", teamId: "fer", price: 21.8, expectedPoints: 34, sentiment: 1.8, reliability: 0.95 },
            { id: "ant", name: "Kimi Antonelli", teamId: "mer", price: 18.5, expectedPoints: 28, sentiment: 1.6, reliability: 0.92 },
            { id: "nor", name: "Lando Norris", teamId: "mcl", price: 21.0, expectedPoints: 32, sentiment: 1.4, reliability: 0.95 },
            { id: "pia", name: "Oscar Piastri", teamId: "mcl", price: 19.5, expectedPoints: 29, sentiment: 1.5, reliability: 0.95 },
            { id: "rus", name: "George Russell", teamId: "mer", price: 19.2, expectedPoints: 27, sentiment: 1.3, reliability: 0.96 },
            { id: "sai", name: "Carlos Sainz", teamId: "wil", price: 14.8, expectedPoints: 18, sentiment: 1.4, reliability: 0.93 },
            { id: "hul", name: "Nico Hulkenberg", teamId: "aud", price: 10.5, expectedPoints: 14, sentiment: 1.2, reliability: 0.97 },
            { id: "col", name: "Franco Colapinto", teamId: "wil", price: 6.8, expectedPoints: 10, sentiment: 1.7, reliability: 0.88 }
        ]
    },
    getCurrentRace: function() {
        const today = new Date();
        return f1Calendar2026.find(r => new Date(r.date) > today) || f1Calendar2026[0];
    },
    isQualiStarted: function(race) {
        const today = new Date();
        const raceDay = new Date(race.date);
        const dayDiff = (raceDay - today) / (1000 * 60 * 60 * 24);
        return dayDiff < 1.1; 
    },
    getCurrentBudget: function() {
        const baseStarterBudget = 100.0;
        if (!userTeam || !userTeam.constructores || !userTeam.pilotos) {
            return baseStarterBudget;
        }
        let currentTeamValue = 0;
        userTeam.constructores.forEach(cName => {
            const c = this.assets.constructors.find(x => x.name === cName);
            if (c) currentTeamValue += c.price;
        });
        userTeam.pilotos.forEach(pName => {
            const p = this.assets.drivers.find(x => x.name === pName);
            if (p) currentTeamValue += p.price;
        });
        return Math.max(baseStarterBudget, currentTeamValue);
    },
    getIntelligentProposal: function(mode = "balanced", riskTolerance = 0.5) {
        const race = this.getCurrentRace();
        if (this.isQualiStarted(race)) {
            return { error: true, message: "¡VENTANA BLOQUEADA!" };
        }

        let wPoints = 1.0, wMoney = 1.0;
        if (mode === "all-in") { wPoints = 2.5; wMoney = 0.4; }
        if (mode === "budget") { wPoints = 0.6; wMoney = 2.2; }

        const getScore = (item, isConstructor) => {
            const compat = isConstructor ? (item.favored.includes(race.type) ? 1.2 : 1.0) : 1.0;
            const ppm = item.expectedPoints / item.price;
            const priceChange = (item.sentiment - 1.0) * 0.5;
            // Variabilidad aleatoria para diversificar propuestas
            const randomFactor = (Math.random() - 0.5) * 0.2;
            return ((item.expectedPoints * wPoints * item.sentiment * compat) + (ppm * 10 * wMoney) + (priceChange * 20 * wMoney) - ((1 - item.reliability) * 40 * (1 - riskTolerance))) * (1 + randomFactor);
        };

        const scoredDrivers = this.assets.drivers.map(d => ({ ...d, score: getScore(d, false) })).sort((a, b) => b.score - a.score);
        const scoredConstructors = this.assets.constructors.map(c => ({ ...c, score: getScore(c, true) })).sort((a, b) => b.score - a.score);

        const getCombinations = (arr, size) => {
            if (size === 1) return arr.map(el => [el]);
            return arr.flatMap((el, i) => getCombinations(arr.slice(i + 1), size - 1).map(comb => [el, ...comb]));
        };

        const allConstructorPairs = getCombinations(scoredConstructors, 2);
        const allDriverGroups = getCombinations(scoredDrivers, 5);

        let top3Teams = [];
        const currentBudget = this.getCurrentBudget();

        for (const constructors of allConstructorPairs) {
            for (const drivers of allDriverGroups) {
                const totalCost = constructors.reduce((sum, c) => sum + c.price, 0) + drivers.reduce((sum, d) => sum + d.price, 0);
                if (totalCost <= currentBudget) {
                    const teamScore = constructors.reduce((sum, c) => sum + c.score, 0) + drivers.reduce((sum, d) => sum + d.score, 0);
                    top3Teams.push({ constructors, drivers, totalCost, teamScore });
                    top3Teams.sort((a, b) => b.teamScore - a.teamScore);
                    if (top3Teams.length > 3) top3Teams = top3Teams.slice(0, 3);
                }
            }
        }

        if (top3Teams.length === 0) return { error: true, message: "No se pudieron generar equipos válidos." };

        const proposals = top3Teams.map((team, index) => {
            const reasoningMap = { ver: "Dominio técnico.", lec: "Urbano.", ham: "Experto.", col: "Económico.", fer: "Unidad potencia.", rb: "Aero." };
            return {
                rank: index + 1,
                race: race.gp,
                mode: mode,
                constructors: team.constructors,
                drivers: team.drivers,
                totalCost: team.totalCost,
                score: team.teamScore,
                details: team.drivers.map(d => ({ name: d.name, why: reasoningMap[d.id] || "Sólido." })),
                cDetails: team.constructors.map(c => ({ name: c.name, why: reasoningMap[c.id] || "Fiable." }))
            };
        });

        return { proposals };
    }
};

let userTeam = JSON.parse(localStorage.getItem('f1Team')) || null;

function updateUI() {
    const display = document.getElementById('team-display');
    const info = document.getElementById('next-race-info');
    const lock = document.getElementById('quali-lock-status');
    const race = FIA_Agent.getCurrentRace();
    if (info) info.innerHTML = `<strong>GP de ${race.gp}</strong> (${race.type}) - ${race.date}`;
    const isLocked = FIA_Agent.isQualiStarted(race);
    if (lock) {
        lock.innerHTML = isLocked ? "🔒 VENTANA CERRADA" : "🔓 VENTANA ABIERTA";
        lock.style.color = isLocked ? "#ff4444" : "#00ff88";
    }
    if (display) {
        if (!userTeam) {
            display.innerHTML = '<p>No hay equipo activo. Genera una propuesta.</p>';
        } else {
            let html = '<div class="team-card">';
            userTeam.constructores.forEach(c => html += `<p><strong>[C] ${c}</strong></p>`);
            userTeam.pilotos.forEach(p => html += `<p>${p}</p>`);
            html += '</div>';
            display.innerHTML = html;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
    updateUI();
    document.getElementById('propose-team-btn')?.addEventListener('click', () => {
        const mode = document.getElementById('strategy-mode').value;
        const risk = document.getElementById('risk-slider').value;
        const text = document.getElementById('proposal-text');
        const modal = document.getElementById('team-modal');
        modal.classList.add('active');
        text.innerHTML = "Analizando alternativas estratégicas...";
        setTimeout(() => {
            const p = FIA_Agent.getIntelligentProposal(mode, parseFloat(risk));
            if (p.error) {
                text.innerHTML = p.message;
            } else {
                let html = `<h4>Propuestas para ${p.proposals[0].race}</h4>`;
                html += `<p style="margin-bottom: 15px;">He generado 3 alternativas. Haz clic en una para seleccionarla:</p>`;
                p.proposals.forEach((prop, idx) => {
                    const badge = idx === 0 ? "🥇 RECOMENDADA" : (idx === 1 ? "🥈" : "🥉");
                    const isSelected = idx === 0 ? 'border: 2px solid #e10600;' : 'border: 2px solid #444;';
                    html += `
                        <div class="proposal-card" data-index="${idx}" style="${isSelected} margin: 10px 0; padding: 15px; border-radius: 8px; cursor: pointer; transition: 0.3s; background: #222;">
                            <h5 style="color: #e10600; margin-bottom: 5px;">${badge} Opción ${prop.rank}</h5>
                            <p style="font-size: 0.9em; margin: 5px 0;"><strong>Coste:</strong> $${prop.totalCost.toFixed(1)}M | <strong>Score:</strong> ${prop.score.toFixed(1)}</p>
                            <p style="font-size: 0.8em; margin: 0;"><strong>Pilotos:</strong> ${prop.drivers.map(d => d.name).join(', ')}</p>
                            <p style="font-size: 0.8em; margin: 0;"><strong>Constructores:</strong> ${prop.constructors.map(c => c.name).join(', ')}</p>
                        </div>
                    `;
                });
                html += `
                    <div style="margin-top: 20px; text-align: center;">
                        <a href="https://fantasy.formula1.com" target="_blank" style="display: block; padding: 10px; background: #e10600; color: white; border-radius: 5px; text-decoration: none; font-weight: bold;">
                            🚀 APLICAR CAMBIOS EN F1 FANTASY
                        </a>
                    </div>
                `;
                text.innerHTML = html;
                window.lastProposals = p.proposals;
                window.selectedProposalIndex = 0;

                document.querySelectorAll('.proposal-card').forEach(card => {
                    card.onclick = function() {
                        document.querySelectorAll('.proposal-card').forEach(c => c.style.borderColor = '#444');
                        this.style.borderColor = '#e10600';
                        window.selectedProposalIndex = parseInt(this.dataset.index);
                    };
                });
            }
        }, 1000);
    });

    document.getElementById('confirm-changes-btn')?.addEventListener('click', () => {
        if (window.lastProposals) {
            const sel = window.lastProposals[window.selectedProposalIndex || 0];
            userTeam = {
                pilotos: sel.drivers.map(d => d.name),
                constructores: sel.constructors.map(c => c.name),
                date: new Date().toISOString()
            };
            localStorage.setItem('f1Team', JSON.stringify(userTeam));
            updateUI();
            document.getElementById('team-modal').classList.remove('active');
        }
    });

    document.getElementById('close-modal')?.addEventListener('click', () => document.getElementById('team-modal').classList.remove('active'));
    document.getElementById('cancel-modal-btn')?.addEventListener('click', () => document.getElementById('team-modal').classList.remove('active'));
});

function renderCalendar() {
    const body = document.getElementById('calendar-body');
    if (!body) return;
    const today = new Date();
    f1Calendar2026.forEach(race => {
        const row = document.createElement('tr');
        const isPast = new Date(race.date) < today;
        row.innerHTML = `<td>${race.round}</td><td>${race.gp}</td><td>${race.city}</td><td>${race.date}</td><td>${isPast ? 'Finalizado' : 'Pendiente'}</td>`;
        body.appendChild(row);
    });
}
