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

// ========== RESULTADOS HISTÓRICOS DE GPs ==========
const raceResults = {
  "Australia": {
    raceDate: "2026-03-08",
    winner: "George Russell",
    results: {
      drivers: [
        { name: "George Russell", team: "Mercedes", position: 1 },
        { name: "Kimi Antonelli", team: "Mercedes", position: 2 },
        { name: "Charles Leclerc", team: "Ferrari", position: 3 },
        { name: "Lewis Hamilton", team: "Ferrari", position: 4 },
        { name: "Lando Norris", team: "McLaren", position: 5 },
        { name: "Max Verstappen", team: "Red Bull", position: 6 },
        { name: "Oliver Bearman", team: "Haas", position: 7 },
        { name: "Arvid Lindblad", team: "Racing Bulls", position: 8 },
        { name: "Gabriel Bortoleto", team: "Audi", position: 9 },
        { name: "Pierre Gasly", team: "Alpine", position: 10 }
      ],
      constructors: [
        { name: "Mercedes", position: 1 },
        { name: "Ferrari", position: 2 },
        { name: "McLaren", position: 3 },
        { name: "Red Bull", position: 4 }
      ]
    },
    analysis: "Dominio de Mercedes. Ferrari sólido. Red Bull con problemas de ritmo."
  }
};

// ========== AGENTE FIA Y MOTOR DE PROPUESTAS ==========
const FIA_Agent = {
  name: "Comisario Fantasy Expert",
  
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
      { id: "sai", name: "Carlos Sainz", teamId: "wil", price: 15.2, reliability: 0.93 },
      { id: "bea", name: "Oliver Bearman", teamId: "haa", price: 7.5, reliability: 0.92 },
      { id: "lin", name: "Arvid Lindblad", teamId: "vrb", price: 6.2, reliability: 0.90 },
      { id: "bor", name: "Gabriel Bortoleto", teamId: "aud", price: 6.9, reliability: 0.88 },
      { id: "col", name: "Franco Colapinto", teamId: "alp", price: 6.8, reliability: 0.86 }
    ]
  },

  getCurrentRace: function() {
    const today = new Date();
    // Encuentra la primera carrera cuya fecha sea HOY o en el FUTURO
    const race = f1Calendar2026.find(r => {
      const raceDate = new Date(r.date);
      raceDate.setHours(23, 59, 59); // Considerar todo el día de la carrera
      return raceDate >= today;
    });
    return race || f1Calendar2026[f1Calendar2026.length - 1];
  },

  isQualiStarted: function(race) {
    const today = new Date();
    const raceDate = new Date(race.date);
    // Bloquear si falta menos de 1 día para la carrera (aproximación a Quali)
    return (raceDate - today) / (1000 * 60 * 60 * 24) < 1.0;
  },

  getCurrentBudget: function() {
    let team = JSON.parse(localStorage.getItem('f1Team'));
    if (!team || !team.pilotos) return 100.0;
    
    let value = 0;
    team.constructores.forEach(name => {
      const c = this.assets.constructors.find(x => x.name === name);
      if (c) value += c.price;
    });
    team.pilotos.forEach(name => {
      const p = this.assets.drivers.find(x => x.name === name);
      if (p) value += p.price;
    });
    return Math.max(100.0, value);
  },

  getIntelligentProposal: function(mode, risk) {
    const currentRace = this.getCurrentRace();
    const prevRace = f1Calendar2026.find(r => r.round === currentRace.round - 1);
    const recent = prevRace ? raceResults[prevRace.gp] : null;
    const budget = this.getCurrentBudget();

    const getScore = (item, isC) => {
      let s = 50;
      if (isC && item.favored.includes(currentRace.type)) s += 20;
      if (recent) {
        const list = isC ? recent.results.constructors : recent.results.drivers;
        const perf = list.find(x => x.name === item.name);
        if (perf) s += (20 - perf.position * 2);
      }
      s += (20 / item.price) * 10;
      return s * (1 + (Math.random() - 0.5) * 0.1);
    };

    const sD = this.assets.drivers.map(d => ({...d, s: getScore(d, false)})).sort((a,b) => b.s - a.s);
    const sC = this.assets.constructors.map(c => ({...c, s: getScore(c, true)})).sort((a,b) => b.s - a.s);

    const comb = (a, n) => n === 1 ? a.map(e => [e]) : a.flatMap((e, i) => comb(a.slice(i+1), n-1).map(c => [e, ...c]));
    
    const allC = comb(sC, 2);
    const allD = comb(sD.slice(0, 8), 5);

    let teams = [];
    allC.forEach(c => {
      allD.forEach(d => {
        const cost = c.reduce((a,b) => a+b.price,0) + d.reduce((a,b) => a+b.price,0);
        if (cost <= budget) {
          teams.push({c, d, cost, score: c.reduce((a,b) => a+b.s,0) + d.reduce((a,b) => a+b.s,0)});
        }
      });
    });

    teams.sort((a,b) => b.score - a.score);
    return teams.slice(0, 3).map((t, i) => ({
      rank: i+1,
      race: currentRace.gp,
      totalCost: t.cost,
      score: t.score,
      constructors: t.c,
      drivers: t.d,
      reasoning: recent ? `Basado en resultados de ${recent.winner} en ${prevRace.gp}.` : "Análisis de pretemporada."
    }));
  }
};

