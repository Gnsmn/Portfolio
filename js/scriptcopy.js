var typed = new Typed (".typed", {
    strings: ["UX Designer in Progress"],
    typeSpeed: 150,
    loop: true,
    startDelay: 1000,
    showCursor: false,
});

const nav = $("#navigation");

const navTop = nav.offset().top; 

$(window).on ("scroll", stickyNavigation);

function stickyNavigation() {

    const body = $ ("body");

    if ($(window).scrollTop() >=navTop)
    body.addClass ("fixedNav"); 
}

else {
    body.removeClass("fixedNav")
}