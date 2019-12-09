/* Current counter */
var current = 0;

/* Prev, Next control */
$("#prevTheory").click(prevRender);
$("#nextTheory").click(nextRender);

/* Question array */
var imgSrc = [
    "assets/img/prejezd.png",
    "assets/img/krizovatka1.png",
    "assets/img/autobus_na_zastavce.png",
    "assets/img/odboceni_na_semaforech.png",
    "assets/img/situace_s_tramvaji.png",
    "assets/img/prejezd2.png"
]

/* Answer array */
var ansSrc = [
    "Přes tento železniční přejezd lze přejíždět nejvýše 50 km/h.",
    "Touto křižovatkou projíždíte jako poslední.",
    "Snížím rychlost jízdy. Musím počítat s náhlým vstoupením do vozovky   osob, které vystupují z autobusu.",
    "V této dopravní situaci smíte odbočit vlevo, ale musíte dát přednost chodcům přecházejícím ve volném směru po přechodu pro chodce.",
    "Jako řidič auta z výhledu projíždíte křižovatkou jako první.",
    "Přes tento železniční přejezd lze přejíždět nejvýše 30 km/h."
    
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
