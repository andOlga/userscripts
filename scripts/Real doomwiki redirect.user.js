// ==UserScript==
// @name        Real doomwiki redirect
// @namespace   https://github.com/andOlga/userscripts
// @homepageURL https://github.com/andOlga/userscripts/tree/master/scripts
// @description Redirects pages from the fake DoomWiki (on Fandom) to the real one
// @icon        https://doomwiki.org/favicon.ico
// @version     1
// @match       https://doom.fandom.com/*
// @grant       none
// ==/UserScript==
location.href = location.href.replace('doom.fandom.com', 'doomwiki.org')
