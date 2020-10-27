 //---------------LOAD JSON MENU INTO HTML---------------------------\\
 let PizzeRosse=[];
 let PizzeBianche=[];
 let Ciccio=[]
 let Stuzzicheria=[]
 let Primi=[]
 let IGrandiClassici=[]
 let Secondi=[]
 let Insalate=[]
 let Pucce=[]
 let Birre=[];
 let Birreallaspina=[];
 let Vini=[];
 let Bibite=[];
 $.getJSON("../JSON/menu.json", function(json) {
  PizzeRosse=json.PizzeRosse
  PizzeBianche=json.PizzeBianche;
  Ciccio=json.Ciccio;
  Stuzzicheria=json.Stuzzicheria;
  Primi=json.Primi
  IGrandiClassici=json.Igrandiclassici
  Secondi=json.Secondi
  Insalate=json.Insalate
  Pucce=json.Pucce
  Birre=json.Birre
  Birreallaspina=json.Birreallaspina
  Vini=json.Vini;
  Bibite=json.Bibite
  console.log(PizzeRosse)
});

//----------Document Ready--------------\\
$(document).ready(function(){
  let specificCategory = $(".specificList")
//-----------Append Array-------------------\\
specificCategory.map(function(){
  let ListToAppend=($(this).parent().children("p").text());
  ListToAppend = ListToAppend.replace(/\s/g, '');
  console.log(ListToAppend);
 // ListToAppend="PizzeRosse"
  $(this).append(appendArray(eval(ListToAppend)))
 
});

console.log(appendArray(PizzeRosse))

//-----------------VISUALLY TOGGLE MENU--------------------------\\
let categoryArray = $(".mainCategory");
categoryArray.siblings().hide()
categoryArray.on("click", function () {
$(this).siblings().fadeToggle(300);
});
let i=0;
let specificName=categoryArray.siblings().children().children();

specificCategory.children().hide();
specificCategory.parent().children().on("click", function () {
 //console.log($(this).siblings().children())

 $(this).siblings().children().toggle(300);
}); 

},100);
//----Function append array------------\\

function appendArray(array){
  let formattedArray="";
  let i=0;
  for(i=0;i<array.length;i++){
   formattedArray+="<li><p><b>"+array[i].nome+"</b><br> "+array[i].ingredienti+"</p></li>"
  }
  return formattedArray;
}