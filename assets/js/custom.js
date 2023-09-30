// jQuery(window).scroll(function () {
//     console.log(jQuery(window).scrollTop())
//     if (jQuery(window).scrollTop() > 80) {
//       jQuery('.myHeader').addClass('navbar-fixed');
//     }
//     if (jQuery(window).scrollTop() < 81) {
//       jQuery('.myHeader').removeClass('navbar-fixed');
//     }
//   });



jQuery(".dropdown").click(function(){
  jQuery(this).toggleClass("active");
  jQuery(this).closest("li").children(".dropdown-menu").toggleClass("active")});




    $(function() {
      $('.serv-sect1-wrp-btn').mouseenter(function() {
        $('.serv-sect1-col2').addClass("hover");
      }).mouseleave(function () {
        $('.serv-sect1-col2').removeClass("hover");
      });
      });

      $(function() {
        $('.how-do-btn').mouseenter(function() {
          $('.how-do-outer').addClass("hover");
        }).mouseleave(function () {
          $('.how-do-outer').removeClass("hover");
        });
        });



      //   $(document).ready(function() {  
      //     if (jQuery(window).width() > 767 ) {   }else{
      //     $('.how-do-btn').click(function() {
      //       $('.how-do-outer').addClass("hover");
      //     }).click(function () {
      //       $('.how-do-outer').removeClass("hover");
      //     });
      //   }
      // });
      
  

      jQuery(document).ready(function($) {
        // Scroll to the desired section on click
        // Make sure to add the `data-scroll` attribute to your `<a>` tag.
        // Example: 
        // `<a data-scroll href="#my-section">My Section</a>` will scroll to an element with the id of 'my-section'.
        function scrollToSection(event) {
          event.preventDefault();
          var $section = $($(this).attr('href')); 
          $('html, body').animate({
            scrollTop: $section.offset().top
          }, 500);
        }
        $('[data-scroll]').on('click', scrollToSection);
      }(jQuery));




      

      $(document).ready(function(){
        $('ul.tabs li').click(function(){
          var tab_id= $(this).attr('data-tab');
          $('ul.tabs li').removeClass('current');
          $('.tab-content').removeClass('current');
          $(this).addClass('current');
          $("#"+tab_id).addClass('current');    
          
        })
        
      })









