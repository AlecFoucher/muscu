function getMealCount(id) { return mealCounts[id] || 0; }

function changeMealCount(meal, delta) {
  const next = Math.max(0, getMealCount(meal.id) + delta);
  if (next === 0) {
    delete mealCounts[meal.id];
    meal.ingredients.forEach(ing => delete checkedItems[meal.id + "_" + ing.name]);
    saveCheckedItems();
  } else {
    mealCounts[meal.id] = next;
  }
  saveMealCounts();
  renderMeals();
  renderCart();
  updateRepasNav();
}

function multiplyQty(qty, n) {
  if (n <= 1) return qty;
  const m = qty.match(/^(\d+(?:[.,]\d+)?)(.*)/);
  if (!m) return qty;
  return (Math.round(parseFloat(m[1].replace(',', '.')) * n * 10) / 10) + m[2];
}

function renderMeals() {
  const grid = document.getElementById("meals-grid");
  grid.innerHTML = "";

  MEALS.forEach(meal => {
    const count = getMealCount(meal.id);
    const card  = document.createElement("div");
    card.className = "meal-card" + (count > 0 ? " has-count" : "");
    card.innerHTML = `
      <div class="meal-top">
        <div class="meal-emoji">${meal.emoji}</div>
        <div class="meal-info">
          <div class="meal-name">${meal.name}</div>
          <div class="meal-macros">${meal.macros}</div>
        </div>
      </div>
      <div class="meal-counter">
        <button class="counter-btn minus" ${count === 0 ? "disabled" : ""}>−</button>
        <span class="counter-num">${count}</span>
        <button class="counter-btn plus">+</button>
      </div>`;
    card.querySelector(".meal-top").onclick          = () => changeMealCount(meal, 1);
    card.querySelector(".counter-btn.minus").onclick = () => changeMealCount(meal, -1);
    card.querySelector(".counter-btn.plus").onclick  = () => changeMealCount(meal, 1);
    grid.appendChild(card);
  });
}

function renderCart() {
  const container   = document.getElementById("cart-list");
  const activeMeals = MEALS.filter(m => getMealCount(m.id) > 0);
  container.innerHTML = "";

  if (activeMeals.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <span class="cart-empty-icon">🛒</span>
        Va dans "Plats" et utilise + pour ajouter des ingrédients
      </div>`;
    return;
  }

  activeMeals.forEach(meal => {
    const count = getMealCount(meal.id);
    const label = document.createElement("div");
    label.className   = "section-label";
    label.textContent = count > 1 ? `${meal.name} × ${count}` : meal.name;
    container.appendChild(label);

    meal.ingredients.forEach(ing => {
      const key     = meal.id + "_" + ing.name;
      const checked = !!checkedItems[key];
      const el      = document.createElement("div");
      el.className  = "cart-item" + (checked ? " checked" : "");
      el.innerHTML  = `
        <div class="cart-check">${checked ? "✓" : ""}</div>
        <div class="cart-item-name">${ing.name}</div>
        <div class="cart-item-qty">${multiplyQty(ing.qty, count)}</div>`;
      el.onclick = () => {
        checkedItems[key] = !checkedItems[key];
        saveCheckedItems();
        renderCart();
      };
      container.appendChild(el);
    });
  });
}

function clearCart() {
  if (!Object.keys(mealCounts).length) return;
  if (confirm("Vider toute la liste de courses ?")) {
    mealCounts = {}; checkedItems = {};
    saveMealCounts(); saveCheckedItems();
    renderMeals(); renderCart(); updateRepasNav();
  }
}

function updateRepasNav() {
  const total = MEALS.reduce((s, m) => s + getMealCount(m.id), 0);
  const badge = document.getElementById("nav-badge");
  const count = document.getElementById("courses-count");
  if (total > 0) {
    badge.textContent = total; badge.classList.add("show");
    count.textContent = total; count.style.display = "inline";
  } else {
    badge.classList.remove("show");
    count.style.display = "none";
  }
}
