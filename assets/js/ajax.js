let current = 0;
let rightAnswer;
let question = document.getElementById('question');
let answers = document.getElementById('answers');

let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');
let answer3 = document.getElementById('answer3');

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
            rightAnswer = p[current].correct_answer;
            getQuestionByType(p, current);
            getChoices(p, current);
            buttonDisabler(current);
        }
    }
    xmlHttp.send()
}

// OK Funkce porovna datovy typ a dle nej sestavi HTML otazky
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

    answer1.innerHTML = item[index].answers[0];
    answer2.innerHTML = item[index].answers[1];
    answer3.innerHTML = item[index].answers[2];

}

function checkAnswer() {

    

    if (rightAnswer == "answer1") {
        answer1.setAttribute('style', 'background-color:#61ea618c !important')
        answer2.setAttribute('style', 'background-color:#ff000069 !important')
        answer3.setAttribute('style', 'background-color:#ff000069 !important')

    } else if (rightAnswer == "answer2") {
        answer1.setAttribute('style', 'background-color:#ff000069 !important')
        answer2.setAttribute('style', 'background-color:#61ea618c !important')
        answer3.setAttribute('style', 'background-color:#ff000069 !important')

    } else {
        answer1.setAttribute('style', 'background-color:#ff000069 !important')
        answer2.setAttribute('style', 'background-color:#ff000069 !important')
        answer3.setAttribute('style', 'background-color:#61ea618c !important')
    }

}

// OK Funkce tlacitka "Predchozi"
function prevRender() {

    event.preventDefault();
    current = current - 1;
    reset();
    ajaxFunction();

}

// OK Funkce tlacitka "Dalsi"
function nextRender() {

    event.preventDefault();
    current = current + 1;
    reset();
    ajaxFunction();

}

function reset() {
    answer1.style.backgroundColor = "#f7f7f7";
    answer2.style.backgroundColor = "#f7f7f7";
    answer3.style.backgroundColor = "#f7f7f7";
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