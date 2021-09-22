// ==UserScript==
// @name        v.gd URL shortener
// @namespace   https://github.com/ooa113y/userscripts
// @homepageURL https://github.com/ooa113y/userscripts/tree/master/scripts
// @description Shortens URLs with the v.gd service
// @version     1
// @match       *://*/*
// @grant       GM_setClipboard
// @grant       GM_registerMenuCommand
// ==/UserScript==

GM_registerMenuCommand('Shorten', _ => {
  window.open('https://v.gd/create.php?url=' + encodeURIComponent(location.href))
})
