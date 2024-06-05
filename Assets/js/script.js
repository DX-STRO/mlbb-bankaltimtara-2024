// window.addEventListener('scroll', () => {
//     const wScroll = window.scrollY;
//     console.log('wScroll');
//     $(".header .hero").css({
//         'transform': 'translate(0%,' + wScroll / 20 + '%)',
//         'transition': '.7s ease-out',
//     });

// });


if (wScroll > $(".container").offset().top - 10) {
    $(".container nav").addClass("show");
    $(".landing-page .nav").addClass("remove");
}