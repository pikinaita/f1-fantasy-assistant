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
  analysisDate: "2026-02-21",
  currentIntelligence: "Basado en los tests de Sakhir (febrero 2026), Ferrari y Mercedes lideran en rendimiento puro. Leclerc y Antonelli han sido los más rápidos. Red Bull es la incógnita con mejor gestión de energía. McLaren sólido pero un paso por detrás. Haas es la sorpresa de la zona media.",
  
  analyzeRace: function(race) {
    let advice = "FIA Intel [" + this.analysisDate + "]: GP " + race.gp + ". ";
    if (race.sprint) advice += "¡SPRINT! Máxima prioridad a regularidad. ";
    
    // Lógica avanzada de propuesta de cambios
    if (race.round === 1) {
      advice += "EQUIPO IDEAL INICIAL: Leclerc (Ferrari), Russell (Mercedes), Antonelli (Mercedes), Gasly (Alpine), Bearman (Haas). Constructor: Ferrari.";
    } else {
      advice += "Propuesta de cambio: Evaluar rendimiento de Red Bull vs Ferrari tras Sakhir.";
    }
    return advice;
  },

  getReminders: function() {
    const today = new Date();
    const nextRace = f1Calendar2026.find(r => new Date(r.date) > today);
    if (nextRace) {
      return this.analyzeRace(nextRace);
    }
    return "Fin de temporada 2026.";
  }
};

let userTeam = JSON.parse(localStorage.getItem('f1Team')) || null;

document.addEventListener('DOMContentLoaded', () => {
  renderCalendar();
  updateUI();
  
  const editBtn = document.getElementById('edit-team-btn');
  if (editBtn) {
    editBtn.addEventListener('click', () => {
      // Si no hay equipo, creamos el ideal
      if (!userTeam) {
        userTeam = {
          pilotos: ["Charles Leclerc", "George Russell", "Kimi Antonelli", "Pierre Gasly", "Oliver Bearman"],
          constructor: "Ferrari",
          creado: new Date().toISOString()
        };
        localStorage.setItem('f1Team', JSON.stringify(userTeam));
        alert("¡Agente FIA actuando! Al no tener equipo, he configurado el EQUIPO IDEAL basado en los tests de pretemporada 2026.");
      } else {
        const modal = document.getElementById('team-modal');
        if (modal) modal.style.display = 'block';
      }
      updateUI();
    });
  }

  // Notificaciones
  const notifyBtn = document.getElementById('enable-notifications');
  if (notifyBtn) {
    notifyBtn.addEventListener('click', () => {
      if ('Notification' in window) {
        Notification.requestPermission().then(p => {
          if (p === 'granted') {
            document.getElementById('notifications-status').innerText = "✅ Activadas";
            new Notification("FIA Agent", { body: FIA_Agent.getReminders() });
          }
        });
      }
    });
  }
});

function updateUI() {
  const display = document.getElementById('team-display');
  const info = document.getElementById('next-race-info');
  
  if (info) info.innerText = FIA_Agent.getReminders();
  
  if (display) {
    if (!userTeam) {
      display.innerHTML = '<p class="status-msg">Sin equipo configurado. Pulsa Editar para generar el Equipo Ideal.</p>';
    } else {
      display.innerHTML = '<h3>' + userTeam.constructor + '</h3><ul>' + 
        userTeam.pilotos.map(p => '<li>' + p + '</li>').join('') + '</ul>';
    }
  }
}

function renderCalendar() {
  const body = document.getElementById('calendar-body');
  if (!body) return;
  body.innerHTML = '';
  f1Calendar2026.forEach(race => {
    const row = document.createElement('tr');
    const isPast = new Date(race.date) < new Date();
    row.innerHTML = "<td>" + race.round + "</td><td>" + race.gp + "</td><td>" + race.date + "</td><td>" + (race.sprint ? '✅' : '❌') + "</td><td>" + (isPast ? 'Finalizado' : 'Pendiente') + "</td>";
    body.appendChild(row);
  });
}
