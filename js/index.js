/* Javascript Document */
$( document ).ready(function() { 
  $(".solar").addClass("visible");
 
/*$(window).bind('scroll', function() {
    if($(window).scrollTop() >= $('#next3').offset().top + $('#next3').outerHeight() - window.innerHeight) {
        alert('end reached');
        
    }
});*/







/*$(window).scroll(function() {
   var hT1 = $('.solar').offset().top,
       hH1 = $('.solar').outerHeight(),
       wH1 = $(window).height(),
       wS1 = $(this).scrollTop();
   if (wS1 <= (hT1+hH1-wH1)){
            alert('hi');
   }else{
            alert('hello');
   }



   
});*/



$(window).scroll(function() {
   var hT = $('#scroll-to').offset().top,
       hH = $('#scroll-to').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
  
   if (wS > (hT+hH-wH+400) && wS <= (hT+hH-wH+3000)){

            

            $(".solar").removeClass("visible");
            $("#sun").removeClass("visible1");
            $("#oh").removeClass("visible1");
            $("#oh1").removeClass("visible1");
            $("#oh2").removeClass("visible1");
            $("#oh3").removeClass("visible1");
   }else{
            $(".solar").addClass("visible");
            $("#sun").addClass("visible1");
            $("#oh").addClass("visible1");
            $("#oh1").addClass("visible1");
            $("#oh2").addClass("visible1");
            $("#oh3").addClass("visible1");
   }
   
   
});




$(window).scroll(function () { 
    //You've scrolled this much:
       /*console.log("You've scrolled " + $(window).scrollTop() + " pixels");*/
  
});

/*$('#next3').hover(function(){

            $(".solar").removeClass("visible");
            $("#sun").removeClass("visible1");
            $("#oh").removeClass("visible1");
            $("#oh1").removeClass("visible1");
            $("#oh2").removeClass("visible1");
        });*/




if (screen.width <= 800) {
    $('#3').hide();
    $('#5').show();
  }else{
    $('#5').hide();
    $('#3').show();
  }


$(".content").on("scroll", function () {

        location.href="#3";
        /*alert("Started scrolling!");*/
 
        var cur = $(this).scrollLeft();
        if (cur == 0) {
            location.href="#1"; 
        } 
        else {
            var max = $(this)[0].scrollWidth - $(this).parent().width();
            if (cur == max) {
                location.href="#2";
            } else {
                /*$('#container').addClass('shadow-right shadow-left');*/
            }
        }
    });




  $('.content').mousewheel(function(event, delta) {
    event.preventDefault();

    this.scrollLeft -= (delta * 120);
    return false;
  });

  $('body').mousewheel(function(event, delta) {
    event.preventDefault();
    this.scrollTop -= (delta * 110);
    return false;
  });
    
});




