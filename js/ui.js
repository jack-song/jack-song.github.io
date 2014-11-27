$(function () {

    var layout   = $('#layout'),
        menu     = $('#menu'),
        menuLink = $('#menuLink'),
        ACTIVE   = 'active';

    $(document).click( function (e) {
        var $source = $(e.target);

        if($source.is('#menuLink')){
            e.preventDefault();
            layout.toggleClass(ACTIVE);
            menu.toggleClass(ACTIVE);
            menuLink.toggleClass(ACTIVE);
            return;
        }

        if(menuLink.hasClass(ACTIVE) &&  !$source.is('.page-link, #menu')){
            layout.toggleClass(ACTIVE);
            menu.toggleClass(ACTIVE);
            menuLink.toggleClass(ACTIVE);
        }
    });

});
