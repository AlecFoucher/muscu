let currentDay = DAY_ORDER[(new Date().getDay() + 6) % 7];

function renderDayTabs() {
  const today = DAY_ORDER[(new Date().getDay() + 6) % 7];
  const tabs  = document.getElementById("day-tabs");
  tabs.innerHTML = "";
  DAY_ORDER.forEach(day => {
    const tab = document.createElement("div");
    tab.className = "day-tab" +
      (day === currentDay         ? " active" : "") +
      (PROGRAM[day].length === 0  ? " rest"   : "");
    tab.textContent = day === today ? day + " (auj.)" : day;
    tab.onclick = () => { currentDay = day; renderProgramme(); };
    tabs.appendChild(tab);
  });
}

function renderExercises() {
  const container = document.getElementById("exercises");
  container.innerHTML = "";
  const exos = PROGRAM[currentDay];

  if (exos.length === 0) {
    container.innerHTML = `
      <div class="rest-day">
        <div class="rest-emoji">😴</div>
        <h2>Jour de repos</h2>
        <p>Profite, étire-toi, hydrate-toi.</p>
      </div>`;
    document.getElementById("progress-wrap").style.display = "none";
    return;
  }

  document.getElementById("progress-wrap").style.display = "block";
  const done = loadDone(currentDay);
  let lastGroup = null;

  exos.forEach((ex, i) => {
    if (ex.group !== lastGroup) {
      const title = document.createElement("div");
      title.className   = "section-label";
      title.textContent = ex.group;
      container.appendChild(title);
      lastGroup = ex.group;
    }

    const card = document.createElement("div");
    card.className = "exercise" + (done.includes(i) ? " done" : "");
    card.innerHTML = `
      <div class="check">${done.includes(i) ? "✓" : ""}</div>
      <div class="ex-body">
        <div class="ex-name">${ex.name}</div>
        <div class="ex-meta">
          ${ex.sets > 1 ? `<span class="pill sets">${ex.sets} séries</span>` : ""}
          <span class="pill reps">${ex.reps}${ex.sets === 1 ? "" : " reps"}</span>
          ${ex.rest > 0 ? `<span class="pill rest" data-rest="${ex.rest}" data-name="${ex.name}">⏱ ${ex.rest}s repos</span>` : ""}
        </div>
      </div>`;
    card.onclick = (e) => {
      if (e.target.classList.contains("rest")) {
        startTimer(+e.target.dataset.rest, e.target.dataset.name);
        return;
      }
      toggleDone(i);
    };
    container.appendChild(card);
  });

  updateProgress();
}

function toggleDone(idx) {
  const done = loadDone(currentDay);
  const pos  = done.indexOf(idx);
  if (pos >= 0) done.splice(pos, 1); else done.push(idx);
  saveDone(currentDay, done);
  renderExercises();
}

function updateProgress() {
  const total = PROGRAM[currentDay].length;
  const done  = loadDone(currentDay).length;
  document.getElementById("progress-count").textContent = `${done} / ${total}`;
  document.getElementById("progress-fill").style.width  =
    total ? (done / total * 100) + "%" : "0%";
}

function markAllDone() {
  saveDone(currentDay, PROGRAM[currentDay].map((_, i) => i));
  renderExercises();
}

function resetDay() {
  if (confirm("Réinitialiser la séance du " + currentDay + " ?")) {
    saveDone(currentDay, []);
    renderExercises();
  }
}

function renderProgramme() {
  const today = DAY_ORDER[(new Date().getDay() + 6) % 7];
  document.getElementById("today-label").textContent =
    currentDay === today ? "Séance du jour" : "Séance du " + currentDay;
  renderDayTabs();
  renderExercises();
}
