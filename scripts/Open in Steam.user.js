// ==UserScript==
// @name        Open in Steam
// @namespace   https://github.com/ooa113y/userscripts
// @description Open Steam links in the client
// @match       https://store.steampowered.com/*
// @match       https://steamcommunity.com/*
// @match       https://help.steampowered.com/*
// @grant       none
// ==/UserScript==

const original = document.querySelector('.header_installsteam_btn_content')
const button = original.cloneNode()
button.style.backgroundImage = 'none'
button.style.paddingLeft = '9px'
button.style.background = 'linear-gradient(60deg, rgba(117, 176, 34, 0.7) 5%,rgba(88, 138, 27, 0.6) 95%)'
button.style.marginRight = '9px'
button.href = `steam://openurl/${location.href}`
button.innerText = 'Open in Steam'
original.parentNode.insertBefore(button, original)
