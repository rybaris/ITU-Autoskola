/* Current counter */
var current = 0;

/* Prev, Next control */
$("#prevTheory").click(prevRender);
$("#nextTheory").click(nextRender);

/* Question array */
var queSrc = [
    "<p>Jak budete postupovat, jste-li sami a opakovaně se Vám nedaří zajistit dýchací cesty:</p>",
    "<p>Zraněný si po dopravní nehodě stěžuje na bolesti břicha a pocit žízně:</p>",
    "<p>Po zahájení resuscitace je nejdůležitější:</p>",
    "<p>Při zevní srdeční masáži:</p>",
    "<p>Poraněný je při vědomí a stěžuje si na silnou bolest v oblasti zad, eventuálně na brnění nebo necitlivost dolních končetin. Jaké by mohl mít poranění?</p>"
]

/* Answer array */
var ansSrc = [
    "Přeruším snažení po 3-4 pokusech a zahájím zevní srdeční masáž",
    "Nepodáváme mu žádné nápoje",
    "resuscitaci nepřerušovat do příjezdu ZS, obnovení dýchání nebo vlastního vyčerpání",
    "Zahájím nepřímou srdeční masáž i v nevýhodné poloze (např. v sedu při zaklínění ve voze), pokud nelze poraněného rychle vyprostit",
    "poranění páteře, při změně citlivosti také poranění míchy"
]

/* Rendering Question and Answer */
function render() {

    var img = $(".question").innerHTML = queSrc[current];
    var text = $("#rightAnswer").innerHTML = ansSrc[current];

    $('.question').html(img);
    $('#rightAnswer').html(text);

    let progress = 100 / (queSrc.length-1);
    $('#progress-bar').width((current * progress) + "%");

    /* Hint popover */
    $("[data-toggle=popover]").popover();

}

/* Previous button function */
function prevRender() {

    event.preventDefault()

    if (current === 0) {
        current = queSrc.length-1;
        current++;
    }

    current = current - 1;

    render();

}

/* Next button function*/
function nextRender() {

    event.preventDefault()

    if (current === (queSrc.length - 1)) {
        current = 0;
        current--;
    }

    current = current + 1;
    render();

}

