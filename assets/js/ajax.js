let current = 0;
let question = document.getElementById('question');
let answers = document.getElementById('answers');

$("#prevTheory").click(prevRender);
$("#nextTheory").click(nextRender);

// TODO DATA 
// BODY
// SPRAVNA ODPOVED

// Vytvoreni AJAX pozadavku
function ajaxFunction() {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://raw.githubusercontent.com/rybaris/ITU-Autoskola/master/assets/js/data.json", true)
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let p = JSON.parse(xmlHttp.responseText);
            getQuestionByType(p, current);
            getChoices(p, current);
            buttonDisabler(current);
            checkAnswer(p, current);
            //let progress = 100 / (queSrc.length-1);
            //$('#progress-bar').width((current * progress) + "%");
        }
    }
    xmlHttp.send()
}

// Funkce porovna datovy typ a dle nej sestavi HTML otazky
function getQuestionByType(item, index) {

    if(item[index].type == "img") {
        question.innerHTML = '<img id="image-data"></img>';
        document.getElementById('image-data').src = item[index].question;
    } else {
        question.innerHTML = '<p id="text-data"></p>';
        document.getElementById('text-data').innerHTML = item[index].question;
    }

}

// Funkce vlozi mozne odpovedi na otazku
function getChoices(item, index) {

    document.getElementById('answer1').innerHTML = item[index].answer1;
    document.getElementById('answer2').innerHTML = item[index].answer2;
    document.getElementById('answer3').innerHTML = item[index].answer3;

}

function checkAnswer(item, index) {

    if (item[index].right-answer == "answer1") {
        document.getElementById('answer1').style.background = "green";
        document.getElementById('answer2').style.background = "red";
        document.getElementById('answer3').style.background = "red";
    } else if (item[index].right-answer == "answer2") {
        document.getElementById('answer1').style.background = "red";
        document.getElementById('answer2').style.background = "green";
        document.getElementById('answer3').style.background = "red";
    } else {
        document.getElementById('answer1').style.background = "red";
        document.getElementById('answer2').style.background = "red";
        document.getElementById('answer3').style.background = "green";
    }

}

// OK Funkce tlacitka "Predchozi"
function prevRender() {

    event.preventDefault();
    current = current - 1;
    ajaxFunction();

}

// OK Funkce tlacitka "Dalsi"
function nextRender() {

    event.preventDefault();
    current = current + 1;
    ajaxFunction();

}

// Funkce skryva/zobrazuje navigacni tlacitka dle hodnoty indexu
function buttonDisabler(index) {

    if (index === 0) {
        document.getElementById('prevTheory').style.display = "none";
    } else if (index === 3) {
        document.getElementById('nextTheory').style.display = "none";
    } else {
        document.getElementById('prevTheory').style.display = "block";
        document.getElementById('nextTheory').style.display = "block";
    }

}
