
let addIcon = '<img src="./assets/images/icon-plus.svg" alt="plus icon" class="icons-add icons">';

let minusIcon = '<i><img src="./assets/images/icon-minus.svg" alt="plus icon" class="icons-minus"></i>';


  $(".icons").click(function () {
      var faqAnswer = $(this).next("p");
      faqAnswer.toggleClass("hidden")
      

      if (faqAnswer.hasClass("hidden")) {
          $(this).attr("src", "./assets/images/icon-plus.svg");
  
          $(this).prev("h3").css("color", "")
          
         
      } else {
          $(this).attr("src", "./assets/images/icon-minus.svg");
         
          $(this).prev("h3").css("color", "hsla(292, 82%, 23%, 1.00)")
              faqAnswer.addClass("fade-text");
      }

      
   
});

 
