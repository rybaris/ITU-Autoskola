let current = 0;
let question = document.getElementById('question');
let answers = document.getElementById('answers');

$("#prevTheory").click(prevRender);
$("#nextTheory").click(nextRender);

// TODO DATA 
// BODY
// SPRAVNA ODPOVED

function ajaxFunction() {

    let req = new XMLHttpRequest();
    req.open("GET", "https://raw.githubusercontent.com/rybaris/ITU-Autoskola/master/assets/js/data.json", true)
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200) {
            let p = JSON.parse(req.responseText);
            getQuestionByType(p, current);
            getChoices(p, current);
        }
    }
    req.send()
    
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

function showTruth() {
    for (let i = 0;i <= 3 ;i++) {
        
    }
}

// Funkce tlacitka "Predchozi"
function prevRender() {

    event.preventDefault()

    if (current === 0) {
        document.getElementById('prevTheory').style.display = "none";
        console.log(current);
    } else {
        current = current - 1;
        console.log(current);
    }

    ajaxFunction();
    

}

// Funkce tlacitka "Dalsi"
function nextRender() {

    event.preventDefault()
    console.log(current);

    //if (current === (queSrc.length - 1)) {
    //   current = 0;
    //   current--;
    //}

    current = current + 1;
    ajaxFunction();

}