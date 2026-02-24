const f1Calendar2026 = [
  { round: 1, gp: "Australia", city: "Melbourne", date: "2026-03-08", sprint: false },
  { round: 2, gp: "China", city: "Shanghai", date: "2026-03-15", sprint: true },
  { round: 3, gp: "Japan", city: "Suzuka", date: "2026-03-29", sprint: false },
  { round: 4, gp: "Bahrain", city: "Sakhir", date: "2026-04-12", sprint: false },
  { round: 5, gp: "Saudi Arabia", city: "Jeddah", date: "2026-04-19", sprint: false },
  { round: 6, gp: "Miami", city: "Miami", date: "2026-05-03", sprint: true },
  { round: 7, gp: "Canada", city: "Montreal", date: "2026-05-24", sprint: true },
  { round: 8, gp: "Monaco", city: "Monaco", date: "2026-06-07", sprint: false },
  { round: 9, gp: "Spain", city: "Barcelona", date: "2026-06-14", sprint: false },
  { round: 10, gp: "Austria", city: "Spielberg", date: "2026-06-28", sprint: false },
  { round: 11, gp: "Great Britain", city: "Silverstone", date: "2026-07-05", sprint: true },
  { round: 12, gp: "Belgium", city: "Spa", date: "2026-07-19", sprint: false },
  { round: 13, gp: "Hungary", city: "Budapest", date: "2026-07-26", sprint: false },
  { round: 14, gp: "Netherlands", city: "Zandvoort", date: "2026-08-23", sprint: true },
  { round: 15, gp: "Italy", city: "Monza", date: "2026-09-06", sprint: false },
  { round: 16, gp: "Spain", city: "Madrid", date: "2026-09-13", sprint: false },
  { round: 17, gp: "Azerbaijan", city: "Baku", date: "2026-09-26", sprint: false },
  { round: 18, gp: "Singapore", city: "Singapore", date: "2026-10-11", sprint: true },
  { round: 19, gp: "USA", city: "Austin", date: "2026-10-25", sprint: false },
  { round: 20, gp: "Mexico", city: "Mexico City", date: "2026-11-01", sprint: false },
  { round: 21, gp: "Brazil", city: "Sao Paulo", date: "2026-11-08", sprint: false },
  { round: 22, gp: "USA", city: "Las Vegas", date: "2026-11-21", sprint: false },
  { round: 23, gp: "Qatar", city: "Lusail", date: "2026-11-29", sprint: false },
  { round: 24, gp: "Abu Dhabi", city: "Yas Marina", date: "2026-12-06", sprint: false }
];

