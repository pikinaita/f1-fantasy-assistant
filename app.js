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
  currentIntelligence: "Juego Activo 2026: 100M presupuesto, 5 pilotos, 2 constructores. Precios destacados: Max ($27.7M), Perez ($6.0M - Ganga!), Mercedes ($29.3M), Ferrari ($23.3M). Cadillac ($6.0M) es vital para equilibrar.",
  
  analyzeRace: function(race) {
    let advice = \`FIA Intel [\${this.analysisDate}]: GP \${race.gp} (\${race.city}). \`;
    if (race.sprint) { advice += "¡Fin de semana SPRINT! Penalización DNF reducida a -10 pts. "; }
    
    const proposals = {
      1: "PROPUESTA AUSTRALIA: Un equipo equilibrado aprovechando el precio de Perez. Constructores: Ferrari ($23.3M) + Red Bull ($28.2M). Pilotos: K. Antonelli ($23.2M), S. Perez ($6.0M), N. Hulkenberg ($6.8M), L. Lawson ($6.5M), V. Bottas ($5.9M). Total: $99.9M.",
      2: "China: Evaluar el rendimiento de Cadillac tras Australia. Si Ferrari domina, mantener su constructor."
    };
    
    advice += proposals[race.round] || "Mantener equipo base y esperar a los Libres 1.";
    return advice;
  },

  getReminders: function() {
    const today = new Date();
    const nextRace = f1Calendar2026.find(r => new Date(r.date) > today);
    return nextRace ? this.analyzeRace(nextRace) : "Fin de temporada 2026.";
  },

  getProposal: function() {
    const today = new Date();
    const nextRace = f1Calendar2026.find(r => new Date(r.date) > today) || f1Calendar2026[0];
    return this.analyzeRace(nextRace);
  }
};

let userTeam = JSON.parse(localStorage.getItem('f1Team')) || null;

// Reparación de datos antiguos (migración a 2 constructores si es necesario)
if (userTeam && userTeam.constructor && !userTeam.constructores) {
  userTeam.constructores = [userTeam.constructor, "Por definir"];
  delete userTeam.constructor;
  localStorage.setItem('f1Team', JSON.stringify(userTeam));
}

function updateUI() {
  const display = document.getElementById('team-display');
  const info = document.getElementById('next-race-info');
  
  if (info) info.innerText = FIA_Agent.getReminders();
  
  if (display) {
    if (!userTeam) {
      display.innerHTML = '<p class="status-msg">Sin equipo configurado. Pulsa \"Propuesta de equipo\".</p>';
    } else {
      let html = '<div class="team-container">';
      
      // Mostrar Constructores
      html += '<div class="constructors-box" style=\"display:flex; gap:10px; margin-bottom:10px;\">';
      const cons = userTeam.constructores || [];
      cons.forEach((c, idx) => {
        html += \`<div class=\"team-card\" style=\"flex:1;\"><div class=\"role\">Constructor \${idx + 1}</div><div class=\"name\">\${c}</div></div>\`;
      });
      html += '</div>';
      
      // Mostrar Pilotos
      html += '<div class=\"team-grid\">';
      userTeam.pilotos.forEach(p => {
        html += \`<div class=\"team-card\"><div class=\"role\">Piloto</div><div class=\"name\">\${p}</div></div>\`;
      });
      html += '</div></div>';
      
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
    const text = document.getElementById('proposal-text');
    if (text) text.innerText = FIA_Agent.getProposal();
    document.getElementById('team-modal').classList.add('active');
  });

  setupButton('edit-team-btn', () => {
    window.open(\"https://fantasy.formula1.com/en/my-team\", \"_blank\");
  });

  setupButton('close-modal', () => document.getElementById('team-modal').classList.remove('active'));
  setupButton('cancel-modal-btn', () => document.getElementById('team-modal').classList.remove('active'));

  setupButton('confirm-changes-btn', () => {
    userTeam = {
      pilotos: [\"Kimi Antonelli\", \"Sergio Perez\", \"Nico Hulkenberg\", \"Liam Lawson\", \"Valtteri Bottas\"],
      constructores: [\"Ferrari\", \"Red Bull Racing\"],
      creado: new Date().toISOString()
    };
    localStorage.setItem('f1Team', JSON.stringify(userTeam));
    updateUI();
    document.getElementById('team-modal').classList.remove('active');
    alert(\"Agente FIA: Equipo para Australia cargado en la App. ¡Suerte!\");
  });

  setupButton('enable-notifications', () => {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          const statusEl = document.getElementById('notifications-status');
          if (statusEl) statusEl.innerText = \"Notificaciones activadas\";
          new Notification(\"FIA Agent\", { body: FIA_Agent.getReminders() });
        }
      });
    }
  });
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
    
    row.innerHTML = \`
      <td>\${race.round}</td>
      <td>\${race.gp}</td>
      <td>\${race.city}</td>
      <td>\${race.date}</td>
      <td>\${race.sprint ? 'SPRINT' : '-'}</td>
      <td>\${isPast ? 'Finalizado' : (isNext ? 'PRÓXIMA' : 'Pendiente')}</td>
    \`;
    body.appendChild(row);
  });
}
