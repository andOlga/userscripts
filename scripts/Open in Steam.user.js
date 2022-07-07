// ==UserScript==
// @name        Open in Steam
// @namespace   https://github.com/ooa113y/userscripts
// @description Open Steam links in the client
// @icon        https://store.steampowered.com/favicon.ico
// @homepageURL  https://github.com/ooa113y/userscripts/tree/master/scripts
// @version      3
// @match       https://store.steampowered.com/*
// @match       https://steamcommunity.com/*
// @match       https://help.steampowered.com/*
// @grant       none
// ==/UserScript==

const original = document.querySelector('.header_installsteam_btn_content')
const button = original.cloneNode()
button.style.backgroundImage = 'none'
button.style.paddingLeft = '9px'
button.style.marginRight = '9px'
button.href = `steam://openurl/${location.href}`
button.innerText = 'Open in Steam'
original.parentNode.insertBefore(button, original)
