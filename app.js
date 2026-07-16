const localeCodes = { nl: "nl-NL", de: "de-DE", en: "en-GB" };

const copy = {
  nl: {
    "nav.story": "Ons verhaal", "nav.menu": "Menukaart", "nav.atmosphere": "Sfeer", "nav.visit": "Bezoek ons", "nav.book": "Reserveer", "nav.openMenu": "Menu openen",
    "mobile.intro": "Ontdek Mazza", "common.daily": "Elke dag open",
    "hero.eyebrow": "Arabisch-Libanese keuken · Enschede", "hero.title": "Pure smaak.<br /><em>Warme gastvrijheid.</em>", "hero.copy": "Een tafel vol kleine gerechten, vuur van de grill en de warmte van samen eten.", "hero.book": "Kies je tafel", "hero.menu": "Ontdek het menu", "hero.tonight": "Vanavond bij Mazza", "hero.available": "Er zijn nog tafels beschikbaar.", "hero.choose": "Kies zelf waar je wilt zitten.", "hero.start": "Start reservering", "hero.locationLabel": "Midden in Enschede", "hero.hoursLabel": "Zeven dagen per week", "hero.arabicLabel": "Proeven · delen · blijven",
    "story.index": "01 · Het verhaal", "story.title": "Een avond die begint<br />met <em>één klein bordje.</em>", "story.photoCaption": "Een warme wereld in hartje Enschede.", "story.lead": "Mazza betekent blijven proeven, delen en praten. Het Arabische antwoord op tapas, met de gastvrijheid van thuis.", "story.body": "Koude en warme mazza, geurende kruiden en gerechten van de grill komen midden op tafel. Niemand bestelt alleen voor zichzelf.", "story.link": "Bekijk wat er op tafel komt", "story.quote": "“De tafel is pas compleet als iedereen mee-eet.”", "story.quoteBy": "— Onze favoriete huisregel",
    "menu.index": "02 · De menukaart", "menu.title": "Kies klein.<br /><em>Proef groots.</em>", "menu.copy": "Van romige hummus tot vuur van de grill. Zoek, filter en stel in gedachten je tafel alvast samen.", "menu.grillLabel": "Van de grill", "menu.shareLabel": "Om te delen", "menu.sharePrice": "vanaf € 52,95 p.p.", "menu.sweetLabel": "Zoete finale", "menu.browserLabel": "De hele kaart", "menu.browserTitle": "Wat mag er op tafel?", "menu.search": "Zoek hummus, kip, vegan…", "menu.vegetarian": "vegetarisch", "menu.vegan": "vegan", "menu.empty": "Niets gevonden.", "menu.reset": "Bekijk alles", "menu.allergy": "Allergie of dieetwens? Vertel het ons — bijna altijd kunnen we iets lekkers maken.", "menu.pdf": "Originele menukaart", "menu.resultOne": "gerecht", "menu.resultMany": "gerechten",
    "categories.all": "Alles", "categories.koud": "Koude mazza", "categories.warm": "Warme mazza", "categories.salade": "Salades", "categories.grill": "Grill", "categories.vis": "Vis", "categories.vega": "Vegetarisch", "categories.dessert": "Dessert",
    "moments.index": "03 · De sfeer", "moments.title": "Arabische warmte.<br /><em>Een moderne avond.</em>", "moments.caption1": "Warm licht. Lange avond.", "moments.note": "De deuren gaan open.<br />De grill wordt warm.<br />De tafel wacht.", "moments.link": "Vanavond hier?", "moments.caption2": "Gemaakt om te delen.", "moments.caption3": "Altijd vers op tafel.",
    "booking.index": "04 · Reserveer", "booking.title": "Jouw avond.<br /><em>Jouw tafel.</em>", "booking.copy": "Kies het moment, bekijk de zaal en selecteer zelf de plek die bij je avond past.", "booking.when": "Wanneer", "booking.where": "Waar", "booking.who": "Wie", "booking.chooseMoment": "Kies je moment", "booking.chooseTable": "Kies je tafel", "booking.details": "Jouw gegevens", "booking.step1": "Stap 1 van 3", "booking.step2": "Stap 2 van 3", "booking.step3": "Stap 3 van 3", "booking.whenTitle": "Wanneer schuif je aan?", "booking.openInfo": "Elke dag open van 16:00 tot 22:00.", "booking.partySize": "Met hoeveel?", "booking.largeParty": "Meer dan 8? Bel ons even", "booking.chooseDay": "Kies een dag", "booking.notChosen": "Nog niet gekozen", "booking.chooseTime": "Kies een tijd", "booking.early": "Vroeg tafelen", "booking.evening": "Avond", "booking.choice": "Jouw keuze", "booking.chooseDateTime": "Kies een datum en tijd", "booking.viewTables": "Bekijk beschikbare tafels", "booking.whereTitle": "Waar wil je zitten?", "booking.free": "vrij", "booking.best": "beste match", "booking.busy": "bezet", "booking.window": "Raamzijde", "booking.kitchen": "Open keuken", "booking.entrance": "Entree", "booking.tapTable": "Tik een tafel aan", "booking.tapCopy": "Bekijk de plek, sfeer en het aantal zitplaatsen.", "booking.back": "Terug", "booking.selectedPlace": "Geselecteerde plek", "booking.noTable": "Nog geen tafel gekozen", "booking.continueTable": "Verder met deze tafel", "booking.whoTitle": "Voor wie zetten we klaar?", "booking.demo": "Conceptdemo", "booking.demoInfo": "Er wordt nog niets echt verzonden", "booking.confirm": "Bevestig demo", "booking.guests": "gasten", "booking.guest": "gast", "booking.table": "Tafel", "booking.seats": "comfortabele zitplaatsen", "booking.selection": "Jouw selectie", "booking.yourEvening": "Jouw avond bij Mazza", "booking.readyTitle": "Alles staat klaar.<br />Alleen jij nog.", "booking.date": "Datum", "booking.time": "Tijd", "booking.party": "Gezelschap", "booking.place": "Plek", "booking.summaryDemo": "Conceptdemo — in de live versie gaat dit direct naar Mazza.", "booking.chooseAria": "Kies", "booking.occupiedAria": "Bezet", "booking.places": "plaatsen",
    "table.area.window": "Raamzijde", "table.area.middle": "Midden", "table.area.kitchen": "Keukenzijde", "table.area.corner": "Knusse hoek", "table.area.back": "Achterin", "table.mood.quiet": "Rustig & licht", "table.mood.lively": "Levendig", "table.mood.chef": "Uitzicht op de chef", "table.mood.intimate": "Intiem", "table.mood.spacious": "Ruim & licht", "table.mood.share": "Samen delen", "table.mood.cosy": "Gezellig", "table.note.window": "Direct aan het raam", "table.note.centre": "Midden in de sfeer", "table.note.kitchen": "Zicht op de open keuken", "table.note.two": "Een plek voor twee", "table.note.street": "Aan de Walstraat", "table.note.group": "Ideaal voor een groep", "table.note.nearKitchen": "Dicht bij de keuken",
    "form.name": "Naam", "form.namePlaceholder": "Jouw naam", "form.phone": "Telefoon", "form.email": "E-mail", "form.emailPlaceholder": "jij@voorbeeld.nl", "form.note": "Iets dat we moeten weten?", "form.optional": "optioneel", "form.notePlaceholder": "Allergie, kinderstoel of iets te vieren?", "form.privacy": "Ik ga akkoord met het verwerken van mijn gegevens voor deze reservering.",
    "success.label": "Demo-reservering compleet", "success.title": "Die tafel is<br /><em>helemaal van jou.</em>", "success.reference": "Referentie", "success.restaurant": "Restaurant", "success.reset": "Opnieuw proberen", "success.copy": "{name}, zo ziet de bevestiging voor {date} om {time} aan tafel {table} eruit. In de live versie ontvangt Mazza deze reservering direct.",
    "contact.index": "05 · Tot vanavond", "contact.title": "Hartje Enschede.<br /><em>Een wereld verder.</em>", "contact.address": "Adres", "contact.hours": "Openingstijden", "contact.reserve": "Reserveren", "contact.route": "Open route", "contact.almost": "Je bent er bijna.",
    "footer.tagline": "Libanese smaken.<br />Eindeloze gastvrijheid.", "footer.follow": "Volg ons", "footer.call": "Direct reserveren", "footer.concept": "Interactieve conceptwebsite",
    weekdays: ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"]
  },
  de: {
    "nav.story": "Unsere Geschichte", "nav.menu": "Speisekarte", "nav.atmosphere": "Atmosphäre", "nav.visit": "Besuchen", "nav.book": "Reservieren", "nav.openMenu": "Menü öffnen",
    "mobile.intro": "Mazza entdecken", "common.daily": "Täglich geöffnet",
    "hero.eyebrow": "Arabisch-libanesische Küche · Enschede", "hero.title": "Reiner Geschmack.<br /><em>Warme Gastfreundschaft.</em>", "hero.copy": "Ein Tisch voller kleiner Gerichte, Feuer vom Grill und der Wärme gemeinsamen Essens.", "hero.book": "Tisch auswählen", "hero.menu": "Speisekarte entdecken", "hero.tonight": "Heute Abend bei Mazza", "hero.available": "Es sind noch Tische verfügbar.", "hero.choose": "Wählen Sie selbst Ihren Lieblingsplatz.", "hero.start": "Reservierung starten", "hero.locationLabel": "Mitten in Enschede", "hero.hoursLabel": "Sieben Tage die Woche", "hero.arabicLabel": "Probieren · teilen · bleiben",
    "story.index": "01 · Die Geschichte", "story.title": "Ein Abend, der mit<br /><em>einem kleinen Teller beginnt.</em>", "story.photoCaption": "Eine warme Welt mitten in Enschede.", "story.lead": "Mazza bedeutet weiterprobieren, teilen und reden. Die arabische Antwort auf Tapas — mit der Gastfreundschaft von zu Hause.", "story.body": "Kalte und warme Mazza, duftende Gewürze und Gerichte vom Grill kommen in die Mitte des Tisches. Niemand bestellt nur für sich.", "story.link": "Entdecken, was auf den Tisch kommt", "story.quote": "„Der Tisch ist erst vollständig, wenn alle mitessen.“", "story.quoteBy": "— Unsere liebste Hausregel",
    "menu.index": "02 · Die Speisekarte", "menu.title": "Klein wählen.<br /><em>Groß genießen.</em>", "menu.copy": "Von cremigem Hummus bis zum Feuer des Grills. Suchen, filtern und den Tisch im Kopf schon zusammenstellen.", "menu.grillLabel": "Vom Grill", "menu.shareLabel": "Zum Teilen", "menu.sharePrice": "ab 52,95 € p. P.", "menu.sweetLabel": "Süßes Finale", "menu.browserLabel": "Die ganze Karte", "menu.browserTitle": "Was darf auf den Tisch?", "menu.search": "Hummus, Hähnchen, vegan suchen…", "menu.vegetarian": "vegetarisch", "menu.vegan": "vegan", "menu.empty": "Nichts gefunden.", "menu.reset": "Alles anzeigen", "menu.allergy": "Allergie oder besondere Ernährung? Sagen Sie uns Bescheid — fast immer finden wir etwas Köstliches.", "menu.pdf": "Originale Speisekarte", "menu.resultOne": "Gericht", "menu.resultMany": "Gerichte",
    "categories.all": "Alles", "categories.koud": "Kalte Mazza", "categories.warm": "Warme Mazza", "categories.salade": "Salate", "categories.grill": "Grill", "categories.vis": "Fisch", "categories.vega": "Vegetarisch", "categories.dessert": "Dessert",
    "moments.index": "03 · Die Atmosphäre", "moments.title": "Arabische Wärme.<br /><em>Ein moderner Abend.</em>", "moments.caption1": "Warmes Licht. Langer Abend.", "moments.note": "Die Türen öffnen sich.<br />Der Grill wird heiß.<br />Der Tisch wartet.", "moments.link": "Heute Abend hier?", "moments.caption2": "Zum Teilen gemacht.", "moments.caption3": "Immer frisch auf dem Tisch.",
    "booking.index": "04 · Reservieren", "booking.title": "Ihr Abend.<br /><em>Ihr Tisch.</em>", "booking.copy": "Wählen Sie den Zeitpunkt, sehen Sie sich den Raum an und bestimmen Sie selbst den passenden Platz.", "booking.when": "Wann", "booking.where": "Wo", "booking.who": "Wer", "booking.chooseMoment": "Zeitpunkt wählen", "booking.chooseTable": "Tisch auswählen", "booking.details": "Ihre Angaben", "booking.step1": "Schritt 1 von 3", "booking.step2": "Schritt 2 von 3", "booking.step3": "Schritt 3 von 3", "booking.whenTitle": "Wann dürfen wir Sie begrüßen?", "booking.openInfo": "Täglich von 16:00 bis 22:00 Uhr geöffnet.", "booking.partySize": "Wie viele Personen?", "booking.largeParty": "Mehr als 8? Rufen Sie uns an", "booking.chooseDay": "Tag auswählen", "booking.notChosen": "Noch nicht gewählt", "booking.chooseTime": "Uhrzeit wählen", "booking.early": "Früher Abend", "booking.evening": "Abend", "booking.choice": "Ihre Auswahl", "booking.chooseDateTime": "Datum und Uhrzeit wählen", "booking.viewTables": "Verfügbare Tische ansehen", "booking.whereTitle": "Wo möchten Sie sitzen?", "booking.free": "frei", "booking.best": "beste Wahl", "booking.busy": "belegt", "booking.window": "Fensterseite", "booking.kitchen": "Offene Küche", "booking.entrance": "Eingang", "booking.tapTable": "Tisch auswählen", "booking.tapCopy": "Sehen Sie Platz, Atmosphäre und Anzahl der Sitzplätze.", "booking.back": "Zurück", "booking.selectedPlace": "Ausgewählter Platz", "booking.noTable": "Noch kein Tisch gewählt", "booking.continueTable": "Mit diesem Tisch fortfahren", "booking.whoTitle": "Für wen dürfen wir eindecken?", "booking.demo": "Konzeptdemo", "booking.demoInfo": "Es wird noch nichts wirklich versendet", "booking.confirm": "Demo bestätigen", "booking.guests": "Gäste", "booking.guest": "Gast", "booking.table": "Tisch", "booking.seats": "bequeme Sitzplätze", "booking.selection": "Ihre Auswahl", "booking.yourEvening": "Ihr Abend bei Mazza", "booking.readyTitle": "Alles ist bereit.<br />Nur Sie fehlen noch.", "booking.date": "Datum", "booking.time": "Uhrzeit", "booking.party": "Gesellschaft", "booking.place": "Platz", "booking.summaryDemo": "Konzeptdemo — in der Live-Version geht dies direkt an Mazza.", "booking.chooseAria": "Wählen", "booking.occupiedAria": "Belegt", "booking.places": "Plätze",
    "table.area.window": "Fensterseite", "table.area.middle": "Mitte", "table.area.kitchen": "Küchenseite", "table.area.corner": "Gemütliche Ecke", "table.area.back": "Hinterer Bereich", "table.mood.quiet": "Ruhig & hell", "table.mood.lively": "Lebendig", "table.mood.chef": "Blick zum Chef", "table.mood.intimate": "Intim", "table.mood.spacious": "Großzügig & hell", "table.mood.share": "Gemeinsam teilen", "table.mood.cosy": "Gemütlich", "table.note.window": "Direkt am Fenster", "table.note.centre": "Mitten im Geschehen", "table.note.kitchen": "Blick in die offene Küche", "table.note.two": "Ein Platz für zwei", "table.note.street": "An der Walstraat", "table.note.group": "Ideal für eine Gruppe", "table.note.nearKitchen": "Nah an der Küche",
    "form.name": "Name", "form.namePlaceholder": "Ihr Name", "form.phone": "Telefon", "form.email": "E-Mail", "form.emailPlaceholder": "name@beispiel.de", "form.note": "Müssen wir etwas wissen?", "form.optional": "optional", "form.notePlaceholder": "Allergie, Kinderstuhl oder etwas zu feiern?", "form.privacy": "Ich stimme der Verarbeitung meiner Daten für diese Reservierung zu.",
    "success.label": "Demo-Reservierung abgeschlossen", "success.title": "Dieser Tisch gehört<br /><em>ganz Ihnen.</em>", "success.reference": "Referenz", "success.restaurant": "Restaurant", "success.reset": "Neu beginnen", "success.copy": "{name}, so sieht die Bestätigung für {date} um {time} Uhr an Tisch {table} aus. In der Live-Version erhält Mazza diese Reservierung direkt.",
    "contact.index": "05 · Bis heute Abend", "contact.title": "Mitten in Enschede.<br /><em>Eine Welt entfernt.</em>", "contact.address": "Adresse", "contact.hours": "Öffnungszeiten", "contact.reserve": "Reservieren", "contact.route": "Route öffnen", "contact.almost": "Fast angekommen.",
    "footer.tagline": "Libanesische Aromen.<br />Grenzenlose Gastfreundschaft.", "footer.follow": "Folgen", "footer.call": "Direkt reservieren", "footer.concept": "Interaktive Konzeptwebsite",
    weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
  },
  en: {
    "nav.story": "Our story", "nav.menu": "Menu", "nav.atmosphere": "Atmosphere", "nav.visit": "Visit us", "nav.book": "Reserve", "nav.openMenu": "Open menu",
    "mobile.intro": "Discover Mazza", "common.daily": "Open every day",
    "hero.eyebrow": "Arabic-Lebanese cuisine · Enschede", "hero.title": "Pure flavour.<br /><em>Warm hospitality.</em>", "hero.copy": "A table filled with small plates, fire from the grill and the warmth of eating together.", "hero.book": "Choose your table", "hero.menu": "Discover the menu", "hero.tonight": "Tonight at Mazza", "hero.available": "Tables are still available.", "hero.choose": "Choose exactly where you want to sit.", "hero.start": "Start reservation", "hero.locationLabel": "In the heart of Enschede", "hero.hoursLabel": "Seven days a week", "hero.arabicLabel": "Taste · share · stay",
    "story.index": "01 · The story", "story.title": "An evening that starts<br />with <em>one small plate.</em>", "story.photoCaption": "A warm world in the heart of Enschede.", "story.lead": "Mazza means to keep tasting, sharing and talking. The Arabic answer to tapas, with the hospitality of home.", "story.body": "Cold and warm mazza, fragrant spices and dishes from the grill arrive at the centre of the table. No one orders only for themselves.", "story.link": "See what comes to the table", "story.quote": "“The table is only complete when everyone joins in.”", "story.quoteBy": "— Our favourite house rule",
    "menu.index": "02 · The menu", "menu.title": "Choose small.<br /><em>Taste big.</em>", "menu.copy": "From creamy hummus to fire from the grill. Search, filter and begin building your table in your mind.", "menu.grillLabel": "From the grill", "menu.shareLabel": "Made to share", "menu.sharePrice": "from €52.95 p.p.", "menu.sweetLabel": "Sweet finale", "menu.browserLabel": "The full menu", "menu.browserTitle": "What belongs on the table?", "menu.search": "Search hummus, chicken, vegan…", "menu.vegetarian": "vegetarian", "menu.vegan": "vegan", "menu.empty": "Nothing found.", "menu.reset": "View everything", "menu.allergy": "Allergy or dietary request? Tell us — we can almost always make something delicious.", "menu.pdf": "Original menu", "menu.resultOne": "dish", "menu.resultMany": "dishes",
    "categories.all": "All", "categories.koud": "Cold mazza", "categories.warm": "Warm mazza", "categories.salade": "Salads", "categories.grill": "Grill", "categories.vis": "Fish", "categories.vega": "Vegetarian", "categories.dessert": "Dessert",
    "moments.index": "03 · The atmosphere", "moments.title": "Arabic warmth.<br /><em>A modern evening.</em>", "moments.caption1": "Warm light. A long evening.", "moments.note": "The doors open.<br />The grill heats up.<br />The table waits.", "moments.link": "Here tonight?", "moments.caption2": "Made to be shared.", "moments.caption3": "Always fresh on the table.",
    "booking.index": "04 · Reserve", "booking.title": "Your evening.<br /><em>Your table.</em>", "booking.copy": "Choose the moment, explore the room and select the place that suits your evening.", "booking.when": "When", "booking.where": "Where", "booking.who": "Who", "booking.chooseMoment": "Choose a moment", "booking.chooseTable": "Choose your table", "booking.details": "Your details", "booking.step1": "Step 1 of 3", "booking.step2": "Step 2 of 3", "booking.step3": "Step 3 of 3", "booking.whenTitle": "When will you join us?", "booking.openInfo": "Open every day from 16:00 to 22:00.", "booking.partySize": "How many guests?", "booking.largeParty": "More than 8? Give us a call", "booking.chooseDay": "Choose a day", "booking.notChosen": "Not chosen yet", "booking.chooseTime": "Choose a time", "booking.early": "Early dining", "booking.evening": "Evening", "booking.choice": "Your choice", "booking.chooseDateTime": "Choose a date and time", "booking.viewTables": "View available tables", "booking.whereTitle": "Where would you like to sit?", "booking.free": "free", "booking.best": "best match", "booking.busy": "occupied", "booking.window": "Window side", "booking.kitchen": "Open kitchen", "booking.entrance": "Entrance", "booking.tapTable": "Tap a table", "booking.tapCopy": "See its position, atmosphere and number of seats.", "booking.back": "Back", "booking.selectedPlace": "Selected place", "booking.noTable": "No table selected yet", "booking.continueTable": "Continue with this table", "booking.whoTitle": "Who should we prepare for?", "booking.demo": "Concept demo", "booking.demoInfo": "Nothing is actually sent yet", "booking.confirm": "Confirm demo", "booking.guests": "guests", "booking.guest": "guest", "booking.table": "Table", "booking.seats": "comfortable seats", "booking.selection": "Your selection", "booking.yourEvening": "Your evening at Mazza", "booking.readyTitle": "Everything is ready.<br />Only you are missing.", "booking.date": "Date", "booking.time": "Time", "booking.party": "Party", "booking.place": "Place", "booking.summaryDemo": "Concept demo — in the live version this goes straight to Mazza.", "booking.chooseAria": "Choose", "booking.occupiedAria": "Occupied", "booking.places": "seats",
    "table.area.window": "Window side", "table.area.middle": "Centre", "table.area.kitchen": "Kitchen side", "table.area.corner": "Cosy corner", "table.area.back": "Back area", "table.mood.quiet": "Quiet & bright", "table.mood.lively": "Lively", "table.mood.chef": "Chef's view", "table.mood.intimate": "Intimate", "table.mood.spacious": "Spacious & bright", "table.mood.share": "Made for sharing", "table.mood.cosy": "Cosy", "table.note.window": "Right by the window", "table.note.centre": "In the middle of the atmosphere", "table.note.kitchen": "View of the open kitchen", "table.note.two": "A place for two", "table.note.street": "Along Walstraat", "table.note.group": "Ideal for a group", "table.note.nearKitchen": "Close to the kitchen",
    "form.name": "Name", "form.namePlaceholder": "Your name", "form.phone": "Phone", "form.email": "Email", "form.emailPlaceholder": "you@example.com", "form.note": "Anything we should know?", "form.optional": "optional", "form.notePlaceholder": "Allergy, high chair or something to celebrate?", "form.privacy": "I agree to the processing of my details for this reservation.",
    "success.label": "Demo reservation complete", "success.title": "That table is<br /><em>entirely yours.</em>", "success.reference": "Reference", "success.restaurant": "Restaurant", "success.reset": "Start again", "success.copy": "{name}, this is what the confirmation for {date} at {time}, table {table}, will look like. In the live version Mazza receives this reservation directly.",
    "contact.index": "05 · See you tonight", "contact.title": "In the heart of Enschede.<br /><em>A world away.</em>", "contact.address": "Address", "contact.hours": "Opening hours", "contact.reserve": "Reservations", "contact.route": "Open directions", "contact.almost": "You are almost there.",
    "footer.tagline": "Lebanese flavours.<br />Endless hospitality.", "footer.follow": "Follow us", "footer.call": "Reserve directly", "footer.concept": "Interactive concept website",
    weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  }
};

