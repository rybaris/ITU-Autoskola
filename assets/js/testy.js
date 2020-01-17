let count=1800;
let counter=1;
let body=0;
let q_count=24; // počet otázek (indexace od 0)

let json_data;
let categ_count=9; // počet kategorií
let categ_index; // index kategorie
let q_index=0 // index otazky
let q_param=[];
let q_used=0;
let rand_categ;
let rand_q;
let correct_answer;
let points;

let json_data2;


for(let i = 0; i < categ_count;i++)
{
  q_param[i]=[]; 
  q_param[i][0]=""; //pro uložení "full", když máme danou kategorii plnou
  q_param[i][1]=0; //počet použitých otázek z dané kategorie
  q_param[i][2]=[]; //indexy použitých otázek
}





/////////////////////////
function next_q(){ 

  if(counter>25)
  {
    konec();
  }
  else{
    get_random_q(); //generovani random indexu otazky        
    console.log("Otazka z kategorie "+(rand_categ+1)+":"+(rand_q+1));    
    let otazka = json_data[rand_categ].questions[rand_q].question;    
    points = json_data[rand_categ].category.points;    

    $(".otazka").empty();
    if (json_data[rand_categ].questions[rand_q].type=="img")
    {      
      $(".otazka").prepend('<img class="q_img" src="' + otazka+ '" style="max-width:450px;max-height:220px;"/>')
    }
    else{
      $(".otazka").html(otazka);
    }        
    $(".change1").html(json_data[rand_categ].questions[rand_q].answers[0]);
    $(".change2").html(json_data[rand_categ].questions[rand_q].answers[1]);
    $(".change3").html(json_data[rand_categ].questions[rand_q].answers[2]);
    $(".counter").html("Otázka: "+counter+"/25");    
    counter++;
  }    


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
          next_q();          
      }      
  }
  
  xmlHttp.send();

  
}

function get_random_q(){

      /// GENEROVANI RANDOM INDEXU KATEGORIE ///

      rand_categ = getRandomIndex(0,categ_count-1);      
      while(q_param[rand_categ][0] == "full")
      {
        //repeat generovani, když jsou už všechny otazky z dane kategorie vygenerovany
        rand_categ = getRandomIndex(0,categ_count-1);    
      }
      q_param[rand_categ][1]++;    
      if(q_param[rand_categ][1]==json_data[rand_categ].category.count_test){
        q_param[rand_categ][0]="full";        
      }

      //// GENEROVANI RANDOM INDEXU OTAZKY //////
      let used = false;
      rand_q = getRandomIndex(0,json_data[rand_categ].category.count-1);
      for(let i = 0; i < q_used; i++){
        if(q_param[rand_categ][2][i]==rand_q){
          used = true;
        }
      }
      while(used == true)
      {
        used=false;
        rand_q = getRandomIndex(0,json_data[rand_categ].category.count-1);
        for(let i = 0; i < q_used; i++){
          if(q_param[rand_categ][2][i]==rand_q){
            used = true;
          }
        }
      }
      localStorage.setItem("index"+(counter-1),rand_categ+" "+rand_q); //uložení indexu otázky (rand_categ rand_q) 
      correct_answer = json_data[rand_categ].questions[rand_q].correct_answer;
      q_param[rand_categ][2][q_used]=rand_q;
      q_used++;
}


