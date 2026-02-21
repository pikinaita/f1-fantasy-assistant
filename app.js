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
  analyzeRace: function(race) {
    let advice = "Analizando el GP de " + race.gp + "... ";
    if (race.sprint) advice += "¡Ojo! Es fin de semana de SPRINT.";
    if (race.gp === "Monaco" || race.gp === "Singapore") {
      advice += " Circuito urbano: prioriza clasificación.";
    } else if (race.gp === "Italy" || race.gp === "Azerbaijan") {
      advice += " Circuito veloz: busca potencia.";
    } else {
      advice += " Circuito equilibrado.";
    }
    return advice;
  },
  getReminders: function() {
    const today = new Date();
    const nextRace = f1Calendar2026.find(r => new Date(r.date) > today);
    if (nextRace) {
      return "Próximo: " + nextRace.gp + " (" + nextRace.date + "). " + this.analyzeRace(nextRace);
    }
    return "No hay más carreras programadas para 2026.";
  }
};

document.addEventListener('DOMContentLoaded', () => {
  renderCalendar();
  updateNextRace();
  
  const notifyBtn = document.getElementById('enable-notifications');
  if (notifyBtn) {
    notifyBtn.addEventListener('click', () => {
      if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
          const status = document.getElementById('notifications-status');
          if (permission === 'granted') {
            status.innerText = "✅ Notificaciones activadas.";
            new Notification("FIA Agent: F1 Fantasy", {
              body: FIA_Agent.getReminders(),
              icon: "https://www.formula1.com/etc/designs/fom-website/images/f1_logo.png"
            });
          }
        });
      }
    });
  }
});

function renderCalendar() {
  const tableBody = document.getElementById('calendar-body');
  if (!tableBody) return;
  f1Calendar2026.forEach(race => {
    const row = document.createElement('tr');
    row.innerHTML = "<td>" + race.round + "</td><td>" + race.gp + "</td><td>" + race.date + "</td><td>" + (race.sprint ? '✅' : '❌') + "</td><td>" + (new Date(race.date) < new Date() ? 'Finalizado' : 'Pendiente') + "</td>";
    tableBody.appendChild(row);
  });
}

function updateNextRace() {
  const info = document.getElementById('next-race-info');
  if (info) info.innerText = FIA_Agent.getReminders();
}
