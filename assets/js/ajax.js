let current = 0;
let categoryIndex = 0;
let rightAnswer;
let count;

let thirdAnswerEmpty = false;
let firstLoad = true;

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
    xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHttp.onreadystatechange = () => {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            let p = JSON.parse(xmlHttp.responseText);
            rightAnswer = p[categoryIndex].questions[current].correct_answer;
            count = p[categoryIndex].category.count;

            if(firstLoad === true) {
                for (let o = 0; o < count; o++) {
                    let navigationLink = document.createElement("a");
                    let linkContent = document.createTextNode(o);

                    navigationLink.className = "navigation-link";
                    navigationLink.setAttribute("onclick", "jumpFunc(this.textContent)")
                    navigationLink.appendChild(linkContent)
                    document.getElementById('navigation-down').appendChild(navigationLink)
                }
                firstLoad = false;
            }

            getQuestionByType(p, current);
            getChoices(p, current);
            addHelp(p, current);
            buttonDisabler(p, current);

            let progress = 100 / (p[categoryIndex].category.count - 1);
            $('#progress-bar').width((current * progress) + "%");

            document.getElementById('current-index').innerHTML = current;
            document.getElementById('count-index').innerHTML = count - 1;

            $('[data-toggle="popover"]').popover({
                trigger: 'focus'
            }); 

        }
    }
    xmlHttp.send()
}

//  Funkce porovna datovy typ a dle nej sestavi HTML otazky
function getQuestionByType(item, index) {

    if(item[categoryIndex].questions[index].type == "img") {
        question.innerHTML = '<img id="image-data"></img>';
        document.getElementById('image-data').src = item[categoryIndex].questions[index].question;
    } else {
        question.innerHTML = '<p id="text-data"></p>';
        document.getElementById('text-data').innerHTML = item[categoryIndex].questions[index].question;
    }

}

// Funkce vlozi moznosti [odpovedi] na otazku do DOM
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

// Funkce porovna spravnou odpoved a zobrazi spravne reseni
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

// Funkce tlacitka "Predchozi", pozice - 1
function prevRender() {

    event.preventDefault();
    current = current - 1;
    reset();
    ajaxFunction();

}

// Funkce tlacitka "Dalsi", pozice + 1
function nextRender() {

    event.preventDefault();
    current = current + 1;
    reset();
    ajaxFunction();

}

// Reset stylu odpovedi
function reset() {

    answer0.style.backgroundColor = "#f7f7f7";
    answer1.style.backgroundColor = "#f7f7f7";
    answer2.style.backgroundColor = "#f7f7f7";

}

// Zobrazeni / Skryti tlacitek "Dalsi" a "Predchozi"
function buttonDisabler(item, index) {

    let normalizedCount = item[categoryIndex].category.count - 1;

    if (index == 0) {
        document.getElementById('prevTheory').style.display = "none";
        document.getElementById('nextTheory').style.display = "block";

    } else if (index == normalizedCount) {
        document.getElementById('nextTheory').style.display = "none";
        document.getElementById('prevTheory').style.display = "block";

    } else {
        document.getElementById('prevTheory').style.display = "block";
        document.getElementById('nextTheory').style.display = "block";
    }

}

function addHelp (item, index) {

    let isActive = item[categoryIndex].questions[index].help.active;
    let keyWord = item[categoryIndex].questions[index].help.keyword;
    let helpContent = item[categoryIndex].questions[index].help.help_content;
    let answer0Data = answer0.textContent;
    let answer1Data = answer1.textContent;
    let answer2Data = answer2.textContent;

    if (isActive === true) {

        let replaceKeyword;

        // Otazka obsahuje napovedni klicove slovo
        if(item[categoryIndex].questions[index].type !== "img") {
            let textData = document.getElementById('text-data').textContent;
            if(textData.includes(keyWord)) {
                //let replaceKeyword = textData.replace(keyWord, '<a data-toggle="popover" data-content="'+helpContent+'">'+keyWord+'</a>');
                replaceKeyword = textData.replace(keyWord, `<a tabindex="0" class="nofocus" data-toggle="popover" data-content="${helpContent}" data-placement="top" data-trigger="focus">${keyWord}</a>`);
                document.getElementById('text-data').innerHTML = replaceKeyword;
            }
        }

        // Odpoved 0 obsahuje napovedni klicove slovo
        if(answer0Data.includes(keyWord)) {
            replaceKeyword = answer0Data.replace(keyWord, `<a tabindex="0" class="nofocus" data-toggle="popover" data-content="${helpContent}" data-placement="top" data-trigger="focus">${keyWord}</a>`);
            answer0.innerHTML = replaceKeyword;
        }

        // Odpoved 1 obsahuje napovedni klicove slovo
        if(answer1Data.includes(keyWord)) {
            replaceKeyword = answer1Data.replace(keyWord, `<a tabindex="0" class="nofocus" data-toggle="popover" data-content="${helpContent}" data-placement="top" data-trigger="focus">${keyWord}</a>`);
            answer1.innerHTML = replaceKeyword;
        }

        // Odpoved 2 obsahuje napovedni klicove slovo
        if(answer2Data.includes(keyWord)) {
            replaceKeyword = answer2Data.replace(keyWord, `<a tabindex="0" class="nofocus" data-toggle="popover" data-content="${helpContent}" data-placement="top" data-trigger="focus">${keyWord}</a>`);
            answer2.innerHTML = replaceKeyword;
        }
        
    }

}

// Zobrazeni / Skryti navigace otazek
$(".navigation-dropdown").click( () => {

    $(".navigation-dropdown img").toggleClass("rotation");
    $("#navigation-down").toggleClass("flex");

});

// Funkce skoku na zvoleny index
function jumpFunc(value) {

    current = Number(value);
    $("#navigation-down").toggleClass("flex");
    $(".navigation-dropdown img").toggleClass("rotation");
    ajaxFunction();

}

// Funkce tlacitka zpet
function goBack() {
    window.history.back();
}