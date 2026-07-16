const menuItems = [
  { category: "koud", name: "Hummus", price: 7.95, description: "Kikkererwten, sesampasta, citroensap en knoflook.", diet: ["veg", "vegan"] },
  { category: "koud", name: "Baba Ghanouj", price: 7.95, description: "Gegrilde aubergine met verse groenten.", diet: ["veg", "vegan"] },
  { category: "koud", name: "Moutabal", price: 7.95, description: "Gegrilde aubergine met romige sesampasta.", diet: ["veg", "vegan"] },
  { category: "koud", name: "Mouhamara", price: 8.45, description: "Pikante peperpasta met granaatappeldressing.", diet: ["veg", "vegan"] },
  { category: "koud", name: "Jalanji", price: 8.45, description: "Zes wijnbladeren gevuld met rijst en groenten.", diet: ["veg", "vegan"] },
  { category: "koud", name: "Shengliesh", price: 8.45, description: "Traditionele Arabische oude kaas, ui, tomaat en tijm.", diet: ["veg"] },
  { category: "koud", name: "Labneh", price: 8.45, description: "Romige yoghurt met fijn gesneden komkommer.", diet: ["veg"] },
  { category: "koud", name: "Tarator Djaj", price: 8.45, description: "Kipfilet met sesampasta, knoflook en peterselie.", diet: [] },
  { category: "koud", name: "Kibbeh Nayeh", price: 14.95, description: "Rauw tartaarvlees met bulgur, ui en kruiden.", diet: [] },
  { category: "koud", name: "Creamtoum", price: 6.95, description: "Ambachtelijke knoflooksaus met olijfolie en eieren.", diet: ["veg"] },
  { category: "koud", name: "Kussa Mkliyeh", price: 7.95, description: "Gefrituurde courgette, sesampasta, knoflook en granaatappel.", diet: ["veg", "vegan"] },
  { category: "koud", name: "Mazza Mix Koud", price: 32.95, description: "Vier koude mazza, speciaal samengesteld door onze kok.", diet: [] },
  { category: "salade", name: "Tabouleh", price: 12.95, description: "Peterselie, tomaat, ui, munt en bulgur.", diet: ["veg", "vegan"] },
  { category: "salade", name: "Fattoush", price: 12.95, description: "Bladgroenten, gefrituurd Arabisch brood en granaatappeldressing.", diet: ["veg", "vegan"] },
  { category: "salade", name: "Halloumi", price: 13.95, description: "Bladgroenten, walnoten, komkommer, tomaat en gegrilde halloumi.", diet: ["veg"] },
  { category: "salade", name: "Armeense salade", price: 12.95, description: "Traditionele pittige salade met komkommer, tomaat en ui.", diet: ["veg", "vegan"] },
  { category: "warm", name: "Hummus bl’Lahme", price: 12.95, description: "Hummus met kalfshaaspuntjes.", diet: [] },
  { category: "warm", name: "Kebbe Traboulsie", price: 14.95, description: "Bulgurpastei met lamsgehakt, ui en pijnboompitten, met yoghurt.", diet: [] },
  { category: "warm", name: "Falafel", price: 10.95, description: "Vier gefrituurde kikkererwtenballetjes met tahin.", diet: ["veg", "vegan"] },
  { category: "warm", name: "Sharhaat Djaj", price: 13.95, description: "Kipfilet in een krokant jasje met huisgemaakte knoflooksaus.", diet: [] },
  { category: "warm", name: "Sambousak bl’Lahme", price: 10.95, description: "Vier filodeeghapjes gevuld met gehakt en ui.", diet: [] },
  { category: "warm", name: "Rakahyk bl’Jebne", price: 10.95, description: "Vier filodeeghapjes met huisgemaakte kaas.", diet: ["veg"] },
  { category: "warm", name: "Sambousak bl’Sabaneche", price: 10.95, description: "Vier filodeeghapjes met spinazie, ui en citroen.", diet: ["veg"] },
  { category: "warm", name: "Soujok Rolls", price: 10.95, description: "Arabisch brood gevuld met gehakt en knoflooksaus.", diet: [] },
  { category: "warm", name: "Jebne Mashwje", price: 11.95, description: "Gegrilde Arabische witte kaas (halloumi).", diet: ["veg"] },
  { category: "warm", name: "Kawurma", price: 14.95, description: "Mals rundvlees, langzaam gegaard en in draadjes geserveerd.", diet: [] },
  { category: "warm", name: "Djaj Rolls", price: 14.95, description: "Wrap met gegrilde kip, augurk, sla en knoflooksaus.", diet: [] },
  { category: "warm", name: "Mazza Mix Warm", price: 42.95, description: "Vier warme mazza, speciaal samengesteld door onze kok.", diet: [] },
  { category: "grill", name: "Jawaneh Mshwiye", price: 22.95, description: "Acht kippenvleugels van de grill met citroen en knoflook.", diet: [] },
  { category: "grill", name: "Ma’jwha", price: 27.95, description: "Rundergehakt gevuld met paprika, peterselie en halloumi.", diet: [] },
  { category: "grill", name: "Kabab", price: 22.95, description: "Gemarineerd rundergehakt aan de spies.", diet: [] },
  { category: "grill", name: "Toshca", price: 23.95, description: "Gekruid rundergehakt met Libanese witte kaas in gegrild brood.", diet: [] },
  { category: "grill", name: "Shish Tawook", price: 23.95, description: "Traditioneel gemarineerde kipfilet aan de spies.", diet: [] },
  { category: "grill", name: "Shekaf", price: 29.95, description: "Gegrilde kalfshaas aan de spies.", diet: [] },
  { category: "grill", name: "Sharhaat Mtafaye", price: 28.95, description: "Diamanthaas met paprika, ui, citroen en knoflook.", diet: [] },
  { category: "grill", name: "Mashawi", price: 35.95, description: "Mixed grill van kipfilet, kalfshaas en rundergehakt.", diet: [] },
  { category: "grill", name: "Ryash Kharouf", price: 35.95, description: "Zes traditioneel gemarineerde lamsracks.", diet: [] },
  { category: "grill", name: "Mashawi Deluxe", price: 39.95, description: "Mixed grill met kipfilet, kalfshaas, rundergehakt en lamsrack.", diet: [] },
  { category: "vis", name: "L’os (met graat)", price: 29.95, description: "Traditioneel gemarineerde en gegrilde zeebaars.", diet: [] },
  { category: "vis", name: "Ejaj (met graat)", price: 28.95, description: "Traditioneel gemarineerde en gegrilde dorade.", diet: [] },
  { category: "vis", name: "Karehdes", price: 29.95, description: "Gepelde garnalen met paprika, ui en kruidendressing.", diet: [] },
  { category: "vis", name: "Salmon", price: 29.95, description: "Traditioneel gemarineerde gegrilde zalmfilet.", diet: [] },
  { category: "vis", name: "Asmaak Mix", price: 47.95, description: "Drie soorten vis, traditioneel gemarineerd en gegrild.", diet: [] },
  { category: "vega", name: "Mshakale", price: 22.95, description: "Rijst met diverse soorten verse groenten.", diet: ["veg", "vegan"] },
  { category: "vega", name: "Falafilo", price: 20.95, description: "Wrap met falafel, tahin, augurk en salade. Met hummus en twee falafels.", diet: ["veg", "vegan"] },
  { category: "dessert", name: "Leyali Lebnan", price: 11.95, description: "Griesmeel met pistache, suiker en slagroom.", diet: ["veg"] },
  { category: "dessert", name: "Sucse", price: 10.95, description: "Zachte chocoladekoek met een vleugje citroen.", diet: ["veg"] },
  { category: "dessert", name: "Baqlawah", price: 12.95, description: "Bladerdeeg met pistache en vanille-ijs.", diet: ["veg"] },
  { category: "dessert", name: "Gazel Albanat", price: 12.95, description: "Zoete engelharen met slagroom, vanille-ijs en pistache.", diet: ["veg"] },
  { category: "dessert", name: "Bigdash", price: 12.95, description: "Huisgemaakt Arabisch ijs met pistache en mastiek.", diet: ["veg"] },
  { category: "dessert", name: "Knafeh", price: 12.95, description: "Knapperig gebakken sliertjesdeeg met kaas en zoete suikersiroop.", diet: ["veg"] },
  { category: "dessert", name: "Mazza Dessert Mix", price: 32.95, description: "Vier verschillende desserts op een schaal voor twee personen.", diet: ["veg"] }
];

