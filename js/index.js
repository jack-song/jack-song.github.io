(function() {
  document.addEventListener("DOMContentLoaded", function (event) { 
    var nav = document.getElementById('nav'),
        head = new window.Headroom(nav);

    head.init();
  });
}());