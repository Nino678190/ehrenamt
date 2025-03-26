//Messe 21.5  14:00 bis 15:10

document.addEventListener("DOMContentLoaded", function(){
    const id = localStorage.getItem("questionId");
    const header = document.querySelector("header");
    header.innerHTML =`
        <a href="index.html">
            <img src="images/logo.png" alt="Logo" class='logo'>
        </a>
        <nav>
            <ul class="nav-links">
                <li><a href="index.html">Umfrage</a></li>
                <li><a href="info.html">Informationen</a></li>
            </ul>
        </nav>
    `
    if (window.location.pathname == "/index.html"){
        if (id == null){
            startFragen();
            localStorage.setItem("questionId", 0);
        } else {
            if (id == questions.length){
                endFragen();
            } else {
                addQuestionToUser();
            }
        }
    }
});

//Kategorien:
//- Mit Kindern/Jugend -> kind
//- Mit Erwachsenen -> erwachsen
//- Sport -> sport
//- Rettung -> rettung
//- Hilfsorganisation ->hilfsorga
//- Gemeinschaftlich -> gemeinschaft

//Fragen immer Skala mit 4 Stufen: Ja, Eher Ja, Eher Nein, Nein

//Vorlage:
// {
//     frage: "",

//     kind: 0,
//     erwachsen: 0,
//     sport: 0,
//     rettung: 0,
//     hilfsorga: 0,
//     gemeinschaft: 0,

//     kind1: 0,
//     erwachsen1: 0,
//     sport1: 0,
//     rettung1: 0,
//     hilfsorga1: 0,
//     gemeinschaft1: 0,

//     kind2: 0,
//     erwachsen2: 0,
//     sport2: 0,
//     rettung2: 0,
//     hilfsorga2: 0,
//     gemeinschaft2: 0
// },

