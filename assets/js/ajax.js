function ajaxFunction() {

    let current = 2;
    let question = document.getElementById('question');
    let answers = document.getElementById('answers');
    let req = new XMLHttpRequest();
    let p;

    // Funkce porovna datovy typ a dle nej sestavi HTML otazky
    function getQuestionByType(index) {

        if(p[index].type == "img") {
            question.innerHTML = '<img id="image-data"></img>';
            document.getElementById('image-data').src = p[index].question;
        } else {
            question.innerHTML = '<p id="text-data"></p>';
            document.getElementById('text-data').innerHTML = p[index].question;
        }

    }

    function getChoice(index) {

        let paragraph, j;
        
        paragraph = document.createElement('p');
        paragraph.className = "answer-text";
        answers.appendChild(paragraph);
        document.getElementsByClassName('answer-text').innerHTML = p[index].answer1;
        
        //document.getElementsByClassName('answer-text').innerHTML = p[index].answer2
        //document.getElementsByClassName('answer-text').innerHTML = p[index].answer3
    }

    req.open("GET", "https://raw.githubusercontent.com/rybaris/ITU-Autoskola/master/assets/js/data.json", true)

    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200) {
            p = JSON.parse(req.responseText);
            getQuestionByType(current);
            getChoice(current);
        }
    }

    req.send()
    

}