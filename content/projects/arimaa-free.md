---
title: Arimaa Free
description: "Android port of a chess-like board game."
date: "2016-11-17"
image: "/assets/arimaa-blurb.jpg"
---

<div class="image-set">
	<img src="/assets/arimaa-screen-1.png">
	<img src="/assets/arimaa-screen-2.png">
</div>

<div class="centered">
	<a class="button" href="http://play.google.com/store/apps/details?id=email.com.gmail.songjiapei.arimaa&hl=en">
		<i class="ion-android-playstore"></i>Play Store
	</a> <a class="button end" href="http://github.com/jack-song/Arimaa">
		<i class="ion-social-github"></i>Github
	</a>
</div>

Interestingly, a game designed to be difficult for computers to play. But AI players have very recently beaten humans! [The original Arimaa can be found here.](http://arimaa.com/arimaa/) (warning: not a modern website)

It was fun to design a system for rewinding and replaying games move by move. I ended up using a string notation for recording actions augmented from the [standard](http://arimaa.com/arimaa/learn/notation.html). Despite being intimidating, it was also fun to generate the recursive set of legal moves for the UI. Not too proud of the "GameEngine" class though...