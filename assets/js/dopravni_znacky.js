/* Current counter */
var current = 0;

/* Prev, Next control */
$("#prevTheory").click(prevRender);
$("#nextTheory").click(nextRender);

/* Question array */
var imgSrc = [
    "assets/img/dej_prednost_v_jizde.jpg",
    "assets/img/smog.jpg",
    "assets/img/zakaz_vjezdu_autobusu.jpg",
    "assets/img/zakaz_vjezdu_vsech_motorovych_vozidel.jpg"
]

/* Answer array */
var ansSrc = [
    "Dát přednost v jízdě znamená povinnost řidiče nezahájit jízdu nebo jízdní úkon nebo v nich nepokračovat, jestliže by řidič, který má přednost v jízdě, musel náhle změnit směr nebo rychlost jízdy.",
    "Zakazuje jízdu (nikoli jen vjezd) pro určená vozidla v území, pro které byla vyhlášena smogová situace podle zvláštního právního předpisu.",
    "Zakazuje vjezdu autobusům.",
    'Zákaz vjezdu všech motorových vozidel'
]

/* Rendering Question and Answer */
function render() {

    var img = $("<img>").attr({
        id: "theoryImg",
        src: imgSrc[current],
    });

    var text = $("#rightAnswer").innerHTML = ansSrc[current];

    $('.question').html(img);
    $('#rightAnswer').html(text);

    let progress = 100 / (imgSrc.length-1);
    $('#progress-bar').width((current * progress) + "%");

    /* Hint popover */
    $("[data-toggle=popover]").popover();

}

/* Previous button function */
function prevRender() {

    event.preventDefault()

    if (current === 0) {
        current = imgSrc.length-1;
        current++;
    }

    current = current - 1;

    render();

}

/* Next button function*/
function nextRender() {

    event.preventDefault()

    if (current === (imgSrc.length - 1)) {
        current = 0;
        current--;
    }

    current = current + 1;
    render();

}