let count=1800;
let pom=1;
let counter=2;
let body=0;
let spravna0,spravna1,spravna2,spravna3,spravna4,spravna5,spravna6,spravna7;
let stopka = false;
let uspech = false;
let q_count=24;

let o0="V provozu na pozemních komunikacích je zakázáno";
let a0_a="Troubit";
let a0_b="Neoprávněně užívat zvláštních výstražných světel a zvláštního zvukového výstražného znamení, které užívá vozidlo s právem přednostní jízdy.";
let a0_c="Svítit za nesnížené viditelnosti.";

function next_q(){  
  spravna0="a0_c";

  let o1="Místo, v němž se pozemní komunikace protínají nebo spojují, nejde-li o vyústění účelové pozemní komunikace na jinou pozemní komunikaci, se nazývá:";
  let a1_a="Křižovatka.";
  let a1_b="Hranice křižovatky.";
  let a1_c="Spojnice pozemních komunikací.";
  spravna1 = "a1_c";

  let o2= "V obytné a pěší zóně smí řidič jet rychlostí nejvýše:";
  let a2_a= "40 km/h.";
  let a2_b= "20 km/h.";
  let a2_c= "30 km/h.";
  spravna2 = "a2_c";

  let o3= "Dát přednost v jízdě znamená:";
  let a3_a= "Povinnost řidiče vždy zastavit vozidlo, jestliže do křižovatky přijíždí po hlavní pozemní komunikaci motorové vozidlo nebo tramvaj; nemotorovým vozidlům přednost v jízdě nedává.";
  let a3_b= "Povinnost řidiče nezahájit jízdu nebo jízdní úkon nebo v nich nepokračovat pouze na křižovatkách rozlišených dopravními značkami.";
  let a3_c= "Povinnost řidiče nezahájit jízdu nebo jízdní úkon nebo v nich nepokračovat, jestliže by řidič, který má přednost v jízdě, musel náhle změnit směr nebo rychlost jízdy.";
  spravna3 = "a3_c";

  let o4="Při řízení provozu na křižovatce policistou je řidič vozidla, pro kterého z pokynu policisty taková povinnost vyplývá, povinen zastavit vozidlo:";
  let a4_a="Před hranicí křižovatky.";
  let a4_b="Na takovém místě, kde bude mít dobrý výhled do křižovatky.";
  let a4_c="V křižovatce a v takové vzdálenosti od policisty, aby nebyla ohrožena jeho bezpečnost.";
  spravna4 = "a4_c";

  let o5="Křižovatka:"
  let a5_a="Je místo, v němž se pozemní komunikace protínají nebo spojují; za křižovatku se nepovažuje kruhový objezd.";
  let a5_b="Je místo, v němž se pozemní komunikace protínají nebo spojují; za křižovatku se nepovažuje vyústění polní nebo lesní cesty nebo jiné účelové komunikace na jinou pozemní komunikaci.";
  let a5_c="Je místo, v němž se spojují nejvýše dvě pozemní komunikace; za křižovatku se nepovažuje místo, kde se pozemní komunikace protínají.";
  spravna5 = "a5_c";

  let o6="Řidič motorového vozidla o maximální přípustné hmotnosti nepřevyšující 3 500 kg a autobusu smí jet:";
  let a6_a="Na silnici pro motorová vozidla a na dálnici rychlostí nejvýše 130 km.h-1.";
  let a6_b="Na silnici pro motorová vozidla rychlostí nejvýše 110 km.h-1 a na dálnici rychlostí nejvýše 130 km.h-1.";
  let a6_c="Na silnici pro motorová vozidla rychlostí nejvýše 110 km.h-1 a na dálnici rychlostí nejvýše 130 km.h-1, s výjimkou řidiče autobusu, který na dálnici smí jet rychlostí nejvýše 110 km.h-1.";
  spravna6 = "a6_c";
  let o7="Řidič motorového vozidla je povinen na výzvu policisty nebo celníka:";
  let a7_a="Podrobit vozidlo kontrole největší přípustné hmotnosti vozidla.";
  let a7_b="Doplnit nádrž vozidla pohonnými látkami.";
  let a7_c="Přibrat jako spolujezdce osobu, které ujelo vozidlo hromadné dopravy osob.";
  spravna7 = "a7_c";
  if (pom>7)
  {
    pom=1;
  }

  if(counter>=50)
  {
    konec();
  }
  else{
    let conc_o = "o"+pom;
    let conc_a= "a"+pom+"_a";
    let conc_b= "a"+pom+"_b";
    let conc_c= "a"+pom+"_c";
    $(".otazka").html(eval(conc_o));
    $(".change1").html(eval(conc_a));
    $(".change2").html(eval(conc_b));
    $(".change3").html(eval(conc_c));

  
  $(".counter").html("Otázka: "+counter+"/50");
  pom++;
  counter++;
  }
  
  //console.log(q_counter);


}
function first()
{
  $(".otazka").html(o0);  
  $(".change1").html(a0_a);
  $(".change2").html(a0_b);
  $(".change3").html(a0_c);
}
function odp1(){
  let odpoved = "spravna" + (pom-1);
  let odpoved1_eval = eval(odpoved);  
  if(odpoved1_eval == "a"+(pom-1)+"_a"){    
    body++;
    localStorage.setItem("o"+(pom-2), "1");
    console.log("o"+(pom-2));
  }
  else{
    localStorage.setItem("o"+(pom-2), "0");
  }    
}
function odp2(){
  let odpoved2 = "spravna" +(pom-1);
  let odpoved2_eval = eval(odpoved2);
  
  if(odpoved2_eval == "a"+(pom-1)+"_b"){
    body++;
    localStorage.setItem("o"+(pom-2), "1");
    console.log("o"+(pom-2));
  }
  else{
    localStorage.setItem("o"+(pom-2), "0");
  }    
}
function odp3(){
  let odpoved3 = "spravna"+(pom-2);
  let odpoved3_eval = eval(odpoved3);

  if(odpoved3_eval == "a"+(pom-2)+"_c"){
    body++;
    localStorage.setItem("o"+(pom-2), "1");
    console.log("o"+(pom-2));
  }
  else{
    localStorage.setItem("o"+(pom-2), "0");
  }   
}
function konec(){
  let konec_cas,konec_cas2;
  let konec_body;
  konec_cas=end_time(konec_cas);
  localStorage.setItem("konec_cas2", konec_cas); //uložení času
  localStorage.setItem("konec_body", body); //uložení bodů
  ///NACTENI STRANKY S HODNOCENIM
  window.location.replace("test-end.html");  

}
function end_time(konec_cas){
  let minute = parseInt(count/60);
  let sec = count % 60;
  $(".min2").html(minute); 
  if(sec.toString().length == 1) //řešení nuly navíc u jednociferného čísla
  {
    konec_cas= minute+":0"+sec;
  }
  else{
    konec_cas= minute+":"+sec;    
  }
  return konec_cas;
}
function end_time2(){
  let konec_cas = localStorage.getItem("konec_cas2");
  let konec_body = localStorage.getItem("konec_body");
  $(".final_time").html(konec_cas);  
  $(".final_points").html(konec_body);
  if(konec_body >= 43)
  {
    $(".obr").attr('src', 'assets/img/success.png');
  }
  else{
    $(".obr").attr('src', 'assets/img/stop.png');
  }
}
function modal_konec(){
  modal_window();
}
function modal_close(){
  $(".modal_w").css("display","none");
}
function timer(){
  let minute = parseInt(count/60);
  let sec = count % 60;
    count=count-1;
    
    if (count >= 0)
    {
     // console.log(minute);
      $(".min").html(minute);      
      if(sec.toString().length == 1) //řešení nuly navíc u jednociferného čísla
      {
        $(".sec").html("0"+sec);
      }
      else{
        $(".sec").html(sec);
      }
      //console.log(sec.toString().length);
    }else{
      konec();
    }
    setTimeout(timer, 1000);
}

function modal_window(){
  $(".modal_w").css("display", "block");
}
function size_img(){
  if(window.innerWidth < 600 && window.innerWidth>=290)
  {
    $("#stopka").attr("src", "assets/img/stop2.png");
  }
  else if(window.innerWidth < 290){
    $("#stopka").attr("src", "assets/img/stop3.png");
  }
  else
  {
    $("#stopka").attr("src", "assets/img/stop.png");
  }
  setTimeout(size_img, 10);
}

function history(){
  for(let i = 0; i <= q_count; i++){    
    let answer = localStorage.getItem("o"+i);
    if(answer=="1")
    {
      $("#o"+i).css('background-color', 'green');
      console.log("#o"+i+" GREEN");
    }
    else{
      $("#o"+i).css('background-color', 'red');
      console.log("#o"+i+" RED");
    }
  }
}
