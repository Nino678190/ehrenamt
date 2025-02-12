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

        const aktuell11 = localStorage.getItem("erwachsen");
        if (aktuell11 != null){
            aktuell11 = aktuell11 + question.erwachsen;
        } else {
            aktuell11 = question.erwachsen;
        }
        localStorage.setItem("erwachsen", aktuell11);

        const aktuell21 = localStorage.getItem("sport");
        if (aktuell21 != null){
            aktuell21 = aktuell21 + question.sport;
        } else {
            aktuell21 = question.sport;
        }
        localStorage.setItem("sport", aktuell21);

        const aktuell31 = localStorage.getItem("rettung");
        if (aktuell31 != null){
            aktuell31 = aktuell31 + question.rettung;
        } else {
            aktuell31 = question.rettung;
        }
        localStorage.setItem("rettung", aktuell31);

        const aktuell41 = localStorage.getItem("hilfsorga");
        if (aktuell41 != null){
            aktuell41 = aktuell41 + question.hilfsorga;
        } else {
            aktuell41 = question.hilfsorga;
        }
        localStorage.setItem("hilfsorga", aktuell41);

        const aktuell51 = localStorage.getItem("gemeinschaft");
        if (aktuell51 != null){
            aktuell51 = aktuell51 + question.gemeinschaft;
        } else {
            aktuell51 = question.gemeinschaft;
        }
        localStorage.setItem("gemeinschaft", aktuell51);
        
    } else if (answer == 2){
        const aktuell1 = localStorage.getItem("kind");
        if (aktuell1 != null){
            aktuell1 = aktuell1 + question.kind1;
        } else {
            aktuell1 = question.kind1;
        }
        localStorage.setItem("kind", aktuell1);

        const aktuell11 = localStorage.getItem("erwachsen");
        if (aktuell11 != null){
            aktuell11 = aktuell11 + question.erwachsen1;
        } else {
            aktuell11 = question.erwachsen1;
        }
        localStorage.setItem("erwachsen", aktuell11);

        const aktuell21 = localStorage.getItem("sport");
        if (aktuell21 != null){
            aktuell21 = aktuell21 + question.sport1;
        } else {
            aktuell21 = question.sport1;
        }
        localStorage.setItem("sport", aktuell21);

        const aktuell31 = localStorage.getItem("rettung");
        if (aktuell31 != null){
            aktuell31 = aktuell31 + question.rettung1;
        } else {
            aktuell31 = question.rettung1;
        }
        localStorage.setItem("rettung", aktuell31);

        const aktuell41 = localStorage.getItem("hilfsorga");
        if (aktuell41 != null){
            aktuell41 = aktuell41 + question.hilfsorga1;
        } else {
            aktuell41 = question.hilfsorga1;
        }
        localStorage.setItem("hilfsorga", aktuell41);

        const aktuell51 = localStorage.getItem("gemeinschaft");
        if (aktuell51 != null){
            aktuell51 = aktuell51 + question.gemeinschaft1;
        } else {
            aktuell51 = question.gemeinschaft1;
        }
        localStorage.setItem("gemeinschaft", aktuell51);
    } else {
        const aktuell1 = localStorage.getItem("kind");
        if (aktuell1 != null){
            aktuell1 = aktuell1 + question.kind2;
        } else {
            aktuell1 = question.kind2;
        }
        localStorage.setItem("kind", aktuell1);

        const aktuell11 = localStorage.getItem("erwachsen");
        if (aktuell11 != null){
            aktuell11 = aktuell11 + question.erwachsen2;
        } else {
            aktuell11 = question.erwachsen2;
        }
        localStorage.setItem("erwachsen", aktuell11);

        const aktuell21 = localStorage.getItem("sport");
        if (aktuell21 != null){
            aktuell21 = aktuell21 + question.sport2;
        } else {
            aktuell21 = question.sport2;
        }
        localStorage.setItem("sport", aktuell21);

        const aktuell31 = localStorage.getItem("rettung");
        if (aktuell31 != null){
            aktuell31 = aktuell31 + question.rettung2;
        } else {
            aktuell31 = question.rettung2;
        }
        localStorage.setItem("rettung", aktuell31);

        const aktuell41 = localStorage.getItem("hilfsorga");
        if (aktuell41 != null){
            aktuell41 = aktuell41 + question.hilfsorga2;
        } else {
            aktuell41 = question.hilfsorga2;
        }
        localStorage.setItem("hilfsorga", aktuell41);

        const aktuell51 = localStorage.getItem("gemeinschaft");
        if (aktuell51 != null){
            aktuell51 = aktuell51 + question.gemeinschaft2;
        } else {
            aktuell51 = question.gemeinschaft2;
        }
        localStorage.setItem("gemeinschaft", aktuell51);
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
    const rettung = localStorage.getItem("rettung");
    const hilfsorga = localStorage.getItem("hilfsorga");
    const gemeinschaft = localStorage.getItem("gemeinschaft");

    const container = document.getElementById("ergebnis-container");
    let ergebnis = [];
    //TODO: Überarbeiten
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
