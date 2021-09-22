// ==UserScript==
// @name        Twitter image download
// @namespace   https://github.com/ooa113y/userscripts
// @homepageURL https://github.com/ooa113y/userscripts/tree/master/scripts
// @description Download images from Twitter with sensible filenames
// @version     1
// @match       https://pbs.twimg.com/media/*
// @grant       GM_download
// ==/UserScript==

const button = document.createElement('button')
button.innerText = '⬇'
button.style.position = 'absolute'
button.style.left = 0
button.style.top = 0
button.addEventListener('click', _ => {
  GM_download(location.pathname, location.pathname.replace('/media/', '').replace(':large', ''))
})
document.body.appendChild(button)
