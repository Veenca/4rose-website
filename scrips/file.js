//console.log(window.innerWidth);

let footer=$('footer');

container=$('.container-xl')
//console.log(container.width())
 const x = window.matchMedia("(max-width: 576px)")

let diff=$(document).height()-window.innerHeight;
let divisione =$(document).height()/window.innerHeight;

diff=(diff*(-1))*divisione

const cartHeight=$('.cart-content').height();

ChangeFooter(x);




function ChangeFooter(x) {

    if (x.matches) { // If media query matches
        footer.css("width",window.innerWidth);
      $('#footToAdj').css("bottom","-50px");
      $('#menuPush').show();
        if(footer.hasClass("d-flex")){
            footer.removeClass("d-flex")
            footer.removeClass("justify-content-around")
        }
    } else {
      
        footer.css("width",container.width()*1);
        $('#footToAdj').css("bottom",(0));
        $('#menuPush').hide();
        if(!footer.hasClass("d-flex")){
            footer.addClass("d-flex")
            footer.addClass("justify-content-around")
        }
    }
  }
  
  x.addEventListener("change", () => {
    ChangeFooter(x);
    $('#carouselExampleControls').css({height:$('#fornoImg').height()})
});


//--------------RESIZE HEIGHT---------\\
// create an Observer instance
/* const resizeObserver = new ResizeObserver(entries => 
    console.log('Body height changed:', entries[0].target.clientHeight)
  )
  
  // start observing a DOM node
  resizeObserver.observe(document.body) */