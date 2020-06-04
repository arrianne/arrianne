$(document).ready(function() {

  const toggleSwitch = document.querySelector('.toggle input[type="checkbox"]');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
          toggleSwitch.checked = true;
      }
  }

  function switchTheme(e) {
      if (e.target.checked) {
          document.documentElement.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
      }
      else {        document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
      }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);


  // Adding background to burger menu on scroll

    $(window).scroll(function(){
      	var scroll = $(window).scrollTop();
    	  if (scroll > 300) {
    	    $(".burger-menu_container").css("background" , "#36c9c6");
          $(".bar").css("background" , "white");
    	  }
    	  else{
    		  $(".burger-menu_container").css("background" , "none");
          $(".bar").css("background" , "#34435e");
    	  }
      })

    // should start at 0

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


    // experience hover effect

    $(".experience__job").hover(function(){
      $(this).find(".circle-inner").css("opacity", 1);
      $(this).find(".job-date").animate({left:'-7px'},200).css("color", "var(--paragraph-secondary)");
      $(this).find("p").css("color", "var(--paragraph-secondary)");
      }, function(){
      $(this).find(".circle-inner").css("opacity", 0);
      $(this).find(".job-date").animate({left:'0px'},200).css("color", "var(--paragraph-primary)");;
      $(this).find("p").css("color", "var(--paragraph-primary)");
    });


    // SVG animate when scrolled to
    $(window).scroll(function() {
        var top_of_element = $(".retina").offset().top;
        var bottom_of_element = $(".retina").offset().top + $(".retina").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
            // the element is visible, do something
            $(".st0").attr("class", "st0 animate");
        } else {
            // the element is not visible, do something else
            $(".st0").attr("class", "st0");
        }

        // Skill scrolling section



    });


    $(window).scroll(function() {
          if(elementScrolled('.css')) {
          console.log('Event Fired');
            $('.css').stop().animate({height: "90%"},400,"swing");
            $('.html').stop().animate({height: "60%"},400,"swing");
            $('.javascript').stop().animate({height: "80%"},400,"swing");
            $('.adobe').stop().animate({height: "40%"},400,"swing");

          } else {
            $('.css').stop().animate({height: "0%"},400,"swing");
            $('.html').stop().animate({height: "0%"},400,"swing");
            $('.css').stop().animate({height: "0%"},400,"swing");
            $('.html').stop().animate({height: "0%"},400,"swing");

          }
      });


});
