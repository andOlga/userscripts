// ==UserScript==
// @name        Remove Twitch autoplay carousel
// @namespace   https://github.com/ooa113y/userscripts
// @homepageURL https://github.com/ooa113y/userscripts/tree/master/scripts
// @version     2
// @match       https://www.twitch.tv/*
// @grant       none
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/dom@1
// @icon        https://www.twitch.tv/favicon.ico
// ==/UserScript==

VM.observe(document.body, _ => {
  let car
  if (car = document.querySelector('.front-page-carousel')) {
    car.remove()
  }
})