const menuGrid = document.querySelector("[data-menu-grid]");
const menuSearch = document.querySelector("[data-menu-search]");
const menuMeta = document.querySelector("[data-menu-result-meta]");
const menuEmpty = document.querySelector("[data-menu-empty]");
const menuFilters = [...document.querySelectorAll("[data-category]")];
let activeCategory = "all";

function formatPrice(price) {
  return `€ ${price.toFixed(2).replace(".", ",")}`;
}

function dietBadges(diets) {
  return diets
    .map((diet) => `<span class="diet-badge ${diet === "vegan" ? "vegan" : ""}" title="${diet === "vegan" ? "Veganistisch" : "Vegetarisch"}">${diet === "vegan" ? "VN" : "V"}</span>`)
    .join("");
}

function renderMenu() {
  const query = menuSearch.value.trim().toLocaleLowerCase("nl");
  const filtered = menuItems.filter((item) => {
    const categoryMatch = activeCategory === "all" || item.category === activeCategory;
    const searchMatch = `${item.name} ${item.description}`.toLocaleLowerCase("nl").includes(query);
    return categoryMatch && searchMatch;
  });

  menuGrid.innerHTML = filtered
    .map(
      (item, index) => `
        <article class="menu-item" style="animation-delay:${Math.min(index, 8) * 25}ms">
          <div>
            <div class="menu-item-title-row"><h3>${item.name}</h3>${dietBadges(item.diet)}</div>
            <p>${item.description}</p>
          </div>
          <span class="menu-price">${formatPrice(item.price)}</span>
        </article>
      `
    )
    .join("");

  menuMeta.textContent = `${filtered.length} ${filtered.length === 1 ? "gerecht" : "gerechten"}`;
  menuEmpty.hidden = filtered.length !== 0;
}

