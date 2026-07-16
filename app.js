const localeCodes = { nl: "nl-NL", de: "de-DE", ar: "ar-LB" };

const copy = {
  nl: {
    "nav.story": "Ons verhaal", "nav.menu": "Menukaart", "nav.atmosphere": "Sfeer", "nav.visit": "Bezoek ons", "nav.book": "Reserveer", "nav.openMenu": "Menu openen",
    "mobile.intro": "Ontdek Mazza", "common.daily": "Elke dag open",
    "hero.eyebrow": "Arabisch-Libanese keuken · Enschede", "hero.title": "Pure smaak.<br /><em>Warme gastvrijheid.</em>", "hero.copy": "Een tafel vol kleine gerechten, vuur van de grill en de warmte van samen eten.", "hero.book": "Kies je tafel", "hero.menu": "Ontdek het menu", "hero.tonight": "Vanavond bij Mazza", "hero.available": "Er zijn nog tafels beschikbaar.", "hero.choose": "Kies zelf waar je wilt zitten.", "hero.start": "Start reservering", "hero.locationLabel": "Midden in Enschede", "hero.hoursLabel": "Zeven dagen per week", "hero.arabicLabel": "Proeven · delen · blijven",
    "story.index": "01 · Het verhaal", "story.title": "Een avond die begint<br />met <em>één klein bordje.</em>", "story.photoCaption": "Een warme wereld in hartje Enschede.", "story.lead": "Mazza betekent blijven proeven, delen en praten. Het Arabische antwoord op tapas, met de gastvrijheid van thuis.", "story.body": "Koude en warme mazza, geurende kruiden en gerechten van de grill komen midden op tafel. Niemand bestelt alleen voor zichzelf.", "story.link": "Bekijk wat er op tafel komt", "story.quote": "“De tafel is pas compleet als iedereen mee-eet.”", "story.quoteBy": "— Onze favoriete huisregel",
    "menu.index": "02 · De menukaart", "menu.title": "Kies klein.<br /><em>Proef groots.</em>", "menu.copy": "Van romige hummus tot vuur van de grill. Zoek, filter en stel in gedachten je tafel alvast samen.", "menu.grillLabel": "Van de grill", "menu.warmLabel": "Warme mazza", "menu.shareLabel": "Om te delen", "menu.sharePrice": "vanaf € 52,95 p.p.", "menu.sweetLabel": "Zoete finale", "menu.browserLabel": "De hele kaart", "menu.browserTitle": "Wat mag er op tafel?", "menu.search": "Zoek hummus, kip, vegan…", "menu.vegetarian": "vegetarisch", "menu.vegan": "vegan", "menu.empty": "Niets gevonden.", "menu.reset": "Bekijk alles", "menu.allergy": "Allergie of dieetwens? Vertel het ons — bijna altijd kunnen we iets lekkers maken.", "menu.pdf": "Originele menukaart", "menu.resultOne": "gerecht", "menu.resultMany": "gerechten",
    "categories.all": "Alles", "categories.koud": "Koude mazza", "categories.warm": "Warme mazza", "categories.salade": "Salades", "categories.grill": "Grill", "categories.vis": "Vis", "categories.vega": "Vegetarisch", "categories.dessert": "Dessert",
    "video.index": "Mazza in beweging", "video.title": "Voel de avond<br /><em>voor je binnenstapt.</em>", "video.copy": "Warm licht, open vuur en een tafel die steeds voller wordt.", "video.link": "Reserveer jouw avond", "video.badge": "Echt Mazza<br />Enschede",
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
    "menu.index": "02 · Die Speisekarte", "menu.title": "Klein wählen.<br /><em>Groß genießen.</em>", "menu.copy": "Von cremigem Hummus bis zum Feuer des Grills. Suchen, filtern und den Tisch im Kopf schon zusammenstellen.", "menu.grillLabel": "Vom Grill", "menu.warmLabel": "Warme Mazza", "menu.shareLabel": "Zum Teilen", "menu.sharePrice": "ab 52,95 € p. P.", "menu.sweetLabel": "Süßes Finale", "menu.browserLabel": "Die ganze Karte", "menu.browserTitle": "Was darf auf den Tisch?", "menu.search": "Hummus, Hähnchen, vegan suchen…", "menu.vegetarian": "vegetarisch", "menu.vegan": "vegan", "menu.empty": "Nichts gefunden.", "menu.reset": "Alles anzeigen", "menu.allergy": "Allergie oder besondere Ernährung? Sagen Sie uns Bescheid — fast immer finden wir etwas Köstliches.", "menu.pdf": "Originale Speisekarte", "menu.resultOne": "Gericht", "menu.resultMany": "Gerichte",
    "categories.all": "Alles", "categories.koud": "Kalte Mazza", "categories.warm": "Warme Mazza", "categories.salade": "Salate", "categories.grill": "Grill", "categories.vis": "Fisch", "categories.vega": "Vegetarisch", "categories.dessert": "Dessert",
    "video.index": "Mazza in Bewegung", "video.title": "Den Abend spüren,<br /><em>bevor Sie eintreten.</em>", "video.copy": "Warmes Licht, offenes Feuer und ein Tisch, der immer voller wird.", "video.link": "Ihren Abend reservieren", "video.badge": "Echt Mazza<br />Enschede",
    "moments.index": "03 · Die Atmosphäre", "moments.title": "Arabische Wärme.<br /><em>Ein moderner Abend.</em>", "moments.caption1": "Warmes Licht. Langer Abend.", "moments.note": "Die Türen öffnen sich.<br />Der Grill wird heiß.<br />Der Tisch wartet.", "moments.link": "Heute Abend hier?", "moments.caption2": "Zum Teilen gemacht.", "moments.caption3": "Immer frisch auf dem Tisch.",
    "booking.index": "04 · Reservieren", "booking.title": "Ihr Abend.<br /><em>Ihr Tisch.</em>", "booking.copy": "Wählen Sie den Zeitpunkt, sehen Sie sich den Raum an und bestimmen Sie selbst den passenden Platz.", "booking.when": "Wann", "booking.where": "Wo", "booking.who": "Wer", "booking.chooseMoment": "Zeitpunkt wählen", "booking.chooseTable": "Tisch auswählen", "booking.details": "Ihre Angaben", "booking.step1": "Schritt 1 von 3", "booking.step2": "Schritt 2 von 3", "booking.step3": "Schritt 3 von 3", "booking.whenTitle": "Wann dürfen wir Sie begrüßen?", "booking.openInfo": "Täglich von 16:00 bis 22:00 Uhr geöffnet.", "booking.partySize": "Wie viele Personen?", "booking.largeParty": "Mehr als 8? Rufen Sie uns an", "booking.chooseDay": "Tag auswählen", "booking.notChosen": "Noch nicht gewählt", "booking.chooseTime": "Uhrzeit wählen", "booking.early": "Früher Abend", "booking.evening": "Abend", "booking.choice": "Ihre Auswahl", "booking.chooseDateTime": "Datum und Uhrzeit wählen", "booking.viewTables": "Verfügbare Tische ansehen", "booking.whereTitle": "Wo möchten Sie sitzen?", "booking.free": "frei", "booking.best": "beste Wahl", "booking.busy": "belegt", "booking.window": "Fensterseite", "booking.kitchen": "Offene Küche", "booking.entrance": "Eingang", "booking.tapTable": "Tisch auswählen", "booking.tapCopy": "Sehen Sie Platz, Atmosphäre und Anzahl der Sitzplätze.", "booking.back": "Zurück", "booking.selectedPlace": "Ausgewählter Platz", "booking.noTable": "Noch kein Tisch gewählt", "booking.continueTable": "Mit diesem Tisch fortfahren", "booking.whoTitle": "Für wen dürfen wir eindecken?", "booking.demo": "Konzeptdemo", "booking.demoInfo": "Es wird noch nichts wirklich versendet", "booking.confirm": "Demo bestätigen", "booking.guests": "Gäste", "booking.guest": "Gast", "booking.table": "Tisch", "booking.seats": "bequeme Sitzplätze", "booking.selection": "Ihre Auswahl", "booking.yourEvening": "Ihr Abend bei Mazza", "booking.readyTitle": "Alles ist bereit.<br />Nur Sie fehlen noch.", "booking.date": "Datum", "booking.time": "Uhrzeit", "booking.party": "Gesellschaft", "booking.place": "Platz", "booking.summaryDemo": "Konzeptdemo — in der Live-Version geht dies direkt an Mazza.", "booking.chooseAria": "Wählen", "booking.occupiedAria": "Belegt", "booking.places": "Plätze",
    "table.area.window": "Fensterseite", "table.area.middle": "Mitte", "table.area.kitchen": "Küchenseite", "table.area.corner": "Gemütliche Ecke", "table.area.back": "Hinterer Bereich", "table.mood.quiet": "Ruhig & hell", "table.mood.lively": "Lebendig", "table.mood.chef": "Blick zum Chef", "table.mood.intimate": "Intim", "table.mood.spacious": "Großzügig & hell", "table.mood.share": "Gemeinsam teilen", "table.mood.cosy": "Gemütlich", "table.note.window": "Direkt am Fenster", "table.note.centre": "Mitten im Geschehen", "table.note.kitchen": "Blick in die offene Küche", "table.note.two": "Ein Platz für zwei", "table.note.street": "An der Walstraat", "table.note.group": "Ideal für eine Gruppe", "table.note.nearKitchen": "Nah an der Küche",
    "form.name": "Name", "form.namePlaceholder": "Ihr Name", "form.phone": "Telefon", "form.email": "E-Mail", "form.emailPlaceholder": "name@beispiel.de", "form.note": "Müssen wir etwas wissen?", "form.optional": "optional", "form.notePlaceholder": "Allergie, Kinderstuhl oder etwas zu feiern?", "form.privacy": "Ich stimme der Verarbeitung meiner Daten für diese Reservierung zu.",
    "success.label": "Demo-Reservierung abgeschlossen", "success.title": "Dieser Tisch gehört<br /><em>ganz Ihnen.</em>", "success.reference": "Referenz", "success.restaurant": "Restaurant", "success.reset": "Neu beginnen", "success.copy": "{name}, so sieht die Bestätigung für {date} um {time} Uhr an Tisch {table} aus. In der Live-Version erhält Mazza diese Reservierung direkt.",
    "contact.index": "05 · Bis heute Abend", "contact.title": "Mitten in Enschede.<br /><em>Eine Welt entfernt.</em>", "contact.address": "Adresse", "contact.hours": "Öffnungszeiten", "contact.reserve": "Reservieren", "contact.route": "Route öffnen", "contact.almost": "Fast angekommen.",
    "footer.tagline": "Libanesische Aromen.<br />Grenzenlose Gastfreundschaft.", "footer.follow": "Folgen", "footer.call": "Direkt reservieren", "footer.concept": "Interaktive Konzeptwebsite",
    weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]
  },
  ar: {
    "nav.story": "قصتنا", "nav.menu": "قائمة الطعام", "nav.atmosphere": "الأجواء", "nav.visit": "زورونا", "nav.book": "احجز", "nav.openMenu": "افتح القائمة",
    "mobile.intro": "اكتشف مزّة", "common.daily": "مفتوح يومياً",
    "hero.eyebrow": "مطبخ عربي لبناني · إنسخيده", "hero.title": "نكهة أصيلة.<br /><em>ضيافة دافئة.</em>", "hero.copy": "مائدة مليئة بالأطباق الصغيرة ونار المشاوي ودفء الطعام المشترك.", "hero.book": "اختر طاولتك", "hero.menu": "اكتشف القائمة", "hero.tonight": "هذا المساء في مزّة", "hero.available": "لا تزال هناك طاولات متاحة.", "hero.choose": "اختر بنفسك المكان الذي تحب الجلوس فيه.", "hero.start": "ابدأ الحجز", "hero.locationLabel": "في قلب إنسخيده", "hero.hoursLabel": "سبعة أيام في الأسبوع", "hero.arabicLabel": "تذوّق · شارك · ابقَ",
    "story.index": "01 · الحكاية", "story.title": "أمسية تبدأ<br /><em>بطبق صغير واحد.</em>", "story.photoCaption": "عالم دافئ في قلب إنسخيده.", "story.lead": "مزّة تعني أن تواصل التذوق والمشاركة والحديث. إنها الإجابة العربية على التاباس، بضيافة البيت.", "story.body": "مزّات باردة وساخنة، توابل عطرة وأطباق مشوية تصل إلى وسط المائدة. لا أحد يطلب لنفسه وحده.", "story.link": "اكتشف ما سيصل إلى المائدة", "story.quote": "«لا تكتمل المائدة حتى يشارك الجميع.»", "story.quoteBy": "— قاعدتنا المفضلة في البيت",
    "video.index": "مزّة في حركة", "video.title": "عِش أجواء المساء<br /><em>قبل أن تدخل.</em>", "video.copy": "ضوء دافئ ونار مفتوحة ومائدة تمتلئ طبقاً بعد طبق.", "video.link": "احجز أمسيتك", "video.badge": "مزّة الحقيقي<br />إنسخيده",
    "menu.index": "02 · قائمة الطعام", "menu.title": "اختر القليل.<br /><em>وتذوّق الكثير.</em>", "menu.copy": "من الحمص الكريمي إلى نار المشاوي. ابحث وصفِّ الأطباق وابدأ بتكوين مائدتك.", "menu.grillLabel": "من المشاوي", "menu.warmLabel": "مزّة ساخنة", "menu.shareLabel": "للمشاركة", "menu.sharePrice": "ابتداءً من 52.95 € للشخص", "menu.sweetLabel": "نهاية حلوة", "menu.browserLabel": "القائمة الكاملة", "menu.browserTitle": "ماذا نضع على المائدة؟", "menu.search": "ابحث عن حمص، دجاج، نباتي…", "menu.vegetarian": "نباتي", "menu.vegan": "نباتي صرف", "menu.empty": "لم نجد شيئاً.", "menu.reset": "عرض الكل", "menu.allergy": "هل لديك حساسية أو نظام غذائي خاص؟ أخبرنا وسنجد لك طبقاً لذيذاً.", "menu.pdf": "القائمة الأصلية", "menu.resultOne": "طبق", "menu.resultMany": "طبقاً",
    "categories.all": "الكل", "categories.koud": "مزّة باردة", "categories.warm": "مزّة ساخنة", "categories.salade": "سلطات", "categories.grill": "مشاوي", "categories.vis": "سمك", "categories.vega": "نباتي", "categories.dessert": "حلويات",
    "moments.index": "03 · الأجواء", "moments.title": "دفء عربي.<br /><em>وأمسية عصرية.</em>", "moments.caption1": "ضوء دافئ. أمسية طويلة.", "moments.note": "تُفتح الأبواب.<br />تشتعل المشاوي.<br />وتنتظر المائدة.", "moments.link": "هل نراكم الليلة؟", "moments.caption2": "صُنع للمشاركة.", "moments.caption3": "طازج دائماً على المائدة.",
    "booking.index": "04 · الحجز", "booking.title": "أمسيتك.<br /><em>طاولتك.</em>", "booking.copy": "اختر الموعد، شاهد الصالة وحدد المكان الأنسب لأمسيتك.", "booking.when": "متى", "booking.where": "أين", "booking.who": "مَن", "booking.chooseMoment": "اختر الموعد", "booking.chooseTable": "اختر طاولتك", "booking.details": "بياناتك", "booking.step1": "الخطوة 1 من 3", "booking.step2": "الخطوة 2 من 3", "booking.step3": "الخطوة 3 من 3", "booking.whenTitle": "متى ستنضمون إلينا؟", "booking.openInfo": "مفتوح يومياً من 16:00 حتى 22:00.", "booking.partySize": "كم عدد الضيوف؟", "booking.largeParty": "أكثر من 8؟ اتصل بنا", "booking.chooseDay": "اختر يوماً", "booking.notChosen": "لم يتم الاختيار", "booking.chooseTime": "اختر الوقت", "booking.early": "عشاء مبكر", "booking.evening": "المساء", "booking.choice": "اختيارك", "booking.chooseDateTime": "اختر التاريخ والوقت", "booking.viewTables": "عرض الطاولات المتاحة", "booking.whereTitle": "أين تحبون الجلوس؟", "booking.free": "متاحة", "booking.best": "الخيار الأفضل", "booking.busy": "محجوزة", "booking.window": "جانب النافذة", "booking.kitchen": "المطبخ المفتوح", "booking.entrance": "المدخل", "booking.tapTable": "اختر طاولة", "booking.tapCopy": "شاهد موقعها وأجواءها وعدد المقاعد.", "booking.back": "رجوع", "booking.selectedPlace": "المكان المختار", "booking.noTable": "لم تختر طاولة بعد", "booking.continueTable": "المتابعة بهذه الطاولة", "booking.whoTitle": "لمن نجهّز المائدة؟", "booking.demo": "نسخة تجريبية", "booking.demoInfo": "لن يتم إرسال أي طلب فعلي بعد", "booking.confirm": "تأكيد التجربة", "booking.guests": "ضيوف", "booking.guest": "ضيف", "booking.table": "الطاولة", "booking.seats": "مقاعد مريحة", "booking.selection": "اختيارك", "booking.yourEvening": "أمسيتك في مزّة", "booking.readyTitle": "كل شيء جاهز.<br />لم يبقَ إلا حضوركم.", "booking.date": "التاريخ", "booking.time": "الوقت", "booking.party": "عدد الضيوف", "booking.place": "المكان", "booking.summaryDemo": "نسخة تجريبية — في النسخة الفعلية يصل الحجز مباشرة إلى مزّة.", "booking.chooseAria": "اختر", "booking.occupiedAria": "محجوزة", "booking.places": "مقاعد",
    "table.area.window": "جانب النافذة", "table.area.middle": "الوسط", "table.area.kitchen": "جانب المطبخ", "table.area.corner": "زاوية هادئة", "table.area.back": "القسم الخلفي", "table.mood.quiet": "هادئ ومضيء", "table.mood.lively": "نابض بالحياة", "table.mood.chef": "إطلالة على الشيف", "table.mood.intimate": "حميمي", "table.mood.spacious": "واسع ومضيء", "table.mood.share": "مثالي للمشاركة", "table.mood.cosy": "مريح", "table.note.window": "مباشرة عند النافذة", "table.note.centre": "في قلب الأجواء", "table.note.kitchen": "إطلالة على المطبخ المفتوح", "table.note.two": "مكان لشخصين", "table.note.street": "على شارع فالسترات", "table.note.group": "مثالي للمجموعات", "table.note.nearKitchen": "قريب من المطبخ",
    "form.name": "الاسم", "form.namePlaceholder": "اسمك", "form.phone": "الهاتف", "form.email": "البريد الإلكتروني", "form.emailPlaceholder": "name@example.com", "form.note": "هل هناك ما يجب أن نعرفه؟", "form.optional": "اختياري", "form.notePlaceholder": "حساسية، كرسي طفل أو مناسبة خاصة؟", "form.privacy": "أوافق على معالجة بياناتي من أجل هذا الحجز.",
    "success.label": "اكتمل الحجز التجريبي", "success.title": "هذه الطاولة<br /><em>لكم بالكامل.</em>", "success.reference": "المرجع", "success.restaurant": "المطعم", "success.reset": "ابدأ من جديد", "success.copy": "{name}، هكذا سيبدو تأكيد حجزكم بتاريخ {date} الساعة {time} على الطاولة {table}. في النسخة الفعلية يصل الحجز مباشرة إلى مزّة.",
    "contact.index": "05 · نراكم الليلة", "contact.title": "في قلب إنسخيده.<br /><em>وكأنكم في عالم آخر.</em>", "contact.address": "العنوان", "contact.hours": "ساعات العمل", "contact.reserve": "الحجز", "contact.route": "افتح الطريق", "contact.almost": "لقد اقتربتم.",
    "footer.tagline": "نكهات لبنانية.<br />وضيافة بلا حدود.", "footer.follow": "تابعونا", "footer.call": "احجز مباشرة", "footer.concept": "موقع تجريبي تفاعلي",
    weekdays: ["اث", "ثل", "أر", "خم", "جم", "سب", "أح"]
  }
};

