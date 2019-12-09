/* Current counter */
var current = 0;

/* Prev, Next control */
$("#prevTheory").click(prevRender);
$("#nextTheory").click(nextRender);

/* Question array */
var queSrc = [
    "<p>V prostoru čerpací stanice pohonných hmot je zakázáno:</p>",
    "<p>Z jedoucího vozidla dává policista ve stejnokroji znamení k zastavení vozidla:</p></p>",
    "<p>Zvláštním způsobem musí být označen náklad, který přečnívá vozidlo vpředu nebo vzadu:</p>",
    "<p>Náklad, který přečnívá vpředu nebo vzadu vozidlo, musí být zvláštním způsobem označen, pouze pokud takto přečnívá:</p>",
    "<p>Vodorovné dopravní značky jsou vyznačeny:</p>",
    "</p>Pěší zóna je:</p>",

]

/* Answer array */
var ansSrc = [
    "Seřizovat motor vozidla.",
    "Kýváním paže nahoru a dolů nebo vysunutým zastavovacím terčem, popřípadě rozsvícením nápisu 'STOP'.",
    "O více než 1 metr.",
    "O více než 100 cm.",
    "Barvou nebo jiným srozumitelným způsobem; přechodná změna místní úpravy provozu na pozemních komunikacích je vyznačena žlutou nebo oranžovou barvou.",
    "Oblast, jejíž začátek je označen dopravní značkou 'Pěší zóna' a konec je označen dopravní značkou 'Konec pěší zóny'."

]

/* Main render function - renders question and answer */
function render() {

    if (queSrc[current].startsWith('assets')) {

        var img = $("<img>").attr({
            id: "theoryImg",
            src: queSrc[current],
        });

    } else {

        var img = $(".question").innerHTML = queSrc[current];

    }

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