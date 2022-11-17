window.sr = ScrollReveal();
        sr.reveal('.navbar' ,{
            duration: 3000,
            origin: 'top',
            distance: '100px'
        });
        sr.reveal('.showcase-left' ,{
            duration: 2000,
            origin: 'top',
            distance: '100px'
        });
        sr.reveal('.showcase-right' ,{
            duration: 2000,
            origin: 'right',
            distance: '200px'
        });
        sr.reveal('#button' ,{
            duration: 2000,
            delay: 1000,
            origin: 'bottom',
            distance: '50px'
        });
        sr.reveal('.block-left' ,{
            duration: 2000,
            origin: 'left',
            distance: '200px',
            viewFactor: 0.2
        });
        sr.reveal('.block-right' ,{
            duration: 2000,
            origin: 'right',
            distance: '200px',
            viewFactor: 0.2
        });
        sr.reveal('.section-5' ,{
            duration: 2000,
            origin: 'left',
            distance: '200px'
        });
        sr.reveal('#footer' ,{
            duration:2000,
            origin: 'bottom',
            distance: '20px'
        });

        $(function() {
            // Smooth Scrolling
            $('a[href*="#"]:not([href="#"])').click(function() {
              if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                  $('html, body').animate({
                    scrollTop: target.offset().top
                  }, 0);
                  return false;
                }
              }
            });
          });
         