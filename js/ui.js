$(function () {

    var layout   = $('#layout'),
        menu     = $('#menu'),
        menuLink = $('#menuLink'),
        ACTIVE   = 'active';

    menuLink.click( function (e) {
        e.preventDefault();
        layout.toggleClass(ACTIVE);
        menu.toggleClass(ACTIVE);
        menuLink.toggleClass(ACTIVE);
    });

    $(document).click( function (e) {
        if(menuLink.hasClass(ACTIVE) &&  !$(e.target).is('.page-link, #menuLink, #menu')){
            layout.toggleClass(ACTIVE);
            menu.toggleClass(ACTIVE);
            menuLink.toggleClass(ACTIVE);
        }
    });

});
