/* Current counter */
var current = 0;

/* Prev, Next control */
$("#prevTheory").click(prevRender);
$("#nextTheory").click(nextRender);

/* Question array */
var queSrc = [
    "<p>Nesvítí-li potkávací světlo na straně přivrácené do středu vozovky:</p>",
    "<p>K pravidelné technické prohlídce může přistavit vozidlo:",
    "<p>Na tabulku registrační značky:</p>",
    "<p>Vozidlo je technicky nezpůsobilé k provozu na pozemních komunikacích, pokud:</p>",
    "<p>Používání pneumatik s protiskluzovými hroty:</p>",
    "<p>Lhůta pro přistavení silničního vozidla k pravidelné technické prohlídce se počítá ode dne:</p>",
    "<p>V těsné blízkosti tabulky registrační značky:</p>",
    "<p>Za přestavbu silničního vozidla se považuje:</p>",
    "<p>Úprava barvy světla vyzařovaného světelným zařízením vozidla je:</p>",
    "<p>Na vozidle mohou být použita jen taková světelná zařízení:</p>",
    "<p>Lhůta pro přistavení silničního motorového vozidla k pravidelné technické prohlídce se počítá:</p>",
    "<p>Tabulku registrační značky umístí vlastník nebo provozovatel vozidla:</p>",
    "<p>Činná plocha pláště pneumatiky v provozu musí mít po celém obvodu a v celé šíři vrchního běhounu jasně viditelný dezén s hloubkou hlavních dezénových drážek:</p>",

]

/* Answer array */
var ansSrc = [
    "vozidlo nesmí být užito v provozu na pozemních komunikacích, s výjimkou nouzového dojetí.",
    "Jakákoliv osoba, které je vozidlo svěřeno.",
    "Nesmí být umístěny žádné nápisy nebo vyobrazení, které by narušily její čitelnost nebo rozlišovací schopnost, není-li stanoveno jinak.",
    "Pro závady v technickém stavu bezprostředně ohrožuje bezpečnost provozu na pozemních komunikacích.",
    "Je zakázáno pro všechna vozidla, s výjimkou vozidel záchranné služby.",
    "Prvního zaregistrování silničního vozidla a potom vždy ode dne provedení pravidelné technické prohlídky.",
    "Nesmí být umístěny žádné nápisy nebo vyobrazení, které by narušily její čitelnost nebo rozlišovací schopnost, není-li stanoveno jinak.",
    "Změna nebo úprava podstatných částí mechanismu nebo konstrukce provozovaného silničního vozidla.",
    "Zakázána.",
    "Která jsou pro danou kategorii předepsána a povolena.",
    "Ode dne zaregistrování vozidla v registračním místě a dále od data pravidelné technické prohlídky, zapsaného v  technickém průkazu vozidla.",
    "Do místa určeného konstrukčním řešením vozidla.",
    "U mopedů nejméně 1,0 mm a u vozidel ostatních kategorií nejméně 1,6 mm."

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