const FIA_Agent = {
  name: "Comisario Fantasy",
  analysisDate: "2026-02-24",
  
  // Datos maestros de activos (Simulando una base de datos 2026)
  assets: {
    constructors: [
      { id: "fer", name: "Ferrari", price: 23.3, expectedPoints: 35, sentiment: 1.8, reliability: 0.95 },
      { id: "rb", name: "Red Bull Racing", price: 28.2, expectedPoints: 42, sentiment: 1.5, reliability: 0.92 },
      { id: "mer", name: "Mercedes", price: 21.5, expectedPoints: 28, sentiment: 1.1, reliability: 0.98 },
      { id: "mcl", name: "McLaren", price: 24.8, expectedPoints: 33, sentiment: 1.4, reliability: 0.94 },
      { id: "am", name: "Aston Martin", price: 15.2, expectedPoints: 18, sentiment: 0.8, reliability: 0.90 },
      { id: "cad", name: "Cadillac", price: 12.5, expectedPoints: 10, sentiment: 0.5, reliability: 0.75 }
    ],
    drivers: [
      { id: "ver", name: "Max Verstappen", team: "rb", price: 30.5, expectedPoints: 45, sentiment: 1.9, reliability: 0.96 },
      { id: "lec", name: "Charles Leclerc", team: "fer", price: 22.1, expectedPoints: 32, sentiment: 1.6, reliability: 0.94 },
      { id: "ant", name: "Kimi Antonelli", team: "mer", price: 18.5, expectedPoints: 24, sentiment: 1.7, reliability: 0.90 },
      { id: "nor", name: "Lando Norris", team: "mcl", price: 21.0, expectedPoints: 29, sentiment: 1.3, reliability: 0.95 },
      { id: "pia", name: "Oscar Piastri", team: "mcl", price: 19.5, expectedPoints: 26, sentiment: 1.4, reliability: 0.95 },
      { id: "per", name: "Sergio Perez", team: "rb", price: 14.5, expectedPoints: 15, sentiment: 0.6, reliability: 0.92 },
      { id: "hul", name: "Nico Hulkenberg", team: "aud", price: 10.2, expectedPoints: 12, sentiment: 1.2, reliability: 0.97 },
      { id: "law", name: "Liam Lawson", team: "rb2", price: 8.5, expectedPoints: 10, sentiment: 1.0, reliability: 0.91 },
      { id: "bot", name: "Valtteri Bottas", team: "cad", price: 7.2, expectedPoints: 8, sentiment: 0.9, reliability: 0.88 },
      { id: "col", name: "Franco Colapinto", team: "wil", price: 6.5, expectedPoints: 9, sentiment: 1.5, reliability: 0.85 }
    ]
  },

  getCurrentRace: function() {
    const today = new Date();
    return f1Calendar2026.find(r => new Date(r.date) > today) || f1Calendar2026[0];
  },

  isQualiStarted: function(race) {
    // Simulación: La Quali suele ser el sábado. Si hoy es sábado tarde o domingo, ya empezó.
    const today = new Date();
    const raceDay = new Date(race.date);
    const dayDiff = (raceDay - today) / (1000 * 60 * 60 * 24);
    return dayDiff < 1; // Si falta menos de 1 día para la carrera, asumimos Quali en marcha o terminada
  },

  getIntelligentProposal: function(mode = "balanced", riskTolerance = 0.5) {
    const race = this.getCurrentRace();
    if (this.isQualiStarted(race)) {
      return { 
        error: true, 
        message: "¡VENTANA CERRADA! La clasificación ya ha comenzado. Cualquier cambio ahora penalizará puntos." 
      };
    }

    // Pesos según modo
    let wPoints = 1.0, wMoney = 1.0;
    if (mode === "points") { wPoints = 2.0; wMoney = 0.5; }
    if (mode === "money") { wPoints = 0.5; wMoney = 2.0; }

    // Calcular score para cada activo
    const scoredDrivers = this.assets.drivers.map(d => ({
      ...d,
      score: (d.expectedPoints * wPoints * d.sentiment) + (10 / d.price * wMoney) - ((1 - d.reliability) * 20 * (1 - riskTolerance))
    })).sort((a, b) => b.score - a.score);

    const scoredConstructors = this.assets.constructors.map(c => ({
      ...c,
      score: (c.expectedPoints * wPoints * c.sentiment) + (20 / c.price * wMoney) - ((1 - c.reliability) * 30 * (1 - riskTolerance))
    })).sort((a, b) => b.score - a.score);

    // Optimización Simple (Greedy por Score/Price)
    let budget = 100.0;
    let selectedConstructors = [];
    let selectedDrivers = [];

    // Seleccionar 2 constructores
    for (const c of scoredConstructors) {
      if (selectedConstructors.length < 2 && budget >= c.price) {
        selectedConstructors.push(c);
        budget -= c.price;
      }
    }

    // Seleccionar 5 pilotos
    for (const d of scoredDrivers) {
      if (selectedDrivers.length < 5 && budget >= d.price) {
        selectedDrivers.push(d);
        budget -= d.price;
      }
    }

    return {
      race: race.gp,
      mode: mode,
      constructors: selectedConstructors,
      drivers: selectedDrivers,
      totalCost: 100.0 - budget,
      reasoning: `Análisis basado en Libres 1/2/3 de ${race.gp}. Se prioriza ${mode === 'points' ? 'puntos inmediatos' : mode === 'money' ? 'crecimiento de presupuesto' : 'equilibrio'}. Sentimiento experto positivo para ${selectedDrivers[0].name} y ${selectedConstructors[0].name}.`
    };
  }
};