const questions = [
    {
        frage: "Magst du Sport?",

        kind: -0.5,
        erwachsen: 0.5,
        sport: -1,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0.5,

        kind1: 0,
        erwachsen1: 0,
        sport1: -0.5,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

        kind2: 0,
        erwachsen2: 0,
        sport2: 0,
        rettung2: 0,
        hilfsorga2: 0,
        gemeinschaft2: 0,

        kind3: 0.5,
        erwachsen3: 0,
        sport3: 0.5,
        rettung3: 0.5,
        hilfsorga3: 0,
        gemeinschaft3: 0,
        
        kind4: 0.5,
        erwachsen4: 0,
        sport4: 1,
        rettung4: 1,
        hilfsorga4: 0,
        gemeinschaft4: 0
    },
    {
        frage: "Benutzt du gerne deinen Kopf?",

        kind: 0,
        erwachsen: -0.5,
        sport: 0,
        rettung: 0,
        hilfsorga: -0.5,
        gemeinschaft: -0.5,

        kind1: 0,
        erwachsen1: -0.25,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: -0.25,
        gemeinschaft1: 0,

        kind2: 0,
        erwachsen2: 0,
        sport2: 0,
        rettung2: 0,
        hilfsorga2: 0,
        gemeinschaft2: 0,

        kind3: 0,
        erwachsen3: 0.5,
        sport3: 0,
        rettung3: 0,
        hilfsorga3: 0.5,
        gemeinschaft3: 0,
        
        kind4: 0,
        erwachsen4: 0.5,
        sport4: 0,
        rettung4: 0,
        hilfsorga4: 0.5,
        gemeinschaft4: 0.5
    },
    {
        frage: "Machst du gerne außerschulische Aktivitäten?",
    
        kind: -1,
        erwachsen: -1,
        sport: -1,
        rettung: -1,
        hilfsorga: -1,
        gemeinschaft: -1,

        kind1: -0.5,
        erwachsen1: -0.5,
        sport1: -0.5,
        rettung1: -0.5,
        hilfsorga1: -0.5,
        gemeinschaft1: -0.5,

        kind2: 0,
        erwachsen2: 0,
        sport2: 0,
        rettung2: 0,
        hilfsorga2: 0,
        gemeinschaft2: 0,

        kind3: 0.5,
        erwachsen3: 0.5,
        sport3: 0.5,
        rettung3: 0.5,
        hilfsorga3: 0.5,
        gemeinschaft3: 0.5,
        
        kind4: 1,
        erwachsen4: 1,
        sport4: 1,
        rettung4: 1,
        hilfsorga4: 1,
        gemeinschaft4: 1
    },
    {
        frage: "Setzt du dich gerne für das Gute ein?",

        kind: -0.5,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: -1,
        gemeinschaft: -1,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: -0.5,
        gemeinschaft1: -0.5,

        kind2: 0,
        erwachsen2: 0,
        sport2: 0,
        rettung2: 0,
        hilfsorga2: 0,
        gemeinschaft2: 0,

        kind3: 0,
        erwachsen3: 0,
        sport3: 0,
        rettung3: 0,
        hilfsorga3: 0.5,
        gemeinschaft3: 0.5,
        
        kind4: 0,
        erwachsen4: 0,
        sport4: 0,
        rettung4: 0,
        hilfsorga4: 1,
        gemeinschaft4: 1
    },
    {
        frage: "Behälst du in stressigen Situationen den Überblick?",
        
        kind: -1,
        erwachsen: 0,
        sport: 0,
        rettung: -1,
        hilfsorga: -1,
        gemeinschaft: -1,

        kind1: -0.5,
        erwachsen1: 0,
        sport1: 0,
        rettung1: -0.5,
        hilfsorga1: -0.5,
        gemeinschaft1: -0.5,

        kind2: 0,
        erwachsen2: 0,
        sport2: 0,
        rettung2: 0,
        hilfsorga2: 0,
        gemeinschaft2: 0,

        kind3: 0.5,
        erwachsen3: 0,
        sport3: 0,
        rettung3: 0.5,
        hilfsorga3: 0.5,
        gemeinschaft3: 0.5,
        
        kind4: 1,
        erwachsen4: 0,
        sport4: 0,
        rettung4: 1,
        hilfsorga4: 1,
        gemeinschaft4: 1
    },
    {
        frage: "Bist du ein emphatischer Mensch?",

        kind: -1,
        erwachsen: -1,
        sport: 0,
        rettung: -1,
        hilfsorga: -1,
        gemeinschaft: -1,

        kind1: -0.5,
        erwachsen1: -0.5,
        sport1: 0,
        rettung1: -0.5,
        hilfsorga1: -0.5,
        gemeinschaft1: -0.5,

        kind2: 0,
        erwachsen2: 0,
        sport2: 0,
        rettung2: 0,
        hilfsorga2: 0,
        gemeinschaft2: 0,

        kind3: 0.5,
        erwachsen3: 0.5,
        sport3: 0,
        rettung3: 0.5,
        hilfsorga3: 0.5,
        gemeinschaft3: 0.5,
        
        kind4: 1,
        erwachsen4: 1,
        sport4: 0,
        rettung4: 1,
        hilfsorga4: 1,
        gemeinschaft4: 1
    },
    {
        frage: "Übernimmt du gerne Verantwortung?",
        
        kind: -1,
        erwachsen: 0,
        sport: -0.5,
        rettung: -1,
        hilfsorga: -1,
        gemeinschaft: -1,

        kind1: -0.5,
        erwachsen1: 0,
        sport1: 0,
        rettung1: -0.5,
        hilfsorga1: -0.5,
        gemeinschaft1: -0.5,

        kind2: 0,
        erwachsen2: 0,
        sport2: 0,
        rettung2: 0,
        hilfsorga2: 0,
        gemeinschaft2: 0,

        kind3: 0.5,
        erwachsen3: 0,
        sport3: 0,
        rettung3: 0.5,
        hilfsorga3: 0.5,
        gemeinschaft3: 0.5,
        
        kind4: 1,
        erwachsen4: 0,
        sport4: 0,
        rettung4: 1,
        hilfsorga4: 1,
        gemeinschaft4: 1
    },
    {
        frage: "Würdest du gerne Selbstbewusst sein?",
        
        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: -1,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: -0.5,

        kind2: 0,
        erwachsen2: 0,
        sport2: 0,
        rettung2: 0,
        hilfsorga2: 0,
        gemeinschaft2: 0,

        kind3: 0,
        erwachsen3: 0,
        sport3: 0,
        rettung3: 0,
        hilfsorga3: 0,
        gemeinschaft3: 0.5,
        
        kind4: 0,
        erwachsen4: 0,
        sport4: 0,
        rettung4: 0,
        hilfsorga4: 0,
        gemeinschaft4: 1
    },
    {
        frage: "Möchtest du lernen mit Konflikten um zu gehen?",
        
        kind: -1,
        erwachsen: -1,
        sport: -1,
        rettung: -1,
        hilfsorga: -1,
        gemeinschaft: -1,

        kind1: -0.5,
        erwachsen1: -0.5,
        sport1: -0.5,
        rettung1: -0.5,
        hilfsorga1: -0.5,
        gemeinschaft1: -0.5,

        kind2: 0,
        erwachsen2: 0,
        sport2: 0,
        rettung2: 0,
        hilfsorga2: 0,
        gemeinschaft2: 0,

        kind3: 0.5,
        erwachsen3: 0.5,
        sport3: 0.5,
        rettung3: 0.5,
        hilfsorga3: 0.5,
        gemeinschaft3: 0.5,

        kind4: 1,
        erwachsen4: 1,
        sport4: 1,
        rettung4: 1,
        hilfsorga4: 1,
        gemeinschaft4: 1
    },
    {
        frage: "Möchtest du lernen ein Team anzuleiten?",

        kind: -1,
        erwachsen: 0,
        sport: 0,
        rettung: -1,
        hilfsorga: -1,
        gemeinschaft: -1,

        kind1: -0.5,
        erwachsen1: 0,
        sport1: 0,
        rettung1: -0.5,
        hilfsorga1: -0.5,
        gemeinschaft1: -0.5,

        kind2: 0,
        erwachsen2: 0,
        sport2: 0,
        rettung2: 0,
        hilfsorga2: 0,
        gemeinschaft2: 0,

        kind3: 0.5,
        erwachsen3: 0,
        sport3: 0,
        rettung3: 0.5,
        hilfsorga3: 0.5,
        gemeinschaft3: 0.5,
        
        kind4: 1,
        erwachsen4: 0,
        sport4: 0,
        rettung4: 1,
        hilfsorga4: 1,
        gemeinschaft4: 1
    },
    {
        frage: "Möchtest du lernen Probleme zu lösen?",
        
        kind: -1,
        erwachsen: 0,
        sport: 0,
        rettung: -1,
        hilfsorga: -1,
        gemeinschaft: -1,

        kind1: -0.5,
        erwachsen1: 0,
        sport1: 0,
        rettung1: -0.5,
        hilfsorga1: -0.5,
        gemeinschaft1: -0.5,

        kind2: 0,
        erwachsen2: 0,
        sport2: 0,
        rettung2: 0,
        hilfsorga2: 0,
        gemeinschaft2: 0,

        kind3: 0.5,
        erwachsen3: 0,
        sport3: 0,
        rettung3: 0.5,
        hilfsorga3: 0.5,
        gemeinschaft3: 0.5,
        
        kind4: 1,
        erwachsen4: 0,
        sport4: 0,
        rettung4: 1,
        hilfsorga4: 1,
        gemeinschaft4: 1
    },
    {
        frage: "Hast du viel Freizeit?",

        kind: -1,
        erwachsen: -1,
        sport: -1,
        rettung: -1,
        hilfsorga: -1,
        gemeinschaft: -1,

        kind1: -0.5,
        erwachsen1: -0.5,
        sport1: -0.5,
        rettung1: -0.5,
        hilfsorga1: -0.5,
        gemeinschaft1: -0.5,

        kind2: 0,
        erwachsen2: 0,
        sport2: 0,
        rettung2: 0,
        hilfsorga2: 0,
        gemeinschaft2: 0,

        kind3: 0.5,
        erwachsen3: 0.5,
        sport3: 0.5,
        rettung3: 0.5,
        hilfsorga3: 0.5,
        gemeinschaft3: 0.5,
        
        kind4: 1,
        erwachsen4: 1,
        sport4: 1,
        rettung4: 1,
        hilfsorga4: 1,
        gemeinschaft4: 1
    },
    {
        frage: "Wärst du bereit, viel Zeit aufzugeben?",

        kind: -1,
        erwachsen: -1,
        sport: -1,
        rettung: -1,
        hilfsorga: -1,
        gemeinschaft: -1,

        kind1: -0.5,
        erwachsen1: -0.5,
        sport1: -0.5,
        rettung1: -0.5,
        hilfsorga1: -0.5,
        gemeinschaft1: -0.5,

        kind2: 0,
        erwachsen2: 0,
        sport2: 0,
        rettung2: 0,
        hilfsorga2: 0,
        gemeinschaft2: 0,

        kind3: 0.5,
        erwachsen3: 0.5,
        sport3: 0.5,
        rettung3: 0.5,
        hilfsorga3: 0.5,
        gemeinschaft3: 0.5,
        
        kind4: 1,
        erwachsen4: 1,
        sport4: 1,
        rettung4: 1,
        hilfsorga4: 1,
        gemeinschaft4: 1
    }
]

