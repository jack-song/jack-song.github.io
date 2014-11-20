---
title: Arimaa Free
permalink: projects/arimaafree/
layout: page
order: 11
---
[googleplay]: https://play.google.com/store/apps/details?id=email.com.gmail.songjiapei.arimaa&hl=en
[github]: https://github.com/jack-song/Arimaa
[arimaa]: http://arimaa.com/arimaa/
[nathan]: http://thenoviceoof.com/blog/projects/arimaa-icon-set/

#### [<i class='fa fa-play-circle'></i> On Google Play][googleplay]{:.pure-button}  [<i class='fa fa-github'></i> On GitHub][github]{:.pure-button}
{:.center}


### Goals and Approach
{:.bar-heading}
Build an Android App to play the board game published at [arimaa.com][arimaa]. This app was developed with the purpose of learning the Android framework in mind. I initially aimed to just have a pleasant, playable experience for 2 human players. This included modular graphics, full mechanics/rules implementation, and the automatic saving/loading of one game at a time. This is the first program I'm writing for public release, so I'm trying especially to research and follow conventions.

#### Mechanics of Interest:

- Players are allowed to set up their pieces in any starting orientation
- Players are allowed 4 moves of their choice, in any combination, on their turn
- Players are allowed to move their opponents pieces, depending on a hierarchy of power

#### Long Term Goals:

- Adding predictive behaviour to allow making multiple moves at a time
- Adding AI to play with
- Saving and loading multiple game states by name
- Multiplayer?

### Code Design
{:.bar-heading}
Being a relatively large and expanding program, I tried to spend time making good design choices. This is an ongoing process - I'm learning how to refactor and redesign as I go and new requirements come up. I've already had to do a complete code rewrite when I realized my original design(lack of a design) was very bad. I'm currently trying vanilla MVC. All display-related code is kept in the View class, while the game engine itself only has logical functions. I am currently working on seperating out logic that does not rely heavily on the game state into a static utilities class. I'm also working on separating the model itself from the logic and using proper observer classes. 

### UI Design
{:.bar-heading}
To let a user dive straight into a game, the default screen is the game board, which either immediately starts a new game or loads a previous one. The game visuals would be important as a user would be looking at the game board for extended amounts of time. A board or piece set in real life is something a user goes out to select and buy, so there should options for their appearance in the app.

I especially wanted to provide an alternative to the default piece set, which I personally found to be unclear and distracting. The set designed by [Nathan Hwang][nathan] allows a player to judge the positions with much greater ease, speed, and accuracy.