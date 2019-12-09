/* Current counter */
var current = 0;

/* Prev, Next control */
$("#prevTheory").click(prevRender);
$("#nextTheory").click(nextRender);

/* Question array */
var queSrc = [
    "assets/img/cyklista.png",
    "<p>Přetáčivý smyk u vozidla s pohonem předních kol budete řešit:</p>",
    "<p>Jedete za pomalu jedoucím vozidlem autoškoly. Jak se zachováte?</p>",
    "<p>Častou příčinou vzniku dopravních nehod při jízdě na dálnici je:</p>",
]

/* Answer array */
var ansSrc = [
    "Při předjíždění cyklisty vám NEBUDE stačit 50cm vzdálenost na jeho předjetí, protože cyklista může náhle zakolísat a vybočit z dráhy směru své jízdy.",
    "Citlivým sešlápnutím pedálu akcelerátoru a natočením volantu směrem, kterým se pohybuje zadní část vozidla.",
    "V klidu a trpělivě pojedete za ním a případně jej na vhodném místě předjedete.",
    "Jízda s nedostatečnou vzdáleností mezi vozidly jedoucími za sebou.",
]

/* Rendering Question and Answer */
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