//Vorlage:
// {
//     organisation: "",
//     beschreibung: "",
//     bild: "",
//     gruendung: "",
//     mitglieder: "",
//     webseite: "",
//     telefon: "",
//     email: "",
//     addresse: "",
//     ortsverbaendeAnzahl: 0,
//     kategorie: "",
//     skillsLernen: [],
//     skillsMitbringen: [],

//     kind: 0,
//     erwachsen: 0,
//     sport: 0,
//     rettung: 0,
//     hilfsorga: 0,
//     gemeinschaft: 0
// }

const ergebnisse = [
    {
        organisation: "Die Tafel",
        beschreibung: "Soziale Einrichtung, welche Menschen mit Lebensmitteln versorgt",
        bild: "images/tafel.jpg",
        gruendung: "1993",
        mitglieder: "92.000",
        webseite: "https://berliner-tafel.de",
        telefon: "0307827414",
        email: "ber.ta@berliner-tafel.de",
        addresse: "",
        ortsverbaendeAnzahl: 49,
        kategorie: "Hilfsorganisation",
        skillsLernen: ["Lernen sich zu organisieren"],
        skillsMitbringen: [],

        kind: 2,
        erwachsen: 9,
        sport: 0,
        rettung: 3,
        hilfsorga: 14,
        gemeinschaft: 8
    },
    {
        organisation: "BdP",
        beschreibung: "Soziales Engegement bei Pfadfinder und fördert Gemeinschaft",
        bild: "images/pp.jpeg",
        gruendung: "1948",
        mitglieder: "80.000",
        webseite: "https://pfadfinden.de",
        telefon: "0567399584",
        email: "bbb@pfadfinder.de",
        addresse: "Kesselhaken 23, 34376 Immenhausen",
        ortsverbaendeAnzahl: 13,
        kategorie: "Gemeinschaft",
        skillsLernen: ["Lernen Verantwortung zu übernehmen"],
        skillsMitbringen: [],

        kind: 13,
        erwachsen: 7,
        sport: 4,
        rettung: 0,
        hilfsorga: 2,
        gemeinschaft: 14
    },
    {
        organisation: "DRK",
        beschreibung: "Das DRK ist eine Hilfsorganisation, welche sich für Menschen in Not einsetzt. Das DRK bietet viele verschiedene Dienste an, wie z.B. Rettungsdienst, Katastrophenschutz, Erste-Hilfe-Kurse und soziale Dienste.",
        bild: "images/drk.jpg",
        gruendung: "25. Januar 1921",
        mitglieder: "3.000.000 Deutschland",
        webseite: "https://drk-berlin.de",
        telefon: "030600300",
        email: "service@drk-berlin.de",
        addresse: "",
        ortsverbaendeAnzahl: 0,
        kategorie: "Rettung",
        skillsLernen: [],
        skillsMitbringen: [],

        kind: 7,
        erwachsen: 7,
        sport: 0,
        rettung: 14,
        hilfsorga: 10,
        gemeinschaft: 6
    },
    {
        organisation: "THW",
        beschreibung: "Das Technische Hilfswerk, kurz THW, ist eine Zivilschutzbehörde, die sich auf technisch-humanitäre Hilfeleistungen im Zivil- und Katastrophenschutz spezialisiert.",
        bild: "images/thw.jpg",
        gruendung: "22. August 1950",
        mitglieder: "88.000",
        webseite: "https://thw.de",
        telefon: "0307755051",
        email: "mitmachen@thw-steglitz.de",
        addresse: "Gallwitzallee 123, 12249 Berlin",
        ortsverbaendeAnzahl: 0,
        kategorie: "Hilfsorganisation",
        skillsLernen: [
            "Technische Fertigkeiten",
            "Fahrzeug- und Gerätebedienung",
            "Erste Hilfe",
            "Bau- und Befestigungstechniken",
            "Rettungstechniken",
            "Orientierung und Navigation",
            "Katastrophenmanagement"
        ],
        skillsMitbringen: [
            "Technisches Interesse",
            "Handwerkliches Geschick",
            "Team- und Kommunikationsfähigkeit",
            "Belastbarkeit",
            "Körperliche Fitness",
            "Zuverlässigkeit"
        ],

        kind: 3,
        erwachsen: 10,
        sport: 14,
        rettung: 12,
        hilfsorga: 14,
        gemeinschaft: 13
    }, 
    {
        organisation: "FFW",
        beschreibung: "Die Freiwillige Feuerwehr ist eine öffentliche Feuerwehr, die sich hauptsächlich aus ehrenamtlichen Mitgliedern zusammensetzt. Zu ihren Aufgaben gehört unter anderem Brandbekämpfung, technische Hilfeleistung und Bürgerschutz.",
        bild: "images/ff.jpeg",
        gruendung: "1. Feburuar 1851",
        mitglieder: "1600",
        webseite: "https://berliner-feuerwehr.de/ueber-uns/freiwillige-feuerwehr",
        telefon: "0303874100131",
        email: "ffzehlendorf@berliner-feuerwehr.de",
        addresse: "Charlottenburger Str. 10-12, 14169 Berlin",
        ortsverbaendeAnzahl: 59,
        kategorie: "Rettung",
        skillsLernen: [
            "Brandbekämpfung und Löschtechniken",
            "Rettung von Personen",
            "Fahrzeug- und Geräteeinsatz",
            "Arbeiten mit Atemschutz",
            "Gefahrenabwehr und technische Hilfeleistung",
            "Kommunikations- und Teamarbeit"
        ],
        skillsMitbringen: [
            "Körperliche Fitness",
            "Team- und Kommunikationsfähigkeit",
            "Belastbarkeit und Stressresistenz",
            "Technisches Interesse",
            "Handwerkliches Geschick",
            "Zuverlässigkeit",
            "Einsatzbereitschaft"
        ],

        kind: 7,
        erwachsen: 10,
        sport: 14,
        rettung: 14,
        hilfsorga: 10,
        gemeinschaft: 13
    }, 
    {
        organisation: "OKFN",
        beschreibung: "Die Open-Knowledge-Foundation setzt sich für offenes Wissen und demokratische Teilhabe ein. Dafür entwickeln Sie Technologien und Instrumente, mit dem Ziel die Zivilgesellschaft zu stärken.",
        bild: "images/jh.jpg",
        gruendung: "2011",
        mitglieder: "46",
        webseite: "https://okfn.de",
        telefon: "03097894230",
        email: "info@okfn.de",
        addresse: "Singerstr. 109, Berlin",
        ortsverbaendeAnzahl: 0,
        kategorie: "Gemeinschaft",
        skillsLernen: ["Teamarbeit"],
        skillsMitbringen: [],

        kind: 3,
        erwachsen: 14,
        sport: 0,
        rettung: 0,
        hilfsorga: 8,
        gemeinschaft: 14
    }, 
    {
        organisation: "DLRG",
        beschreibung: "Die Deutsche Lebens-Rettungs-Gesellschaft bildet Kinder, Jugendliche und Erwachsene im schwimmen aus. Diese Schwimmausbildung wird von ehrenamtlichen Helfern übernommen. Zudem betreibt die DLRG einen Großteil der Wasserrettungsstationen in Deutschland. Die DLRG bildet dafür auch Rettungsschwimmer aus, welche ehrenamtlich dort arbeiten.",
        bild: "images/dlrg.jpeg",
        gruendung: "19. Oktober 1931",
        mitglieder: "1.900.000",
        webseite: "https://dlrg.de",
        telefon: "030362095-0",
        email: "",
        addresse: "Am Pichelssee 20, 13595 Berlin",
        ortsverbaendeAnzahl: 16,
        kategorie: "Rettung",
        skillsLernen: ["Schwimmen", "Gemeinschaft", "Teamarbeit"],
        skillsMitbringen: [],

        kind: 12,
        erwachsen: 9,
        sport: 13,
        rettung: 14,
        hilfsorga: 7,
        gemeinschaft: 12
    }, 
    {
        organisation: "Tierheim Berlin",
        beschreibung: "Mit einer Fläche von 16 Hektar ist das Tierheim Berlin so groß wie 22 Fußballfelder. Es gibt vier große Katzenhäuser, sechs große Hundehäuser, ein Kleintierhaus, ein Vogelhaus sowie ein großes Gehege für freilebende Katzen.",
        bild: "",
        gruendung: "22. Juni 1901",
        mitglieder: "15.000",
        webseite: "https://tierschutz-berlin.de",
        telefon: "03076888100",
        email: "tierheim@tierschutz-berlin.de",
        addresse: "Hausvaterweg 39, 13057 Berlin",
        ortsverbaendeAnzahl: 0,
        kategorie: "Hilfsorganisation",
        skillsLernen: [],
        skillsMitbringen: [],

        kind: 3,
        erwachsen: 12,
        sport: 5,
        rettung: 10,
        hilfsorga: 14,
        gemeinschaft: 8
    }, 
    {
        organisation: "Bahnhofsmission",
        beschreibung: "Die Bahnhofsmission ist eine ehrenamtliche Organisation, welche an Bahnhöfen alle Menschen unterstützt und auch Schutzbedürftigen Schutz bieten. Zudem unterstützen Sie Menschen in jeder Lebenslage.",
        bild: "images/bahnhofsmission.jpeg",
        gruendung: "1910",
        mitglieder: "2.400",
        webseite: "https://berliner-stadtmission.de/bahnhofsmission",
        telefon: "0303138088",
        email: "berlin-zoo@bahnhofsmission.de",
        addresse: "Jebensstr. 5, 10623 Berlin",
        ortsverbaendeAnzahl: 100,
        kategorie: "Hilfsorganisation",
        skillsLernen: ["Fachliche Skills", "soziale Kompetenzen"],
        skillsMitbringen: [],

        kind: 4,
        erwachsen: 10,
        sport: 0,
        rettung: 2,
        hilfsorga: 14,
        gemeinschaft: 10
    }, 
    {
        organisation: "Malteser",
        beschreibung: "Die Malteser sind eine katholische Hilfsorganisation, welche sich für Menschen in Not einsetzt. Die Malteser bieten viele verschiedene Dienste an, wie z.B. Rettungsdienst, Katastrophenschutz, Erste-Hilfe-Kurse und soziale Dienste.",
        bild: "images/malteser.jpg",
        gruendung: "1953",
        mitglieder: "99.000",
        webseite: "https://malteser.de",
        telefon: "0303480030",
        email: "info.berlin@malteser.org",
        addresse: "Alt-Lietzow 33, 10587 Berlin",
        ortsverbaendeAnzahl: 0,
        kategorie: "Rettung",
        skillsLernen: ["Stresssituationen bewältigen", "Erste Hilfe", "Teamarbeit"],
        skillsMitbringen: [],

        kind: 3,
        erwachsen: 14,
        sport: 5,
        rettung: 14,
        hilfsorga: 10,
        gemeinschaft: 10
    }, 
    {
        organisation: "Kältebus",
        beschreibung: "Der Kältebus ist ein mobiles Hilfsangebot für obdachlose Menschen in Berlin. Der Kältebus fährt in den Wintermonaten durch Berlin und versorgt obdachlose Menschen mit warmen Getränken, Decken und Kleidung. Zudem bietet der Kältebus auch Gespräche und Hilfe an.",
        bild: "images/kaeltebus.jpeg",
        gruendung: "1994",
        mitglieder: "5+",
        webseite: "https://berliner-stadtmission.de/kaeltehilfe",
        telefon: "0306903330",
        email: "info@berliner-stadtmission.de",
        addresse: "Lehrter Straße 68, 10557 Berlin",
        ortsverbaendeAnzahl: 0,
        kategorie: "Rettung",
        skillsLernen: ["Umgang mit Menschen", "Teamarbeit", "Kommunikation"],
        skillsMitbringen: [],

        kind: 0,
        erwachsen: 10,
        sport: 0,
        rettung: 14,
        hilfsorga: 13,
        gemeinschaft: 9
    }, 
    {
        organisation: "Tierhilfe Hof Samtschnute",
        beschreibung: "Es ist nicht nur ein Tier. Es ist ein Herz, das schlägt, eine Seele, die fühlt und ein Leben das Leben will",
        bild: "images/tt.jpg",
        gruendung: "2017",
        mitglieder: "3",
        webseite: "https://tierhilfehofsamtschnute.de/",
        telefon: "015124885424",
        email: "tierhilfe-hof-samtschnute@gmx.de",
        addresse: "Steindorf 3, 14827 Wiesenburg",
        ortsverbaendeAnzahl: 0,
        kategorie: "rettung",
        skillsLernen: ["Verantwortung übernehmen", 'Mit Tieren umgehen'],
        skillsMitbringen: [],

        kind: 0,
        erwachsen: 10,
        sport: 0,
        rettung: 14,
        hilfsorga: 13,
        gemeinschaft: 9
    },
]

