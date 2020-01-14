function ajaxFunction() {

    let question = document.getElementById('question')
    let answers = document.getElementById('answers')
    let req = new XMLHttpRequest()
    let p

    req.open("GET", "https://raw.githubusercontent.com/rybaris/ITU-Autoskola/master/assets/js/data.json", true)

    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

    req.onreadystatechange = () => {
        if (req.readyState == 4 && req.status == 200) {
            p = JSON.parse(req.responseText);
            console.log(p)
            question.innerHTML = p[1].id;
            checkType();
            answers.innerHTML = ""

        }
    }
    function checkType() {
        if(p[0].type == "img") {
            question.innerHTML = '<img id="imaged"></img>'
            document.getElementById('imaged').src = p[0].question;
            console.log("stastny novy rok")
        }
    }
    req.send()
    

}