let current = 0;
let categoryIndex = 0;
let currentDisplay;
let rightAnswer;
let thirdAnswerEmpty = false;
let firstLoad = true;
let count;

//let answers = document.getElementById('answers');
let question = document.getElementById('question');
let answer0 = document.getElementById('answer0');
let answer1 = document.getElementById('answer1');
let answer2 = document.getElementById('answer2');

$("#prevTheory").click(prevRender);
$("#nextTheory").click(nextRender);

// Vytvoreni AJAX pozadavku
function ajaxFunction() {
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://raw.githubusercontent.com/rybaris/ITU-Autoskola/master/assets/js/data.json", true)
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let p = JSON.parse(xmlHttp.responseText);
            rightAnswer = p[categoryIndex].questions[current].correct_answer;
            count = p[categoryIndex].category.count;

            if(firstLoad === true) {
                for (let o = 0; o <= count; o++) {
                    let linka = document.createElement("a");
                    let linkd = document.createTextNode(o);
                    linka.className = "navigation-link";
                    linka.setAttribute("onclick", "jumpFunc(this.textContent)")
                    linka.appendChild(linkd)
                    document.getElementById('navigation-down').appendChild(linka)
                }
                firstLoad = false;
            }

            getQuestionByType(p, current);
            getChoices(p, current);
            buttonDisabler(p, current);

            let progress = 100 / (p[categoryIndex].category.count - 1);
            $('#progress-bar').width((current * progress) + "%");

            document.getElementById('current-index').innerHTML = current;
            document.getElementById('count-index').innerHTML = count;
            console.log(current)
        }
    }
    xmlHttp.send()
}

// OK Funkce porovna datovy typ a dle nej sestavi HTML otazky
function getQuestionByType(item, index) {

    if(item[categoryIndex].questions[index].type == "img") {
        question.innerHTML = '<img id="image-data"></img>';
        document.getElementById('image-data').src = item[categoryIndex].questions[index].question;
    } else {
        question.innerHTML = '<p id="text-data"></p>';
        document.getElementById('text-data').innerHTML = item[categoryIndex].questions[index].question;
    }

}

// Funkce vlozi mozne odpovedi na otazku
function getChoices(item, index) {

    answer0.innerHTML = item[categoryIndex].questions[index].answers[0];
    answer1.innerHTML = item[categoryIndex].questions[index].answers[1];
    if (item[categoryIndex].questions[index].answers[2] == "") {
        thirdAnswerEmpty = true;
        answer2.style.display = "none";
    } else {
        thirdAnswerEmpty = false;
        answer2.style.display = "block";
        answer2.innerHTML = item[categoryIndex].questions[index].answers[2];
    }

}

function checkAnswer() {

    if (rightAnswer == 0) {
        answer0.setAttribute('style', 'background-color:#61ea618c !important')
        answer1.setAttribute('style', 'background-color:#ff000069 !important')
        if (thirdAnswerEmpty) {
            answer2.style.display = "none";
        } else {
            answer2.style.display = "block";
            answer2.setAttribute('style', 'background-color:#ff000069 !important')
        }

    } else if (rightAnswer == 1) {
        answer0.setAttribute('style', 'background-color:#ff000069 !important')
        answer1.setAttribute('style', 'background-color:#61ea618c !important')
        if (thirdAnswerEmpty) {
            answer2.style.display = "none";
        } else {
            answer2.style.display = "block";
            answer2.setAttribute('style', 'background-color:#ff000069 !important')
        }

    } else {
        answer0.setAttribute('style', 'background-color:#ff000069 !important')
        answer1.setAttribute('style', 'background-color:#ff000069 !important')
        if (thirdAnswerEmpty) {
            answer2.style.display = "none";
        } else {
            answer2.style.display = "block";
            answer2.setAttribute('style', 'background-color:#61ea618c !important')
        }
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
    answer0.style.backgroundColor = "#f7f7f7";
    answer1.style.backgroundColor = "#f7f7f7";
    answer2.style.backgroundColor = "#f7f7f7";
}

// Funkce skryva/zobrazuje navigacni tlacitka dle hodnoty indexu
function buttonDisabler(item, index) {

    if (index === 0) {
        document.getElementById('prevTheory').style.display = "none";
    } else if (index === item[categoryIndex].category.count) {
        document.getElementById('nextTheory').style.display = "none";
    } else {
        document.getElementById('prevTheory').style.display = "block";
        document.getElementById('nextTheory').style.display = "block";
    }

}

$(".navigation-dropdown").click( function(e) {
    //e.preventDefault();
    $("#navigation-down").toggleClass("flex");
    //return false; 
});

function jumpFunc(hodnota) {
    //event.preventDefault();
    current = Number(hodnota);
    $("#navigation-down").toggleClass("flex");
    ajaxFunction();
}