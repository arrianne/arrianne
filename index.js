$(document).ready(function () {


  // Changing the theme to light or dark
  //////////////////////////////////////////////////////////////////////////

  const toggleSwitch = document.querySelector('.toggle input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
      }
  };

  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
      } else {
         document.documentElement.setAttribute('data-theme', 'light');
         localStorage.setItem('theme', 'light');
      }
  };

  toggleSwitch.addEventListener('change', switchTheme, false);


  // Adding background to burger menu on scroll
  ////////////////////////////////////////////////////////////////////////////
    $(window).scroll(function(){


      	var scroll = $(window).scrollTop();

    	  if (scroll > 300) {
    	    $(".burger-menu_container").css("background" , "#36c9c6");
          $(".bar").css("background" , "white");

    	  } else{
    		  $(".burger-menu_container").css("background" , "none");
          $(".bar").css("background" , "#34435e");
    	  }
      });


    $('.burger-menu').click(function(){
      $(this).toggleClass('active');
      $(".header").toggleClass("header-active");
      return false;
    });

    $('.title-box').scroll(function() {
      $(this).css({
        'width' : '100%',
        'transition' : '0.4s'
      });
    });

    // Scrolling to section from anchors and closing menu_container


    function anchorScroll() {
      $('a').click(function(){
        // $(".header").toggleClass('active');
        $(".header").toggleClass("header-active");

        $('html, body').stop().animate({
          scrollTop: $($(this).attr('href')).offset().top - 160
        }, 300);
        return false;
      });
    }
    anchorScroll();


    // experience hover effect
    //////////////////////////////////////////////////////////////////////////

    $(".experience__job").hover(function(){
      $(this).find(".circle-inner").css("opacity", 1);
      $(this).find(".job-date").animate({left:'-7px'},200).css("color", "var(--paragraph-secondary)");
      $(this).find("p").css("color", "var(--paragraph-secondary)");
      }, function(){
      $(this).find(".circle-inner").css("opacity", 0);
      $(this).find(".job-date").animate({left:'0px'},200).css("color", "var(--paragraph-primary)");;
      $(this).find("p").css("color", "var(--paragraph-primary)");
    });



    $(window).scroll(function(){

          // Has element scrolled into view
          function elementScrolled(elem)
          {
              var docViewTop = $(window).scrollTop();
              var docViewBottom = docViewTop + $(window).height();
              var elemTop = $(elem).offset().top;
              return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
          }

          // This is where we use the function to detect if ".box2" is scrolled into view, and when it is add the class ".animated" to the <p> child element
          if(elementScrolled('.skill')) {
               $('.html').stop().animate({height: "90%"},400,"swing");
               $('.css').stop().animate({height: "90%"},400,"swing");
               $('.javascript').stop().animate({height: "70%"},400,"swing");
               $('.vue').stop().animate({height: "70%"},400,"swing");
               $('.adobe').stop().animate({height: "60%"},400,"swing");
               $('.php').stop().animate({height: "40%"},400,"swing");

          } else if (elementScrolled('.keyboard')) {
            console.log("here's the keyboard");
                $('.keyboard').animate({left: "-400px"}, 1000, "swing");

          } else if (elementScrolled('.pen')) {
            $('.pen').animate({right: "-200px"}, 1000, "swing");

          } else {

               $('.html').stop().animate({height: "0%"},400,"swing");
               $('.css').stop().animate({height: "0%"},400,"swing");
               $('.javascript').stop().animate({height: "0%"},400,"swing");
               $('.vue').stop().animate({height: "0%"},400,"swing");
               $('.adobe').stop().animate({height: "0%"},400,"swing");
               $('.php').stop().animate({height: "0%"},400,"swing");
          }
      });

      // var mapOptions = {
      //     zoom: 8,
      //     center: new google.maps.LatLng(-34.397, 150.644),
      //     mapTypeId: google.maps.MapTypeId.ROADMAP
      //   },
      //   var map = new google.maps.Map(document.getElementById("gmap_canvas"), mapOptions);
      // }

});