menuFilters.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    menuFilters.forEach((item) => item.classList.toggle("active", item === button));
    renderMenu();
  });
});

menuSearch.addEventListener("input", renderMenu);
document.querySelector("[data-reset-menu]").addEventListener("click", () => {
  activeCategory = "all";
  menuSearch.value = "";
  menuFilters.forEach((button) => button.classList.toggle("active", button.dataset.category === "all"));
  renderMenu();
});

renderMenu();

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 40), { passive: true });

function closeMobileMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("open");
  header.classList.remove("menu-active");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  mobileMenu.classList.toggle("open", open);
  header.classList.toggle("menu-active", open);
  document.body.classList.toggle("menu-open", open);
});

mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -30px" }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
document.querySelector("[data-year]").textContent = new Date().getFullYear();

// Interactive reservation concept: moment -> table -> details
const bookingState = {
  step: 1,
  guests: 2,
  selectedDate: null,
  time: null,
  tableId: null,
  viewDate: null
};

const today = new Date();
today.setHours(0, 0, 0, 0);
bookingState.viewDate = new Date(today.getFullYear(), today.getMonth(), 1);

const bookingForm = document.querySelector("[data-booking-form]");
const bookingScreens = [...document.querySelectorAll("[data-booking-screen]")];
const stepChips = [...document.querySelectorAll("[data-step-chip]")];
const bookingSuccess = document.querySelector("[data-booking-success]");
const calendarMonth = document.querySelector("[data-calendar-month]");
const calendarDays = document.querySelector("[data-calendar-days]");
const prevMonthButton = document.querySelector("[data-calendar-prev]");
const nextMonthButton = document.querySelector("[data-calendar-next]");
const selectedDateLabel = document.querySelector("[data-selected-date-label]");
const selectedTimeLabel = document.querySelector("[data-selected-time-label]");
const guestOptions = document.querySelector("[data-guest-options]");
const guestLabel = document.querySelector("[data-guest-label]");
const guestVisual = document.querySelector("[data-guest-visual]");
const liveChoice = document.querySelector("[data-live-choice]");
const toTablesButton = document.querySelector("[data-to-tables]");
const toDetailsButton = document.querySelector("[data-to-details]");
const floorPlan = document.querySelector("[data-floor-plan]");
const tableDetail = document.querySelector("[data-table-detail]");
const selectedTableLabel = document.querySelector("[data-selected-table-label]");
const finalSummary = document.querySelector("[data-final-summary]");

