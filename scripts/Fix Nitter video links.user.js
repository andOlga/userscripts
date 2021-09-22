// ==UserScript==
// @name        Fix Nitter video links
// @namespace   https://github.com/ooa113y/userscripts
// @homepageURL https://github.com/ooa113y/userscripts/tree/master/scripts
// @description Copies video links on Nitter to clipboard as TwitFix links (for Discord embeds)
// @version     1
// @match       https://nitter.net/*/status/*
// @grant       GM_setClipboard
// ==/UserScript==


const videoContainer = document.getElementsByTagName('video')[0].closest('.card')
const button = document.createElement('button')
button.innerText = 'Copy TwitFix link'
button.addEventListener('click', event => {
  GM_setClipboard(location.href.replace('nitter.net', 'fxtwitter.com'))
})
videoContainer.appendChild(button)