function addQuestionToUser(){
    let id = localStorage.getItem("questionId");
    if (id == null){
        localStorage.setItem("v", 0);
        id = 0;
    }
    if (id == questions.length){
        endFragen();
        return;
    }
    const question = questions[id];
    const container = document.getElementById("question-container");
    container.innerHTML = "";
    container.innerHTML = `
        <section class="question">
            <h2>${question.frage}</h2>
        </section>
        <section class="answer">
            <p>Gar nicht</p>
            <input type="range" name="answer" value="0.5" min="0" max="1" step="0.25" id="answer">
            <p>Sehr</p>
        </section>
        <section class="buttons">
            <!--- <button onclick="back()">Zurück</button> --->
            <button onclick="calculate()">Weiter</button>
        </section>
        <section>
            <p>${localStorage.getItem("questionId")}/${questions.length}</p>
        </section>
    `
}

function back(){
    const questionId = localStorage.getItem("questionId");
    const newQuestionId = parseInt(questionId) - 1;
    localStorage.setItem("questionId", newQuestionId);
    if (newQuestionId === 0 || newQuestionId === -1){
        localStorage.clear();
        startFragen();
    } else {
        const id = parseInt(localStorage.getItem("questionId")) - 1;
        addQuestionToUser(id);
        localStorage.setItem("questionId", id);
    }
}

