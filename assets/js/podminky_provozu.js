var current = 0;

$("#prevTheory").click(prevRender);
$("#nextTheory").click(nextRender);

var queSrc = [
    "Nesvítí-li potkávací světlo na straně přivrácené do středu vozovky:",
    "K pravidelné technické prohlídce může přistavit vozidlo:",
    "Na tabulku registrační značky:",
    "Vozidlo je technicky nezpůsobilé k provozu na pozemních komunikacích, pokud:",
    "Používání pneumatik s protiskluzovými hroty:",
    "Lhůta pro přistavení silničního vozidla k pravidelné technické prohlídce se počítá ode dne:",
    "V těsné blízkosti tabulky registrační značky:",
    "Za přestavbu silničního vozidla se považuje:",
    "Úprava barvy světla vyzařovaného světelným zařízením vozidla je:",
    "Na vozidle mohou být použita jen taková světelná zařízení:",
    "Lhůta pro přistavení silničního motorového vozidla k pravidelné technické prohlídce se počítá:",
    "Tabulku registrační značky umístí vlastník nebo provozovatel vozidla:",
    "Činná plocha pláště pneumatiky v provozu musí mít po celém obvodu a v celé šíři vrchního běhounu jasně viditelný dezén s hloubkou hlavních dezénových drážek:",

]

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

function render() {

    var img = $(".question").innerHTML = queSrc[current];
    var text = $("#rightAnswer").innerHTML = ansSrc[current];

    $('.question').html(img);
    $('#rightAnswer').html(text);

    console.log(queSrc.length);
    let progress = 100 / (queSrc.length-1);
    $('#progress-bar').width((current * progress) + "%");

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

