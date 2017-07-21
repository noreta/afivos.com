//
// Find all the elements
//
var btn     = document.querySelector('.currl-btn');
var sidebar = document.querySelector('.currl-sidebar');
var main    = document.querySelector('.currl-main');
var slider  = document.querySelector('.currl-slider-container');

if (btn) {
    btn.addEventListener('click', function(event){
        event.preventDefault();
        this.classList.toggle('currl-btn-active');
        sidebar.classList.toggle('currl-sidebar-active');
        main.classList.toggle('currl-main-active');
    });
};

if (slider) {
    jQuery(".currl-slider").responsiveSlides({
        auto  : true,
        speed : 2500,
        timeout: 6000
    });
};
