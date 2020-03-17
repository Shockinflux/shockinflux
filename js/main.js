 $(window).on ('load', function (){

     // -------------------- Site Preloader
           $('#loader').fadeOut(); // will first fade out the loading animation
           $('#loader-wrapper').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
           $('body').delay(350).css({'overflow':'visible'});

 })


$(document).ready(function(){
  // Add smooth scrolling to all links

  $('body .manage').hide(0);
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


window.onscroll = function() {checkScroll()};
function checkScroll(){
    var startY = $('.navbar').height(); //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
      $('.navbar').css("box-shadow","0 8px 6px -8px #ccc");
        $('.navbar').css("border-bottom","none");
        // $('#logo img').attr("src","img/logo/sh_b.png")
        // $('.navbar .menu-icon').css("background-color","#0A3A60");
        // $('.navbar button.navbar-toggler').css("border","1px solid #0A3A60");
        // $('.navbar a').css("color","#0A3A60");
    }else{
      $('.navbar').css("box-shadow","none");
        $('.navbar').css("border-bottom","1px solid #ccc");
        // $('.navbar').removeClass("scrolled");
        // $('#logo img').attr("src","img/logo/logo_small_white.png")
        // $('.navbar .menu-icon').css("background-color","#FFF");
        // $('.navbar button.navbar-toggler').css("border","1px solid #FFF");
        // $('.navbar a').css("color","#fff");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}




//logo Slider

$('.customer-logos').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: false,
  pauseOnHover: true,
responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      dots: false
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 480,
    settings: {
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

});

function swap(value){
  let managImg = "../mockup/deckman2.png";
  let myneImg  = "../mockup/Iphonex.png";

  let bannersContent = {
    myne : {
      p : "Be in control and manage your lifestyle on-the-go. Send and receive money with the latest innovative financial methods. Organize your finances and generate reports. Myne is the most personal lifestyle financial tool in your palm.",
      b : "Personal & Seemless",
      img : myneImg
    },
    manage : {
      p : "Receive and manage your business funds on the go, with our efficient, innovative payment tools. Manage and disburse funds, generate financial reports on your products and services of your stores and involve people on your team.",
      b : "Efficient & Limitless",
      img : managImg
    }
  }


  if(value == "myne"){
    $('body .desc h1').text('Shockinflux Myne');
    $('body .desc p').text(bannersContent['myne']['p']);
    $('body .desc h3').text(bannersContent['myne']['b']);
    $('body .desc .myne-btn').removeClass("active-btn").addClass('default-btn');
    $('body .desc .mng-btn').attr('onclick',"").removeClass("default-btn").addClass('active-btn');

    $('body .desc .mng-btn').attr('onclick',"swap('manage')");

    $('body .imgdesc-man').removeClass("imgdesc-man anime").addClass('imgdesc').addClass('device');
    // $('body .imgdesc').removeClass("anime");
    // $('body .imgdesc').css("background-image",`url(${myneImg})`).css('opacity',1);
    $('body .myne .lol').removeClass("lol").addClass('col-md-2');
    $('body .myne .col-md-7').removeClass("col-md-7").addClass('col-md-4');

    // $('body .manage').fadeOut(100);
    // $('body .myne').fadeIn(1500);
  }else if(value == "manage"){
    $('body .desc h1').text('Shockinflux Manage');
    $('body .desc p').text(bannersContent['manage']['p']);
      $('body .desc h3').text(bannersContent['manage']['b']);
    $('body .desc .myne-btn').removeClass("default-btn").addClass('active-btn');
    $('body .desc .mng-btn').attr('onclick',"").removeClass("active-btn").addClass('default-btn');
  $('body .desc .myne-btn').attr('onclick',"swap('myne')");
    $('body .imgdesc').removeClass("imgdesc device").addClass('anime').addClass('imgdesc-man');
    // $('body .imgdesc').removeClass("device");
    // $('body .imgdesc-man').css("background-image",`url(${managImg})`).css('opacity',1);
    $('body .myne .col-md-2').removeClass("col-md-2").addClass('lol');
    $('body .myne .col-md-4').removeClass("col-md-4").addClass('col-md-7');
    // console.log("here");
    // $('body .myne').fadeOut(500);
    // $('body .manage').fadeIn(2000);
  }
}

contactForm = (formname) => {
             let form = $(`form[name=${formname}]`);

             let data = form.serializeObject();
            console.log(data);

        }
