/* 
 */

/* Current counter */
var current = 0;

/* Control buttons */
$("#prevTheory").click(prevRender);
$("#nextTheory").click(nextRender);

var queSrc = [
    "<p>Při odbočování na křižovatce nebo na místo ležící mimo pozemní komunikaci:</p>",
    "<p>Při couvání řidič nesmí:</p>",
    "<p>Řidič motorového vozidla o maximální přípustné hmotnosti převyšující 3 500 kg, s výjimkou autobusu, smí jet mimo obec rychlostí nejvýše:</p>",
    '<p>Řidič motorového vozidla smí dávat&nbsp;<a class="napoveda" href="#" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="Lidově blinkr">světelné výstražné znamení</a> &nbsp;krátkým přerušovaným rozsvícením dálkových světel nebo přepínáním potkávacích a dálkových světel:</p>',
    '<p>Vozidla se před železničním přejezdem řadí:'

]

var ansSrc = [
    'Musí řidič dávat&nbsp;<a class="napoveda" href="#" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="Lidově blinkr">znamení o změně směru</a>&nbsp;jízdy.',
    "Ohrozit ostatní účastníky provozu na pozemní komunikaci.",
    "80 km.h-1.",
    "Pouze k odvrácení hrozícího nebezpečí nebo k upozornění řidiče předjížděného vozidla.",
    "Za sebou v pořadí, ve kterém přijela."

]

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

    console.log(queSrc.length);
    let progress = 100 / (queSrc.length-1);
    $('#progress-bar').width((current * progress) + "%");

    $("[data-toggle=popover]").popover();

}
    
function prevRender() {

    event.preventDefault()

    if (current === 0) {
        current = queSrc.length-1;
        current++;
    }

    current = current - 1;

    render();

}

function nextRender() {

    event.preventDefault()

    if (current === (queSrc.length - 1)) {
        current = 0;
        current--;
    }

    current = current + 1;
    render();

}
