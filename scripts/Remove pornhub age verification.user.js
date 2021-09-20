// ==UserScript==
// @name         Remove pornhub age verification
// @namespace    https://github.com/ooa113y/userscripts
// @match        https://www.pornhub.com/*
// @grant        none
// @description  Pornhub's age verification in some countries forces a sign-in through social networks. This bypasses that nonsense.
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll('[class^=age-verification]').forEach(x => x.remove())
    document.querySelectorAll('[id^=age-verification]').forEach(x => x.remove())
})();
