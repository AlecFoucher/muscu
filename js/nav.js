function switchPage(page) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");
  document.getElementById("nav-" + page).classList.add("active");
}

function switchSubTab(tab) {
  document.querySelectorAll(".sub-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".sub-page").forEach(p => p.classList.remove("active"));
  document.getElementById("subtab-" + tab).classList.add("active");
  document.getElementById("subpage-" + tab).classList.add("active");
}
