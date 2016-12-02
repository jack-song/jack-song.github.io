document.addEventListener("DOMContentLoaded", function() {
  const ACTIONS = ["a more knowledgeable engineer", "a more efficient student", "a kinder brother", "a better photographer", "a more creative artist", "a more understanding friend",
                "improving my rock climbing", "living a healthier lifestyle", "building something", "practicing an instrument", "reading a book", "sketching", "watching an interesting lecture", "looking into a new technology"];

  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // stack overflow is the best
  function pseudo_random(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  function codify(str) {
    return '<span class="code">[' + str + ']</span>'
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

  // replace the Date
  document.getElementById('date').innerHTML = `Hi! It's ${codify(month + " " + day)} already.`;

  // seed is total days since the offset
  let base_seed = Math.floor(today.getTime()/(1000*60*60*24));
  let action = get_value(ACTIONS, base_seed);

  // replace today's action
  document.getElementById('today').innerHTML = codify(action);
});

window.yqlCallback = function (data) {
  function link (name, url) {
    return `<a href="${url}">${name}</a>`;
  }
  let extra = document.getElementById('extra');
  let title = data.query.results.a.title;
  let url = 'https://en.wikipedia.org' + data.query.results.a.href;
  extra.innerHTML = ` and reading about (the) ${link(title, url)}`;
}