function calculate() {
    const answer = parseFloat(document.getElementById('answer').value);
    const id = localStorage.getItem("questionId");
    const question = questions[id];

    const categories = ["kind", "erwachsen", "sport", "rettung", "hilfsorga", "gemeinschaft"];
    const answerSuffix = answer === 0 ? "" : answer === 0.25 ? "1" : answer === 0.5 ? "2" : answer === 0.75 ? "3" : "4";

    categories.forEach(category => {
        const currentValue = parseFloat(localStorage.getItem(category)) || 0;
        const questionValue = question[category + answerSuffix];
        localStorage.setItem(category, currentValue + questionValue);
    });

    const container = document.getElementById("question-container");
    container.innerHTML = "";
    if (parseInt(id) + 1 === questions.length) {
        endFragen();
    } else {
        const nextId = parseInt(id) + 1;
        localStorage.setItem("questionId", nextId);
        addQuestionToUser(nextId);
    }
}

function resetQuiz(){
    localStorage.clear();

    localStorage.setItem("questionId", 0);
    localStorage.setItem("kind", 0);
    localStorage.setItem("erwachsen", 0);
    localStorage.setItem("sport", 0);
    localStorage.setItem("rettung", 0);
    localStorage.setItem("hilfsorga", 0);
    localStorage.setItem("gemeinschaft", 0);
    startFragen()
}

