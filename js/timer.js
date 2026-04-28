let timerInterval  = null;
let timerRemaining = 0;
let timerTotal     = 0;

const CIRCUMFERENCE = 691;

function startTimer(seconds, name) {
  timerRemaining = timerTotal = seconds;
  document.getElementById("timer-exercise").textContent = name + " — Repos";
  document.getElementById("timer-overlay").classList.add("show");
  updateTimerDisplay();
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timerRemaining--;
    updateTimerDisplay();
    if (timerRemaining <= 0) {
      clearInterval(timerInterval);
      if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
      beep();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const t = Math.max(0, timerRemaining);
  document.getElementById("timer-text").textContent = t;
  document.getElementById("timer-fg").style.strokeDashoffset =
    CIRCUMFERENCE * (1 - t / timerTotal);
}

function addTime(s) {
  timerRemaining += s;
  timerTotal     += s;
  updateTimerDisplay();
}

function closeTimer() {
  if (timerInterval) clearInterval(timerInterval);
  document.getElementById("timer-overlay").classList.remove("show");
}

function beep() {
  try {
    const ctx  = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch {}
}
