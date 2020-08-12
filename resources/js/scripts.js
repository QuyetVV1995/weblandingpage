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
    }
)

