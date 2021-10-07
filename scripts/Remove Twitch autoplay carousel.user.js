// ==UserScript==
// @name        Remove Twitch autoplay carousel
// @namespace   https://github.com/ooa113y/userscripts
// @homepageURL https://github.com/ooa113y/userscripts/tree/master/scripts
// @version     3
// @match       https://www.twitch.tv/*
// @grant       none
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/dom@1
// @icon        https://www.google.com/s2/favicons?domain=twitch.tv
// ==/UserScript==

VM.observe(document.body, _ => {
  let car
  if (car = document.querySelector('.front-page-carousel')) {
    car.remove()
  }
})