const m = (category, name, price, nl, de, en, diet = []) => ({ category, name, price, descriptions: { nl, de, en }, diet });
const menuItems = [
  m("koud", "Hummus", 7.95, "Kikkererwten, sesampasta, citroensap en knoflook.", "Kichererbsen, Sesampaste, Zitronensaft und Knoblauch.", "Chickpeas, sesame paste, lemon juice and garlic.", ["veg", "vegan"]),
  m("koud", "Baba Ghanouj", 7.95, "Gegrilde aubergine met verse groenten.", "Gegrillte Aubergine mit frischem Gemüse.", "Grilled aubergine with fresh vegetables.", ["veg", "vegan"]),
  m("koud", "Moutabal", 7.95, "Gegrilde aubergine met romige sesampasta.", "Gegrillte Aubergine mit cremiger Sesampaste.", "Grilled aubergine with creamy sesame paste.", ["veg", "vegan"]),
  m("koud", "Mouhamara", 8.45, "Pikante peperpasta met granaatappeldressing.", "Pikante Paprikapaste mit Granatapfeldressing.", "Spicy pepper paste with pomegranate dressing.", ["veg", "vegan"]),
  m("koud", "Jalanji", 8.45, "Zes wijnbladeren gevuld met rijst en groenten.", "Sechs Weinblätter, gefüllt mit Reis und Gemüse.", "Six vine leaves filled with rice and vegetables.", ["veg", "vegan"]),
  m("koud", "Shengliesh", 8.45, "Traditionele Arabische kaas, ui, tomaat en tijm.", "Traditioneller arabischer Käse, Zwiebel, Tomate und Thymian.", "Traditional Arabic cheese, onion, tomato and thyme.", ["veg"]),
  m("koud", "Labneh", 8.45, "Romige yoghurt met fijn gesneden komkommer.", "Cremiger Joghurt mit fein geschnittener Gurke.", "Creamy yoghurt with finely sliced cucumber.", ["veg"]),
  m("koud", "Tarator Djaj", 8.45, "Kipfilet met sesampasta, knoflook en peterselie.", "Hähnchenfilet mit Sesampaste, Knoblauch und Petersilie.", "Chicken fillet with sesame paste, garlic and parsley."),
  m("koud", "Kibbeh Nayeh", 14.95, "Rauw tartaarvlees met bulgur, ui en kruiden.", "Rohes Tatar mit Bulgur, Zwiebel und Gewürzen.", "Raw tartare with bulgur, onion and spices."),
  m("koud", "Creamtoum", 6.95, "Ambachtelijke knoflooksaus met olijfolie en eieren.", "Hausgemachte Knoblauchsauce mit Olivenöl und Ei.", "Homemade garlic sauce with olive oil and eggs.", ["veg"]),
  m("koud", "Kussa Mkliyeh", 7.95, "Gefrituurde courgette, sesampasta, knoflook en granaatappel.", "Frittierte Zucchini, Sesampaste, Knoblauch und Granatapfel.", "Fried courgette, sesame paste, garlic and pomegranate.", ["veg", "vegan"]),
  m("koud", "Mazza Mix Koud", 32.95, "Vier koude mazza, samengesteld door onze kok.", "Vier kalte Mazza, vom Küchenchef zusammengestellt.", "Four cold mazza selected by our chef."),
  m("salade", "Tabouleh", 12.95, "Peterselie, tomaat, ui, munt en bulgur.", "Petersilie, Tomate, Zwiebel, Minze und Bulgur.", "Parsley, tomato, onion, mint and bulgur.", ["veg", "vegan"]),
  m("salade", "Fattoush", 12.95, "Bladgroenten, Arabisch brood en granaatappeldressing.", "Blattsalat, arabisches Brot und Granatapfeldressing.", "Leafy greens, Arabic bread and pomegranate dressing.", ["veg", "vegan"]),
  m("salade", "Halloumi", 13.95, "Bladgroenten, walnoten, komkommer, tomaat en halloumi.", "Blattsalat, Walnüsse, Gurke, Tomate und Halloumi.", "Leafy greens, walnuts, cucumber, tomato and halloumi.", ["veg"]),
  m("salade", "Armeense salade", 12.95, "Pittige salade met komkommer, tomaat en ui.", "Würziger Salat mit Gurke, Tomate und Zwiebel.", "Spicy salad with cucumber, tomato and onion.", ["veg", "vegan"]),
  m("warm", "Hummus bl’Lahme", 12.95, "Hummus met kalfshaaspuntjes.", "Hummus mit Kalbsfiletspitzen.", "Hummus with veal tenderloin pieces."),
  m("warm", "Kebbe Traboulsie", 14.95, "Bulgurpastei met lamsgehakt, ui en pijnboompitten.", "Bulgurpastete mit Lammhack, Zwiebel und Pinienkernen.", "Bulgur pastry with minced lamb, onion and pine nuts."),
  m("warm", "Falafel", 10.95, "Vier kikkererwtenballetjes met tahin.", "Vier Kichererbsenbällchen mit Tahini.", "Four chickpea fritters with tahini.", ["veg", "vegan"]),
  m("warm", "Sharhaat Djaj", 13.95, "Krokante kipfilet met huisgemaakte knoflooksaus.", "Knuspriges Hähnchenfilet mit hausgemachter Knoblauchsauce.", "Crispy chicken fillet with homemade garlic sauce."),
  m("warm", "Sambousak bl’Lahme", 10.95, "Vier filodeeghapjes met gehakt en ui.", "Vier Filoteigtaschen mit Hackfleisch und Zwiebel.", "Four filo parcels with minced meat and onion."),
  m("warm", "Rakahyk bl’Jebne", 10.95, "Vier filodeeghapjes met huisgemaakte kaas.", "Vier Filoteigtaschen mit hausgemachtem Käse.", "Four filo parcels with homemade cheese.", ["veg"]),
  m("warm", "Sambousak bl’Sabaneche", 10.95, "Vier filodeeghapjes met spinazie, ui en citroen.", "Vier Filoteigtaschen mit Spinat, Zwiebel und Zitrone.", "Four filo parcels with spinach, onion and lemon.", ["veg"]),
  m("warm", "Soujok Rolls", 10.95, "Arabisch brood met gehakt en knoflooksaus.", "Arabisches Brot mit Hackfleisch und Knoblauchsauce.", "Arabic bread with minced meat and garlic sauce."),
  m("warm", "Jebne Mashwje", 11.95, "Gegrilde Arabische witte kaas.", "Gegrillter arabischer Weißkäse.", "Grilled Arabic white cheese.", ["veg"]),
  m("warm", "Kawurma", 14.95, "Langzaam gegaard, mals rundvlees.", "Langsam gegartes, zartes Rindfleisch.", "Slow-cooked tender beef."),
  m("warm", "Djaj Rolls", 14.95, "Wrap met gegrilde kip, augurk, sla en knoflooksaus.", "Wrap mit Grillhähnchen, Gurke, Salat und Knoblauchsauce.", "Wrap with grilled chicken, pickle, lettuce and garlic sauce."),
  m("warm", "Mazza Mix Warm", 42.95, "Vier warme mazza, samengesteld door onze kok.", "Vier warme Mazza, vom Küchenchef zusammengestellt.", "Four warm mazza selected by our chef."),
  m("grill", "Jawaneh Mshwiye", 22.95, "Acht kippenvleugels met citroen en knoflook.", "Acht Hähnchenflügel mit Zitrone und Knoblauch.", "Eight chicken wings with lemon and garlic."),
  m("grill", "Ma’jwha", 27.95, "Rundergehakt gevuld met paprika, peterselie en halloumi.", "Rinderhack, gefüllt mit Paprika, Petersilie und Halloumi.", "Minced beef filled with pepper, parsley and halloumi."),
  m("grill", "Kabab", 22.95, "Gemarineerd rundergehakt aan de spies.", "Mariniertes Rinderhack am Spieß.", "Marinated minced beef skewer."),
  m("grill", "Toshca", 23.95, "Rundergehakt en Libanese kaas in gegrild brood.", "Rinderhack und libanesischer Käse in Grillbrot.", "Minced beef and Lebanese cheese in grilled bread."),
  m("grill", "Shish Tawook", 23.95, "Traditioneel gemarineerde kipfilet aan de spies.", "Traditionell mariniertes Hähnchenfilet am Spieß.", "Traditionally marinated chicken fillet skewer."),
  m("grill", "Shekaf", 29.95, "Gegrilde kalfshaas aan de spies.", "Gegrilltes Kalbsfilet am Spieß.", "Grilled veal tenderloin skewer."),
  m("grill", "Sharhaat Mtafaye", 28.95, "Diamanthaas met paprika, ui, citroen en knoflook.", "Rindfleisch mit Paprika, Zwiebel, Zitrone und Knoblauch.", "Beef with pepper, onion, lemon and garlic."),
  m("grill", "Mashawi", 35.95, "Mixed grill van kip, kalfshaas en rundergehakt.", "Mixed Grill aus Hähnchen, Kalbsfilet und Rinderhack.", "Mixed grill of chicken, veal tenderloin and minced beef."),
  m("grill", "Ryash Kharouf", 35.95, "Zes traditioneel gemarineerde lamsracks.", "Sechs traditionell marinierte Lammracks.", "Six traditionally marinated lamb racks."),
  m("grill", "Mashawi Deluxe", 39.95, "Mixed grill met kip, kalf, rundergehakt en lamsrack.", "Mixed Grill mit Hähnchen, Kalb, Rinderhack und Lammrack.", "Mixed grill with chicken, veal, minced beef and lamb rack."),
  m("vis", "L’os", 29.95, "Traditioneel gemarineerde, gegrilde zeebaars.", "Traditionell marinierter, gegrillter Wolfsbarsch.", "Traditionally marinated grilled sea bass."),
  m("vis", "Ejaj", 28.95, "Traditioneel gemarineerde, gegrilde dorade.", "Traditionell marinierte, gegrillte Dorade.", "Traditionally marinated grilled sea bream."),
  m("vis", "Karehdes", 29.95, "Garnalen met paprika, ui en kruidendressing.", "Garnelen mit Paprika, Zwiebel und Kräuterdressing.", "Prawns with pepper, onion and herb dressing."),
  m("vis", "Salmon", 29.95, "Traditioneel gemarineerde gegrilde zalmfilet.", "Traditionell mariniertes gegrilltes Lachsfilet.", "Traditionally marinated grilled salmon fillet."),
  m("vis", "Asmaak Mix", 47.95, "Drie soorten traditioneel gegrilde vis.", "Drei Sorten traditionell gegrillter Fisch.", "Three kinds of traditionally grilled fish."),
  m("vega", "Mshakale", 22.95, "Rijst met diverse verse groenten.", "Reis mit verschiedenem frischem Gemüse.", "Rice with a variety of fresh vegetables.", ["veg", "vegan"]),
  m("vega", "Falafilo", 20.95, "Falafelwrap met tahin, augurk, salade en hummus.", "Falafel-Wrap mit Tahini, Gurke, Salat und Hummus.", "Falafel wrap with tahini, pickle, salad and hummus.", ["veg", "vegan"]),
  m("dessert", "Leyali Lebnan", 11.95, "Griesmeel met pistache, suiker en slagroom.", "Grieß mit Pistazie, Zucker und Sahne.", "Semolina with pistachio, sugar and cream.", ["veg"]),
  m("dessert", "Sucse", 10.95, "Zachte chocoladekoek met een vleugje citroen.", "Weicher Schokoladenkuchen mit einem Hauch Zitrone.", "Soft chocolate cake with a hint of lemon.", ["veg"]),
  m("dessert", "Baqlawah", 12.95, "Bladerdeeg met pistache en vanille-ijs.", "Blätterteig mit Pistazie und Vanilleeis.", "Flaky pastry with pistachio and vanilla ice cream.", ["veg"]),
  m("dessert", "Gazel Albanat", 12.95, "Zoete engelharen met room, ijs en pistache.", "Süße Teigfäden mit Sahne, Eis und Pistazie.", "Sweet pastry threads with cream, ice cream and pistachio.", ["veg"]),
  m("dessert", "Bigdash", 12.95, "Huisgemaakt Arabisch ijs met pistache en mastiek.", "Hausgemachtes arabisches Eis mit Pistazie und Mastix.", "Homemade Arabic ice cream with pistachio and mastic.", ["veg"]),
  m("dessert", "Knafeh", 12.95, "Knapperig sliertjesdeeg met kaas en zoete siroop.", "Knusprige Teigfäden mit Käse und süßem Sirup.", "Crisp pastry threads with cheese and sweet syrup.", ["veg"]),
  m("dessert", "Mazza Dessert Mix", 32.95, "Vier desserts op een schaal voor twee personen.", "Vier Desserts auf einer Platte für zwei Personen.", "Four desserts on a platter for two people.", ["veg"])
];

