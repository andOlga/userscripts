// ==UserScript==
// @name         Force gotomeeting web
// @namespace    https://github.com/ooa113y/userscripts
// @description  Forces gotomeeting links to open in a web browser, so that it doesn't try to force the client download on you.
// @match        https://global.gotomeeting.com/join/*
// @grant        none
// ==/UserScript==

location.href = `https://app.gotomeeting.com/?meetingId=${location.href.match(/join\/(\d+)/)[1]}`
