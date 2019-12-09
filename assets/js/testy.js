let count=1800;
let pom=1;
let counter=2;
function next_q(){
  let o1="Místo, v němž se pozemní komunikace protínají nebo spojují, nejde-li o vyústění účelové pozemní komunikace na jinou pozemní komunikaci, se nazývá:";
  let a1_a="Křižovatka.";
  let a1_b="Hranice křižovatky.";
  let a1_c="Spojnice pozemních komunikací.";

  let o2= "V obytné a pěší zóně smí řidič jet rychlostí nejvýše:";
  let a2_a= "40 km/h.";
  let a2_b= "20 km/h.";
  let a2_c= "30 km/h.";

  let o3= "Dát přednost v jízdě znamená:";
  let a3_a= "Povinnost řidiče vždy zastavit vozidlo, jestliže do křižovatky přijíždí po hlavní pozemní komunikaci motorové vozidlo nebo tramvaj; nemotorovým vozidlům přednost v jízdě nedává.";
  let a3_b= "Povinnost řidiče nezahájit jízdu nebo jízdní úkon nebo v nich nepokračovat pouze na křižovatkách rozlišených dopravními značkami.";
  let a3_c= "Povinnost řidiče nezahájit jízdu nebo jízdní úkon nebo v nich nepokračovat, jestliže by řidič, který má přednost v jízdě, musel náhle změnit směr nebo rychlost jízdy.";

  let o4="Při řízení provozu na křižovatce policistou je řidič vozidla, pro kterého z pokynu policisty taková povinnost vyplývá, povinen zastavit vozidlo:";
  let a4_a="Před hranicí křižovatky.";
  let a4_b="Na takovém místě, kde bude mít dobrý výhled do křižovatky.";
  let a4_c="V křižovatce a v takové vzdálenosti od policisty, aby nebyla ohrožena jeho bezpečnost.";

  let o5="Křižovatka:"
  let a5_a="Je místo, v němž se pozemní komunikace protínají nebo spojují; za křižovatku se nepovažuje kruhový objezd.";
  let a5_b="Je místo, v němž se pozemní komunikace protínají nebo spojují; za křižovatku se nepovažuje vyústění polní nebo lesní cesty nebo jiné účelové komunikace na jinou pozemní komunikaci.";
  let a5_c="Je místo, v němž se spojují nejvýše dvě pozemní komunikace; za křižovatku se nepovažuje místo, kde se pozemní komunikace protínají.";

  let o6="Řidič motorového vozidla o maximální přípustné hmotnosti nepřevyšující 3 500 kg a autobusu smí jet:";
  let a6_a="Na silnici pro motorová vozidla a na dálnici rychlostí nejvýše 130 km.h-1.";
  let a6_b="Na silnici pro motorová vozidla rychlostí nejvýše 110 km.h-1 a na dálnici rychlostí nejvýše 130 km.h-1.";
  let a6_c="Na silnici pro motorová vozidla rychlostí nejvýše 110 km.h-1 a na dálnici rychlostí nejvýše 130 km.h-1, s výjimkou řidiče autobusu, který na dálnici smí jet rychlostí nejvýše 110 km.h-1.";

  let o7="Řidič motorového vozidla je povinen na výzvu policisty nebo celníka:";
  let a7_a="Podrobit vozidlo kontrole největší přípustné hmotnosti vozidla.";
  let a7_b="Doplnit nádrž vozidla pohonnými látkami.";
  let a7_c="Přibrat jako spolujezdce osobu, které ujelo vozidlo hromadné dopravy osob.";
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
function konec(){
  window.location.replace("test-end.html");
}
function timer(){
  let minute = parseInt(count/60);
  let sec = count % 60;
    count=count-1;
    
    if (count > 0)
    {
     // console.log(minute);
      $(".min").html(minute);
      $(".sec").html(sec);
    }else{
      console.log("KONEC");
    }
    setTimeout(timer, 1000);
}