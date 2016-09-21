---
layout: post
title:  "Arimaa Free"
category: project
excerpt_separator: <!--excerpt-->
---
![Arimaa Free](/assets/screen-arimaa.jpg)

<div class="centered">
	<a class="button" href="http://play.google.com/store/apps/details?id=email.com.gmail.songjiapei.arimaa&hl=en">
		<i class="ion-android-playstore"></i>Play Store
	</a> <a class="button end" href="http://github.com/jack-song/Arimaa">
		<i class="ion-social-github"></i>Github
	</a>
</div>

Android port of a chess-like board game - designed to be difficult for computers to play. AI players have very recently beaten humans! [The original Arimaa can be found here.](http://arimaa.com/arimaa/) (warning: not a modern website)

It was fun to design a system for rewinding and replaying games move by move. I ended up using a string notation for recording actions augmented from the [standard](http://arimaa.com/arimaa/learn/notation.html). Despite being intimidating, it was also fun to generate the recursive set of legal moves for the UI. Not too proud of the "GameEngine" class though...
<!--excerpt-->