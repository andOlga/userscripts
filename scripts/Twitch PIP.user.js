// ==UserScript==
// @name        Twitch PIP
// @namespace   https://github.com/andOlga/userscripts
// @homepageURL https://github.com/andOlga/userscripts/tree/master/scripts
// @description Allows to open the Twitch player in PIP
// @icon        https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png
// @version     1
// @match       https://www.twitch.tv/*
// @grant       GM_registerMenuCommand
// ==/UserScript==
GM_registerMenuCommand('Open stream in PIP', _ => {
  document.getElementsByTagName('video')[0].requestPictureInPicture()
})