const restaurantTables = [
  { id: 1, seats: 2, x: 18, y: 29, area: "Raamzijde", shape: "round", mood: "Rustig & licht", note: "Direct aan het raam" },
  { id: 2, seats: 4, x: 43, y: 29, area: "Midden", shape: "round", mood: "Levendig", note: "Midden in de sfeer" },
  { id: 3, seats: 4, x: 70, y: 28, area: "Keukenzijde", shape: "rect", mood: "Chef's view", note: "Zicht op de open keuken", busy: true },
  { id: 4, seats: 2, x: 86, y: 48, area: "Knusse hoek", shape: "round", mood: "Intiem", note: "Een plek voor twee" },
  { id: 5, seats: 4, x: 23, y: 68, area: "Raamzijde", shape: "rect", mood: "Ruim & licht", note: "Aan de Walstraat" },
  { id: 6, seats: 6, x: 51, y: 68, area: "Midden", shape: "rect", mood: "Samen delen", note: "Ideaal voor een groep" },
  { id: 7, seats: 6, x: 76, y: 72, area: "Achterin", shape: "rect", mood: "Gezellig", note: "Dicht bij de keuken", busy: true }
];

function dateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat("nl-NL", { weekday: "long", day: "numeric", month: "long" }).format(date);
}

function chairMarkup(count, radiusX = 76, radiusY = 76) {
  return Array.from({ length: count }, (_, index) => {
    const angle = -90 + (360 / count) * index;
    const radians = (angle * Math.PI) / 180;
    const left = 50 + (Math.cos(radians) * radiusX) / 2;
    const top = 50 + (Math.sin(radians) * radiusY) / 2;
    return `<i class="guest-chair" style="left:${left}%;top:${top}%;--rotation:${angle + 90}deg"></i>`;
  }).join("");
}

function renderGuestVisual() {
  guestVisual.innerHTML = `<div class="guest-table-shape" data-guests="${bookingState.guests}"></div>${chairMarkup(bookingState.guests)}`;
}

function renderGuests() {
  guestLabel.textContent = bookingState.guests === 8 ? "8+ gasten" : `${bookingState.guests} gasten`;
  guestOptions.innerHTML = Array.from({ length: 7 }, (_, index) => index + 2)
    .map((guests) => `<button class="guest-option${bookingState.guests === guests ? " selected" : ""}" type="button" data-guests="${guests}">${guests}${guests === 8 ? "+" : ""}</button>`)
    .join("");
  guestOptions.querySelectorAll("[data-guests]").forEach((button) => {
    button.addEventListener("click", () => {
      bookingState.guests = Number(button.dataset.guests);
      bookingState.tableId = null;
      renderGuests();
      renderGuestVisual();
      updateWhenState();
    });
  });
}

function renderCalendar() {
  const year = bookingState.viewDate.getFullYear();
  const month = bookingState.viewDate.getMonth();
  calendarMonth.textContent = new Intl.DateTimeFormat("nl-NL", { month: "long", year: "numeric" }).format(bookingState.viewDate);
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const mondayOffset = (firstDay.getDay() + 6) % 7;
  const maxDate = new Date(today);
  maxDate.setDate(maxDate.getDate() + 90);
  const cells = [];
  for (let i = 0; i < mondayOffset; i += 1) cells.push('<span class="calendar-day empty"></span>');
  for (let day = 1; day <= lastDay.getDate(); day += 1) {
    const date = new Date(year, month, day);
    const disabled = date < today || date > maxDate;
    const selected = bookingState.selectedDate && dateKey(date) === dateKey(bookingState.selectedDate);
    const isToday = dateKey(date) === dateKey(today);
    cells.push(`<button class="calendar-day${selected ? " selected" : ""}${isToday ? " today" : ""}" type="button" data-date="${dateKey(date)}" ${disabled ? "disabled" : ""} aria-label="${formatLongDate(date)}">${day}</button>`);
  }
  calendarDays.innerHTML = cells.join("");
  calendarDays.querySelectorAll("[data-date]").forEach((button) => {
    button.addEventListener("click", () => {
      const [yearPart, monthPart, dayPart] = button.dataset.date.split("-").map(Number);
      bookingState.selectedDate = new Date(yearPart, monthPart - 1, dayPart);
      selectedDateLabel.textContent = formatLongDate(bookingState.selectedDate);
      bookingState.tableId = null;
      renderCalendar();
      updateWhenState();
    });
  });
  const currentMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  prevMonthButton.disabled = bookingState.viewDate <= currentMonth;
}

prevMonthButton.addEventListener("click", () => {
  bookingState.viewDate = new Date(bookingState.viewDate.getFullYear(), bookingState.viewDate.getMonth() - 1, 1);
  renderCalendar();
});

