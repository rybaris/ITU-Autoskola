var current = 0;

$("#prevTheory").click(prevRender);
$("#nextTheory").click(nextRender);

/*
var queSrc = [
    '<p><a class="napoveda" href="#" data-toggle="popover" data-trigger="focus" data-placement="top" data-content="Jedná se o okraj silnice, často bývá ohraničen bílou souvislou čárou. Na tento okraj by řidič neměl najíždět, jelikož může být krajnice nezpevněna">Krajnice:</a></p>',
    "<p>'Zastavit vozidlo' znamená:</p>",
    "<p>'Dálnice'</p>",
    "<p>Nesmět omezit znamená povinnost:</p>",
    "<p>Po pozemní komunikaci jde osoba, která vede psa. Vztahují se na ni povinnosti průvodce vedených zvířat?</p>"

]
*/
/*
var ansSrc = [
    "je část povrchu pozemní komunikace ležící mezi okrajem přilehlého jízdního pruhu a hranou koruny pozemní komunikace, skládá se zpravidla ze zpevněné a nezpevněné části.",
    "přerušit jízdu z důvodu nezávislého na vůli řidiče.",
    "je pozemní komunikace označená dopravní značkou 'Dálnice'",
    "počínat si tak, aby jinému účastníku provozu na pozemních komunikacích nebylo nijak překáženo.",
    "NE"

]
*/



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