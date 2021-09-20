// ==UserScript==
// @name         Remove pornhub age verification
// @namespace    https://github.com/ooa113y/userscripts
// @match        https://www.pornhub.com/*
// @grant        none
// @description  Gets rid of the annoying age verification banner on every PH page
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll('[class^=age-verification]').forEach(x => x.remove())
    document.querySelectorAll('[id^=age-verification]').forEach(x => x.remove())
})();
