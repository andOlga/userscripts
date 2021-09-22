// ==UserScript==
// @name        Nitter image download
// @namespace   https://github.com/ooa113y/userscripts
// @homepageURL https://github.com/ooa113y/userscripts/tree/master/scripts
// @description Download images from Nitter with sensible filenames
// @icon        https://nitter.net/favicon.ico
// @version     2
// @match       https://nitter.net/pic/*
// @grant       GM_download
// ==/UserScript==

const button = document.createElement('button')
button.innerText = '⬇'
button.style.position = 'absolute'
button.style.left = 0
button.style.top = 0
button.addEventListener('click', _ => {
  GM_download(location.pathname, location.pathname.replace('/pic/media%2F', '').replace('%3Fname%3Dorig', ''))
})
document.body.appendChild(button)
