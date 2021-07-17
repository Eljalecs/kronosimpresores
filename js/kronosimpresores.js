$(document).ready(function(){
    // Activate Carousel with a specified interval
    $("#myCarousel").carousel({interval: 3000});
          
    // Enable Carousel Indicators
    $(".item1").click(function(){
      $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
      $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
      $("#myCarousel").carousel(2);
    });
      
    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(){
      $("#myCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(){
      $("#myCarousel").carousel("next");
    });
  });
  
 
  
    function showMenu(){
      var showMenu=document.getElementById("modal-box-menu");
        //showMenu.style.display='block';
        //showMenu.style.opacity='1';
        showMenu.classList.add('pruebamenu');
    }
    
    function hideMenu(){
      var showMenu=document.getElementById("modal-box-menu");
      //showMenu.style.display='none';
      //showMenu.style.opacity='0';
      showMenu.classList.remove('pruebamenu');
    }
    // remove or add clases when user clicks on productos impresos
    function printproductFocus(){
      var btnFocus=document.getElementById("printProductbtn");
      var subPrintmenu=document.getElementById("subPrintmenu");
      if(btnFocus.classList.contains('printprodfocus')){
        btnFocus.classList.remove('printprodfocus');
        subPrintmenu.classList.remove('showprintmenu');
      }else{
        btnFocus.classList.add('printprodfocus');
        subPrintmenu.classList.add('showprintmenu');
      };
      //subPrintmenu.style.transition = "width 2s";
      //subPrintmenu.style.transition = "height 2s";
      //btnFocus.style.color='red';
      //btnFocus.classList.add('prueba');
      //btnFocus.classList.remove('print-product-h3');
      //alert('jajaja');
      //showsubprintmenu
    }

    //turn on active when user clicks on product print sub menu
    function activeList(evt) {
      var i, tabcontent, tablinks;
     //alert("jajajaj");
      tablinks = document.getElementsByClassName("print-pst");
      console.log(tablinks);
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].classList.add("activeListbtn");
      }
      evt.currentTarget.className += "activeListbtn";
    }
    
    //LOAD MODAL MENU TO ALL PAGES IN DOCUMENT
    $(document).ready(function(){
      $( "#loadModal" ).load( "index.html #modal-box-menu" );
      $( "#loadfooter" ).load( "index.html #footerdiv" );
    });
    
    //face effects when user put mouse over a name in  team section
    
    function bigImg(cara) {
      cara.style.height = "64px";
      cara.style.width = "64px";
      cara.style.transition=("all 0.5s");
    }
    
    function normalImg(cara){
      var closest = this.closest("#imagentest");
      closest.style.height = "109px";
      closest.style.transition=("all 0.5s");
      //alert("mouse is over");
    }
    var element = document.getElementById("myElement");
    var closest = element.closest(".container");
    if (closest) {
      closest.style.border = "10px solid yellow";
    }
    // Get the element with id="defaultOpen" and click on it
    //document.getElementById("firstActive").click();

    
//function turn productos impresos change between divs sub menu
function changeDiv(evt, cityName) {
  let i, tabcontent, btns;
  tabcontent = document.getElementsByClassName("proimp-btn-description");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  btns = document.getElementsByClassName("btns");
  for (i = 0; i < btns.length; i++) {
    btns[i].className = btns[i].className.replace("active","");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += "active";
}
// scroll to specific location in marketing-digital with float btns

$(document).ready(function(){
  $('#scrolltop').click(function(){
    //$('body').animate({
      //var scrollpos=$("#markdigseo").offset().top;
      alert("scrollpossss");
      //$('html, body').animate({scrollTop:scrollpos}, 'slow');
        //scrollTop: 0},2000);
    });
});

// When the user scrolls the page, execute myFunction

    /*
    function showMenu(){
    var showMenu=document.getElementById("modal-box-menu");
    if(showMenu.classList.contains('show-modal')){
      showMenu.classList.remove('show-modal');
    }else{
      showMenu.classList.add('show-modal');
    };
  }
  window.setTimeout(function(){
        showMenu.style.display='block';
        showMenu.style.opacity=1;
      },1000);*/