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

const questions = [
    {
        frage: "",
        antwort1: "",
        antwort2: "",
        antwort3: "",

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
        gemeinschaft2: 0
    }
]

const ergebnisse = [
    {
        organisation: "",
        beschreibung: "",
        bild: "",
        gruendung: "",
        mitglieder: "",
        webseite: "",
        telefon: "",
        email: "",
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
    }
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
        <input type="radio" name="answer" value="1" id="answer1"><label for="answer1">${question.antwort1}</label><br>
        <input type="radio" name="answer" value="2" id="answer2"><label for="answer2">${question.antwort2}</label><br>
        <input type="radio" name="answer" value="3" id="answer3"><label for="answer3">${question.antwort3}</label><br>
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

function calculate(){
    const answer = document.querySelector('input[name="answer"]:checked').value;
    const id = localStorage.getItem("questionId");
    const question = questions[id];

    if (answer == 1){
        const aktuell1 = localStorage.getItem("kind");
        if (aktuell1 != null){
            aktuell1 = aktuell1 + question.kind;
        } else {
            aktuell1 = question.kind;
        }
        localStorage.setItem("kind", aktuell1);

        const aktuell11 = localStorage.getItem("wert11");
        if (aktuell11 != null){
            aktuell11 = aktuell11 + question.wert11;
        } else {
            aktuell11 = question.wert11;
        }
        localStorage.setItem("wert11", aktuell11);

        const aktuell21 = localStorage.getItem("wert21");
        if (aktuell21 != null){
            aktuell21 = aktuell21 + question.wert21;
        } else {
            aktuell21 = question.wert21;
        }
        localStorage.setItem("wert21", aktuell21);
        
    } else if (answer == 2){
        const aktuell2 = localStorage.getItem("erwachsen");
        if (aktuell2 != null){
            aktuell2 = aktuell2 + question.erwachsen;
        } else {
            aktuell2 = question.erwachsen;
        }
        localStorage.setItem("erwachsen", aktuell2);

        const aktuell12 = localStorage.getItem("wert12");
        if (aktuell12 != null) {
            aktuell12 = aktuell2 + question.wert12;
        } else {
            aktuell12 = question.wert12;
        }
        localStorage.setItem("wert12", aktuell12);

        const aktuell22 = localStorage.getItem("wert22"); 
        if (aktuell22 != null){
            aktuell22 = aktuell22 + question.wert22;
        } else {
            aktuell22 = question.wert22;
        }
        localStorage.setItem("wert22", aktuell22);
    } else {
        const aktuell3 = localStorage.getItem("sport");
        if (aktuell3 != null){
            aktuell3 = aktuell3 + question.sport;
        } else {
            aktuell3 = question.sport;
        }
        localStorage.setItem("sport", aktuell3);

        const aktuell13 = localStorage.getItem("wert13");
        if (aktuell13 != null){
            aktuell13 = aktuell13 + question.wert13;
        } else {
            aktuell13 = question.wert13;
        }
        localStorage.setItem("wert13", aktuell13);

        const aktuell23 = localStorage.getItem("wert23");
        if (aktuell23 != null){
            aktuell23 = aktuell23 + question.wert23;
        } else {
            aktuell23 = question.wert23;
        }
        localStorage.setItem("wert23", aktuell23);
    }
    const container = document.getElementById("question-container");
    container.innerHTML = "";
    if (parseInt(id) + 1 == questions.length){
        endFragen();
    } else {
        const id = parseInt(localStorage.getItem("questionId")) + 1;
        addQuestionToUser(id);
        localStorage.setItem("questionId", id);
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
    const wert11 = localStorage.getItem("wert11");
    const wert12 = localStorage.getItem("wert12");
    const wert13 = localStorage.getItem("wert13");
    const wert21 = localStorage.getItem("wert21");
    const wert22 = localStorage.getItem("wert22");
    const wert23 = localStorage.getItem("wert23");
    const container = document.getElementById("ergebnis-container");
    let ergebnis = [];
    for (let i = 0; i < ergebnisse.length; i++) {
        const org = ergebnisse[i];
        match1 = Math.abs(kind - org.kind) + Math.abs(erwachsen - org.erwachsen) + Math.abs(sport - org.sport);
        match2 = Math.abs(wert11 - org.wert11) + Math.abs(wert12 - org.wert12) + Math.abs(wert13 - org.wert13);
        match3 = Math.abs(wert21 - org.wert21) + Math.abs(wert22 - org.wert22) + Math.abs(wert23 - org.wert23);

        const totalMatch = match1 + match2 + match3;
    
        ergebnis.push({
            organisation: org,
            uebereinstimmung: totalMatch,
            match1: match1,
            match2: match2,
            match3: match3
        });
    }
    ergebnis.sort((a, b) => a.uebereinstimmung - b.uebereinstimmung);
    container.innerHTML = "";
    container.innerHTML = `
        <h2>Dein passendes Ehrenamt</h2>
        <section>
            <h4>${ergebnis[0].match1}% Art 1</h4>
            <h4>${ergebnis[0].match2}% Art 2</h4>
            <h4>${ergebnis[0].match3}% Art 3</h4>
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
