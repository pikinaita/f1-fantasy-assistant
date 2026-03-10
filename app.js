// ========== CALENDARIO F1 2026 ==========
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

// ========== RESULTADOS HISTORICOS DE GPs ==========
// Se actualiza tras cada carrera con resultados reales
const raceResults = {
  "Australia": {
    raceDate: "2026-03-08",
    winner: "George Russell",
    results: {
      drivers: [
        { name: "George Russell", team: "Mercedes", position: 1, points: 25 },
        { name: "Kimi Antonelli", team: "Mercedes", position: 2, points: 18 },
        { name: "Charles Leclerc", team: "Ferrari", position: 3, points: 15 },
        { name: "Lewis Hamilton", team: "Ferrari", position: 4, points: 12 },
        { name: "Lando Norris", team: "McLaren", position: 5, points: 10 },
        { name: "Max Verstappen", team: "Red Bull", position: 6, points: 8 },
        { name: "Oliver Bearman", team: "Haas", position: 7, points: 6 },
        { name: "Arvid Lindblad", team: "Racing Bulls", position: 8, points: 4 },
        { name: "Gabriel Bortoleto", team: "Audi", position: 9, points: 2 },
        { name: "Pierre Gasly", team: "Alpine", position: 10, points: 1 },
        { name: "Esteban Ocon", team: "Haas", position: 11, points: 0 },
        { name: "Alex Albon", team: "Williams", position: 12, points: 0 },
        { name: "Liam Lawson", team: "Racing Bulls", position: 13, points: 0 },
        { name: "Franco Colapinto", team: "Alpine", position: 14, points: 0 },
        { name: "Carlos Sainz", team: "Williams", position: 15, points: 0 },
        { name: "Sergio Perez", team: "Cadillac", position: 16, points: 0 },
        { name: "Lance Stroll", team: "Aston Martin", status: "DNF", points: -5 },
        { name: "Fernando Alonso", team: "Aston Martin", status: "DNF", points: -5 },
        { name: "Valtteri Bottas", team: "Cadillac", status: "DNF", points: -5 },
        { name: "Isack Hadjar", team: "Red Bull", status: "DNF", points: -5 },
        { name: "Oscar Piastri", team: "McLaren", status: "DNF", points: -5 },
        { name: "Nico Hulkenberg", team: "Audi", status: "DNF", points: -5 }
      ],
      constructors: [
        { name: "Mercedes", position: 1, points: 43 },
        { name: "Ferrari", position: 2, points: 27 },
        { name: "McLaren", position: 3, points: 10 },
        { name: "Red Bull", position: 4, points: 8 },
        { name: "Haas", position: 5, points: 6 },
        { name: "Racing Bulls", position: 6, points: 4 },
        { name: "Audi", position: 7, points: 2 },
        { name: "Alpine", position: 8, points: 1 },
        { name: "Aston Martin", position: 9, points: 0 },
        { name: "Williams", position: 10, points: 0 },
        { name: "Cadillac", position: 11, points: 0 }
      ]
    },
    analysis: "MERCEDES domina con doblete Russell-Antonelli. FERRARI 2º mejor equipo. RED BULL problemaático (Hadjar DNF, Verstappen recupera de P20 a P6). ASTON MARTIN y CADILLAC peores con DNFs."
  }
};

