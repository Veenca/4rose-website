console.log(window.innerWidth);

let footer=$('footer');

container=$('.container-xl')
console.log(container.width())
 const x = window.matchMedia("(max-width: 576px)")
ChangeFooter(x);




function ChangeFooter(x) {
    if (x.matches) { // If media query matches
        footer.css("width",window.innerWidth);
      $('#footToAdj').css("bottom","-60px");
      $('#menuPush').show();
        if(footer.hasClass("d-flex")){
            footer.removeClass("d-flex")
            footer.removeClass("justify-content-around")
        }
    } else {
        footer.css("width",container.width()*1);
        $('#footToAdj').css("bottom",0);
        $('#menuPush').hide();
        if(!footer.hasClass("d-flex")){
            footer.addClass("d-flex")
            footer.addClass("justify-content-around")
        }
    }
  }
  
  x.addEventListener("change", () => {
    ChangeFooter(x);
   
});