nextMonthButton.addEventListener("click", () => {
  const candidate = new Date(bookingState.viewDate.getFullYear(), bookingState.viewDate.getMonth() + 1, 1);
  const limit = new Date(today.getFullYear(), today.getMonth() + 3, 1);
  if (candidate <= limit) bookingState.viewDate = candidate;
  renderCalendar();
});

const earlyTimes = ["16:00", "16:30", "17:00", "17:30", "18:00"];
const lateTimes = ["18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

function renderTimes() {
  const renderGroup = (times) => times.map((time) => `<button class="time-option${bookingState.time === time ? " selected" : ""}" type="button" data-time="${time}">${time}</button>`).join("");
  document.querySelector("[data-time-early]").innerHTML = renderGroup(earlyTimes);
  document.querySelector("[data-time-late]").innerHTML = renderGroup(lateTimes);
  document.querySelectorAll("[data-time]").forEach((button) => {
    button.addEventListener("click", () => {
      bookingState.time = button.dataset.time;
      bookingState.tableId = null;
      selectedTimeLabel.textContent = bookingState.time;
      renderTimes();
      updateWhenState();
    });
  });
}

function updateWhenState() {
  const complete = Boolean(bookingState.selectedDate && bookingState.time);
  toTablesButton.disabled = !complete;
  if (complete) {
    liveChoice.textContent = `${formatLongDate(bookingState.selectedDate)} · ${bookingState.time} · ${bookingState.guests === 8 ? "8+" : bookingState.guests} gasten`;
    document.querySelector("[data-step-one-summary]").textContent = `${bookingState.selectedDate.getDate()} ${new Intl.DateTimeFormat("nl-NL", { month: "short" }).format(bookingState.selectedDate)} · ${bookingState.time}`;
  } else {
    liveChoice.textContent = "Kies een datum en tijd";
    document.querySelector("[data-step-one-summary]").textContent = "Kies je moment";
  }
}

function tableSeatMarkup(table) {
  const count = table.seats;
  return Array.from({ length: count }, (_, index) => {
    const angle = -90 + (360 / count) * index;
    const radians = (angle * Math.PI) / 180;
    const radiusX = table.shape === "rect" ? 44 : 36;
    const radiusY = table.shape === "rect" ? 32 : 35;
    const left = 50 + Math.cos(radians) * radiusX;
    const top = 50 + Math.sin(radians) * radiusY;
    return `<i class="seat-dot" style="left:${left}%;top:${top}%;--rotation:${angle + 90}deg"></i>`;
  }).join("");
}

function recommendedTableId() {
  const available = restaurantTables.filter((table) => !table.busy && table.seats >= bookingState.guests);
  available.sort((a, b) => a.seats - b.seats);
  return available[0]?.id ?? null;
}

function renderFloorPlan() {
  floorPlan.querySelectorAll(".table-node").forEach((node) => node.remove());
  const recommendedId = recommendedTableId();
  restaurantTables.forEach((table) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `table-node ${table.shape}${table.busy ? " busy" : ""}${table.id === recommendedId ? " recommended" : ""}${table.id === bookingState.tableId ? " selected" : ""}`;
    button.style.left = `${table.x}%`;
    button.style.top = `${table.y}%`;
    button.dataset.table = String(table.id);
    button.disabled = table.busy || table.seats < bookingState.guests;
    button.setAttribute("aria-label", `${table.busy ? "Bezet: " : "Kies "}tafel ${table.id}, ${table.seats} plaatsen, ${table.area}`);
    button.innerHTML = `<span class="table-top">T${table.id}</span>${tableSeatMarkup(table)}`;
    button.addEventListener("click", () => selectTable(table.id));
    floorPlan.appendChild(button);
  });
}

function selectTable(tableId) {
  bookingState.tableId = tableId;
  const table = restaurantTables.find((item) => item.id === tableId);
  selectedTableLabel.textContent = `Tafel ${table.id} · ${table.area}`;
  document.querySelector("[data-step-two-summary]").textContent = `Tafel ${table.id} · ${table.area}`;
  toDetailsButton.disabled = false;
  tableDetail.innerHTML = `
    <div class="table-detail-selected">
      <span>Jouw selectie</span>
      <h4>Tafel ${table.id} · ${table.area}</h4>
      <div class="table-preview"><div class="guest-table-shape" data-table="T${table.id}"></div>${chairMarkup(table.seats, 115, 92)}</div>
      <div class="table-feature-list">
        <div><svg><use href="#i-users" /></svg>${table.seats} comfortabele zitplaatsen</div>
        <div><svg><use href="#i-spark" /></svg>${table.mood}</div>
        <div><svg><use href="#i-pin" /></svg>${table.note}</div>
      </div>
    </div>`;
  renderFloorPlan();
}

