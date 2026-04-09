const translations = {
  it: {
    // Nav
    'nav.philosophy': 'La nostra storia',
    'nav.spaces': 'Il locale',
    'nav.menu': 'Menu',
    'nav.desserts': 'Dolci',
    'nav.contact': 'Contatti',

    // Hero
    'hero.eyebrow': 'Artigianale · Autentica · Italiana',
    'hero.title': 'Una pizza<br><em>che vale<br>ogni morso</em>',
    'hero.desc': '48 ore di lievitazione. Farine locali non raffinate. Ingredienti a denominazione DOP. Non è fast food — è un artigianato nato da anni di ricerca e passione.',
    'hero.cta': 'Scopri il menu',
    'hero.accent': 'San Michele di Feletto, Treviso',

    // Philosophy
    'phil.eyebrow': 'Il mestiere',
    'phil.title': 'Fatta<br><em>con cura</em>',
    'phil.text': 'La nostra pizza è il risultato di anni di esperienza, studio e ricerca. Abbiamo iniziato selezionando le migliori farine locali, privilegiando quelle non raffinate e ricche di fibre. Tra tutte, ne abbiamo selezionate tre che, miscelate, danno vita a un mix unico e particolare. L\'alta idratazione, il moderato uso del sodio e le 48 ore di lievitazione ci permettono di ottenere una pizza morbida, saporita, leggera, ma soprattutto facile da digerire.',
    'phil.card1.label': 'Varietà di<br>farine locali',
    'phil.card2.label': 'Ore di<br>lievitazione',
    'phil.card3.label': '100% olio extra vergine<br>d\'oliva italiano',
    'phil.card4.label': 'Ingredienti<br>certificati DOP',

    // Spaces
    'spaces.eyebrow': 'L\'esperienza',
    'spaces.title': 'I nostri <em>spazi</em>',
    'spaces.desc': 'Che tu preferisca il calore delle nostre sale o l\'aria aperta del terrazzo, ogni angolo di Smiché è pensato per farti sentire a casa.',
    'spaces.card1.title': 'Il terrazzo al tramonto',
    'spaces.card1.desc': 'Con il calare del sole, il terrazzo si illumina — ogni tavolo un piccolo mondo a sé.',
    'spaces.card2.title': 'Il terrazzo',
    'spaces.card2.desc': 'Cielo aperto, buona compagnia e il profumo del fuoco di legna nell\'aria.',
    'spaces.card3.title': 'A tavola all\'aperto',
    'spaces.card3.desc': 'Pizza, un bicchiere di vino e la calda aria estiva — certe serate non si possono migliorare.',

    // Menu
    'menu.eyebrow': 'La nostra offerta',
    'menu.title': 'Il <em>Menu</em>',
    'menu.specialita': 'Le Specialità',
    'menu.classiche': 'Le Classiche',
    'menu.footernote': 'DISPONIBILI: mozzarella senza lattosio e impasti senza glutine.',

    // Pizza descriptions — Specialità
    'pizza.marinara.desc': 'pomodoro pelato italiano macerato a mano, origano calabrese, aglio tritato ﬁne, olio extravergine di oliva 100% italiano, basilico fresco',
    'pizza.bufala.desc': 'pomodoro pelato San Marzano Dop, mozzarella di bufala campana DOP, parmigiano reggiano, olio extravergine 100% italiano, basilico fresco',
    'pizza.veneta.desc': 'base bianca senza pomodoro, mozzarella da latte 100% italiano, provola affumicata, gocce di olio aromatizzato al tartufo, porchetta trevigiana selezione oro a ﬁne cottura',
    'pizza.saporita.desc': 'base bianca senza pomodoro, mozzarella da latte 100% italiano, gorgonzola DOP, grana padano DOP grattuggiato, prosciutto cotto alta qualità a ﬁne cottura',
    'pizza.sarda.desc': 'pomodoro pelato italiano, origano calabrese, mozzarella da latte 100% italiano, salsiccia di maiale senza conservanti aggiunti, pecorino sardo DOP grattuggiato (in cottura)',
    'pizza.bologna.desc': 'base bianca senza pomodoro, mozzarella da latte 100% italiano, mortadella IGP antica bologna, stracciatella di burrata, granella di pistacchio',
    'pizza.gricia.desc': 'base bianca senza pomodoro, mozzarella da latte 100% italiano, pecorino Romano DOP grattugiato, guanciale di Sauris, pepe nero macinato a ﬁne cottura',
    'pizza.salsicciafriarielli.desc': 'base bianca senza pomodoro, mozzarella da latte 100% italiano, friarielli*, salsiccia senza conservanti aggiunti, provola affumicata, grana padano DOP',
    'pizza.siciliana.desc': 'pomodoro pelato italiano, mozzarella di bufala campana DOP, olive della Riviera del Garda denocciolate, capperi siciliani, ﬁletti di acciughe, origano, basilico fresco',
    'pizza.parmadop.desc': 'pomodoro pelato italiano, mozzarella con latte di bufala spezzata a mano, crudo di Parma riserva DOP stagionato 24 mesi, basilico fresco',
    'pizza.tirolese.desc': 'crema di ricotta alla base, mozzarella da latte 100% italiano, formaggio brie, speck di Sauris IGP',

    // Pizza descriptions — Classiche
    'pizza.capricciosa.desc': 'salsa di pomodoro, mozzarella ﬁor di latte, prosciutto cotto alta qualità, carcioﬁ, funghi champignon trifolati',
    'pizza.diavola.desc': 'salsa di pomodoro, mozzarella ﬁor di latte, salamino piccante di Sauris',
    'pizza.cottofunghi.desc': 'salsa di pomodoro, mozzarella ﬁor di latte, prosciutto cotto alta qualità, funghi champignon trifolati',
    'pizza.viennese.desc': 'salsa di pomodoro, mozzarella ﬁor di latte, wurstel dell\’Alto Adige',
    'pizza.4formaggi.desc': 'mozzarella ﬁor di latte, gorgonzola, brie, spolverata di Grana Padano DOP',
    'pizza.bresaola.desc': 'pomodoro pelato italiano, mozzarella da latte 100% italiano, rucola, bresaola della Valtellina IGP, ricciola di Grana Padano riserva',
    'pizza.vegetariana.desc': 'pomodoro pelato italiano, mozzarella da latte 100% italiano, zucchine, peperoni, pomodorino datterino',
    'pizza.romana.desc': 'pomodoro pelato italiano, mozzarella da latte 100% italiano, ﬁletti di acciughe interi, origano calabrese',
    'pizza.parmigiana.desc': 'pomodoro pelato italiano, mozzarella da latte 100% italiano, melanzane cotte in forno a bassa temperatura, parmigiano reggiano grattuggiato in cottura, basilico fresco',

    // Desserts
    'desserts.eyebrow': 'Il finale dolce',
    'desserts.title': 'Dolci<br><em>fatti in casa</em>',
    'desserts.desc': 'Ogni dolce da Smiché è preparato in casa, con la stessa cura che mettiamo in ogni pizza. Crediamo che un pasto meriti un finale all\'altezza — qualcosa di artigianale, stagionale e genuinamente fatto in casa.',
    'dessert.mascarpone.desc': 'vellutata crema al mascarpone servita con biscottini di frolla alle mandorle',
    'dessert.3cioccolati.desc': 'bavarese ai tre cioccolati — bianco, al latte e fondente — su crumble al cacao, firma di Smiché',
    'dessert.namelaka.desc': 'namelaka di yogurt greco e cioccolato bianco con composta di frutta di stagione',
    'dessert.tiramisu.desc': 'tiramisù classico in vasetto — mascarpone, caffè espresso, savoiardi, cacao',
    'dessert.gelato.desc': 'gelato fior di latte con caramello salato fatto in casa',
    'dessert.sorbetto.desc': 'sorbetto al limone rinfrescante — con limoncello o liquirizia su richiesta*',

    // Footer
    'footer.tagline': 'Preparata con farine locali, ingredienti certificati e 48 ore di pazienza.',
    'footer.visit': 'Dove siamo',
    'footer.reservations': 'Prenotazioni',
    'footer.days1': 'Mar – Dom',
    'footer.days2': 'Sab',
    'footer.closed': 'Chiuso il lunedì',
    'footer.copyright': '© 2026 Pizzeria San Michele · Tutti i diritti riservati · San Michele di Feletto, Treviso, Italia',

    // Aria labels
    'aria.hero': 'Benvenuti alla Pizzeria San Michele',
    'aria.nav': 'Navigazione principale',
    'aria.menu.specialties': 'Pizze speciali',
    'aria.menu.classics': 'Pizze classiche',
    'aria.desserts.list': 'Dolci fatti in casa',
  },

  en: {
    // Nav
    'nav.philosophy': 'Our Story',
    'nav.spaces': 'The Place',
    'nav.menu': 'Menu',
    'nav.desserts': 'Desserts',
    'nav.contact': 'Contact',

    // Hero
    'hero.eyebrow': 'Artisanal · Authentic · Italian',
    'hero.title': 'A pizza<br><em>worth<br>every bite</em>',
    'hero.desc': '48 hours of leavening. Unrefined local flours. Ingredients with DOP designation. This is not fast food — it\'s a craft born from years of research and passion.',
    'hero.cta': 'Discover the Menu',
    'hero.accent': 'San Michele di Feletto, Treviso',

    // Philosophy
    'phil.eyebrow': 'The craft',
    'phil.title': 'Made<br><em>with intention</em>',
    'phil.text': 'Our pizza is the result of years of experience, study, and research. We started by selecting the best local flours, favoring those that are unrefined and rich in fiber. Among all, we have selected three which, mixed, give rise to a unique and particular mix. The high hydration, the moderate use of sodium, and the 48 hours of leavening allow us to obtain a soft, tasty, light pizza, but above all, easy to digest.',
    'phil.card1.label': 'Local Flour<br>Varieties',
    'phil.card2.label': 'Leavening<br>Time',
    'phil.card3.label': '100% Italian Extra<br>Virgin Olive Oil',
    'phil.card4.label': 'Certified<br>Ingredients',

    // Spaces
    'spaces.eyebrow': 'The Experience',
    'spaces.title': 'Our <em>spaces</em>',
    'spaces.desc': 'Whether you prefer the warmth of our dining rooms or the open air of the terrace, every corner of Smiché is designed to make you feel at home.',
    'spaces.card1.title': 'The Terrace at Twilight',
    'spaces.card1.desc': 'As the sun sets, the terrace glows — every table a little world of its own.',
    'spaces.card2.title': 'The Terrace',
    'spaces.card2.desc': 'Open sky, good company, and the scent of wood fire in the air.',
    'spaces.card3.title': 'Dining al Fresco',
    'spaces.card3.desc': 'Pizza, a glass of wine, and warm summer air — some evenings simply can\'t be improved.',

    // Menu
    'menu.eyebrow': 'What we serve',
    'menu.title': 'The <em>Menu</em>',
    'menu.specialita': 'Le Specialità',
    'menu.classiche': 'Le Classiche',
    'menu.footernote': 'AVAILABLE: lactose-free mozzarella and gluten-free bases.',

    // Pizza descriptions — Specialità
    'pizza.marinara.desc': 'pomodoro pelato italiano macerato a mano, origano calabrese, aglio tritato ﬁne, olio extravergine di oliva 100% italiano, basilico fresco',
    'pizza.bufala.desc': 'pomodoro pelato San Marzano Dop, mozzarella di bufala campana DOP, parmigiano reggiano, olio extravergine 100% italiano, basilico fresco',
    'pizza.veneta.desc': 'base bianca senza pomodoro, mozzarella da latte 100% italiano, provola affumicata, gocce di olio aromatizzato al tartufo, porchetta trevigiana selezione oro a ﬁne cottura',
    'pizza.saporita.desc': 'base bianca senza pomodoro, mozzarella da latte 100% italiano, gorgonzola DOP, grana padano DOP grattuggiato, prosciutto cotto alta qualità a ﬁne cottura',
    'pizza.sarda.desc': 'pomodoro pelato italiano, origano calabrese, mozzarella da latte 100% italiano, salsiccia di maiale senza conservanti aggiunti, pecorino sardo DOP grattuggiato (in cottura)',
    'pizza.bologna.desc': 'base bianca senza pomodoro, mozzarella da latte 100% italiano, mortadella IGP antica bologna, stracciatella di burrata, granella di pistacchio',
    'pizza.gricia.desc': 'base bianca senza pomodoro, mozzarella da latte 100% italiano, pecorino Romano DOP grattugiato, guanciale di Sauris, pepe nero macinato a ﬁne cottura',
    'pizza.salsicciafriarielli.desc': 'base bianca senza pomodoro, mozzarella da latte 100% italiano, friarielli*, salsiccia senza conservanti aggiunti, provola affumicata, grana padano DOP',
    'pizza.siciliana.desc': 'pomodoro pelato italiano, mozzarella di bufala campana DOP, olive della Riviera del Garda denocciolate, capperi siciliani, ﬁletti di acciughe, origano, basilico fresco',
    'pizza.parmadop.desc': 'pomodoro pelato italiano, mozzarella con latte di bufala spezzata a mano, crudo di Parma riserva DOP stagionato 24 mesi, basilico fresco',
    'pizza.tirolese.desc': 'crema di ricotta alla base, mozzarella da latte 100% italiano, formaggio brie, speck di Sauris IGP',

    // Pizza descriptions — Classiche
    'pizza.capricciosa.desc': 'tomato sauce, fior di latte mozzarella, premium cooked ham, artichokes, sautéed champignon mushrooms',
    'pizza.diavola.desc': 'tomato sauce, fior di latte mozzarella, spicy Sauris salami',
    'pizza.cottofunghi.desc': 'tomato sauce, fior di latte mozzarella, premium cooked ham, sautéed champignon mushrooms',
    'pizza.viennese.desc': 'tomato sauce, fior di latte mozzarella, South Tyrolean würstel',
    'pizza.4formaggi.desc': 'fior di latte mozzarella, Gorgonzola, Brie, a dusting of Grana Padano DOP',
    'pizza.bresaola.desc': 'Italian peeled tomatoes, mozzarella from 100% Italian milk, arugula, Valtellina bresaola IGP, curls of aged Grana Padano',
    'pizza.vegetariana.desc': 'Italian peeled tomatoes, mozzarella from 100% Italian milk, zucchini, bell peppers, datterino cherry tomatoes',
    'pizza.romana.desc': 'Italian peeled tomatoes, mozzarella from 100% Italian milk, whole anchovy fillets, Calabrian oregano',
    'pizza.parmigiana.desc': 'Italian peeled tomatoes, mozzarella from 100% Italian milk, slow-roasted eggplant, grated Parmigiano Reggiano (cooked), fresh basil',

    // Desserts
    'desserts.eyebrow': 'A sweet ending',
    'desserts.title': 'Homemade<br><em>desserts</em>',
    'desserts.desc': 'Every dessert at Smiché is made in-house, with the same care we put into every pizza. We believe a meal deserves a proper ending — something crafted, seasonal, and genuinely homemade.',
    'dessert.mascarpone.desc': 'velvety mascarpone cream served with almond shortbread biscuits',
    'dessert.3cioccolati.desc': 'white, milk and dark chocolate bavarian cream layered on a cocoa crumble — a Smiché signature',
    'dessert.namelaka.desc': 'silky Greek yoghurt and white chocolate namelaka with seasonal fruit compote',
    'dessert.tiramisu.desc': 'classic tiramisù served in a jar — mascarpone, espresso, Savoiardo biscuits, cocoa',
    'dessert.gelato.desc': 'pure Italian milk gelato with house-made salted caramel',
    'dessert.sorbetto.desc': 'refreshing lemon sorbet — with limoncello or liquorice on request*',

    // Footer
    'footer.tagline': 'Crafted with local flour, certified ingredients, and 48 hours of patience.',
    'footer.visit': 'Visit us',
    'footer.reservations': 'Reservations',
    'footer.days1': 'Tue – Sun',
    'footer.days2': 'Sat',
    'footer.closed': 'Closed on Monday',
    'footer.copyright': '© 2026 Pizzeria San Michele · All rights reserved · San Michele di Feletto, Treviso, Italy',

    // Aria labels
    'aria.hero': 'Welcome to Pizzeria San Michele',
    'aria.nav': 'Main navigation',
    'aria.menu.specialties': 'Pizza specialties',
    'aria.menu.classics': 'Classic pizzas',
    'aria.desserts.list': 'Homemade desserts',
  },

  de: {
    // Nav
    'nav.philosophy': 'Unsere Geschichte',
    'nav.spaces': 'Das Lokal',
    'nav.menu': 'Speisekarte',
    'nav.desserts': 'Nachspeisen',
    'nav.contact': 'Kontakt',

    // Hero
    'hero.eyebrow': 'Handwerklich · Authentisch · Italienisch',
    'hero.title': 'Eine Pizza,<br><em>die jeden Bissen<br>wert ist</em>',
    'hero.desc': '48 Stunden Teigführung. Unraffinierte lokale Mehle. Zutaten mit DOP-Auszeichnung. Das ist kein Fast Food — es ist ein Handwerk, geboren aus jahrelanger Forschung und Leidenschaft.',
    'hero.cta': 'Die Speisekarte entdecken',
    'hero.accent': 'San Michele di Feletto, Treviso',

    // Philosophy
    'phil.eyebrow': 'Das Handwerk',
    'phil.title': 'Mit Sorgfalt<br><em>gemacht</em>',
    'phil.text': 'Unsere Pizza ist das Ergebnis jahrelanger Erfahrung, Studium und Forschung. Wir begannen damit, die besten lokalen Mehle auszuwählen — bevorzugt unraffinierte, ballaststoffreiche Sorten. Unter allen haben wir drei ausgewählt, die zusammengemischt eine einzigartige Mischung ergeben. Die hohe Hydratation, der moderate Natriumeinsatz und die 48-stündige Teigführung ermöglichen uns eine weiche, schmackhafte, leichte und vor allem leicht verdauliche Pizza.',
    'phil.card1.label': 'Lokale<br>Mehlsorten',
    'phil.card2.label': 'Stunden<br>Teigführung',
    'phil.card3.label': '100% ital. natives<br>Olivenöl extra',
    'phil.card4.label': 'Zertifizierte<br>Zutaten',

    // Spaces
    'spaces.eyebrow': 'Das Erlebnis',
    'spaces.title': 'Unsere <em>Räume</em>',
    'spaces.desc': 'Ob Sie die Wärme unserer Gasträume oder die frische Luft der Terrasse bevorzugen — jede Ecke von Smiché ist darauf ausgerichtet, dass Sie sich wie zu Hause fühlen.',
    'spaces.card1.title': 'Die Terrasse in der Dämmerung',
    'spaces.card1.desc': 'Wenn die Sonne untergeht, leuchtet die Terrasse auf — jeder Tisch eine kleine Welt für sich.',
    'spaces.card2.title': 'Die Terrasse',
    'spaces.card2.desc': 'Offener Himmel, gute Gesellschaft und der Duft von Holzfeuer in der Luft.',
    'spaces.card3.title': 'Draußen speisen',
    'spaces.card3.desc': 'Pizza, ein Glas Wein und warme Sommerluft — manche Abende lassen sich einfach nicht verbessern.',

    // Menu
    'menu.eyebrow': 'Unser Angebot',
    'menu.title': 'Die <em>Speisekarte</em>',
    'menu.specialita': 'Le Specialità',
    'menu.classiche': 'Le Classiche',
    'menu.footernote': 'ERHÄLTLICH: laktosefreie Mozzarella und glutenfreie Teige.',

    // Pizza descriptions — Specialità
    'pizza.marinara.desc': 'Von Hand eingelegte italienische geschälte Tomaten, kalabrischer Oregano, fein gehackter Knoblauch, 100% italienisches natives Olivenöl extra, frisches Basilikum',
    'pizza.bufala.desc': 'San Marzano DOP geschälte Tomaten, Büffelmozzarella aus Kampanien DOP, Parmigiano Reggiano, 100% italienisches natives Olivenöl extra, frisches Basilikum',
    'pizza.veneta.desc': 'Weiße Basis ohne Tomate, Mozzarella aus 100% italienischer Milch, geräucherter Provola, Tropfen von Trüffelöl, Treviso-Porchetta „Selezione Oro“ nach dem Backen',
    'pizza.saporita.desc': 'Weiße Basis ohne Tomate, Mozzarella aus 100% italienischer Milch, Gorgonzola DOP, geriebener Grana Padano DOP, hochwertiger Kochschinken nach dem Backen',
    'pizza.sarda.desc': 'Italienische geschälte Tomaten, kalabrischer Oregano, Mozzarella aus 100% italienischer Milch, Schweinswurst ohne Zusatzstoffe, geriebener Pecorino Sardo DOP (mitgebacken)',
    'pizza.bologna.desc': 'Weiße Basis ohne Tomate, Mozzarella aus 100% italienischer Milch, Mortadella IGP „Antica Bologna“, Stracciatella di Burrata, gehackte Pistazien',
    'pizza.gricia.desc': 'Weiße Basis ohne Tomate, Mozzarella aus 100% italienischer Milch, geriebener Pecorino Romano DOP, Guanciale aus Sauris, schwarzer Pfeffer nach dem Backen',
    'pizza.salsicciafriarielli.desc': 'Weiße Basis ohne Tomate, Mozzarella aus 100% italienischer Milch, *friarielli*, Wurst ohne Zusatzstoffe, geräucherter Provola, Grana Padano DOP',
    'pizza.siciliana.desc': 'Italienische geschälte Tomaten, Büffelmozzarella aus Kampanien DOP, entkernte Oliven von der Gardasee-Riviera, sizilianische Kapern, Sardellenfilets, Oregano, frisches Basilikum',
    'pizza.parmadop.desc': 'Italienische geschälte Tomaten, von Hand zerteilter Mozzarella aus Büffelmilch, luftgetrockneter Parma-Schinken DOP, 24 Monate gereift, frisches Basilikum',
    'pizza.tirolese.desc': 'Ricottacreme als Basis, Mozzarella aus 100% italienischer Milch, Brie, Speck aus Sauris IGP',

    // Pizza descriptions — Classiche
    'pizza.capricciosa.desc': 'Tomatensoße, Fior di Latte-Mozzarella, hochwertiger Kochschinken, Artischocken, sautierte Champignon-Pilze',
    'pizza.diavola.desc': 'Tomatensoße, Fior di Latte-Mozzarella, scharfe Salami aus Sauris',
    'pizza.cottofunghi.desc': 'Tomatensoße, Fior di Latte-Mozzarella, hochwertiger Kochschinken, sautierte Champignon-Pilze',
    'pizza.viennese.desc': 'Tomatensoße, Fior di Latte-Mozzarella, Würstel aus Südtirol',
    'pizza.4formaggi.desc': 'Fior di Latte-Mozzarella, Gorgonzola, Brie, bestäubt mit Grana Padano DOP',
    'pizza.bresaola.desc': 'Italienische geschälte Tomaten, Mozzarella aus 100% italienischer Milch, Rucola, Bresaola aus dem Veltlin IGP, Grana Padano Riserva in Spänen',
    'pizza.vegetariana.desc': 'Italienische geschälte Tomaten, Mozzarella aus 100% italienischer Milch, Zucchini, Paprika, Datterino-Tomaten',
    'pizza.romana.desc': 'Italienische geschälte Tomaten, Mozzarella aus 100% italienischer Milch, ganze Sardellenfilets, kalabrischer Oregano',
    'pizza.parmigiana.desc': 'Italienische geschälte Tomaten, Mozzarella aus 100% italienischer Milch, bei niedriger Temperatur gebackene Auberginen, geriebener Parmigiano Reggiano (mitgebacken), frisches Basilikum',

    // Desserts
    'desserts.eyebrow': 'Der süße Abschluss',
    'desserts.title': 'Hausgemachte<br><em>Desserts</em>',
    'desserts.desc': 'Jedes Dessert bei Smiché wird im Haus zubereitet, mit der gleichen Sorgfalt wie jede Pizza. Wir glauben, dass eine Mahlzeit einen würdigen Abschluss verdient — etwas Handgefertigtes, Saisonales und wirklich Hausgemachtes.',
    'dessert.mascarpone.desc': 'samtartige Mascarponecreme mit Mandelgebäck',
    'dessert.3cioccolati.desc': 'bayerische Creme aus weißer, Milch- und dunkler Schokolade auf Kakaokrümel — eine Smiché-Spezialität',
    'dessert.namelaka.desc': 'seidige Namelaka aus griechischem Joghurt und weißer Schokolade mit Fruchtkompott der Saison',
    'dessert.tiramisu.desc': 'klassisches Tiramisù im Glas — Mascarpone, Espresso, Löffelbiskuits, Kakao',
    'dessert.gelato.desc': 'reines Fior-di-Latte-Eis mit hausgemachtem Salzkaramell',
    'dessert.sorbetto.desc': 'erfrischendes Zitronensorbet — auf Wunsch mit Limoncello oder Lakritze*',

    // Footer
    'footer.tagline': 'Zubereitet mit lokalem Mehl, zertifizierten Zutaten und 48 Stunden Geduld.',
    'footer.visit': 'Besuchen Sie uns',
    'footer.reservations': 'Reservierungen',
    'footer.days1': 'Di – So',
    'footer.days2': 'Sa',
    'footer.closed': 'Montags geschlossen',
    'footer.copyright': '© 2026 Pizzeria San Michele · Alle Rechte vorbehalten · San Michele di Feletto, Treviso, Italien',

    // Aria labels
    'aria.hero': 'Willkommen bei der Pizzeria San Michele',
    'aria.nav': 'Hauptnavigation',
    'aria.menu.specialties': 'Pizza-Spezialitäten',
    'aria.menu.classics': 'Klassische Pizzen',
    'aria.desserts.list': 'Hausgemachte Desserts',
  },
};