function startFragen(){
    const main = document.querySelector("main");
    main.innerHTML = "";
    const container = document.createElement("section");
    container.id = "question-container";
    main.appendChild(container);
    container.innerHTML = "";
    if (localStorage.getItem("questionId") === -1 ){
        localStorage.clear();
    }
    if (localStorage.getItem("questionId") != null ){
        addQuestionToUser();
        return;
    }
    localStorage.clear();

    localStorage.setItem("questionId", 0);
    localStorage.setItem("kind", 0);    
    localStorage.setItem("erwachsen", 0);
    localStorage.setItem("sport", 0);
    localStorage.setItem("rettung", 0);
    localStorage.setItem("hilfsorga", 0);
    localStorage.setItem("gemeinschaft", 0);

    container.innerHTML = `
        <h2>Willkommen bei der Umfrage!</h2>
        <p>Beantworte die folgenden Fragen um ein passendes Ehrenamt zu erhalten.</p>
        <button onclick="addQuestionToUser(0)">Start</button>
    `
}

function endFragen() {
    const kind = localStorage.getItem("kind");
    const erwachsen = localStorage.getItem("erwachsen");
    const sport = localStorage.getItem("sport");
    const rettung = localStorage.getItem("rettung");
    const hilfsorga = localStorage.getItem("hilfsorga");
    const gemeinschaft = localStorage.getItem("gemeinschaft");

    const container = document.createElement('section');

    let ergebnis = ergebnisse.map((org, index) => {
        let matches = {
            kind: Math.abs(kind - org.kind),
            erwachsen: Math.abs(erwachsen - org.erwachsen),
            sport: Math.abs(sport - org.sport),
            rettung: Math.abs(rettung - org.rettung),
            hilfsorga: Math.abs(hilfsorga - org.hilfsorga),
            gemeinschaft: Math.abs(gemeinschaft - org.gemeinschaft)
        };
        if (matches.kind < 0){
            matches.kind = 0;
        }
        if (matches.erwachsen < 0){
            matches.erwachsen = 0;
        }
        if (matches.sport < 0){
            matches.sport = 0;
        }
        if (matches.rettung < 0){
            matches.rettung = 0;
        }
        if (matches.hilfsorga < 0){
            matches.hilfsorga = 0;
        }
        if (matches.gemeinschaft < 0){
            matches.gemeinschaft = 0;
        }

        return {
            organisation: org,
            uebereinstimmung: Object.values(matches).reduce((a, b) => a + b, 0),
            index
        };
    }).sort((a, b) => a.uebereinstimmung - b.uebereinstimmung);

    let prozente = {
        kind: Math.round(kind / 9.5 * 100),
        erwachsen: Math.round(erwachsen / 5.5 * 100),
        sport: Math.round(sport / 5 * 100),
        rettung: Math.round(rettung / 10 * 100),
        hilfsorga: Math.round(hilfsorga / 10.5 * 100),
        gemeinschaft: Math.round(gemeinschaft / 11.5 * 100)
    };

    prozente.kind = Math.min(100, Math.max(0, prozente.kind));
    prozente.erwachsen = Math.min(100, Math.max(0, prozente.erwachsen));
    prozente.sport = Math.min(100, Math.max(0, prozente.sport));
    prozente.rettung = Math.min(100, Math.max(0, prozente.rettung));
    prozente.hilfsorga = Math.min(100, Math.max(0, prozente.hilfsorga));
    prozente.gemeinschaft = Math.min(100, Math.max(0, prozente.gemeinschaft));

    container.innerHTML = `
        <h2>Dein passendes Ehrenamt</h2>
        <section>
            <h4>${prozente.kind}% Mit Kindern/Jugendlichen</h4>
            <h4>${prozente.erwachsen}% Mit Erwachsenen</h4>
            <h4>${prozente.sport}% Sportlich</h4>
            <h4>${prozente.rettung}% In der Rettung</h4>
            <h4>${prozente.hilfsorga}% In einer Hilfsorganisation</h4>
            <h4>${prozente.gemeinschaft}% Gemeinschaftlich</h4>
        </section>
    `;

    ergebnis.forEach(({ organisation: org, uebereinstimmung, index }) => {
        const inhalt = document.createElement("section");
        inhalt.classList.add("ergebnis");

        inhalt.innerHTML = `
            <section>
                <h2>${org.organisation}</h2>
                <a href="${org.webseite}">&#127760;</a>
            </section>
            <section>
                <h4>Die Organisation deckt sich zu ${Math.round(100 - (uebereinstimmung / 3))}% mit deinen Angaben</h4>
            </section>
            <section>
                <p>${org.beschreibung}</p>
            </section>
        `;

        inhalt.addEventListener("click", () => {
            window.location.href = `orga.html?id=${index}`;
        });

        container.appendChild(inhalt);
    });

    const body = document.querySelector("main");
    body.innerHTML = '';
    body.appendChild(container);
}