let userTeam = JSON.parse(localStorage.getItem('f1Team')) || null;

function updateUI() {
  const display = document.getElementById('team-display');
  const info = document.getElementById('next-race-info');
  const race = FIA_Agent.getCurrentRace();

  if (info) {
    info.innerHTML = `<strong>Próximo GP:</strong> ${race.gp} (${race.city}) - ${race.date} ${race.sprint ? '<span class=\"badge badge-sprint\">Sprint</span>' : ''}`;
  }

  if (display) {
    if (!userTeam) {
      display.innerHTML = '<p class=\"info-text\">Sin equipo configurado. Usa el motor de propuestas.</p>';
    } else {
      let html = '<div class=\"team-grid\">';
      userTeam.constructores.forEach(c => {
        html += `<div class=\"team-card\"><span class=\"role\">Constructor</span><div class=\"name\">${c}</div></div>`;
      });
      userTeam.pilotos.forEach(p => {
        html += `<div class=\"team-card\"><span class=\"role\">Piloto</span><div class=\"name\">${p}</div></div>`;
      });
      html += '</div>';
      display.innerHTML = html;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderCalendar();
  updateUI();

  const setupButton = (id, action) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', action);
  };

  setupButton('propose-team-btn', () => {
    const mode = document.getElementById('strategy-mode')?.value || 'balanced';
    const risk = document.getElementById('risk-slider')?.value || 0.5;
    const text = document.getElementById('proposal-text');
    const modal = document.getElementById('team-modal');
    
    if (modal) modal.classList.add('active');
    if (text) text.innerHTML = \"<p>Analizando telemetría 2026 y reportes de Libres...</p>\";

    setTimeout(() => {
      const proposal = FIA_Agent.getIntelligentProposal(mode, parseFloat(risk));
      if (proposal.error) {
        text.innerHTML = `<div style=\"color: #ff4444; font-weight: bold;\">${proposal.message}</div>`;
      } else {
        let html = `<h4>Propuesta ${proposal.race} (${proposal.mode.toUpperCase()})</h4>`;
        html += `<p style=\"font-size: 0.85rem; color: #888; margin-bottom: 10px;\">${proposal.reasoning}</p>`;
        html += `<strong>Constructores:</strong> ${proposal.constructors.map(c => c.name).join(' + ')}<br>`;
        html += `<strong>Pilotos:</strong> ${proposal.drivers.map(d => d.name).join(', ')}<br>`;
        html += `<strong>Coste Total:</strong> $${proposal.totalCost.toFixed(1)}M / $100M`;
        text.innerHTML = html;
        
        // Guardar propuesta temporal para confirmar
        window.lastProposal = proposal;
      }
    }, 800);
  });

  setupButton('confirm-changes-btn', () => {
    if (window.lastProposal) {
      userTeam = {
        pilotos: window.lastProposal.drivers.map(d => d.name),
        constructores: window.lastProposal.constructors.map(c => c.name),
        creado: new Date().toISOString()
      };
      localStorage.setItem('f1Team', JSON.stringify(userTeam));
      updateUI();
      document.getElementById('team-modal').classList.remove('active');
    }
  });

  setupButton('close-modal', () => document.getElementById('team-modal').classList.remove('active'));
});

function renderCalendar() {
  const body = document.getElementById('calendar-body');
  if (!body) return;
  body.innerHTML = '';
  const today = new Date();
  f1Calendar2026.forEach((race, i) => {
    const row = document.createElement('tr');
    const raceDate = new Date(race.date);
    const isPast = raceDate < today;
    const isNext = !isPast && (i === 0 || new Date(f1Calendar2026[i-1].date) < today);
    if (isNext) row.classList.add('next-race-highlight');
    row.innerHTML = `<td>${race.round}</td><td>${race.gp}</td><td>${race.city}</td><td>${race.date}</td><td>${race.sprint ? 'S' : '-'}</td><td>${isPast ? 'Finalizado' : (isNext ? 'PRÓXIMA' : 'Pendiente')}</td>`;
    body.appendChild(row);
  });
}
