// ==UserScript==
// @name        Twitter to Nitter
// @namespace   https://github.com/ooa113y/userscripts
// @homepageURL https://github.com/ooa113y/userscripts/tree/master/scripts
// @description Redirects any Twitter links to Nitter, to get rid of annoying log-in pop-ups and other UI hindrances
// @version     1
// @match       https://*.twitter.com/*
// @grant       GM_getValue
// @run-at      document-start
// ==/UserScript==

location.href = location.href.replace('twitter.com', GM_getValue('instance', 'nitter.net'))