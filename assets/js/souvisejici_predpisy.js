var current = 0;

$("#prevTheory").click(prevRender);
$("#nextTheory").click(nextRender);

var queSrc = [
    "<p>Zdravotně způsobilý k řízení motorových vozidel není ten:</p>",
    "<p>Místní komunikace jsou sjízdné, jestliže umožňují bezpečný pohyb silničních a jiných vozidel:</p>",
    "<p>Provozovatel motorového vozidla odpovídá:</p>",
    "<p>Silnice jsou sjízdné, jestliže umožňují bezpečný pohyb silničních a jiných vozidel přizpůsobený:</p>",
    "<p>Je-li důvodné podezření, že motorové vozidlo bylo užito při nepovolené sportovní akci na pozemní komunikaci:</p>",
    "<p>Zelená karta:</p>",
    "<p>Policista může zabránit v jízdě motorovému vozidlu použitím technického prostředku (tzv. botičky) nebo odtažením vozidla, jestliže:</p>"

]

var ansSrc = [
    "Kdo má podle posudku o zdravotní způsobilosti poruchy chování způsobené závislostí na alkoholu nebo jiných psychoaktivních látkách.",
    "Přizpůsobený stavebnímu stavu a dopravně technickému stavu silnic a povětrnostním situacím a jejich důsledkům.",
    "Za škodu vyvolanou zvláštní povahou provozu motorového vozidla.",
    "Stavebnímu stavu a dopravně technickému stavu silnic a povětrnostním situacím a jejich důsledkům.",
    "policista může zabránit v jízdě motorovému vozidlu použitím technického prostředku nebo odtažením vozidla.",
    "je mezinárodní osvědčení prokazující skutečnost, že k vozidlu byla uzavřena smlouva o pojištění odpovědnosti za škodu způsobenou provozem vozidla uvedeného v tomto osvědčení.",
    "je důvodné podezření, že vozidlo bylo odcizeno."

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

