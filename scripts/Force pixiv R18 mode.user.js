// ==UserScript==
// @name        Force pixiv R18 mode
// @namespace   https://github.com/andOlga/userscripts
// @homepageURL https://github.com/andOlga/userscripts/tree/master/scripts
// @description Forces pixiv to always show only R18 images (when possible)
// @icon        https://www.pixiv.net/favicon.ico
// @version     1
// @include     https://*.pixiv.net/*
// @grant       none
// @run-at      document-start
// ==/UserScript==

setInterval(_ => {
  if (location.pathname == '/' || location.pathname == '/novel/') location.href += 'cate_r18.php' // Homepage for images/novels (JP)
  if (location.pathname == '/en/') location.href = '/cate_r18.php' // Homepage for images (EN)
  if (location.pathname.match(/\/tags\//) && !location.search.includes('mode=r18')) location.search += '&mode=r18' // Tag pages
}, 1000)
