//Messe 21.5  14:00 bis 15:10

document.addEventListener("DOMContentLoaded", function(){
    const id = localStorage.getItem("questionId");
    const header = document.querySelector("header");
    header.innerHTML =`
        <img src="logo.png" alt="Logo">
        <nav>
            <ul>
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
        frage: "",

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0,

        kind3: 0,
        erwachsen3: 0,
        sport3: 0,
        rettung3: 0,
        hilfsorga3: 0,
        gemeinschaft3: 0
    },
    {
        frage: "",

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",
    
        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",
        
        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",
        
        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",
        
        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",
        
        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",
        
        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",
        
        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",
        
        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",
        
        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",
        
        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
    {
        frage: "",
        
        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0,

        kind1: 0,
        erwachsen1: 0,
        sport1: 0,
        rettung1: 0,
        hilfsorga1: 0,
        gemeinschaft1: 0,

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
        gemeinschaft3: 0
    },
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
        bild: "",
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

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0
    },
    {
        organisation: "BdP",
        beschreibung: "Soziales Engement bei Pfadfinder und fördert Gemeinschaft",
        bild: "",
        gruendung: "1948",
        mitglieder: "80.000",
        webseite: "https://pfadfinder.de",
        telefon: "",
        email: "bbb@pfadfinder.de",
        addresse: "13",
        ortsverbaendeAnzahl: 0,
        kategorie: "Gemeinschaft",
        skillsLernen: ["Lernen Verantwortung zu übernehmen"],
        skillsMitbringen: [],

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0
    },
    {
        organisation: "DRK",
        beschreibung: "",
        bild: "",
        gruendung: "",
        mitglieder: "3.000.000 Deutschland",
        webseite: "https://drk-berlin.de",
        telefon: "030600300",
        email: "service@drk-berlin.de",
        addresse: "",
        ortsverbaendeAnzahl: 0,
        kategorie: "Rettung",
        skillsLernen: [],
        skillsMitbringen: [],

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0
    },
    {
        organisation: "THW",
        beschreibung: "Das Technische Hilfswerk, kurz THW, ist eine Zivilschutzbehörde, die sich auf technisch-humanitäre Hilfeleistungen im Zivil- und Katastrophenschutz spezialisiert.",
        bild: "",
        gruendung: "22. August 1950",
        mitglieder: "88.000",
        webseite: "https://thw.de",
        telefon: "0307755051",
        email: "mitmachen@thw-steglitz.de",
        addresse: "",
        ortsverbaendeAnzahl: 0,
        kategorie: "",
        skillsLernen: [],
        skillsMitbringen: [],

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0
    }, 
    {
        organisation: "FFW",
        beschreibung: "",
        bild: "",
        gruendung: "",
        mitglieder: "",
        webseite: "",
        telefon: "",
        email: "",
        addresse: "",
        ortsverbaendeAnzahl: 0,
        kategorie: "",
        skillsLernen: [],
        skillsMitbringen: [],

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0
    }, 
    {
        organisation: "OKFN",
        beschreibung: "",
        bild: "",
        gruendung: "",
        mitglieder: "",
        webseite: "",
        telefon: "",
        email: "",
        addresse: "",
        ortsverbaendeAnzahl: 0,
        kategorie: "",
        skillsLernen: [],
        skillsMitbringen: [],

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0
    }, 
    {
        organisation: "DLRG",
        beschreibung: "",
        bild: "",
        gruendung: "",
        mitglieder: "",
        webseite: "",
        telefon: "",
        email: "",
        addresse: "",
        ortsverbaendeAnzahl: 0,
        kategorie: "",
        skillsLernen: [],
        skillsMitbringen: [],

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0
    }, 
    {
        organisation: "Tierheim Berlin",
        beschreibung: "",
        bild: "",
        gruendung: "",
        mitglieder: "",
        webseite: "",
        telefon: "",
        email: "",
        addresse: "",
        ortsverbaendeAnzahl: 0,
        kategorie: "",
        skillsLernen: [],
        skillsMitbringen: [],

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0
    }, 
    {
        organisation: "Bahnhofsmission",
        beschreibung: "",
        bild: "",
        gruendung: "",
        mitglieder: "",
        webseite: "",
        telefon: "",
        email: "",
        addresse: "",
        ortsverbaendeAnzahl: 0,
        kategorie: "",
        skillsLernen: [],
        skillsMitbringen: [],

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0
    }, 
    {
        organisation: "Malteser",
        beschreibung: "",
        bild: "",
        gruendung: "",
        mitglieder: "",
        webseite: "",
        telefon: "",
        email: "",
        addresse: "",
        ortsverbaendeAnzahl: 0,
        kategorie: "",
        skillsLernen: [],
        skillsMitbringen: [],

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0
    }, 
    {
        organisation: "Kältebus",
        beschreibung: "",
        bild: "",
        gruendung: "",
        mitglieder: "",
        webseite: "",
        telefon: "",
        email: "",
        addresse: "",
        ortsverbaendeAnzahl: 0,
        kategorie: "",
        skillsLernen: [],
        skillsMitbringen: [],

        kind: 0,
        erwachsen: 0,
        sport: 0,
        rettung: 0,
        hilfsorga: 0,
        gemeinschaft: 0
    }, 
]

function addQuestionToUser(){
    const id = localStorage.getItem("questionId");
    const question = questions[id];
    const container = document.getElementById("question-container");
    container.innerHTML = "";
    container.innerHTML = `
        <section class="question">
            <h2>${question.frage}</h2>
            <p>${localStorage.getItem("questionId")}/${questions.length}</p>
        </section>
        <input type="range" name="answer" value="0.5" min="0" max="1" step="0.25" id="answer"><br>
        <section class="buttons">
            <button onclick="back()">Zurück</button>
            <button onclick="calculate()">Weiter</button>
        </section>
    `
}

function back(){
    if (localStorage.getItem("questionId") - 1 == 0){
        startFragen();
    } else {
        const id = parseInt(localStorage.getItem("questionId")) - 1;
        addQuestionToUser(id);
        localStorage.setItem("questionId", id);
    }
}

function calculate() {
    const answer = parseFloat(document.querySelector('input[name="answer"]:checked').value);
    const id = localStorage.getItem("questionId");
    const question = questions[id];

    const categories = ["kind", "erwachsen", "sport", "rettung", "hilfsorga", "gemeinschaft"];
    const answerSuffix = answer === 0 ? "" : answer === 0.25 ? "1" : answer === 0.5 ? "2" : "3";

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
        addQuestionToUser(nextId);
        localStorage.setItem("questionId", nextId);
    }
}

function startFragen(){
    const container = document.getElementById("question-container");
    container.innerHTML = "";
    localStorage.clear();
    container.innerHTML = `
        <h2>Willkommen bei der Umfrage!</h2>
        <p>Beantworte die folgenden Fragen um ein passendes Ehrenamt zu erhalten.</p>
        <button onclick="addQuestionToUser(0)">Start</button>
    `
}

function endFragen(){
    const container = document.getElementById("question-container");
    container.innerHTML = `
        <h2>Vielen Dank für die Teilnahme!</h2>
        <p>Dein passendes Ehrenamt ist <a href="ergebnis.html">Hier</a></p>
        <button onclick="startFragen()">Neue Umfrage</button>
    `
}

function showErgebnis(){
    const kind = localStorage.getItem("kind");
    const erwachsen = localStorage.getItem("erwachsen");
    const sport = localStorage.getItem("sport");
    const rettung = localStorage.getItem("rettung");
    const hilfsorga = localStorage.getItem("hilfsorga");
    const gemeinschaft = localStorage.getItem("gemeinschaft");

    const container = document.getElementById("ergebnis-container");
    let ergebnis = [];
    for (let i = 0; i < ergebnisse.length; i++) {
        const org = ergebnisse[i];
        const match1 = Math.abs(kind - org.kind);
        const match2 = Math.abs(erwachsen - org.erwachsen);
        const match3 = Math.abs(sport - org.sport);
        const match4 = Math.abs(rettung - org.rettung);
        const match5 = Math.abs(hilfsorga - org.hilfsorga);
        const match6 = Math.abs(gemeinschaft - org.gemeinschaft);
        const totalMatch = match1 + match2 + match3 + match4 + match5 + match6;
    
        ergebnis.push({
            organisation: org,
            uebereinstimmung: totalMatch,
            match1: match1,
            match2: match2,
            match3: match3,
            match4: match4,
            match5: match5,
            match6: match6
        });
    }
    ergebnis.sort((a, b) => a.uebereinstimmung - b.uebereinstimmung);
    container.innerHTML = "";
    container.innerHTML = `
        <h2>Dein passendes Ehrenamt</h2>
        <section>
            <h4>${ergebnis[0].match1}% Mit Kindern/Jugendlichen</h4>
            <h4>${ergebnis[0].match2}% Mit Erwachsenen</h4>
            <h4>${ergebnis[0].match3}% Sportlich</h4>
            <h4>${ergebnis[0].match4}% In der Rettung</h4>
            <h4>${ergebnis[0].match5}% In einer Hilfsorganisation</h4>
            <h4>${ergebnis[0].match6}% Gemeinschaftlich</h4>
        </section>
    `
    for (let i = 0; i < ergebnis.length; i++) {
        const inhalt = document.createElement("section");
        inhalt.classList.add("ergebnis");
        inhalt.innerHTML = `
            <section>
            <h2>${ergebnis[i].organisation.organisation}</h2>
            <a href="${ergebnis[i].organisation.webseite}">&#127760;</a>
            </section>
            <section>
            <h4>Die Organisation deckt sich zu ${Math.round(100 - (ergebnis[i].uebereinstimmung / 3))}% mit deinen Angaben</h4>
            </section>
            <section>
            <p>${ergebnis[i].organisation.beschreibung}</p>
            </section>
        `
        inhalt.addEventListener("click", function(){
            window.location.href = "orga.html?id=" + i;
        });
        container.innerHTML += inhalt
    }    
}

function showOrga(){
    const id = window.location.search.split("=")[1];
    const org = ergebnisse[id];
    const container = document.getElementById("orga-container");
    container.innerHTML = `
        <img src="${org.bild}" alt="Bild der ${org.organisation}">
        <h2>${org.organisation}</h2>
        <section class="OrgaKontakt">
            <a href="mailto:${org.email}">Mail</a>
            <a href="tel:${org.telefon}">Anrufen</a>
            <a href="${org.webseite}" target="_blank">Webseite</a>
            <p>Adresse: ${org.addresse}</p>
        </section>
        <section class="OrgaFakten<">
            <h3>Fakten</h3>
            <p>Gründung: ${org.gruendung}</p><br>
            <p>Mitgliederzahl: ${org.mitglieder}</p><br>
            <p>Anzahl der Ortsverbände${org.ortsverbaendeAnzahl}</p><br>
            <p>Kategorie: ${org.kategorie}</p><br>
        </section>
        <section class="OrgaBeschreibung">
            <h3>Beschreibung</h3>
            <p>${org.beschreibung}</p>
        </section>
    `
}

function allOrga(){
    const container = document.getElementById("orga-container");
    const organisation = ergebnisse;
    for (let i = 0; i < organisation.length; i++) {
        const inhalt = document.createElement("section");
        inhalt.classList.add("ergebnis");
        inhalt.innerHTML = `
            <section class="orgaHead">
                <h2>${organisation[i].organisation}</h2>
                <a href="${organisation[i].webseite}">&#127760;</a>
            </section>
            <section>
                <p>${organisation[i].beschreibung}</p>
            </section>
        `
        inhalt.addEventListener("click", function () {
            window.location.href = "orga.html?id=" + i;
        });
        container.innerHTML += inhalt
    }
}