var $w = $(window);
var $d = $('#oh');
var $d1 = $('#oh1');
var $d2 = $('#oh2');
var $d3 = $('#oh3');
$w.scroll(function(){
  $d.css('left',formula400())

  $d1.css('left',formula500())
  $d2.css('left',formula600())
  $d3.css('left',formula800())
});
function formula400(){
   var scroll = $(document).scrollTop();
     window.objX = 300*Math.cos(scroll/150);
     window.objY = 150*Math.sin(scroll/150);


/*
     var canvas = document.getElementById("trigCan"), ctx = canvas.getContext('2d');
for (var i = 0; i < 360; i++) {
    var x = Math.sin(scroll/150), y = Math.cos(scroll/150);
    ctx.stroke();
    ctx.fillRect(50 * 2 * x * 2 / 5 + 200, 40 * 2 * y / 4 + 200, 10, 10, true);
}*/




     var el = $("#oh");
    var position = el.position();
    console.log( "left: " + position.left);



    if(position.left < -200 && position.left < -220){
        /*var image = document.getElementById('oh1');
        if (image.src.match("apple_logo")) {
        }*/
        /*alert('Web Development');*/
        $('#text1').removeClass('visible1');
     }else{
        /*var image = document.getElementById('oh1');
            image.src = "apple_logo.png";*/
        $('#text1').addClass('visible1');
        
     }




    
    // user scrolling down or up
    var position1 = $(window).scrollTop(); // should start at 0

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        var image = document.getElementById('oh');

        if(scroll > position1) {

            /*$("#oh").addClass("rotate");*/
            /*var degrees = 30;
            var elem = document.getElementById('oh');
            elem.style.WebkitTransform = "rotate("+degrees+"deg)";*/

            

             // scrolling downwards
             if(position.left <-300){
                        $('#oh').css('width', '40px').css('height','40px');
                        image.src = "web_logo.png";
                        /*$('#text1').addClass('visible1');*/
                        /*console.log('1');*/
                     }else if(position.left <-250 && position.left >-300){
                        $('#oh').css('width', '45px').css('height','45px');
                        image.src = "web_logo.png";
                        /*$('#text1').addClass('visible1');*/
                        /*console.log('2');*/
                     }else if(position.left <-200 && position.left >-250){
                        $('#oh').css('width', '50px').css('height','50px');
                        image.src = "web_logo.png";
                       /* $('#text1').addClass('visible1');*/
                        /*console.log('3');*/
                     }else if(position.left <-150 && position.left >-200){
                        $('#oh').css('width', '55px').css('height','55px');
                        image.src = "tilted_web_logo_2.png";
                       /* $('#text1').addClass('visible1');*/
                        /*console.log('4');*/
                     }else if(position.left <-100 && position.left >-150){
                        $('#oh').css('width', '60px').css('height','60px');
                        image.src = "tilted_web_logo.png";
                       /* $('#text1').addClass('visible1');*/
                        /*console.log('5');*/
                     }else if(position.left <-50 && position.left >-100){
                        $('#oh').css('width', '65px').css('height','65px');
                        image.src = "tilted_web_logo.png";
                        /*$('#text1').addClass('visible1');*/
                        /*console.log('6');*/
                     }else if(position.left <0 && position.left >-50){
                        $('#oh').css('width', '75px').css('height','75px');
                        image.src = "web_logo.png";
                      /*  $('#text1').addClass('visible1');*/
                        /*console.log('7');*/
                     }else if(position.left <50 && position.left >0){
                        $('#oh').css('width', '85px').css('height','85px');
                        image.src = "tilted_web_logo_2.png";
                       /* $('#text1').addClass('visible1');*/
                        /*console.log('8');*/
                     }else if(position.left <100 && position.left >50){
                        $('#oh').css('width', '95px').css('height','95px');
                        image.src = "web_logo.png";
                        $('#text1').addClass('visible1');
                        /*console.log('9');*/
                     }else if(position.left <150 && position.left >100){
                        $('#oh').css('width', '105px').css('height','105px');
                        image.src = "web_logo.png";
                 /*       $('#text1').addClass('visible1');*/
                        /*console.log('10');*/
                     }else if(position.left <200 && position.left >150){
                        $('#oh').css('width', '115px').css('height','115px');
                        image.src = "web_logo.png";
                       /* $('#text1').addClass('visible1');*/
                        /*console.log('11');*/
                     }else if(position.left <250 && position.left >200){
                        $('#oh').css('width', '125px').css('height','125px');
                        image.src = "tilted_web_logo_2.png";

                       /* $('#text1').removeClass('visible1');*/
                       /* console.log('12');*/
                        /*alert('Web Development');*/
                     }else{
                        $('#oh').css('width', '135px').css('height','135px');
                        image.src = "web_logo.png";
                       /* $('#text1').addClass('visible1');*/
                        /*console.log('13');*/
                     }
        } else {
             // scrolling upwards
             if(position.left <-300){
                        $('#oh').css('width', '135px').css('height','135px');
                        image.src = "web_logo.png";
                        /*$('#text1').addClass('visible1');*/
                     }else if(position.left <-250 && position.left >-300){
                        $('#oh').css('width', '125px').css('height','125px');
                        image.src = "tilted_web_logo_2.png";
                      /*  $('#text1').removeClass('visible1');*/
                     }else if(position.left <-200 && position.left >-250){
                        $('#oh').css('width', '115px').css('height','115px');
                        image.src = "web_logo.png";
                       /* $('#text1').addClass('visible1');*/
                     }else if(position.left <-150 && position.left >-200){
                        $('#oh').css('width', '105px').css('height','105px');
                        image.src = "web_logo.png";
                     /*   $('#text1').addClass('visible1');*/
                     }else if(position.left <-100 && position.left >-150){
                        $('#oh').css('width', '95px').css('height','95px');
                        image.src = "web_logo.png";
                       /* $('#text1').addClass('visible1');*/
                     }else if(position.left <-50 && position.left >-100){
                        $('#oh').css('width', '85px').css('height','85px');
                        image.src = "tilted_web_logo_2.png";
                       /* $('#text1').addClass('visible1');*/
                     }else if(position.left <0 && position.left >-50){
                        $('#oh').css('width', '75px').css('height','75px');
                        image.src = "web_logo.png";
                      /*  $('#text1').addClass('visible1');*/
                     }else if(position.left <50 && position.left >0){
                        $('#oh').css('width', '65px').css('height','65px');
                        image.src = "tilted_web_logo.png";
                      /*  $('#text1').addClass('visible1');*/
                     }else if(position.left <100 && position.left >50){
                        $('#oh').css('width', '60px').css('height','60px');
                        image.src = "tilted_web_logo.png";
                       /* $('#text1').addClass('visible1');*/
                     }else if(position.left <150 && position.left >100){
                        $('#oh').css('width', '55px').css('height','55px');
                        image.src = "tilted_web_logo_2.png";
                        /*$('#text1').addClass('visible1');*/
                     }else if(position.left <200 && position.left >150){
                        $('#oh').css('width', '50px').css('height','50px');
                        image.src = "web_logo.png";
                   /*     $('#text1').addClass('visible1');*/
                     }else if(position.left <250 && position.left >200){
                        $('#oh').css('width', '45px').css('height','45px');
                        image.src = "web_logo.png";
                 /*       $('#text1').addClass('visible1');*/
                     }else{
                        $('#oh').css('width', '40px').css('height','40px');
                        image.src = "web_logo.png";
                     /*   $('#text1').addClass('visible1');*/
                     }

        }
        position1 = scroll;
    });



     


     /*if(position.top > 0){
        $('#oh').css('width', '100px').css('height','100px');
     }else{
        $('#oh').css('width', '60px').css('height','60px');
     }*/



    $('.oval').css('width', '600px').css('height','300px').css('margin-left','43%').css('margin-top','8%');

    /*return $('#oh').css('background-color','red');*/  
    return $('#oh').css('transform', 'translate(' + window.objX + 'px,' + window.objY + 'px)');
  
 /* return Math.sin($w.scrollTop()/100)*300*/
}
function formula500(){
   var scroll = $(document).scrollTop();
     window.objX = 460*Math.cos(scroll/200);
     window.objY = 200*Math.sin(scroll/200);

     var e2 = $("#oh1");
    var position = e2.position();
    /*console.log( "left: " + position.left + ", top: " + position.top );*/

     if(position.left < -200 && position.left < -220){
        /*var image = document.getElementById('oh1');
        if (image.src.match("apple_logo")) {
        }*/
        /*alert('Web Development');*/
        $('#text2').removeClass('visible1');
     }else{
        /*var image = document.getElementById('oh1');
            image.src = "apple_logo.png";*/
        $('#text2').addClass('visible1');
        
     }



     // user scrolling down or up
    var position1 = $(window).scrollTop(); // should start at 0

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        var image = document.getElementById('oh1');

        if(scroll > position1) {

            /*$("#oh").addClass("rotate");*/
            /*var degrees = 30;
            var elem = document.getElementById('oh');
            elem.style.WebkitTransform = "rotate("+degrees+"deg)";*/

            

             // scrolling downwards
             if(position.left <-300){
                        $('#oh1').css('width', '40px').css('height','40px');
                        image.src = "android_logo.png";
                      /*  $('#text2').addClass('visible1');*/
                        /*console.log('1');*/
                     }else if(position.left <-250 && position.left >-300){
                        $('#oh1').css('width', '45px').css('height','45px');
                        image.src = "android_logo.png";
                       /* $('#text2').addClass('visible1');*/
                        /*console.log('2');*/
                     }else if(position.left <-200 && position.left >-250){
                        $('#oh1').css('width', '50px').css('height','50px');
                        image.src = "android_logo.png";
                        /*$('#text2').addClass('visible1');*/
                        /*console.log('3');*/
                     }else if(position.left <-150 && position.left >-200){
                        $('#oh1').css('width', '55px').css('height','55px');
                        image.src = "tilted_android_logo_2.png";
                       /* $('#text2').addClass('visible1');*/
                        /*console.log('4');*/
                     }else if(position.left <-100 && position.left >-150){
                        $('#oh1').css('width', '60px').css('height','60px');
                        image.src = "tilted_android_logo.png";
                        /*$('#text2').addClass('visible1');*/
                        /*console.log('5');*/
                     }else if(position.left <-50 && position.left >-100){
                        $('#oh1').css('width', '65px').css('height','65px');
                        image.src = "tilted_android_logo.png";
                       /* $('#text2').addClass('visible1');*/
                        /*console.log('6');*/
                     }else if(position.left <0 && position.left >-50){
                        $('#oh1').css('width', '75px').css('height','75px');
                        image.src = "android_logo.png";
                       /* $('#text2').addClass('visible1');*/
                        /*console.log('7');*/
                     }else if(position.left <50 && position.left >0){
                        $('#oh1').css('width', '85px').css('height','85px');
                        image.src = "tilted_android_logo_2.png";
                      /*  $('#text2').addClass('visible1');*/
                        /*console.log('8');*/
                     }else if(position.left <100 && position.left >50){
                        $('#oh1').css('width', '95px').css('height','95px');
                        image.src = "android_logo.png";
                   /*     $('#text2').addClass('visible1');*/
                        /*console.log('9');*/
                     }else if(position.left <150 && position.left >100){
                        $('#oh1').css('width', '105px').css('height','105px');
                        image.src = "android_logo.png";
                       /* $('#text2').addClass('visible1');*/
                        /*console.log('10');*/
                     }else if(position.left <200 && position.left >150){
                        $('#oh1').css('width', '115px').css('height','115px');
                        image.src = "android_logo.png";
                    /*    $('#text2').addClass('visible1');*/
                        console.log('11');
                     }else if(position.left <250 && position.left >200){
                        $('#oh1').css('width', '125px').css('height','125px');
                        image.src = "tilted_android_logo_2.png";
                      /*  $('#text2').removeClass('visible1');*/
                       /* console.log('12');*/
                        /*alert('Web Development');*/
                     }else{
                        $('#oh1').css('width', '135px').css('height','135px');
                        image.src = "android_logo.png";
                       /* $('#text2').addClass('visible1');*/
                        /*console.log('13');*/
                     }
        } else {
             // scrolling upwards
             if(position.left <-300){
                        $('#oh1').css('width', '135px').css('height','135px');
                        image.src = "android_logo.png";
                     /*   $('#text2').addClass('visible1');*/
                     }else if(position.left <-250 && position.left >-300){
                        $('#oh1').css('width', '125px').css('height','125px');
                        image.src = "tilted_android_logo_2.png";
                      /*  $('#text2').removeClass('visible1');*/
                     }else if(position.left <-200 && position.left >-250){
                        $('#oh1').css('width', '115px').css('height','115px');
                        image.src = "android_logo.png";
                       /* $('#text2').addClass('visible1');*/
                     }else if(position.left <-150 && position.left >-200){
                        $('#oh1').css('width', '105px').css('height','105px');
                        image.src = "android_logo.png";
                       /* $('#text2').addClass('visible1');*/
                     }else if(position.left <-100 && position.left >-150){
                        $('#oh1').css('width', '95px').css('height','95px');
                        image.src = "android_logo.png";
                       /* $('#text2').addClass('visible1');*/
                     }else if(position.left <-50 && position.left >-100){
                        $('#oh1').css('width', '85px').css('height','85px');
                        image.src = "tilted_android_logo_2.png";
                       /* $('#text2').addClass('visible1');*/
                     }else if(position.left <0 && position.left >-50){
                        $('#oh1').css('width', '75px').css('height','75px');
                        image.src = "android_logo.png";
                       /* $('#text2').addClass('visible1');*/
                     }else if(position.left <50 && position.left >0){
                        $('#oh1').css('width', '65px').css('height','65px');
                        image.src = "tilted_android_logo.png";
                      /*  $('#text2').addClass('visible1');*/
                     }else if(position.left <100 && position.left >50){
                        $('#oh1').css('width', '60px').css('height','60px');
                        image.src = "tilted_android_logo.png";
                       /* $('#text2').addClass('visible1');*/
                     }else if(position.left <150 && position.left >100){
                        $('#oh1').css('width', '55px').css('height','55px');
                        image.src = "tilted_android_logo_2.png";
                        /*$('#text2').addClass('visible1');*/
                     }else if(position.left <200 && position.left >150){
                        $('#oh1').css('width', '50px').css('height','50px');
                        image.src = "android_logo.png";
                      /*  $('#text2').addClass('visible1');*/
                     }else if(position.left <250 && position.left >200){
                        $('#oh1').css('width', '45px').css('height','45px');
                        image.src = "android_logo.png";
                      /*  $('#text2').addClass('visible1');*/
                     }else{
                        $('#oh1').css('width', '40px').css('height','40px');
                        image.src = "android_logo.png";
                       /* $('#text2').addClass('visible1');*/
                     }

        }
        position1 = scroll;
    });
