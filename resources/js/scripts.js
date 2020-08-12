$(document).ready(
    function(){
        /* cách about section 600px thì hiện sticky*/
        // sticky nav
        $('.about-section').waypoint(
            function(direction){
                if(direction == "down"){
                    $('nav').addClass('sticky');
                } else
                {
                    ('nav').removeClass('sticky');
                }
            },{
                offset: '600px'
            }
        )

        // Scroll - hieu ung chuyen khi click
        $('a').click(function(){
            $('html, body').animate({
              scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 700);
            event.preventDefault();
          });

        // mobile navigation
        $('.mobile-nav-icon').click(
            function(){
                $('.main-nav').slideToggle(200);    // display none <-> block

                if($('.mobile-nav-icon').hasClass('fa-bars')){
                    $('.mobile-nav-icon').removeClass('fa-bars');
                    $('.mobile-nav-icon').addClass('fa-times');
                } else{
                    $('.mobile-nav-icon').removeClass('fa-times'); 
                    $('.mobile-nav-icon').addClass('fa-bars');
                }
                
            }
        )
    }
)

