// ==UserScript==
// @name        Force zoom web
// @namespace   https://github.com/ooa113y/userscripts
// @description  Forces Zoom links to open in a web browser, so that it doesn't try to force the client download on you.
// @match       https://*.zoom.us/s/*
// @grant       none
// ==/UserScript==

location.href = location.pathname.replace('/s/', '/wc/')+'/start'