let currentLang = ["nl", "de", "en"].includes(localStorage.getItem("mazza-language")) ? localStorage.getItem("mazza-language") : "nl";
let activeCategory = "all";
const t = (key) => copy[currentLang][key] ?? copy.nl[key] ?? key;

const menuGrid = document.querySelector("[data-menu-grid]");
const menuSearch = document.querySelector("[data-menu-search]");
const menuMeta = document.querySelector("[data-menu-result-meta]");
const menuEmpty = document.querySelector("[data-menu-empty]");
const menuFilters = [...document.querySelectorAll("[data-category]")];

function formatPrice(price) {
  return new Intl.NumberFormat(localeCodes[currentLang], { style: "currency", currency: "EUR" }).format(price);
}

function dietBadges(diets) {
  return diets.map((diet) => `<span class="diet-badge ${diet === "vegan" ? "vegan" : ""}" title="${diet === "vegan" ? t("menu.vegan") : t("menu.vegetarian")}">${diet === "vegan" ? "VN" : "V"}</span>`).join("");
}

function renderMenu() {
  const query = menuSearch.value.trim().toLocaleLowerCase(localeCodes[currentLang]);
  const filtered = menuItems.filter((item) => {
    const categoryMatch = activeCategory === "all" || item.category === activeCategory;
    return categoryMatch && `${item.name} ${item.descriptions[currentLang]}`.toLocaleLowerCase(localeCodes[currentLang]).includes(query);
  });
  menuGrid.innerHTML = filtered.map((item, index) => `<article class="menu-item" style="animation-delay:${Math.min(index, 8) * 25}ms"><div><div class="menu-item-title-row"><h3>${item.name}</h3>${dietBadges(item.diet)}</div><p>${item.descriptions[currentLang]}</p></div><span class="menu-price">${formatPrice(item.price)}</span></article>`).join("");
  menuMeta.textContent = `${filtered.length} ${filtered.length === 1 ? t("menu.resultOne") : t("menu.resultMany")}`;
  menuEmpty.hidden = filtered.length !== 0;
}

