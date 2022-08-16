// ==UserScript==
// @name        v.gd URL shortener
// @namespace   https://github.com/andOlga/userscripts
// @homepageURL https://github.com/andOlga/userscripts/tree/master/scripts
// @icon        https://v.gd/favicon.ico
// @description Shortens URLs with the v.gd service
// @version     2
// @match       *://*/*
// @grant       GM_setClipboard
// @grant       GM_registerMenuCommand
// @grant       GM_xmlhttpRequest
// @grant       GM_notification
// @connect     v.gd
// ==/UserScript==

GM_registerMenuCommand('Shorten', _ => {
  window.open('https://v.gd/create.php?url=' + encodeURIComponent(location.href))
})

GM_registerMenuCommand('Shorten to clipboard', _ => {
  GM_xmlhttpRequest({
    url: 'https://v.gd/create.php?format=simple&url=' + encodeURIComponent(location.href),
    onload: data => {
      GM_setClipboard(data.responseText)
      GM_notification('Short URL copied!')
    }})
})
