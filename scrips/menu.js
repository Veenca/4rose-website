//---------------LOAD JSON MENU INTO HTML---------------------------\\
let PizzeRosse = [];
let PizzeBianche = [];
let Ciccio = []
let Stuzzicheria = []
let Primi = []
let IGrandiClassici = []
let Secondi = []
let Insalate = []
let Pucce = []
let Birre = [];
let Birreallaspina = [];
let Vini = [];
let Bibite = [];
$.getJSON("../JSON/menu.json", function (json) {
  PizzeRosse = json.PizzeRosse
  PizzeBianche = json.PizzeBianche;
  Ciccio = json.Ciccio;
  Stuzzicheria = json.Stuzzicheria;
  Primi = json.Primi
  IGrandiClassici = json.Igrandiclassici
  Secondi = json.Secondi
  Insalate = json.Insalate
  Pucce = json.Pucce
  Birre = json.Birre
  Birreallaspina = json.Birreallaspina
  Vini = json.Vini;
  Bibite = json.Bibite
 
});

let categoryArray = $(".mainCategory");
categoryArray.siblings().hide()
let specificCategory = $(".specificList")
$(document).ready(function () {
  setTimeout(
    function () {
      //-----------Append Array-------------------\\
      specificCategory.map(function () {
        let ListToAppend = ($(this).parent().children("p").text());
        ListToAppend = ListToAppend.replace(/\s/g, '');
        $(this).append(appendArray(eval(ListToAppend)))
      });
      //-----------------VISUALLY TOGGLE MENU--------------------------\\
      categoryArray.on("click", function () {
        $(this).siblings().fadeToggle(300);
      });
      specificCategory.children().hide();
      specificCategory.parent().children().on("click", function () {
        $(this).siblings().children().toggle(300);
      });
      //do something special
      
    }, 325);

});
//--Changing footer--\\

//----Functions------------\\

function appendArray(array) {
  let formattedArray = "";
  let i = 0;
  for (i = 0; i < array.length; i++) {
    formattedArray += "<li><p><b>" + array[i].nome + "</b><br> " + array[i].ingredienti + "</p></li>"
  }
  return formattedArray;
}