$(document).ready(function() {
  console.log("i'm working");
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

    var path = document.querySelector(".st0");
var total = path.getTotalLength();
console.log(total);


});
