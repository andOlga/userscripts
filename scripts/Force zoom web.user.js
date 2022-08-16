// ==UserScript==
// @name        Force Zoom web
// @namespace   https://github.com/andOlga/userscripts
// @description Forces Zoom links to open in a web browser, so that it doesn't try to force the client download on you.
// @homepageURL  https://github.com/andOlga/userscripts/tree/master/scripts
// @version      1
// @match       https://*.zoom.us/s/*
// @grant       none
// ==/UserScript==

location.href = location.pathname.replace('/s/', '/wc/')+'/start'
