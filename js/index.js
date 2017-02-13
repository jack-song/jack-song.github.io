(function() {
  const ACTIONS = ["organize my notes", "iterate on some design work", "work on a painting", "take better photographs", "meditate", "listen to a new band",
                "improve my rock climbing", "eat healthier", "work on a side project", "practice an instrument", "read a book", "sketch for a while", "find a lecture to watch", "look into a new technology"];

  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // stack overflow is the best
  function pseudo_random(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  function get_index(source, seed) {
    return Math.floor(pseudo_random(seed) * source.length);
  }

  function get_value(source, seed) {
    return source[get_index(source, seed)];
  }

  let today = new Date();
  let month = MONTHS[today.getMonth()];
  let day = today.getDate();

  

  // seed is total days since the offset
  let base_seed = Math.floor(today.getTime()/(1000*60*60*24));
  let action = get_value(ACTIONS, base_seed);

  
  document.addEventListener("DOMContentLoaded", function() {
    // replace the Date and action
    document.getElementById('date').innerHTML = `${month + " " + day}: I'll ${action}.`;
  });
})();

window.yqlCallback = function (data) {
  function link (name, url) {
    return `<a href="${url}">${name}</a>`;
  }
  let extra = document.getElementById('extra');
  let title = data.query.results.a.title;
  let url = 'https://en.wikipedia.org' + data.query.results.a.href;
  extra.innerHTML = ` Today's quick read: <em>${link(title, url)}</em>.`;
}
