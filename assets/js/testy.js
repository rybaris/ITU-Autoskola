let count=1800;
let pom=1;
let counter=1;
let body=0;
let spravna0,spravna1,spravna2,spravna3,spravna4,spravna5,spravna6,spravna7;
let stopka = false;
let uspech = false;
let q_count=24;
////////NOVE PROMENE////////////
let json_data;
let categ_count=3;
let categ_index; //index kategorie
let q_index=0 //index otazky
let q_param=[];
let q_used=0;
for(let i = 0; i < categ_count;i++)
{
  q_param[i]=[]; 
  q_param[i][0]="";
  q_param[i][1]=0; //počet použitých otázek z dané kategorie
  q_param[i][2]=[];
}





/////////////////////////
let o0="V provozu na pozemních komunikacích je zakázáno";
let a0_a="Troubit";
let a0_b="Neoprávněně užívat zvláštních výstražných světel a zvláštního zvukového výstražného znamení, které užívá vozidlo s právem přednostní jízdy.";
let a0_c="Svítit za nesnížené viditelnosti.";

function next_q(){ 
  
  if (pom>7)
  {
    pom=1;
  }

  if(counter>=25)
  {
    konec();
  }
  else{
    /*
    let conc_o = "o"+pom;
    let conc_a= "a"+pom+"_a";
    let conc_b= "a"+pom+"_b";
    let conc_c= "a"+pom+"_c";*/

    /// GENEROVANI RANDOM KATEGORIE ///

    let rand_categ = getRandomIndex(0,categ_count-1);
    //console.log(json_data[0].category.count_test);
    while(q_param[rand_categ][0] == "full")
    {
      //repeat generovani, když jsou už všechny otazky z dane kategorie vygenerovany
      rand_categ = getRandomIndex(0,categ_count-1);
      //console.log(q_param[rand_index][0]+"--rand_index");      
    }
    q_param[rand_categ][1]++;
    console.log(json_data[0].category.count_test);
    //console.log("Pocet v kategorii "+rand_index+":"+q_param[rand_index][1]);
    if(q_param[rand_categ][1]==json_data[rand_categ].category.count_test){
      q_param[rand_categ][0]="full";
    }
    

    //// GENEROVANI RANDOM OTAZKY //////
    let used = false;
    let rand_q = getRandomIndex(0,json_data[rand_categ].category.count-1);
    for(let i = 0; i < q_used; i++){
      if(q_param[rand_categ][2][i]==rand_q){
        used = true;
      }
    }
    while(used == true)
    {
      used=false;
      let rand_q = getRandomIndex(0,json_data[rand_categ].category.count-1);
      for(let i = 0; i < q_used; i++){
        if(q_param[rand_categ][2][i]==rand_q){
          used = true;
        }
      }
    }
    q_param[rand_categ][2][q_used]=rand_q;
    console.log("Otazka z kategorie "+rand_categ+":"+rand_q);
    q_used++;
    let otazka = json_data[rand_categ].questions[rand_q].question;
    console.log(otazka);
    console.log(otazka[0]);
    console.log(otazka[1]);
    console.log(otazka[2]);
    console.log(otazka[3]);
    $(".otazka").empty();
    if (otazka[0]=='a' && otazka[1]=='s' && otazka[2]=='s' && otazka[3]=='e')
    {      
      $(".otazka").prepend('<img class="q_img" src="assets/img/smog.jpg" style="width:100%;"/>')
    }
    else{
      $(".otazka").html(otazka);
    }        
    $(".change1").html(json_data[rand_categ].questions[rand_q].answers[0]);
    $(".change2").html(json_data[rand_categ].questions[rand_q].answers[1]);
    $(".change3").html(json_data[rand_categ].questions[rand_q].answers[2]);
    $(".counter").html("Otázka: "+counter+"/25");
    pom++;
    counter++;
  }
  
  //console.log(q_counter);


}
function getRandomIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function ajaxFunction() {  
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://raw.githubusercontent.com/rybaris/ITU-Autoskola/master/assets/js/data.json", true)
  xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          json_data = JSON.parse(xmlHttp.responseText);
          //rightAnswer = json_data[categoryIndex].questions[current].correct_answer;  
          //console.log(json_data[0].questions[1].question); 
          next_q();
          console.log(json_data);
      }      
  }
  
  xmlHttp.send();

  
  //next_q();
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
