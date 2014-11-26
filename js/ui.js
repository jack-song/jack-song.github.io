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
        if(menuLink.hasClass(ACTIVE) && e.target.id != 'menuLink' && $(e.target).parents('#menu').length < 1){
            layout.toggleClass(ACTIVE);
            menu.toggleClass(ACTIVE);
            menuLink.toggleClass(ACTIVE);
        }
    });

});