// ========== UI Y EVENTOS ==========
function updateUI() {
  const race = FIA_Agent.getCurrentRace();
  const info = document.getElementById('next-race-info');
  if (info) info.innerHTML = `🏁 PRÓXIMO: GP de ${race.gp} (${race.date})`;

  const team = JSON.parse(localStorage.getItem('f1Team'));
  const display = document.getElementById('team-display');
  if (display) {
    if (!team) display.innerHTML = "<p>Sin equipo. Genera una propuesta.</p>";
    else {
      display.innerHTML = `
        <div class="team-grid">
          ${team.constructores.map(c => `<div class="card"><b>[C] ${c}</b></div>`).join('')}
          ${team.pilotos.map(p => `<div class="card">${p}</div>`).join('')}
        </div>
      `;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateUI();
  renderCalendar();

  document.getElementById('propose-team-btn')?.addEventListener('click', () => {
    const modal = document.getElementById('team-modal');
    const text = document.getElementById('proposal-text');
    modal.classList.add('active');
    text.innerHTML = "Analizando datos...";

    setTimeout(() => {
      const props = FIA_Agent.getIntelligentProposal();
      let html = `<h3>Propuestas para ${props[0].race}</h3>`;
      props.forEach((p, i) => {
        html += `
          <div class="proposal-card" onclick="window.selIdx=${i}">
            <b>Opción ${p.rank}</b> ($${p.totalCost.toFixed(1)}M)<br>
            C: ${p.constructors.map(c => c.name).join(' + ')}<br>
            P: ${p.drivers.map(d => d.name).join(', ')}
          </div>
        `;
      });
      text.innerHTML = html + '<br><button onclick="copyTeam()">📋 Copiar</button>';
      window.lastProps = props;
    }, 1000);
  });

  document.getElementById('confirm-changes-btn')?.addEventListener('click', () => {
    const sel = window.lastProps[window.selIdx || 0];
    const team = {
      pilotos: sel.drivers.map(d => d.name),
      constructores: sel.constructors.map(c => c.name)
    };
    localStorage.setItem('f1Team', JSON.stringify(team));
    updateUI();
    document.getElementById('team-modal').classList.remove('active');
  });
});

function copyTeam() {
  const p = window.lastProps[window.selIdx || 0];
  const txt = `${p.drivers.map(d => d.name).join(', ')} + ${p.constructors.map(c => c.name).join(', ')}`;
  navigator.clipboard.writeText(txt).then(() => alert("Copiado"));
}

function renderCalendar() {
  const body = document.getElementById('calendar-body');
  if (!body) return;
  f1Calendar2026.forEach(r => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${r.round}</td><td>${r.gp}</td><td>${r.date}</td>`;
    body.appendChild(tr);
  });
}
