$(function () {

    var layout   = $('#layout'),
        menu     = $('#menu'),
        menuLink = $('#menuLink');

    menuLink.click( function (e) {
        var active = 'active';

        e.preventDefault();
        layout.toggleClass(active);
        menu.toggleClass(active);
        menuLink.toggleClass(active);
    });

});
