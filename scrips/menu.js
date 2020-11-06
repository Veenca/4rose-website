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
let Impasti=[];
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
  Impasti=json.Impasti;
 
});
let cartItems=[];
let delElmtBtn;
$('#cartCounter').text(0);
let countItemCart=0;
let categoryArray = $(".mainCategory");
categoryArray.siblings().hide()
let specificCategory = $(".specificList")
$(document).ready(function () {
  setTimeout(
    function ciao() {
      let i=0;
      //-----------Append Array-------------------\\
      specificCategory.map(function (index) {
        let ListToAppend = ($(this).parent().children("p").text());
        ListToAppend = ListToAppend.replace(/\s/g, '');
       // console.log(index,ListToAppend);
        $(this).append(appendArray(eval(ListToAppend),index))
      });
      //-----------------VISUALLY TOGGLE MENU--------------------------\\
      categoryArray.on("click", function () {
        $(this).siblings().fadeToggle(300);
      });
      specificCategory.children().hide();
      specificCategory.parent().children().on("click", function () {
        $(this).siblings().children().toggle(300);
      });
     $('.cartInfo').hide();
     //submitting elmt
     $('form').submit(function (event){
      event.preventDefault();
      let nome= $(this).parent().children('p').children('b').text()
      let input=$(this).children().children('input')
      let select=$(this).children().children('select')
  //  console.log(input.val(),select.val()); //Debug
      countItemCart+=parseInt(input.val(),10);
      console.log(countItemCart)
     appendCart(nome,input.val(),select.val(),countItemCart) //Function append cart;
      input.val(1);
      select.val('Classico')
     })
    
    },
     400);

});
//------------CART--------\\
let cartBtn = $('.useCart');
let cartActive=false;


let cartContainer=$('#carrello'); 
cartContainer.hide();
cartBtn.on("click",function(){
 
  $('#goToCart').toggleClass('hide');
  $(this).toggle();
  $('.cartInfo').toggle();
  $(this).siblings('p:first').toggle();
  cartActive=!cartActive;
  cartContainer.fadeToggle(100);
  //css
  $('#footToAdj').css("bottom","-8vh");
  if(!cartActive && !x.matches){
    $('#footToAdj').css("bottom","0");
  }
  
  //stop css
  $('#liImpasti').toggle();
  if(cartActive){
   
  }
});


//----Functions------------\\

function appendArray(array,index) {
  let formattedArray = "";
  let i = 0;
 
  for (i = 0; i < array.length; i++) {
   if(index<3){
    formattedArray += "<li><p><b>" + array[i].nome + "</b><br> " + array[i].ingredienti + "</p> <form action=''><p class='cartInfo'>Quantita: <input type='number' min='1' max='99' maxlength='2' value='1'> <br> Impasto:<select class='custom-select'>\
    <option selected value='Classico'>Classico</option>\
      <option value='Cereali'>Cereali</option>\
      <option value='Integrale tritordeum'>Integrale tritordeum</option>\
      <option value='Curcuma'>Curcuma</option>\
      <option value='Senza Lievito'>Senza Lievito</option>\
      <option value='Senza Glutine'>Senza Glutine</option>\
      <option value='Stesa Napoletana'>Stesa Napoletana</option>\
      <option value='Ciabatta Romana'>Ciabatta Romana</option>\
    </select> <button type='submit'value='Submit' ><i class='fas fa-cart-plus'></i></button></p></form></li>"
    }else{
      formattedArray += "<li><p><b>" + array[i].nome + "</b><br> " + array[i].ingredienti + "</p><form action=''><p class='cartInfo'>Quantita: <input type='number' min='1' max='99' maxlength='2' value='1'> <button type='submit'value='Submit' ><i class='fas fa-cart-plus'></i></button></p></form></li>"
  }
    }  
  return formattedArray;
}
function removeElmt(){
  console.log("ciao")
}
function appendCart(name,quantity,dough,counter){
  if(dough){
  //$('#cartList').append("<li>"+name+" x "+quantity+" impasto: "+dough+"</li>")
  cartItems.push("<li alt="+cartItems.length+">"+name+" x "+quantity+" impasto: "+dough+" <button class=\"delCartElmt\"  onclick='delElmt("+cartItems.length+','+quantity+")'>rimuovi</button>"+"</li>");
}else{
 // $('#cartList').append("<li>"+name+" x "+quantity+"</li>")
  cartItems.push("<li alt="+cartItems.length+">"+name+" x "+quantity+" <button class=\"delCartElmt\" onclick='delElmt("+cartItems.length+','+quantity+")'>rimuovi</button>"+"</li>");
}
$('#cartList').html(cartItems);

  $('#cartCounter').text(counter);
}

function delElmt(index,quantity){
  countItemCart-=quantity;

  cartItems.splice(index,1);
  $('#cartList').html(cartItems);
  $('#cartCounter').text(countItemCart);
}
let copyBtn=($('.copyPaste'))
copyBtn.on("click",function(){
  let str=$('#cartList').text()
  for(let i=0;i<cartItems.length;i++){
 str= str.replace("rimuovi","\n");
}
 
  console.log(str);
})
//CODICE BUTTATO

/* if(cartActive && !x.matches){
  $('#footToAdj').css("bottom","-8vh");
  
}else if(!cartActive && !x.matches){
  $('#footToAdj').css("bottom","0");
}
else{
  $('#footToAdj').css("bottom","-8vh");
} */
