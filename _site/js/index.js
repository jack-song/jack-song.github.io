document.addEventListener("DOMContentLoaded", function() {
  var ROLES = ["problem solver", "engineer", "student", "teacher", "brother", "photographer", "artist", "friend", "explorer", "scientist"];

  var ACTION_TYPES = ["reading about ", "trying to ", "working on "];
  var ACTION_TYPES_PAST = ["learned about ", "tried to ", "put time into "];

  var TIME_ACTIONS = ["my rock climbing", "living a healthier lifestyle", "my coding", "practicing an instrument", "finishing my current book", "a drawing", "my sketching"];
  var TRYING_ACTIONS = ["find a new band", "see a new part of town", "catch up with an old friend", "find an interesting lecture to watch", "meet someone new", "test a new technology"];

  var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  var WIKI_ENDPOINT = "http://ec2-54-213-221-204.us-west-2.compute.amazonaws.com";

  // stack overflow is the best
  function pseudo_random(seed) {
    var x = Math.sin(seed++) * 10000;
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

  function update_text(role, base_seed, action_types, callback, days_ago) {
    var action_index = get_index(action_types, base_seed+1);
    var action_type = action_types[action_index];
    var action_content;
    if (action_index === 2) {
      action_content = get_value(TIME_ACTIONS, base_seed+2);
    }
    else if (action_index === 1) {
      action_content = get_value(TRYING_ACTIONS, base_seed+2);
    }
    else {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', WIKI_ENDPOINT + '/daily/wikipedia?days_ago=' + days_ago);
      xhr.send(null);

      xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
          if (xhr.status === OK) {
            var result = JSON.parse(xhr.responseText);
            action_content = `<a href=${result.link}>${result.title}</a>`;
            callback(role, action_type + action_content);
          } else {
            callback(role, "something's broken <span>¯\\_(ツ)_/¯</span>")
          }
        }
      };
      return;
    }
    callback(role, action_type + action_content);
  }

  function update_today(role, action) {
    document.getElementById('today').innerHTML = `Today, I'm ${codify(action)} and learning to be a better ${codify(role)}.  Ask me about it!`;
  }

  function update_yesterday(role_yesterday, action_yesterday) {
    document.getElementById('yesterday').innerHTML = `Yesterday I became a better ${codify(role_yesterday)} and ${codify(action_yesterday)}.`;
  }

  var today = new Date();
  var month = MONTHS[today.getMonth()];
  var day = today.getDate();

  // replace the Date
  document.getElementById('date').innerHTML = `Hi! It's ${codify(month + " " + day)} already - time flies.`;

  // seed is total days since the offset
  var base_seed = Math.floor(today.getTime()/(1000*60*60*24));
  var base_seed_yesterday = base_seed - 1;

  var role = get_value(ROLES, base_seed);
  var role_yesterday = get_value(ROLES, base_seed_yesterday);

  var action = update_text(role, base_seed, ACTION_TYPES, update_today, 0);
  var action_yesterday = update_text(role_yesterday, base_seed_yesterday, ACTION_TYPES_PAST, update_yesterday, 1);
});