/*
     if(position.top > 0){
        $('#oh1').css('width', '100px').css('height','100px');
     }else{
        $('#oh1').css('width', '60px').css('height','60px');
     }*/


     $('.oval1').css('width', '920px').css('height','400px').css('margin-left','26%').css('margin-top','4%');

    return $('#oh1').css('transform', 'translate(' + window.objX + 'px,' + window.objY + 'px)');
  
 /* return Math.sin($w.scrollTop()/100)*300*/
}
function formula600(){
   var scroll = $(document).scrollTop();
     window.objX = 580*Math.cos(scroll/250);
     window.objY = 270*Math.sin(scroll/250);

     var e3 = $("#oh2");
    var position = e3.position();
    /*console.log( "left: " + position.left + ", top: " + position.top );*/

     if(position.left < -200 && position.left < -220){
        /*var image = document.getElementById('oh1');
        if (image.src.match("apple_logo")) {
        }*/
        /*alert('Web Development');*/
        $('#text3').removeClass('visible1');
     }else{
        /*var image = document.getElementById('oh1');
            image.src = "apple_logo.png";*/
        $('#text3').addClass('visible1');
        
     }


     // user scrolling down or up
    var position1 = $(window).scrollTop(); // should start at 0

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        var image = document.getElementById('oh2');

        if(scroll > position1) {

            /*$("#oh").addClass("rotate");*/
            /*var degrees = 30;
            var elem = document.getElementById('oh');
            elem.style.WebkitTransform = "rotate("+degrees+"deg)";*/

            

             // scrolling downwards
             if(position.left <-300){
                        $('#oh2').css('width', '40px').css('height','40px');
                        image.src = "apple_logo.png";
                        /*$('#text3').addClass('visible1');*/
                        /*console.log('1');*/
                     }else if(position.left <-250 && position.left >-300){
                        $('#oh2').css('width', '45px').css('height','45px');
                        image.src = "apple_logo.png";
                       /* $('#text3').addClass('visible1');*/
                        /*console.log('2');*/
                     }else if(position.left <-200 && position.left >-250){
                        $('#oh2').css('width', '50px').css('height','50px');
                        image.src = "apple_logo.png";
                     /*   $('#text3').addClass('visible1');*/
                        /*console.log('3');*/
                     }else if(position.left <-150 && position.left >-200){
                        $('#oh2').css('width', '55px').css('height','55px');
                        image.src = "tilted_ios_logo_2.png";
                    /*    $('#text3').addClass('visible1');*/
                        /*console.log('4');*/
                     }else if(position.left <-100 && position.left >-150){
                        $('#oh2').css('width', '60px').css('height','60px');
                        image.src = "tilted_ios_logo.png";
                       /* $('#text3').addClass('visible1');*/
                        /*console.log('5');*/
                     }else if(position.left <-50 && position.left >-100){
                        $('#oh2').css('width', '65px').css('height','65px');
                        image.src = "tilted_ios_logo.png";
                 /*       $('#text3').addClass('visible1');*/
                        /*console.log('6');*/
                     }else if(position.left <0 && position.left >-50){
                        $('#oh2').css('width', '75px').css('height','75px');
                        image.src = "apple_logo.png";
                 /*       $('#text3').addClass('visible1');*/
                        /*console.log('7');*/
                     }else if(position.left <50 && position.left >0){
                        $('#oh2').css('width', '85px').css('height','85px');
                        image.src = "tilted_ios_logo_2.png";
                        /*$('#text3').addClass('visible1');*/
                        /*console.log('8');*/
                     }else if(position.left <100 && position.left >50){
                        $('#oh2').css('width', '95px').css('height','95px');
                        image.src = "apple_logo.png";
                        /*$('#text3').addClass('visible1');*/
                        /*console.log('9');*/
                     }else if(position.left <150 && position.left >100){
                        $('#oh2').css('width', '105px').css('height','105px');
                        image.src = "apple_logo.png";
                        /*$('#text3').addClass('visible1');*/
                        /*console.log('10');*/
                     }else if(position.left <200 && position.left >150){
                        $('#oh2').css('width', '115px').css('height','115px');
                        image.src = "apple_logo.png";
                       /* $('#text3').addClass('visible1');*/
                        /*console.log('11');*/
                     }else if(position.left <250 && position.left >200){
                        $('#oh2').css('width', '125px').css('height','125px');
                        image.src = "tilted_ios_logo_2.png";
                        /*$('#text3').removeClass('visible1');*/
                       /* console.log('12');*/
                        /*alert('Web Development');*/
                     }else{
                        $('#oh2').css('width', '135px').css('height','135px');
                        image.src = "apple_logo.png";
                      /*  $('#text3').addClass('visible1');*/
                        /*console.log('13');*/
                     }
        } else {
             // scrolling upwards
             if(position.left <-300){
                        $('#oh2').css('width', '135px').css('height','135px');
                        image.src = "apple_logo.png";
                       /* $('#text3').addClass('visible1');*/
                     }else if(position.left <-250 && position.left >-300){
                        $('#oh2').css('width', '125px').css('height','125px');
                        image.src = "tilted_ios_logo_2.png";
                      /*  $('#text3').removeClass('visible1');*/
                     }else if(position.left <-200 && position.left >-250){
                        $('#oh2').css('width', '115px').css('height','115px');
                        image.src = "apple_logo.png";
                    /*    $('#text3').addClass('visible1');*/
                     }else if(position.left <-150 && position.left >-200){
                        $('#oh2').css('width', '105px').css('height','105px');
                        image.src = "apple_logo.png";
                       /* $('#text3').addClass('visible1');*/
                     }else if(position.left <-100 && position.left >-150){
                        $('#oh2').css('width', '95px').css('height','95px');
                        image.src = "apple_logo.png";
                 /*       $('#text3').addClass('visible1');*/
                     }else if(position.left <-50 && position.left >-100){
                        $('#oh2').css('width', '85px').css('height','85px');
                        image.src = "tilted_ios_logo_2.png";
                     /*   $('#text3').addClass('visible1');*/
                     }else if(position.left <0 && position.left >-50){
                        $('#oh2').css('width', '75px').css('height','75px');
                        image.src = "apple_logo.png";
                      /*  $('#text3').addClass('visible1');*/
                     }else if(position.left <50 && position.left >0){
                        $('#oh2').css('width', '65px').css('height','65px');
                        image.src = "tilted_ios_logo.png";
                       /* $('#text3').addClass('visible1');*/
                     }else if(position.left <100 && position.left >50){
                        $('#oh2').css('width', '60px').css('height','60px');
                        image.src = "tilted_ios_logo.png";
               /*         $('#text3').addClass('visible1');*/
                     }else if(position.left <150 && position.left >100){
                        $('#oh2').css('width', '55px').css('height','55px');
                        image.src = "tilted_ios_logo_2.png";
                      /*  $('#text3').addClass('visible1');*/
                     }else if(position.left <200 && position.left >150){
                        $('#oh2').css('width', '50px').css('height','50px');
                        image.src = "apple_logo.png";
                    /*    $('#text3').addClass('visible1');*/
                     }else if(position.left <250 && position.left >200){
                        $('#oh2').css('width', '45px').css('height','45px');
                        image.src = "apple_logo.png";
                      /*  $('#text3').addClass('visible1');*/
                     }else{
                        $('#oh2').css('width', '40px').css('height','40px');
                        image.src = "apple_logo.png";
                     /*   $('#text3').addClass('visible1');*/
                     }

        }
        position1 = scroll;
    });

     /*if(position.top > 0){
        $('#oh2').css('width', '100px').css('height','100px');
     }else{
        $('#oh2').css('width', '60px').css('height','60px');
     }*/


     $('.oval2').css('width', '1160px').css('height','540px').css('margin-left','14%').css('margin-top','1%');

    return $('#oh2').css('transform', 'translate(' + window.objX + 'px,' + window.objY + 'px)');
  
 /* return Math.sin($w.scrollTop()/100)*300*/
}


