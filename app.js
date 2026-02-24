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
  currentIntelligence: "Juego Activo: 100M presupuesto, 5 pilotos, 2 constructores. Mercedes ($28M) y Ferrari ($22M) lideran. Cadillac ($6.5M) es clave para el presupuesto.",
  analyzeRace: function(race) {
    var advice = "FIA Intel [" + this.analysisDate + "]: GP " + race.gp + " (" + race.city + "). ";
    if (race.sprint) { advice += "SPRINT - Penalización DNF -10 pts. "; }
    var proposals = {
      1: "EQUIPO AUSTRALIA: Leclerc ($21.5M), Bearman ($7M), Gasly ($8M), Ocon ($7M), Hadjar ($3M). Constructores: Ferrari ($22M) + Mercedes ($28M). Presupuesto total: $96.5M.",
      2: "China: Evaluar rendimiento de Cadillac. Mantener Ferrari/Mercedes si dominan.",
    };
    advice += proposals[race.round] || "Mantener equipo y evaluar clasificación.";
    return advice;
  },
  getReminders: function() {
    var today = new Date();
    var nextRace = null;
    for (var i = 0; i < f1Calendar2026.length; i++) {
      if (new Date(f1Calendar2026[i].date) > today) {
        nextRace = f1Calendar2026[i];
        break;
      }
    }
    if (nextRace) { return this.analyzeRace(nextRace); }
    return "Fin de temporada 2026.";
  },
  getProposal: function(race) {
    if (!race) {
      var today = new Date();
      for (var i = 0; i < f1Calendar2026.length; i++) {
        if (new Date(f1Calendar2026[i].date) > today) {
          race = f1Calendar2026[i];
          break;
        }
      }
    }
    if (!race) { return "Fin de temporada."; }
    return this.analyzeRace(race);
  }
};

var userTeam = JSON.parse(localStorage.getItem('f1Team')) || null;

function closeModalFn() {
  var modal = document.getElementById('team-modal');
  if (modal) { modal.style.display = 'none'; }
}

document.addEventListener('DOMContentLoaded', function() {
  renderCalendar();
  updateUI();

  var proposeBtn = document.getElementById('propose-team-btn');
  var editBtn = document.getElementById('edit-team-btn');
  var modal = document.getElementById('team-modal');
  var closeModalBtn = document.getElementById('close-modal');
  var confirmBtn = document.getElementById('confirm-changes-btn');
  var cancelModalBtn = document.getElementById('cancel-modal-btn');

  if (proposeBtn) {
    proposeBtn.addEventListener('click', function() {
      var proposalText = document.getElementById('proposal-text');
      if (proposalText) { proposalText.innerText = FIA_Agent.getProposal(); }
      if (modal) { modal.style.display = 'block'; }
    });
  }

  if (editBtn) {
    editBtn.addEventListener('click', function() {
      userTeam = {
        pilotos: ["Charles Leclerc", "Oliver Bearman", "Pierre Gasly", "Esteban Ocon", "Isack Hadjar"],
        constructores: ["Ferrari", "Mercedes"],
        creado: new Date().toISOString()
      };
      localStorage.setItem('f1Team', JSON.stringify(userTeam));
      alert("Agente FIA: Alineación Australia 2026 ($96.5M) cargada. Abriendo Fantasy F1...");
      updateUI();
      window.open("https://fantasy.formula1.com/en/my-team", "_blank");
    });
  }

  if (closeModalBtn) { closeModalBtn.addEventListener('click', closeModalFn); }
  if (cancelModalBtn) { cancelModalBtn.addEventListener('click', closeModalFn); }
  
  if (confirmBtn) {
    confirmBtn.addEventListener('click', function() {
      userTeam = {
        pilotos: ["Charles Leclerc", "Oliver Bearman", "Pierre Gasly", "Esteban Ocon", "Isack Hadjar"],
        constructores: ["Ferrari", "Mercedes"],
        creado: new Date().toISOString()
      };
      localStorage.setItem('f1Team', JSON.stringify(userTeam));
      updateUI();
      closeModalFn();
      alert("Equipo actualizado para Australia 2026.");
    });
  }

  var notifyBtn = document.getElementById('enable-notifications');
  if (notifyBtn) {
    notifyBtn.addEventListener('click', function() {
      if ('Notification' in window) {
        Notification.requestPermission().then(function(p) {
          if (p === 'granted') {
            var statusEl = document.getElementById('notifications-status');
            if (statusEl) { statusEl.innerText = "Notificaciones activadas"; }
            new Notification("FIA Agent - F1 Fantasy", {
              body: FIA_Agent.getReminders(),
              icon: "icon-192.png"
            });
          }
        });
      }
    });
  }
});

function updateUI() {
  var display = document.getElementById('team-display');
  var info = document.getElementById('next-race-info');

  if (info) { info.innerText = "Analisis FIA: " + FIA_Agent.getReminders(); }

  if (display) {
    if (!userTeam) {
      display.innerHTML = '<p class="status-msg">Sin equipo configurado. Pulsa "Propuesta de equipo".</p>';
    } else {
      var consText = userTeam.constructores ? userTeam.constructores.join(' + ') : (userTeam.constructor || "No definido");
      var html = '<div style="border:1px solid #444;padding:15px;border-radius:8px;background:#1a1a1a;">';
      html += '<h3 style="color:#e10600;margin-top:0;">Constructores: ' + consText + '</h3>';
      html += '<ul style="list-style:none;padding:0;">';
      for (var i = 0; i < userTeam.pilotos.length; i++) {
        html += '<li style="margin-bottom:5px;padding:5px;border-bottom:1px solid #333;">🏎 ' + userTeam.pilotos[i] + '</li>';
      }
      html += '</ul></div>';
      display.innerHTML = html;
    }
  }
}

function renderCalendar() {
  var body = document.getElementById('calendar-body');
  if (!body) { return; }
  body.innerHTML = '';
  var today = new Date();
  for (var i = 0; i < f1Calendar2026.length; i++) {
    var race = f1Calendar2026[i];
    var row = document.createElement('tr');
    var isPast = new Date(race.date) < today;
    var isNext = !isPast && (i === 0 || new Date(f1Calendar2026[i-1].date) < today);
    if (isNext) { row.style.background = '#2a1a00'; row.style.fontWeight = 'bold'; }
    row.innerHTML = '<td>' + race.round + '</td>' +
      '<td>' + race.gp + '</td>' +
      '<td>' + race.city + '</td>' +
      '<td>' + race.date + '</td>' +
      '<td>' + (race.sprint ? 'SPRINT' : '-') + '</td>' +
      '<td>' + (isPast ? 'Finalizado' : (isNext ? 'PROXIMA' : 'Pendiente')) + '</td>';
    body.appendChild(row);
  }
}