// ========== BASE DE DATOS DE ACTIVOS F1 FANTASY ==========
const FIA_Agent = {
  name: "Comisario Fantasy Expert",
  lastUpdate: "2026-03-10",
  
  assets: {
    constructors: [
      { id: "mer", name: "Mercedes", price: 22.3, reliability: 0.98, favored: ["Balanced", "Aero"] },
      { id: "fer", name: "Ferrari", price: 24.0, reliability: 0.95, favored: ["Balanced", "Street"] },
      { id: "mcl", name: "McLaren", price: 25.2, reliability: 0.92, favored: ["Aero", "Power"] },
      { id: "rb", name: "Red Bull", price: 27.8, reliability: 0.88, favored: ["Power", "Aero"] },
      { id: "am", name: "Aston Martin", price: 9.8, reliability: 0.75, favored: ["Street"] },
      { id: "aud", name: "Audi", price: 17.5, reliability: 0.82, favored: ["Power"] },
      { id: "cad", name: "Cadillac", price: 12.0, reliability: 0.70, favored: ["Power"] }
    ],
    
    drivers: [
      { id: "rus", name: "George Russell", teamId: "mer", price: 28.2, reliability: 0.98 },
      { id: "ant", name: "Kimi Antonelli", teamId: "mer", price: 19.1, reliability: 0.95 },
      { id: "lec", name: "Charles Leclerc", teamId: "fer", price: 22.5, reliability: 0.94 },
      { id: "ham", name: "Lewis Hamilton", teamId: "fer", price: 22.2, reliability: 0.95 },
      { id: "nor", name: "Lando Norris", teamId: "mcl", price: 21.4, reliability: 0.95 },
      { id: "pia", name: "Oscar Piastri", teamId: "mcl", price: 19.2, reliability: 0.90 },
      { id: "ver", name: "Max Verstappen", teamId: "rb", price: 30.5, reliability: 0.92 },
      { id: "had", name: "Isack Hadjar", teamId: "rb", price: 8.2, reliability: 0.78 },
      { id: "alo", name: "Fernando Alonso", teamId: "am", price: 9.5, reliability: 0.75 },
      { id: "str", name: "Lance Stroll", teamId: "am", price: 7.6, reliability: 0.72 },
      { id: "hul", name: "Nico Hulkenberg", teamId: "aud", price: 10.2, reliability: 0.85 },
      { id: "bor", name: "Gabriel Bortoleto", teamId: "aud", price: 6.9, reliability: 0.88 },
      { id: "per", name: "Sergio Perez", teamId: "cad", price: 5.8, reliability: 0.70 },
      { id: "bot", name: "Valtteri Bottas", teamId: "cad", price: 5.5, reliability: 0.68 },
      { id: "sai", name: "Carlos Sainz", teamId: "wil", price: 15.2, reliability: 0.93 },
      { id: "col", name: "Franco Colapinto", teamId: "alp", price: 6.8, reliability: 0.86 },
      { id: "bea", name: "Oliver Bearman", teamId: "haa", price: 7.5, reliability: 0.92 },
      { id: "lin", name: "Arvid Lindblad", teamId: "vrb", price: 6.2, reliability: 0.90 }
    ]
  }  },

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

  // ========== MOTOR DE ANALISIS DINAMICO ==========
  getIntelligentProposal: function(mode = \"balanced\", riskTolerance = 0.5) {
    const currentRace = this.getCurrentRace();
    if (this.isQualiStarted(currentRace)) {
      return { error: true, message: \"¡VENTANA BLOQUEADA! Clasificación iniciada.\" };
    }

    // Identificar el GP anterior para analizar \"actualidad\"
    const currentRound = currentRace.round;
    const prevRace = f1Calendar2026.find(r => r.round === currentRound - 1);
    const recentData = prevRace ? raceResults[prevRace.gp] : null;

    let wPoints = 1.0, wMoney = 1.0, wTrend = 1.5;
    if (mode === \"all-in\") { wPoints = 2.5; wMoney = 0.4; wTrend = 2.0; }
    if (mode === \"budget\") { wPoints = 0.6; wMoney = 2.2; wTrend = 0.5; }

    const getScore = (item, isConstructor) => {
      // 1. Compatibilidad con el circuito actual
      const circuitCompat = isConstructor ? (item.favored.includes(currentRace.type) ? 1.3 : 1.0) : 1.0;
      
      // 2. Rendimiento en el GP anterior (Actualidad)
      let trendBonus = 1.0;
      if (recentData) {
        const list = isConstructor ? recentData.results.constructors : recentData.results.drivers;
        const performance = list.find(x => x.name === item.name);
        if (performance) {
          if (performance.status === \"DNF\") trendBonus = 0.5; // Penalizar DNFs recientes
          else if (performance.position <= 3) trendBonus = 1.4; // Bonus podio
          else if (performance.position <= 10) trendBonus = 1.2; // Bonus puntos
          else trendBonus = 0.9; // Mal resultado previo
        }
      }

      // 3. Valor de mercado / PPM
      const ppm = 10 / item.price; 
      
      // 4. Factor aleatorio controlado para diversidad
      const randomFactor = (Math.random() - 0.5) * 0.15;

      return (
        (wPoints * circuitCompat * trendBonus * 50) +
        (wMoney * ppm * 20) -
        ((1 - item.reliability) * 30 * (1 - riskTolerance))
      ) * (1 + randomFactor);
    };

    const scoredDrivers = this.assets.drivers.map(d => ({ ...d, score: getScore(d, false) })).sort((a, b) => b.score - a.score);
    const scoredConstructors = this.assets.constructors.map(c => ({ ...c, score: getScore(c, true) })).sort((a, b) => b.score - a.score);

    const getCombinations = (arr, size) => {
      if (size === 1) return arr.map(el => [el]);
      return arr.flatMap((el, i) => getCombinations(arr.slice(i + 1), size - 1).map(comb => [el, ...comb]));
    };

    const allConstructorPairs = getCombinations(scoredConstructors, 2);
    const allDriverGroups = getCombinations(scoredDrivers.slice(0, 10), 5); // Optimizar búsqueda

    let top3Teams = [];
    const budget = this.getCurrentBudget();

    for (const constructors of allConstructorPairs) {
      for (const drivers of allDriverGroups) {
        const cost = constructors.reduce((s, c) => s + c.price, 0) + drivers.reduce((s, d) => s + d.price, 0);
        if (cost <= budget) {
          const score = constructors.reduce((s, c) => s + c.score, 0) + drivers.reduce((s, d) => s + d.score, 0);
          top3Teams.push({ constructors, drivers, cost, score });
          top3Teams.sort((a, b) => b.score - a.score);
          if (top3Teams.length > 3) top3Teams = top3Teams.slice(0, 3);
        }
      }
    }

    if (top3Teams.length === 0) return { error: true, message: \"No caben equipos en el presupuesto actual.\" };

    return {
      proposals: top3Teams.map((t, i) => ({
        rank: i + 1,
        race: currentRace.gp,
        mode: mode,
        totalCost: t.cost,
        score: t.score,
        constructors: t.constructors,
        drivers: t.drivers,
        reasoning: recentData ? `Basado en el éxito de ${recentData.winner} en ${recentData.raceDate}.` : \"Datos de pretemporada.\"
      }))
    };
  }
};

// ========== LÓGICA DE INTERFAZ (UI) ==========
let userTeam = JSON.parse(localStorage.getItem('f1Team')) || null;

function updateUI() {
  const display = document.getElementById('team-display');
  const info = document.getElementById('next-race-info');
  const race = FIA_Agent.getCurrentRace();
  
  if (info) info.innerHTML = `**PROXIMO GP: ${race.gp}** (${race.type}) | ${race.date}`;

  if (display) {
    if (!userTeam) {
      display.innerHTML = '<p>No tienes equipo guardado. ¡Genera una propuesta!</p>';
    } else {
      let html = '<div class=\"current-team-grid\">';
      userTeam.constructores.forEach(c => html += `<div class=\"asset-card constructor\"><b>[C] ${c}</b></div>`);
      userTeam.pilotos.forEach(p => html += `<div class=\"asset-card driver\">${p}</div>`);
      html += '</div>';
      display.innerHTML = html;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateUI();
  renderCalendar();

  document.getElementById('propose-team-btn')?.addEventListener('click', () => {
    const mode = document.getElementById('strategy-mode').value;
    const risk = document.getElementById('risk-slider').value;
    const text = document.getElementById('proposal-text');
    const modal = document.getElementById('team-modal');

    modal.classList.add('active');
    text.innerHTML = \"Analizando resultados del GP anterior y telemetría actual...\";

    setTimeout(() => {
      const p = FIA_Agent.getIntelligentProposal(mode, parseFloat(risk));
      if (p.error) {
        text.innerHTML = `<p class=\"error\">${p.message}</p>`;
      } else {
        let html = `<h4>Propuestas Estratégicas: GP de ${p.proposals[0].race}</h4>`;
        html += `<p class=\"analysis-box\"><i>${p.proposals[0].reasoning}</i></p>`;
        
        p.proposals.forEach((prop, idx) => {
          const recommended = idx === 0 ? \"★ RECOMENDADA\" : \"\";
          html += \`
            <div class=\"proposal-card ${idx === 0 ? 'top-choice' : ''}\" onclick=\"window.selectedProposalIndex=${idx}\">
              <div class=\"prop-header\"><b>Opción ${prop.rank} ${recommended}</b></div>
              <p><b>Coste:</b> $${prop.totalCost.toFixed(1)}M | <b>Score IA:</b> ${prop.score.toFixed(0)}</p>
              <p><b>Constructores:</b> ${prop.constructors.map(c => c.name).join(' + ')}</p>
              <p><b>Pilotos:</b> ${prop.drivers.map(d => d.name).join(', ')}</p>
              <button class=\"copy-btn\" onclick=\"copyToClipboard('${prop.drivers.map(d => d.name).join(', ')} + ${prop.constructors.map(c => c.name).join(', ')}')\">📋 Copiar Equipo</button>
            </div>
          \`;
        });

        html += `<hr><a href=\"https://fantasy.formula1.com\" target=\"_blank\" class=\"f1-link\">🚀 ABRIR F1 FANTASY OFICIAL</a>`;
        text.innerHTML = html;
        window.lastProposals = p.proposals;
        window.selectedProposalIndex = 0;
      }
    }, 1200);
  });

  document.getElementById('confirm-changes-btn')?.addEventListener('click', () => {
    if (window.lastProposals) {
      const sel = window.lastProposals[window.selectedProposalIndex];
      userTeam = {
        pilotos: sel.drivers.map(d => d.name),
        constructores: sel.constructors.map(c => c.name),
        date: new Date().toISOString()
      };
      localStorage.setItem('f1Team', JSON.stringify(userTeam));
      updateUI();
      document.getElementById('team-modal').classList.remove('active');
      alert(\"¡Equipo actualizado correctamente!\");
    }
  });

  document.getElementById('close-modal')?.addEventListener('click', () => document.getElementById('team-modal').classList.remove('active'));
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => alert(\"Equipo copiado al portapapeles. Pégalo en F1 Fantasy.\"));
}

function renderCalendar() {
  const body = document.getElementById('calendar-body');
  if (!body) return;
  const today = new Date();
  f1Calendar2026.forEach(race => {
    const row = document.createElement('tr');
    const isPast = new Date(race.date) < today;
    row.innerHTML = `<td>${race.round}</td><td>${race.gp}</td><td>${race.city}</td><td>${race.date}</td><td>${isPast ? '✅' : '⏳'}</td>`;
    body.appendChild(row);
  });
}