function setBookingScreen(step) {
  bookingState.step = step;
  bookingScreens.forEach((screen) => screen.classList.toggle("active", Number(screen.dataset.bookingScreen) === step));
  stepChips.forEach((chip, index) => {
    const chipStep = index + 1;
    chip.classList.toggle("active", chipStep === step);
    chip.classList.toggle("complete", chipStep < step);
    chip.disabled = chipStep > step || (chipStep === 2 && !bookingState.selectedDate) || (chipStep === 3 && !bookingState.tableId);
  });
  if (step === 2) renderFloorPlan();
  if (step === 3) renderFinalSummary();
}

function renderFinalSummary() {
  const table = restaurantTables.find((item) => item.id === bookingState.tableId);
  finalSummary.innerHTML = `
    <span>Jouw avond bij Mazza</span>
    <h4>Alles staat klaar.<br />Alleen jij nog.</h4>
    <div class="summary-row"><svg><use href="#i-calendar" /></svg><div><small>Datum</small><strong>${formatLongDate(bookingState.selectedDate)}</strong></div></div>
    <div class="summary-row"><svg><use href="#i-clock" /></svg><div><small>Tijd</small><strong>${bookingState.time}</strong></div></div>
    <div class="summary-row"><svg><use href="#i-users" /></svg><div><small>Gezelschap</small><strong>${bookingState.guests === 8 ? "8+" : bookingState.guests} gasten</strong></div></div>
    <div class="summary-row"><svg><use href="#i-pin" /></svg><div><small>Plek</small><strong>Tafel ${table.id} · ${table.area}</strong></div></div>
    <div class="summary-note">Conceptdemo — in de live versie gaat dit direct naar Mazza.</div>`;
}

toTablesButton.addEventListener("click", () => setBookingScreen(2));
toDetailsButton.addEventListener("click", () => setBookingScreen(3));
document.querySelector("[data-back-when]").addEventListener("click", () => setBookingScreen(1));
document.querySelector("[data-back-tables]").addEventListener("click", () => setBookingScreen(2));
stepChips.forEach((chip) => chip.addEventListener("click", () => setBookingScreen(Number(chip.dataset.stepChip))));

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;
  const data = new FormData(bookingForm);
  const firstName = String(data.get("name") || "gast").trim().split(/\s+/)[0];
  bookingScreens.forEach((screen) => screen.classList.remove("active"));
  document.querySelector(".booking-stepper").hidden = true;
  bookingSuccess.hidden = false;
  const table = restaurantTables.find((item) => item.id === bookingState.tableId);
  document.querySelector("[data-success-copy]").textContent = `${firstName}, dit is hoe de bevestiging voor ${formatLongDate(bookingState.selectedDate)} om ${bookingState.time} aan tafel ${table.id} eruitziet. In de live versie ontvangt Mazza deze reservering direct.`;
  document.querySelector("[data-success-reference]").textContent = `MZ-${dateKey(bookingState.selectedDate).replaceAll("-", "").slice(2)}-${Math.floor(100 + Math.random() * 900)}`;
});

document.querySelector("[data-booking-reset]").addEventListener("click", () => {
  bookingForm.reset();
  bookingSuccess.hidden = true;
  document.querySelector(".booking-stepper").hidden = false;
  bookingState.step = 1;
  bookingState.guests = 2;
  bookingState.selectedDate = null;
  bookingState.time = null;
  bookingState.tableId = null;
  bookingState.viewDate = new Date(today.getFullYear(), today.getMonth(), 1);
  selectedDateLabel.textContent = "Nog niet gekozen";
  selectedTimeLabel.textContent = "Nog niet gekozen";
  selectedTableLabel.textContent = "Nog geen tafel gekozen";
  toTablesButton.disabled = true;
  toDetailsButton.disabled = true;
  renderGuests();
  renderGuestVisual();
  renderCalendar();
  renderTimes();
  updateWhenState();
  setBookingScreen(1);
});

renderGuests();
renderGuestVisual();
renderCalendar();
renderTimes();
updateWhenState();
setBookingScreen(1);
