
// When User Click icon
  $(".icons").click(function () {
      var faqAnswer = $(this).next("p");
      faqAnswer.toggleClass("hidden")
      

      if (faqAnswer.hasClass("hidden")) {
          $(this).attr("src", "./assets/images/icon-plus.svg");
  
          $(this).prev("h3").css("color", "")
          
         
      } else {
          $(this).attr("src", "./assets/images/icon-minus.svg");
         
          $(this).prev("h3").css("color", "hsl(293, 88%, 47%)")
              faqAnswer.addClass("fade-text");
      }

      
   
});

 
// When user click on question

 $("h3").click(function () {
      var faqAnswer = $(this).siblings("p");
      faqAnswer.toggleClass("hidden")
      

     if (faqAnswer.hasClass("hidden")) {
         var iconChange = $(this).next("img");

          $(this).next("img").attr("src", "./assets/images/icon-plus.svg");
          $(this).prev("h3").css("color", "")
          
         
      } else {
        $(this).next("img").attr("src", "./assets/images/icon-minus.svg");
         
          $(this).prev("h3").css("color", "hsl(293, 88%, 47%)")
              faqAnswer.addClass("fade-text");
      }

      
   
 });

 

