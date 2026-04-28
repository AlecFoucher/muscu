function storageGet(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) ?? "null") ?? fallback; }
  catch { return fallback; }
}

function storageSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

// ── Programme ──
function dayKey(day) {
  return `muscu_${new Date().toISOString().slice(0, 10)}_${day}`;
}
function loadDone(day)      { return storageGet(dayKey(day), []); }
function saveDone(day, arr) { storageSet(dayKey(day), arr); }

// ── Repas ──
let mealCounts   = storageGet("muscu_meal_counts", {});
let checkedItems = storageGet("muscu_checked", {});

function saveMealCounts()   { storageSet("muscu_meal_counts", mealCounts); }
function saveCheckedItems() { storageSet("muscu_checked", checkedItems); }