menuFilters.forEach((button) => button.addEventListener("click", () => {
  activeCategory = button.dataset.category;
  menuFilters.forEach((item) => item.classList.toggle("active", item === button));
  renderMenu();
}));
menuSearch.addEventListener("input", renderMenu);
document.querySelector("[data-reset-menu]").addEventListener("click", () => {
  activeCategory = "all";
  menuSearch.value = "";
  menuFilters.forEach((button) => button.classList.toggle("active", button.dataset.category === "all"));
  renderMenu();
});

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 40), { passive: true });

function closeMobileMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
}
menuToggle.addEventListener("click", () => {
  const open = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(open));
  mobileMenu.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
});
mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -25px" });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
document.querySelector("[data-year]").textContent = new Date().getFullYear();

const bookingState = { step: 1, guests: 2, selectedDate: null, time: null, tableId: null, viewDate: null, firstName: "" };
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
  { id: 1, seats: 2, x: 18, y: 29, area: "window", shape: "round", mood: "quiet", note: "window" },
  { id: 2, seats: 4, x: 43, y: 29, area: "middle", shape: "round", mood: "lively", note: "centre" },
  { id: 3, seats: 4, x: 70, y: 28, area: "kitchen", shape: "rect", mood: "chef", note: "kitchen", busy: true },
  { id: 4, seats: 2, x: 86, y: 48, area: "corner", shape: "round", mood: "intimate", note: "two" },
  { id: 5, seats: 4, x: 23, y: 68, area: "window", shape: "rect", mood: "spacious", note: "street" },
  { id: 6, seats: 6, x: 51, y: 68, area: "middle", shape: "rect", mood: "share", note: "group" },
  { id: 7, seats: 6, x: 76, y: 72, area: "back", shape: "rect", mood: "cosy", note: "nearKitchen", busy: true }
];

