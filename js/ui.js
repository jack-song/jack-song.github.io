$(function () {

    var layout   = $('#layout'),
        menu     = $('#menu'),
        menuLink = $('#menuLink'),
        ACTIVE   = 'active';

    $(menuLink).click( function (e) {
            e.preventDefault();
            layout.toggleClass(ACTIVE);
            menu.toggleClass(ACTIVE);
            menuLink.toggleClass(ACTIVE);
    });

});