const m = (category, name, price, nl, de, ar, diet = [], image = null) => ({ category, name, price, descriptions: { nl, de, ar }, diet, image });
const menuItems = [
  m("koud", "Hummus", 7.95, "Kikkererwten, sesampasta, citroensap en knoflook.", "Kichererbsen, Sesampaste, Zitronensaft und Knoblauch.", "حمص بالطحينة وعصير الليمون والثوم.", ["veg", "vegan"]),
  m("koud", "Baba Ghanouj", 7.95, "Gegrilde aubergine met verse groenten.", "Gegrillte Aubergine mit frischem Gemüse.", "باذنجان مشوي مع خضروات طازجة.", ["veg", "vegan"]),
  m("koud", "Moutabal", 7.95, "Gegrilde aubergine met romige sesampasta.", "Gegrillte Aubergine mit cremiger Sesampaste.", "باذنجان مشوي مع طحينة كريمية.", ["veg", "vegan"]),
  m("koud", "Mouhamara", 8.45, "Pikante peperpasta met granaatappeldressing.", "Pikante Paprikapaste mit Granatapfeldressing.", "معجون فلفل حار مع دبس الرمان.", ["veg", "vegan"]),
  m("koud", "Jalanji", 8.45, "Zes wijnbladeren gevuld met rijst en groenten.", "Sechs Weinblätter, gefüllt mit Reis und Gemüse.", "ست أوراق عنب محشوة بالأرز والخضار.", ["veg", "vegan"]),
  m("koud", "Shengliesh", 8.45, "Traditionele Arabische kaas, ui, tomaat en tijm.", "Traditioneller arabischer Käse, Zwiebel, Tomate und Thymian.", "جبنة عربية تقليدية مع البصل والطماطم والزعتر.", ["veg"]),
  m("koud", "Labneh", 8.45, "Romige yoghurt met fijn gesneden komkommer.", "Cremiger Joghurt mit fein geschnittener Gurke.", "لبن كريمي مع خيار مفروم ناعماً.", ["veg"]),
  m("koud", "Tarator Djaj", 8.45, "Kipfilet met sesampasta, knoflook en peterselie.", "Hähnchenfilet mit Sesampaste, Knoblauch und Petersilie.", "فيليه دجاج مع الطحينة والثوم والبقدونس."),
  m("koud", "Kibbeh Nayeh", 14.95, "Rauw tartaarvlees met bulgur, ui en kruiden.", "Rohes Tatar mit Bulgur, Zwiebel und Gewürzen.", "كبة نيئة مع البرغل والبصل والتوابل."),
  m("koud", "Creamtoum", 6.95, "Ambachtelijke knoflooksaus met olijfolie en eieren.", "Hausgemachte Knoblauchsauce mit Olivenöl und Ei.", "صلصة ثوم منزلية بزيت الزيتون والبيض.", ["veg"]),
  m("koud", "Kussa Mkliyeh", 7.95, "Gefrituurde courgette, sesampasta, knoflook en granaatappel.", "Frittierte Zucchini, Sesampaste, Knoblauch und Granatapfel.", "كوسا مقلية مع الطحينة والثوم والرمان.", ["veg", "vegan"]),
  m("koud", "Mazza Mix Koud", 32.95, "Vier koude mazza, samengesteld door onze kok.", "Vier kalte Mazza, vom Küchenchef zusammengestellt.", "أربعة أطباق مزّة باردة مختارة من الشيف."),
  m("salade", "Tabouleh", 12.95, "Peterselie, tomaat, ui, munt en bulgur.", "Petersilie, Tomate, Zwiebel, Minze und Bulgur.", "بقدونس وطماطم وبصل ونعناع وبرغل.", ["veg", "vegan"]),
  m("salade", "Fattoush", 12.95, "Bladgroenten, Arabisch brood en granaatappeldressing.", "Blattsalat, arabisches Brot und Granatapfeldressing.", "خضار ورقية وخبز عربي ودبس الرمان.", ["veg", "vegan"]),
  m("salade", "Halloumi", 13.95, "Bladgroenten, walnoten, komkommer, tomaat en halloumi.", "Blattsalat, Walnüsse, Gurke, Tomate und Halloumi.", "خضار ورقية وجوز وخيار وطماطم وحلوم.", ["veg"]),
  m("salade", "Armeense salade", 12.95, "Pittige salade met komkommer, tomaat en ui.", "Würziger Salat mit Gurke, Tomate und Zwiebel.", "سلطة حارة مع الخيار والطماطم والبصل.", ["veg", "vegan"]),
  m("warm", "Hummus bl’Lahme", 12.95, "Hummus met kalfshaaspuntjes.", "Hummus mit Kalbsfiletspitzen.", "حمص مع قطع فيليه العجل."),
  m("warm", "Kebbe Traboulsie", 14.95, "Bulgurpastei met lamsgehakt, ui en pijnboompitten.", "Bulgurpastete mit Lammhack, Zwiebel und Pinienkernen.", "كبة بالبرغل ولحم الغنم والبصل والصنوبر."),
  m("warm", "Falafel", 10.95, "Vier kikkererwtenballetjes met tahin.", "Vier Kichererbsenbällchen mit Tahini.", "أربع حبات فلافل من الحمص مع الطحينة.", ["veg", "vegan"], "assets/falafel-plate.webp"),
  m("warm", "Sharhaat Djaj", 13.95, "Krokante kipfilet met huisgemaakte knoflooksaus.", "Knuspriges Hähnchenfilet mit hausgemachter Knoblauchsauce.", "فيليه دجاج مقرمش مع صلصة الثوم المنزلية."),
  m("warm", "Sambousak bl’Lahme", 10.95, "Vier filodeeghapjes met gehakt en ui.", "Vier Filoteigtaschen mit Hackfleisch und Zwiebel.", "أربع سمبوسك محشوة باللحم والبصل."),
  m("warm", "Rakahyk bl’Jebne", 10.95, "Vier filodeeghapjes met huisgemaakte kaas.", "Vier Filoteigtaschen mit hausgemachtem Käse.", "أربع رقائق محشوة بالجبنة المنزلية.", ["veg"]),
  m("warm", "Sambousak bl’Sabaneche", 10.95, "Vier filodeeghapjes met spinazie, ui en citroen.", "Vier Filoteigtaschen mit Spinat, Zwiebel und Zitrone.", "أربع سمبوسك بالسبانخ والبصل والليمون.", ["veg"]),
  m("warm", "Soujok Rolls", 10.95, "Arabisch brood met gehakt en knoflooksaus.", "Arabisches Brot mit Hackfleisch und Knoblauchsauce.", "خبز عربي محشو باللحم وصلصة الثوم."),
  m("warm", "Jebne Mashwje", 11.95, "Gegrilde Arabische witte kaas.", "Gegrillter arabischer Weißkäse.", "جبنة عربية بيضاء مشوية.", ["veg"]),
  m("warm", "Kawurma", 14.95, "Langzaam gegaard, mals rundvlees.", "Langsam gegartes, zartes Rindfleisch.", "لحم بقري طري مطهو ببطء."),
  m("warm", "Djaj Rolls", 14.95, "Wrap met gegrilde kip, augurk, sla en knoflooksaus.", "Wrap mit Grillhähnchen, Gurke, Salat und Knoblauchsauce.", "لفافة دجاج مشوي مع مخلل وخس وصلصة الثوم."),
  m("warm", "Mazza Mix Warm", 42.95, "Vier warme mazza, samengesteld door onze kok.", "Vier warme Mazza, vom Küchenchef zusammengestellt.", "أربعة أطباق مزّة ساخنة مختارة من الشيف."),
  m("grill", "Jawaneh Mshwiye", 22.95, "Acht kippenvleugels met citroen en knoflook.", "Acht Hähnchenflügel mit Zitrone und Knoblauch.", "ثمانية أجنحة دجاج مع الليمون والثوم."),
  m("grill", "Ma’jwha", 27.95, "Rundergehakt gevuld met paprika, peterselie en halloumi.", "Rinderhack, gefüllt mit Paprika, Petersilie und Halloumi.", "لحم بقري مفروم محشو بالفلفل والبقدونس والحلوم."),
  m("grill", "Kabab", 22.95, "Gemarineerd rundergehakt aan de spies.", "Mariniertes Rinderhack am Spieß.", "سيخ لحم بقري مفروم ومتبل."),
  m("grill", "Toshca", 23.95, "Rundergehakt en Libanese kaas in gegrild brood.", "Rinderhack und libanesischer Käse in Grillbrot.", "لحم بقري مفروم وجبنة لبنانية في خبز مشوي."),
  m("grill", "Shish Tawook", 23.95, "Traditioneel gemarineerde kipfilet aan de spies.", "Traditionell mariniertes Hähnchenfilet am Spieß.", "شيش طاووق متبل على الطريقة التقليدية."),
  m("grill", "Shekaf", 29.95, "Gegrilde kalfshaas aan de spies.", "Gegrilltes Kalbsfilet am Spieß.", "سيخ فيليه عجل مشوي."),
  m("grill", "Sharhaat Mtafaye", 28.95, "Diamanthaas met paprika, ui, citroen en knoflook.", "Rindfleisch mit Paprika, Zwiebel, Zitrone und Knoblauch.", "لحم بقري مع الفلفل والبصل والليمون والثوم."),
  m("grill", "Mashawi", 35.95, "Mixed grill van kip, kalfshaas en rundergehakt.", "Mixed Grill aus Hähnchen, Kalbsfilet und Rinderhack.", "مشاوي مشكلة من الدجاج وفيليه العجل والكباب."),
  m("grill", "Ryash Kharouf", 35.95, "Zes traditioneel gemarineerde lamsracks.", "Sechs traditionell marinierte Lammracks.", "ست قطع ريش غنم متبلة تقليدياً."),
  m("grill", "Mashawi Deluxe", 39.95, "Mixed grill met kip, kalf, rundergehakt en lamsrack.", "Mixed Grill mit Hähnchen, Kalb, Rinderhack und Lammrack.", "مشاوي فاخرة من الدجاج والعجل والكباب وريش الغنم."),
  m("vis", "L’os", 29.95, "Traditioneel gemarineerde, gegrilde zeebaars.", "Traditionell marinierter, gegrillter Wolfsbarsch.", "سمك قاروص مشوي ومتبل على الطريقة التقليدية."),
  m("vis", "Ejaj", 28.95, "Traditioneel gemarineerde, gegrilde dorade.", "Traditionell marinierte, gegrillte Dorade.", "سمك دورادا مشوي ومتبل على الطريقة التقليدية."),
  m("vis", "Karehdes", 29.95, "Garnalen met paprika, ui en kruidendressing.", "Garnelen mit Paprika, Zwiebel und Kräuterdressing.", "روبيان مع الفلفل والبصل وصلصة الأعشاب."),
  m("vis", "Salmon", 29.95, "Traditioneel gemarineerde gegrilde zalmfilet.", "Traditionell mariniertes gegrilltes Lachsfilet.", "فيليه سلمون مشوي ومتبل تقليدياً."),
  m("vis", "Asmaak Mix", 47.95, "Drie soorten traditioneel gegrilde vis.", "Drei Sorten traditionell gegrillter Fisch.", "ثلاثة أنواع من السمك المشوي على الطريقة التقليدية."),
  m("vega", "Mshakale", 22.95, "Rijst met diverse verse groenten.", "Reis mit verschiedenem frischem Gemüse.", "أرز مع تشكيلة من الخضار الطازجة.", ["veg", "vegan"]),
  m("vega", "Falafilo", 20.95, "Falafelwrap met tahin, augurk, salade en hummus.", "Falafel-Wrap mit Tahini, Gurke, Salat und Hummus.", "لفافة فلافل مع الطحينة والمخلل والسلطة والحمص.", ["veg", "vegan"]),
  m("dessert", "Leyali Lebnan", 11.95, "Griesmeel met pistache, suiker en slagroom.", "Grieß mit Pistazie, Zucker und Sahne.", "سميد مع الفستق والسكر والقشطة.", ["veg"]),
  m("dessert", "Sucse", 10.95, "Zachte chocoladekoek met een vleugje citroen.", "Weicher Schokoladenkuchen mit einem Hauch Zitrone.", "كيكة شوكولاتة طرية بلمسة من الليمون.", ["veg"]),
  m("dessert", "Baqlawah", 12.95, "Bladerdeeg met pistache en vanille-ijs.", "Blätterteig mit Pistazie und Vanilleeis.", "بقلاوة بالفستق مع آيس كريم الفانيليا.", ["veg"]),
  m("dessert", "Gazel Albanat", 12.95, "Zoete engelharen met room, ijs en pistache.", "Süße Teigfäden mit Sahne, Eis und Pistazie.", "شعيرات حلوة مع القشطة والآيس كريم والفستق.", ["veg"]),
  m("dessert", "Bigdash", 12.95, "Huisgemaakt Arabisch ijs met pistache en mastiek.", "Hausgemachtes arabisches Eis mit Pistazie und Mastix.", "بوظة عربية منزلية بالفستق والمستكة.", ["veg"]),
  m("dessert", "Knafeh", 12.95, "Knapperig sliertjesdeeg met kaas en zoete siroop.", "Knusprige Teigfäden mit Käse und süßem Sirup.", "كنافة مقرمشة بالجبنة والقطر الحلو.", ["veg"]),
  m("dessert", "Mazza Dessert Mix", 32.95, "Vier desserts op een schaal voor twee personen.", "Vier Desserts auf einer Platte für zwei Personen.", "أربعة أنواع من الحلويات على طبق لشخصين.", ["veg"])
];

let currentLang = ["nl", "de", "ar"].includes(localStorage.getItem("mazza-language")) ? localStorage.getItem("mazza-language") : "nl";
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
  menuGrid.innerHTML = filtered.map((item, index) => `<article class="menu-item${item.image ? " has-photo" : ""}" style="animation-delay:${Math.min(index, 8) * 25}ms">${item.image ? `<img class="menu-item-thumb" src="${item.image}" alt="${item.name}" loading="lazy" />` : ""}<div><div class="menu-item-title-row"><h3>${item.name}</h3>${dietBadges(item.diet)}</div><p>${item.descriptions[currentLang]}</p></div><span class="menu-price">${formatPrice(item.price)}</span></article>`).join("");
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
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = lang === "nl" ? "Mazza Enschede — Libanese gastvrijheid" : lang === "de" ? "Mazza Enschede — Libanesische Gastfreundschaft" : "مزّة إنسخيده — ضيافة لبنانية";
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