function calcWidth(){
    const windowWidth = window.innerHeight;
    if (windowWidth < 479){
        return 1;
    }
    if (windowWidth < 767){
        return 2;
    }
    if (windowWidth < 1023){
        return 3;
    }
    if (windowWidth < 1279){
        return 4;
    }
    return 5;
}

function calculateSize(){
    const image = document.querySelector(".orgaBild");
    const width = calcWidth();
    image.style.height = width * 100 + 50 + "px !important";
}

function showOrga() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id || id < 0 || id >= ergebnisse.length || isNaN(id)) {
        console.error("Invalid organization ID");
        return;
    }

    const org = ergebnisse[id];
    const container = document.getElementById("orga-container-solo");

    if (!container) {
        console.error("Container element not found");
        return;
    }

    let html = `
        <img src="${org.bild}" alt="Bild der ${org.organisation}" class="orgaBild">
        <h2>${org.organisation}</h2>
        <section class="OrgaKontakt">
    `;

    if (org.email) {
        html += `<a href="mailto:${org.email}"><img src="images/icons8-mail-100(1).png" alt="Email"></a>`;
    }

    if (org.telefon) {
        html += `<a href="tel:${org.telefon}"><img src="images/icons8-phone-100.png" alt="Anrufen"></a>`;
    }

    if (org.webseite) {
        html += `<a href="${org.webseite}" target="_blank" rel="noopener noreferrer"><img src="images/icons8-external-link-100.png" alt="Webseite"></a>`;
    }

    html += `
        </section>
        <section class="OrgaFakten">
            <p>Adresse: ${org.addresse}</p>
            <h3>Fakten</h3>
            <p>Gründung: ${org.gruendung}</p><br>
            <p>Mitgliederzahl: ${org.mitglieder}</p><br>
            <p>Anzahl der Ortsverbände: ${org.ortsverbaendeAnzahl}</p><br>
            <p>Kategorie: ${org.kategorie}</p><br>
        </section>
        <section class="OrgaBeschreibung">
            <h3>Beschreibung</h3>
            <p>${org.beschreibung}</p>
        </section>
        <section class="OrgaSkills">
            <h3>Skills die man lernen kann</h3>
            <ul>
                ${org.skillsLernen && org.skillsLernen.length > 0
            ? org.skillsLernen.map(skill => `<li>${skill}</li>`).join('')
            : '<li>Keine Skills</li>'}
            </ul>
            <h3>Skills mitbringen</h3>
            <ul>
                ${org.skillsMitbringen && org.skillsMitbringen.length > 0
            ? org.skillsMitbringen.map(skill => `<li>${skill}</li>`).join('')
            : '<li>Keine Skills</li>'}
            </ul>
        </section>
        <footer>
            <p>Icons from <a href="https://icons8.com">Icons8</a></p>
        </footer>
    `;

    container.innerHTML = html;
    try {
        calculateSize();
    } catch (error) {
        console.error("Error calculating size:", error);
    }
}

function allOrga() {
    const container = document.getElementById("orga-container");
    if (!container) {
        console.error("Container element not found");
        return;
    }
    container.innerHTML = '';
    ergebnisse.forEach((org, index) => {
        const inhalt = document.createElement("section");
        inhalt.classList.add("ergebnis");

        inhalt.innerHTML = `
            <section class="orgaHead">
                <h2>${org.organisation}</h2>
            </section>
            <section>
                <p>${org.beschreibung}</p>
            </section>
        `;

        inhalt.addEventListener("click", () => {
            window.location.href = `orga.html?id=${index}`;
        });

        container.appendChild(inhalt);
    });
}
