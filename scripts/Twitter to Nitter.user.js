// ==UserScript==
// @name        Twitter to Nitter
// @namespace   https://github.com/ooa113y/userscripts
// @homepageURL https://github.com/ooa113y/userscripts/tree/master/scripts
// @description Redirects any Twitter links to Nitter, to get rid of annoying log-in pop-ups and other UI hindrances
// @icon        https://nitter.net/favicon.ico
// @version     4
// @match       https://*.twitter.com/*
// @grant       GM_getValue
// @grant       GM_setValue
// @run-at      document-start
// ==/UserScript==

GM_setValue('instance', GM_getValue('instance', 'nitter.net'))

location.hostname = GM_getValue('instance')
