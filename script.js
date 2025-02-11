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
});

const questions = [
    {
        frage: "",
        antwort1: "",
        antwort2: "",
        antwort3: "",
        wert1: 0,
        wert2: 0,
        wert3: 0,
        wert11: 0,
        wert12: 0,
        wert13: 0,
        wert21: 0,
        wert22: 0,
        wert23: 0
    }
]

function addQuestionToUser(){
    const id = localStorage.getItem("questionId");
    const question = questions[id];
    const container = document.getElementById("question-container");
    container.innerHTML = `
        <h2>${question.frage}</h2>
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
    const container = document.getElementById("question-container");
    container.innerHTML = "";
    if (localStorage.getItem("questionId") == 0){
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
        const aktuell1 = localStorage.getItem("wert1");
        if (aktuell1 != null){
            aktuell1 = aktuell1 + question.wert1;
        } else {
            aktuell1 = question.wert1;
        }
        localStorage.setItem("wert1", aktuell1);

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
        const aktuell2 = localStorage.getItem("wert2");
        if (aktuell2 != null){
            aktuell2 = aktuell2 + question.wert2;
        } else {
            aktuell2 = question.wert2;
        }
        localStorage.setItem("wert2", aktuell2);

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
        const aktuell3 = localStorage.getItem("wert3");
        if (aktuell3 != null){
            aktuell3 = aktuell3 + question.wert3;
        } else {
            aktuell3 = question.wert3;
        }
        localStorage.setItem("wert3", aktuell3);

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
        wert1: 0,
        wert2: 0,
        wert3: 0,
        wert11: 0,
        wert12: 0,
        wert13: 0,
        wert21: 0,
        wert22: 0,
        wert23: 0
    }
]

function showErgebnis(){
    const wert1 = localStorage.getItem("wert1");
    const wert2 = localStorage.getItem("wert2");
    const wert3 = localStorage.getItem("wert3");
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
        const match1 = Math.abs(wert1 - org.wert1) + Math.abs(wert2 - org.wert2) + Math.abs(wert3 - org.wert3);
        const match2 = Math.abs(wert11 - org.wert11) + Math.abs(wert12 - org.wert12) + Math.abs(wert13 - org.wert13);
        const match3 = Math.abs(wert21 - org.wert21) + Math.abs(wert22 - org.wert22) + Math.abs(wert23 - org.wert23);

        const totalMatch = match1 + match2 + match3;
    
        ergebnis.push({
            organisation: org,
            uebereinstimmung: totalMatch
        });
    }
    ergebnis.sort((a, b) => a.uebereinstimmung - b.uebereinstimmung);
    for (let i = 0; i < ergebnis.length; i++) {
        const inhalt = document.createElement("section");
        inhalt.classList.add("ergebnis");
        inhalt.innerHTML = `
            <section>
                <h2>${ergebnis[i].organisation}</h2>
                <a href="${ergebnis[i].webseite}">&#127760;</a>
            </section>
            <section>
                <p>${ergebnis[i].beschreibung}</p>
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
        <img src="${org.bild}" alt="${org.organisation}">
        <h2>${org.organisation}</h2>
        <section>
            <a href="mailto:${org.email}">Mail</a>
            <a href="tel:${org.telefon}">Anrufen</a>
            <a href="${org.webseite}" target="_blank">Webseite</a>
        </section>
        <section>
            <h3>Fakten</h3>
            <p>Gründung: ${org.gruendung}</p>
            <p>Mitgliederzahl: ${org.mitglieder}</p>
            <p>Anzahl der Ortsverbände${org.ortsverbaendeAnzahl}</p>
            <p>Kategorie: ${org.kategorie}</p>
        </section>
        <section>
            <h3>Beschreibung</h3>
            <p>${org.beschreibung}</p>
        </section>
    `
}

