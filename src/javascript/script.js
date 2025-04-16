$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-xmark');
    });

    const sections = $('section');
    const navItens = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header'); 
        const scrollPosition = $(window).scrollTop() - header.outerHeight() + 10;

        let activeSectionIndex = 0

        if(scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        }
        else {
            header.css('box-shadow', '5px 1px 5px 4px rgba(0, 0, 0, 0.2)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 90;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                activeSectionIndex = i
                return false; 
            }
        })
        
        navItens.removeClass('active');
        $(navItens[activeSectionIndex]).addClass('active');
        $(navItens).not(navItens[activeSectionIndex]).removeClass('active');
    });

    ScrollReveal().reveal('#navbar', {
        origin: 'top',
        duration: 4000,
        distance: '100px',
    })

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 1500,
        distance: '100px',
        reset: true
    })

    ScrollReveal().reveal('#banner', {
        origin: 'right',
        duration: 1500,
        distance: '100px',
        reset: true
    })

    ScrollReveal().reveal('.shape', {
        origin: 'right',
        duration: 1500,
        distance: '100px',
        reset: true
    })

    ScrollReveal().reveal('.menu-scroll', {
        origin: 'right',
        duration: 1500,
        distance: '100px',
        reset: true
    })

    ScrollReveal().reveal('#dishes', {
        origin: 'left',
        duration: 1500,
        distance: '100px',
        reset: true
    })

    ScrollReveal().reveal('#testimonials_chef', {
        origin: 'left',
        duration: 1000,
        distance: '100px',
        reset: true
    })

    ScrollReveal().reveal('#testimonials_content', {
        origin: 'right',
        duration: 1000,
        distance: '100px',
        interval: 200,
        reset: true
    })

    ScrollReveal().reveal('.efeito-escada', {
        origin: 'right',
        duration: 1000,
        distance: '100px',
        interval: 200,
        reset: true
    })
});