function areaName(table) { return t(`table.area.${table.area}`); }
function dateKey(date) { return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`; }
function formatLongDate(date) { return new Intl.DateTimeFormat(localeCodes[currentLang], { weekday: "long", day: "numeric", month: "long" }).format(date); }
function guestCountLabel(count) { return `${count === 8 ? "8+" : count} ${count === 1 ? t("booking.guest") : t("booking.guests")}`; }

function chairMarkup(count, radiusX = 76, radiusY = 76) {
  return Array.from({ length: count }, (_, index) => {
    const angle = -90 + (360 / count) * index;
    const radians = (angle * Math.PI) / 180;
    const left = 50 + (Math.cos(radians) * radiusX) / 2;
    const top = 50 + (Math.sin(radians) * radiusY) / 2;
    return `<i class="guest-chair" style="left:${left}%;top:${top}%;--rotation:${angle + 90}deg"></i>`;
  }).join("");
}

function renderGuestVisual() { guestVisual.innerHTML = `<div class="guest-table-shape" data-guests="${bookingState.guests}"></div>${chairMarkup(bookingState.guests)}`; }
function renderGuests() {
  guestLabel.textContent = guestCountLabel(bookingState.guests);
  guestOptions.innerHTML = Array.from({ length: 7 }, (_, index) => index + 2).map((guests) => `<button class="guest-option${bookingState.guests === guests ? " selected" : ""}" type="button" data-guests="${guests}">${guests}${guests === 8 ? "+" : ""}</button>`).join("");
  guestOptions.querySelectorAll("[data-guests]").forEach((button) => button.addEventListener("click", () => {
    bookingState.guests = Number(button.dataset.guests);
    bookingState.tableId = null;
    renderGuests(); renderGuestVisual(); updateWhenState();
  }));
}

function renderCalendar() {
  const year = bookingState.viewDate.getFullYear();
  const month = bookingState.viewDate.getMonth();
  calendarMonth.textContent = new Intl.DateTimeFormat(localeCodes[currentLang], { month: "long", year: "numeric" }).format(bookingState.viewDate);
  document.querySelectorAll("[data-weekday]").forEach((element, index) => { element.textContent = copy[currentLang].weekdays[index]; });
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
  calendarDays.querySelectorAll("[data-date]").forEach((button) => button.addEventListener("click", () => {
    const [yearPart, monthPart, dayPart] = button.dataset.date.split("-").map(Number);
    bookingState.selectedDate = new Date(yearPart, monthPart - 1, dayPart);
    bookingState.tableId = null;
    selectedDateLabel.textContent = formatLongDate(bookingState.selectedDate);
    renderCalendar(); updateWhenState();
  }));
  prevMonthButton.disabled = bookingState.viewDate <= new Date(today.getFullYear(), today.getMonth(), 1);
}
prevMonthButton.addEventListener("click", () => { bookingState.viewDate = new Date(bookingState.viewDate.getFullYear(), bookingState.viewDate.getMonth() - 1, 1); renderCalendar(); });
nextMonthButton.addEventListener("click", () => {
  const candidate = new Date(bookingState.viewDate.getFullYear(), bookingState.viewDate.getMonth() + 1, 1);
  if (candidate <= new Date(today.getFullYear(), today.getMonth() + 3, 1)) bookingState.viewDate = candidate;
  renderCalendar();
});

const earlyTimes = ["16:00", "16:30", "17:00", "17:30", "18:00"];
const lateTimes = ["18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];
function renderTimes() {
  const renderGroup = (times) => times.map((time) => `<button class="time-option${bookingState.time === time ? " selected" : ""}" type="button" data-time="${time}">${time}</button>`).join("");
  document.querySelector("[data-time-early]").innerHTML = renderGroup(earlyTimes);
  document.querySelector("[data-time-late]").innerHTML = renderGroup(lateTimes);
  document.querySelectorAll("[data-time]").forEach((button) => button.addEventListener("click", () => {
    bookingState.time = button.dataset.time;
    bookingState.tableId = null;
    selectedTimeLabel.textContent = bookingState.time;
    renderTimes(); updateWhenState();
  }));
}

function updateWhenState() {
  const complete = Boolean(bookingState.selectedDate && bookingState.time);
  toTablesButton.disabled = !complete;
  selectedDateLabel.textContent = bookingState.selectedDate ? formatLongDate(bookingState.selectedDate) : t("booking.notChosen");
  selectedTimeLabel.textContent = bookingState.time || t("booking.notChosen");
  if (complete) {
    liveChoice.textContent = `${formatLongDate(bookingState.selectedDate)} · ${bookingState.time} · ${guestCountLabel(bookingState.guests)}`;
    document.querySelector("[data-step-one-summary]").textContent = `${bookingState.selectedDate.getDate()} ${new Intl.DateTimeFormat(localeCodes[currentLang], { month: "short" }).format(bookingState.selectedDate)} · ${bookingState.time}`;
  } else {
    liveChoice.textContent = t("booking.chooseDateTime");
    document.querySelector("[data-step-one-summary]").textContent = t("booking.chooseMoment");
  }
}

function tableSeatMarkup(table) {
  return Array.from({ length: table.seats }, (_, index) => {
    const angle = -90 + (360 / table.seats) * index;
    const radians = (angle * Math.PI) / 180;
    const radiusX = table.shape === "rect" ? 44 : 36;
    const radiusY = table.shape === "rect" ? 32 : 35;
    return `<i class="seat-dot" style="left:${50 + Math.cos(radians) * radiusX}%;top:${50 + Math.sin(radians) * radiusY}%;--rotation:${angle + 90}deg"></i>`;
  }).join("");
}
function recommendedTableId() {
  return restaurantTables.filter((table) => !table.busy && table.seats >= bookingState.guests).sort((a, b) => a.seats - b.seats)[0]?.id ?? null;
}
function renderFloorPlan() {
  floorPlan.querySelectorAll(".table-node").forEach((node) => node.remove());
  const recommendedId = recommendedTableId();
  restaurantTables.forEach((table) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `table-node ${table.shape}${table.busy ? " busy" : ""}${table.id === recommendedId ? " recommended" : ""}${table.id === bookingState.tableId ? " selected" : ""}`;
    button.style.left = `${table.x}%`; button.style.top = `${table.y}%`;
    button.dataset.table = String(table.id);
    button.disabled = table.busy || table.seats < bookingState.guests;
    button.setAttribute("aria-label", `${table.busy ? t("booking.occupiedAria") : t("booking.chooseAria")} ${t("booking.table")} ${table.id}, ${table.seats} ${t("booking.places")}, ${areaName(table)}`);
    button.innerHTML = `<span class="table-top">T${table.id}</span>${tableSeatMarkup(table)}`;
    button.addEventListener("click", () => selectTable(table.id));
    floorPlan.appendChild(button);
  });
}
function selectTable(tableId) {
  bookingState.tableId = tableId;
  const table = restaurantTables.find((item) => item.id === tableId);
  const label = `${t("booking.table")} ${table.id} · ${areaName(table)}`;
  selectedTableLabel.textContent = label;
  document.querySelector("[data-step-two-summary]").textContent = label;
  toDetailsButton.disabled = false;
  tableDetail.innerHTML = `<div class="table-detail-selected"><span>${t("booking.selection")}</span><h4>${label}</h4><div class="table-preview"><div class="guest-table-shape" data-table="T${table.id}"></div>${chairMarkup(table.seats, 115, 92)}</div><div class="table-feature-list"><div><svg><use href="#i-users" /></svg>${table.seats} ${t("booking.seats")}</div><div><svg><use href="#i-spark" /></svg>${t(`table.mood.${table.mood}`)}</div><div><svg><use href="#i-pin" /></svg>${t(`table.note.${table.note}`)}</div></div></div>`;
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
  if (!table || !bookingState.selectedDate) return;
  finalSummary.innerHTML = `<span>${t("booking.yourEvening")}</span><h4>${t("booking.readyTitle")}</h4><div class="summary-row"><svg><use href="#i-calendar" /></svg><div><small>${t("booking.date")}</small><strong>${formatLongDate(bookingState.selectedDate)}</strong></div></div><div class="summary-row"><svg><use href="#i-clock" /></svg><div><small>${t("booking.time")}</small><strong>${bookingState.time}</strong></div></div><div class="summary-row"><svg><use href="#i-users" /></svg><div><small>${t("booking.party")}</small><strong>${guestCountLabel(bookingState.guests)}</strong></div></div><div class="summary-row"><svg><use href="#i-pin" /></svg><div><small>${t("booking.place")}</small><strong>${t("booking.table")} ${table.id} · ${areaName(table)}</strong></div></div><div class="summary-note">${t("booking.summaryDemo")}</div>`;
}
toTablesButton.addEventListener("click", () => setBookingScreen(2));
toDetailsButton.addEventListener("click", () => setBookingScreen(3));
document.querySelector("[data-back-when]").addEventListener("click", () => setBookingScreen(1));
document.querySelector("[data-back-tables]").addEventListener("click", () => setBookingScreen(2));
stepChips.forEach((chip) => chip.addEventListener("click", () => setBookingScreen(Number(chip.dataset.stepChip))));

function renderSuccessCopy() {
  if (!bookingState.firstName || !bookingState.selectedDate || !bookingState.tableId) return;
  document.querySelector("[data-success-copy]").textContent = t("success.copy").replace("{name}", bookingState.firstName).replace("{date}", formatLongDate(bookingState.selectedDate)).replace("{time}", bookingState.time).replace("{table}", bookingState.tableId);
}
bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!bookingForm.reportValidity()) return;
  const data = new FormData(bookingForm);
  bookingState.firstName = String(data.get("name") || t("booking.guest")).trim().split(/\s+/)[0];
  bookingScreens.forEach((screen) => screen.classList.remove("active"));
  document.querySelector(".booking-stepper").hidden = true;
  bookingSuccess.hidden = false;
  renderSuccessCopy();
  document.querySelector("[data-success-reference]").textContent = `MZ-${dateKey(bookingState.selectedDate).replaceAll("-", "").slice(2)}-${Math.floor(100 + Math.random() * 900)}`;
});
document.querySelector("[data-booking-reset]").addEventListener("click", () => {
  bookingForm.reset(); bookingSuccess.hidden = true; document.querySelector(".booking-stepper").hidden = false;
  Object.assign(bookingState, { step: 1, guests: 2, selectedDate: null, time: null, tableId: null, viewDate: new Date(today.getFullYear(), today.getMonth(), 1), firstName: "" });
  toTablesButton.disabled = true; toDetailsButton.disabled = true;
  selectedTableLabel.textContent = t("booking.noTable");
  document.querySelector("[data-step-two-summary]").textContent = t("booking.chooseTable");
  tableDetail.innerHTML = `<div class="table-detail-empty"><div class="mini-seat-icon"><i></i><span></span><i></i></div><h4>${t("booking.tapTable")}</h4><p>${t("booking.tapCopy")}</p></div>`;
  renderGuests(); renderGuestVisual(); renderCalendar(); renderTimes(); updateWhenState(); setBookingScreen(1);
});

function translatePage(lang, persist = true) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.title = lang === "nl" ? "Mazza Enschede — Libanese gastvrijheid" : lang === "de" ? "Mazza Enschede — Libanesische Gastfreundschaft" : "Mazza Enschede — Lebanese hospitality";
  document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
  document.querySelectorAll("[data-i18n-html]").forEach((element) => { element.innerHTML = t(element.dataset.i18nHtml); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => { element.setAttribute("aria-label", t(element.dataset.i18nAria)); });
  document.querySelectorAll("[data-lang]").forEach((button) => { button.classList.toggle("active", button.dataset.lang === lang); button.setAttribute("aria-pressed", String(button.dataset.lang === lang)); });
  if (persist) localStorage.setItem("mazza-language", lang);
  renderMenu(); renderGuests(); renderGuestVisual(); renderCalendar(); renderTimes(); updateWhenState();
  if (bookingState.tableId) selectTable(bookingState.tableId); else {
    selectedTableLabel.textContent = t("booking.noTable");
    document.querySelector("[data-step-two-summary]").textContent = t("booking.chooseTable");
  }
  if (bookingState.step === 2) renderFloorPlan();
  if (bookingState.step === 3) renderFinalSummary();
  renderSuccessCopy();
}
document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => translatePage(button.dataset.lang)));

renderGuests(); renderGuestVisual(); renderCalendar(); renderTimes(); updateWhenState(); setBookingScreen(1); translatePage(currentLang, false);
