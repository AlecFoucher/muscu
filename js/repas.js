function getMealCount(id) { return mealCounts[id] || 0; }

function changeMealCount(meal, delta) {
  const next = Math.max(0, getMealCount(meal.id) + delta);
  if (next === 0) delete mealCounts[meal.id];
  else mealCounts[meal.id] = next;
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

// Additionne une liste de quantités ex: ["150g","200g"] → "350g"
function sumQtys(qtys) {
  if (qtys.length === 1) return qtys[0];
  const parsed = qtys.map(q => {
    const m = q.match(/^(\d+(?:[.,]\d+)?)(.*)/);
    return m ? { value: parseFloat(m[1].replace(',', '.')), unit: m[2].trim() } : null;
  });
  if (parsed.some(p => p === null)) return qtys[0];
  const units = [...new Set(parsed.map(p => p.unit))];
  if (units.length > 1) return qtys.join(' + ');
  const total = Math.round(parsed.reduce((s, p) => s + p.value, 0) * 10) / 10;
  return total + (units[0] || '');
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

  // Agréger les ingrédients identiques de tous les plats actifs
  const aggregated = {};
  activeMeals.forEach(meal => {
    const count = getMealCount(meal.id);
    meal.ingredients.forEach(ing => {
      const key = ing.name.toLowerCase().trim();
      if (!aggregated[key]) aggregated[key] = { name: ing.name, qtys: [], category: ing.category || "Autre" };
      aggregated[key].qtys.push(multiplyQty(ing.qty, count));
    });
  });

  // Grouper par catégorie dans l'ordre défini
  const byCategory = {};
  Object.entries(aggregated).forEach(([key, item]) => {
    const cat = item.category;
    if (!byCategory[cat]) byCategory[cat] = [];
    byCategory[cat].push({ key, ...item });
  });

  const categories = [
    ...(CATEGORY_ORDER || []).filter(c => byCategory[c]),
    ...Object.keys(byCategory).filter(c => !(CATEGORY_ORDER || []).includes(c)),
  ];

  categories.forEach(cat => {
    const header = document.createElement("div");
    header.className = "cart-category-header";
    header.textContent = cat;
    container.appendChild(header);

    byCategory[cat].forEach(item => {
      const checked = !!checkedItems[item.key];
      const el      = document.createElement("div");
      el.className  = "cart-item" + (checked ? " checked" : "");
      el.innerHTML  = `
        <div class="cart-check">${checked ? "✓" : ""}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-qty">${sumQtys(item.qtys)}</div>`;
      el.onclick = () => {
        checkedItems[item.key] = !checkedItems[item.key];
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