function odp1(){
  localStorage.setItem("index_answ"+(counter-2), correct_answer+" "+"0"); //uložení indexu odpovědí 

  if(correct_answer==0){
    body+=points;   
  }     
}
function odp2(){
  localStorage.setItem("index_answ"+(counter-2), correct_answer+" "+"1");

  if(correct_answer==1){
    body+=points;      
  }   
}
function odp3(){
  localStorage.setItem("index_answ"+(counter-2), correct_answer+" "+"2");

  if(correct_answer==2){
    body+=points;    
  }
  
}
function konec(){
  let konec_cas,konec_cas2;
  let konec_body;
  konec_cas=end_time(konec_cas);
  localStorage.setItem("konec_cas2", konec_cas); //uložení času
  localStorage.setItem("konec_body", body); //uložení bodů

  /// DOGENERAVANI INDEXŮ ///

  while(counter <= 25){
    get_random_q();
    counter++
  }
  
  /// NACTENI STRANKY S HODNOCENIM ///
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
    $(".usp2").html("Prošel");
    $(".usp2").css('color','green');
  }
  else{
    $(".obr").attr('src', 'assets/img/stop.png');
    $(".usp2").html("Neprošel");
    $(".usp2").css('color','red');
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

function color_answers(){
  let x,y;
  for(let i = 0; i < 25;i++)
  {
    x = localStorage.getItem("index_answ"+i);
    //console.log("INDEX: "+i+" CISLO: "+x);
    if(x==undefined || x==null){
      $("#o"+i).css('background-color', 'red');
    }
    else if(x[0]==x[2])
    {
      $("#o"+i).css('background-color', 'green');
    }
    else{
      $("#o"+i).css('background-color', 'red');
    }
  }
}
function display_q(numb){  
  $(".disp_q").css("display", "block");
    
  //console.log(index);
  ajax_end(numb); 
  //console.log("ZOBRAZIT: "+index[0]+" "+index[2]);

    
  
}
function vanish(numb){
  $(".disp_q").css("display", "none");
}
function clear_storage(){
  localStorage.clear();
}

function ajax_end(numb){
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", "https://raw.githubusercontent.com/rybaris/ITU-Autoskola/master/assets/js/data.json", true)
  xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
  xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
          json_data2 = JSON.parse(xmlHttp.responseText); 
          
          let index = localStorage.getItem("index"+(numb-1));
          let html_q;
          $(".otazka2").empty();
          $(".first").empty();
          $(".second").empty();
          $(".third").empty(); 
          $(".first").css('background-color','white');
          $(".second").css('background-color','white');
          $(".third").css('background-color','white');       
          if (index[3]!=undefined || index[3]!=null)
          {
            html_q = json_data2[index[0]].questions[index[2]+index[3]].question;
            if(json_data2[index[0]].questions[index[2]+index[3]].type=="img")
            {
              $(".otazka2").prepend('<img class="q_img" src="' +html_q+ '" style="max-width:200px;"/>');
            }
            else{
              $(".otazka2").html(html_q);
            }

            html_q = json_data2[index[0]].questions[index[2]+index[3]].answers[0];
            $(".first").html(html_q);
            html_q = json_data2[index[0]].questions[index[2]+index[3]].answers[1];
            $(".second").html(html_q);
            html_q = json_data2[index[0]].questions[index[2]+index[3]].answers[2];
            $(".third").html(html_q);

            if(json_data2[index[0]].questions[index[2]+index[3]].correct_answer==0)
            {
              $(".first").css('background-color','green');
            }
            else if(json_data2[index[0]].questions[index[2]+index[3]].correct_answer==1)
            {
              $(".second").css('background-color','green');
            }
            else{
              $(".third").css('background-color','green');
            }
          }
          else{
            html_q = json_data2[index[0]].questions[index[2]].question;

            if(json_data2[index[0]].questions[index[2]].type=="img")
            {
              $(".otazka2").prepend('<img class="q_img" src="' +html_q+ '" style="max-width:200px;"/>');
            }
            else{
              $(".otazka2").html(html_q);
            }
            html_q = json_data2[index[0]].questions[index[2]].answers[0];
            $(".first").html(html_q);
            html_q = json_data2[index[0]].questions[index[2]].answers[1];
            $(".second").html(html_q);
            html_q = json_data2[index[0]].questions[index[2]].answers[2];
            $(".third").html(html_q);
            if(json_data2[index[0]].questions[index[2]].correct_answer==0)
            {
              $(".first").css('background-color','green');
            }
            else if(json_data2[index[0]].questions[index[2]].correct_answer==1)
            {
              $(".second").css('background-color','green');
            }
            else{
              $(".third").css('background-color','green');
            }
          } 

          
          let x = localStorage.getItem("index_answ"+(numb-1));
          if(x!=undefined || x!=null){
            if(x[2]=="0" && x[0]!=x[2])
            {
              $(".first").css('background-color','red');
            }
            else if(x[2]=="1" && x[0]!=x[2])
            {
              $(".second").css('background-color','red');
            }
            else if(x[2]=="2" && x[0]!=x[2])
            {
              $(".third").css('background-color','red');
            }
          }
      }      
  }
  
  xmlHttp.send();
}