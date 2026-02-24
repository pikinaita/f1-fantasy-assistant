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
  
  analyzeRace: function(race) {
    let advice = `<strong>FIA Intel [${this.analysisDate}]:</strong> GP ${race.gp} (${race.city}). `;
    if (race.sprint) { advice += "<br><em>¡Fin de semana SPRINT! Penalización DNF reducida a -10 pts.</em> "; }
    
    const proposals = {
      1: "<strong>PROPUESTA AUSTRALIA:</strong> Equipo equilibrado (Presupuesto: $100M).<br>Constructores: Ferrari ($23.3M) + Red Bull ($28.2M).<br>Pilotos: K. Antonelli ($23.2M), S. Perez ($6.0M), N. Hulkenberg ($6.8M), L. Lawson ($6.5M), V. Bottas ($5.9M).<br>Total: $99.9M.",
      2: "<strong>China:</strong> Evaluar Cadillac tras el debut. Si Ferrari mantiene ritmo, conservar su constructor."
    };
    
    advice += "<br>" + (proposals[race.round] || "Mantener equipo base y esperar a los Libres 1.");
    return advice;
  },
  
  getProposal: function() {
    const today = new Date();
    const nextRace = f1Calendar2026.find(r => new Date(r.date) > today) || f1Calendar2026[0];
    return this.analyzeRace(nextRace);
  }
};

let userTeam = JSON.parse(localStorage.getItem('f1Team')) || null;

// Migración robusta a 2 constructores
if (userTeam) {
  if (userTeam.constructor && !userTeam.constructores) {
    userTeam.constructores = [userTeam.constructor, "Por definir"];
    delete userTeam.constructor;
    localStorage.setItem('f1Team', JSON.stringify(userTeam));
  }
}

function updateUI() {
  const display = document.getElementById('team-display');
  const info = document.getElementById('next-race-info');
  
  if (info) {
    const today = new Date();
    const nextRace = f1Calendar2026.find(r => new Date(r.date) > today) || f1Calendar2026[0];
    info.innerHTML = FIA_Agent.analyzeRace(nextRace);
  }

  if (display) {
    if (!userTeam) {
      display.innerHTML = '<p class="status-msg">Sin equipo configurado. Pulsa "Propuesta de equipo".</p>';
    } else {
      let html = '<div class="team-container">';
      
      // Constructores (2 requeridos)
      html += '<div class="constructors-box" style="display:flex; gap:10px; margin-bottom:10px;">';
      const cons = userTeam.constructores || ["Por definir", "Por definir"];
      cons.forEach((c, idx) => {
        html += `<div class="team-card" style="flex:1;"><div class="role">Constructor ${idx + 1}</div><div class="name">${c}</div></div>`;
      });
      html += '</div>';
      
      // Pilotos (5 requeridos)
      html += '<div class="team-grid">';
      const drivers = userTeam.pilotos || ["-", "-", "-", "-", "-"];
      drivers.forEach(p => {
        html += `<div class="team-card"><div class="role">Piloto</div><div class="name">${p}</div></div>`;
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
    const modal = document.getElementById('team-modal');
    if (text) text.innerHTML = "Analizando datos de la FIA...";
    if (modal) modal.classList.add('active');
    
    // Simular tiempo de carga para mejorar el feedback visual
    setTimeout(() => {
      if (text) text.innerHTML = FIA_Agent.getProposal();
    }, 600);
  });

  setupButton('close-modal', () => document.getElementById('team-modal').classList.remove('active'));
  setupButton('cancel-modal-btn', () => document.getElementById('team-modal').classList.remove('active'));

  // Cerrar modal al hacer click fuera
  const modalOverlay = document.getElementById('team-modal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('active');
    });
  }

  setupButton('confirm-changes-btn', () => {
    try {
      userTeam = {
        pilotos: ["Kimi Antonelli", "Sergio Perez", "Nico Hulkenberg", "Liam Lawson", "Valtteri Bottas"],
        constructores: ["Ferrari", "Red Bull Racing"],
        creado: new Date().toISOString()
      };
      localStorage.setItem('f1Team', JSON.stringify(userTeam));
      updateUI();
      document.getElementById('team-modal').classList.remove('active');
      
      // Reemplazar alert por algo más moderno o simplemente actualizar UI
      const infoSection = document.getElementById('next-race-info');
      if (infoSection) {
        const originalText = infoSection.innerHTML;
        infoSection.innerHTML = "<div style='color:#00ff00; margin-bottom:10px;'>¡Equipo actualizado con éxito!</div>" + originalText;
      }
    } catch (e) {
      console.error("Error al confirmar cambios:", e);
      alert("Error al cargar el equipo. Revisa la consola.");
    }
  });

  setupButton('edit-team-btn', () => {
    window.open("https://fantasy.formula1.com/en/my-team", "_blank");
  });

  setupButton('enable-notifications', () => {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          const statusEl = document.getElementById('notifications-status');
          if (statusEl) statusEl.innerText = "Notificaciones activadas";
          new Notification("FIA Agent", { body: "Recordatorios activados para la temporada 2026" });
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
    if (isPast) row.classList.add('race-past');

    row.innerHTML = `
      <td>${race.round}</td>
      <td>${race.gp}</td>
      <td>${race.city}</td>
      <td>${race.date}</td>
      <td>${race.sprint ? '<span class="badge badge-sprint">SPRINT</span>' : '-'}</td>
      <td>${isPast ? '<span class="badge badge-past">Finalizado</span>' : (isNext ? '<span class="badge badge-upcoming">PRÓXIMA</span>' : 'Pendiente')}</td>
    `;
    body.appendChild(row);
  });
}
