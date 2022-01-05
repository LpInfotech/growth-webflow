// ==== Mobilemenu Navbar.
function toggle() {
    var dropdown = document.getElementById('toggleMenu');
    var menu = document.getElementById('dropdownMenu');
    dropdown.classList.toggle('hidden');
    menu.classList.add('left-0');
}

// banner image on scroll animation.
window.onscroll = function () {
    var grow1 = document.getElementById('growSvgOne');
    var banner = document.getElementById('growBanner');
    var grow2 = document.getElementById('growSvgTwo');

    if (window.scrollY > 50) {
        grow1.classList.add('-translate-y-7');
        banner.classList.add('translate-y-7');
        grow2.classList.add('-translate-y-7');
    } else if (window.scrollY == 0) {
        grow1.classList.remove('-translate-y-7');
        banner.classList.remove('translate-y-7');
        grow2.classList.remove('-translate-y-7');
    }
};

// tabs are change onclick
$(document).ready(function () {
    $('.tabs-menu:first').removeClass('hidden');
    $('.tab-link-items:first').addClass('border-primary');

    $('.tab-link-items').click(function () {
        $('.tab-link-items').removeClass('active');
        $(this).addClass('active');

        $('.tab-link-items').removeClass('border-primary');
        $(this).addClass('border-primary');

        if($('#tabLink1').hasClass('active')){
            $('.tabs-menu').addClass('hidden')
            $("#tabMenu1").removeClass('hidden');
        }

        else if($('#tabLink2').hasClass('active')){
            $('.tabs-menu').addClass('hidden')
            $("#tabMenu2").removeClass('hidden');
        }

        else if($('#tabLink3').hasClass('active')){
            $('.tabs-menu').addClass('hidden')
            $("#tabMenu3").removeClass('hidden');
        }

    });
});