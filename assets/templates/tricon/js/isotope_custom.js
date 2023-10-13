$(window).load(function(){

   // Activate isotope in container
   
   $(".portfolio-items").isotope({
       itemSelector:'.isotope'
   });
   
   //add isotope click function
   
   $('.portfolio-filter li').click(function(){
       $(".portfolio-filter li").removeClass("active");
       $(this).addClass("active");
       
       var selector = $(this).attr("data-filter");
     $(".portfolio-items").isotope({
         filter: selector,
         animationOptions:{
             duration:750,
             easing:'linear',
             queue: false
         }
     });
     return false;
   });
   
});



