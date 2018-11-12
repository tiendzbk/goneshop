$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        center: true,
        dots: false,
        responsive: {
            1000: {
                items: 1,
            }
        },
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]


    });
});