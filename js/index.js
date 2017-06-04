(function() {
  const ACTIONS = ["learn more about design", "paint", "meditate", "find a new band", "improve my rock climbing", "practice handstands", "practice harmonica", "practice guitar", "read a book", "sketch", "find a lecture to watch"];

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

  function load() {
    // replace the Date and action
    document.getElementById('date').innerHTML = `${month + " " + day}`;
    document.getElementById('action').innerHTML = `Today I'll ${action}`;
    document.getElementById('dot').innerHTML = `.`;
  }

  let today = new Date();
  let month = MONTHS[today.getMonth()];
  let day = today.getDate();

  // seed is total days since the offset
  let base_seed = Math.floor(today.getTime()/(1000*60*60*24));
  let action = get_value(ACTIONS, base_seed);

  if (document.readyState !== "loading") {
    load();
  } else {
    document.addEventListener("DOMContentLoaded", load);
  }
})();

window.yqlCallback = function (data) {
  function link (name, url) {
    return `<a href="${url}">${name}</a>`;
  }
  let title = data.query.results.a.title;
  let url = 'https://en.wikipedia.org' + data.query.results.a.href;
  document.getElementById('extra').innerHTML = `\ and read about: <em>${link(title, url)}</em>`;
}