function formula800(){
   var scroll = $(document).scrollTop();
     window.objX = 470*Math.cos(scroll/500);
     window.objY = 570*Math.sin(scroll/500);

     var e3 = $("#oh3");
    var position = e3.position();
    console.log( "top: " + position.top);

     if(position.top <-200 && position.top > -300){
        $('#text4').removeClass('visible1');
     }else{
        $('#text4').addClass('visible1');
        
     }


     // user scrolling down or up
    var position1 = $(window).scrollTop(); // should start at 0

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        var image = document.getElementById('oh3');

        if(scroll > position1) {

            /*$("#oh").addClass("rotate");*/
            /*var degrees = 30;
            var elem = document.getElementById('oh');
            elem.style.WebkitTransform = "rotate("+degrees+"deg)";*/

            

             // scrolling downwards
             if(position.left <-300){
                        $('#oh3').css('width', '40px').css('height','40px');
                        image.src = "astranaut.png";
                        /*$('#text3').addClass('visible1');*/
                        /*console.log('1');*/
                     }else if(position.left <-250 && position.left >-300){
                        $('#oh3').css('width', '45px').css('height','45px');
                        image.src = "astranaut.png";
                       /* $('#text3').addClass('visible1');*/
                        /*console.log('2');*/
                     }else if(position.left <-200 && position.left >-250){
                        $('#oh3').css('width', '50px').css('height','50px');
                        image.src = "astranaut.png";
                     /*   $('#text3').addClass('visible1');*/
                        /*console.log('3');*/
                     }else if(position.left <-150 && position.left >-200){
                        $('#oh3').css('width', '55px').css('height','55px');
                        image.src = "astranaut.png";
                    /*    $('#text3').addClass('visible1');*/
                        /*console.log('4');*/
                     }else if(position.left <-100 && position.left >-150){
                        $('#oh3').css('width', '60px').css('height','60px');
                        image.src = "tilted_ios_logo.png";
                       /* $('#text3').addClass('visible1');*/
                        /*console.log('5');*/
                     }else if(position.left <-50 && position.left >-100){
                        $('#oh3').css('width', '65px').css('height','65px');
                        image.src = "astranaut.png";
                 /*       $('#text3').addClass('visible1');*/
                        /*console.log('6');*/
                     }else if(position.left <0 && position.left >-50){
                        $('#oh3').css('width', '75px').css('height','75px');
                        image.src = "astranaut.png";
                 /*       $('#text3').addClass('visible1');*/
                        /*console.log('7');*/
                     }else if(position.left <50 && position.left >0){
                        $('#oh3').css('width', '85px').css('height','85px');
                        image.src = "astranaut.png";
                        /*$('#text3').addClass('visible1');*/
                        /*console.log('8');*/
                     }else if(position.left <100 && position.left >50){
                        $('#oh3').css('width', '95px').css('height','95px');
                        image.src = "astranaut.png";
                        /*$('#text3').addClass('visible1');*/
                        /*console.log('9');*/
                     }else if(position.left <150 && position.left >100){
                        $('#oh3').css('width', '105px').css('height','105px');
                        image.src = "astranaut.png";
                        /*$('#text3').addClass('visible1');*/
                        /*console.log('10');*/
                     }else if(position.left <200 && position.left >150){
                        $('#oh3').css('width', '115px').css('height','115px');
                        image.src = "astranaut.png";
                       /* $('#text3').addClass('visible1');*/
                        /*console.log('11');*/
                     }else if(position.left <250 && position.left >200){
                        $('#oh3').css('width', '185px').css('height','185px');
                        image.src = "astranaut.png";
                        /*$('#text3').removeClass('visible1');*/
                       /* console.log('12');*/
                        /*alert('Web Development');*/
                     }else{
                        $('#oh3').css('width', '195px').css('height','195px');
                        image.src = "astranaut.png";
                      /*  $('#text3').addClass('visible1');*/
                        /*console.log('13');*/
                     }
        } else {
             // scrolling upwards
             if(position.left <-300){
                        $('#oh3').css('width', '195px').css('height','195px');
                        image.src = "astranaut.png";
                       /* $('#text3').addClass('visible1');*/
                     }else if(position.left <-250 && position.left >-300){
                        $('#oh3').css('width', '185px').css('height','185px');
                        image.src = "astranaut.png";
                      /*  $('#text3').removeClass('visible1');*/
                     }else if(position.left <-200 && position.left >-250){
                        $('#oh3').css('width', '115px').css('height','115px');
                        image.src = "astranaut.png";
                    /*    $('#text3').addClass('visible1');*/
                     }else if(position.left <-150 && position.left >-200){
                        $('#oh3').css('width', '105px').css('height','105px');
                        image.src = "astranaut.png";
                       /* $('#text3').addClass('visible1');*/
                     }else if(position.left <-100 && position.left >-150){
                        $('#oh3').css('width', '95px').css('height','95px');
                        image.src = "astranaut.png";
                 /*       $('#text3').addClass('visible1');*/
                     }else if(position.left <-50 && position.left >-100){
                        $('#oh3').css('width', '85px').css('height','85px');
                        image.src = "astranaut.png";
                     /*   $('#text3').addClass('visible1');*/
                     }else if(position.left <0 && position.left >-50){
                        $('#oh3').css('width', '75px').css('height','75px');
                        image.src = "astranaut.png";
                      /*  $('#text3').addClass('visible1');*/
                     }else if(position.left <50 && position.left >0){
                        $('#oh3').css('width', '65px').css('height','65px');
                        image.src = "astranaut.png";
                       /* $('#text3').addClass('visible1');*/
                     }else if(position.left <100 && position.left >50){
                        $('#oh3').css('width', '60px').css('height','60px');
                        image.src = "astranaut.png";
               /*         $('#text3').addClass('visible1');*/
                     }else if(position.left <150 && position.left >100){
                        $('#oh3').css('width', '55px').css('height','55px');
                        image.src = "astranaut.png";
                      /*  $('#text3').addClass('visible1');*/
                     }else if(position.left <200 && position.left >150){
                        $('#oh3').css('width', '50px').css('height','50px');
                        image.src = "astranaut.png";
                    /*    $('#text3').addClass('visible1');*/
                     }else if(position.left <250 && position.left >200){
                        $('#oh3').css('width', '45px').css('height','45px');
                        image.src = "astranaut.png";
                      /*  $('#text3').addClass('visible1');*/
                     }else{
                        $('#oh3').css('width', '40px').css('height','40px');
                        image.src = "astranaut.png";
                     /*   $('#text3').addClass('visible1');*/
                     }

        }
        position1 = scroll;
    });

     /*if(position.top > 0){
        $('#oh2').css('width', '100px').css('height','100px');
     }else{
        $('#oh2').css('width', '60px').css('height','60px');
     }*/


    
    return $('#oh3').css('transform', 'translate(' + window.objX + 'px,' + window.objY + 'px)');
  
 /* return Math.sin($w.scrollTop()/100)*300*/
}
/*console.log('foo');*/
