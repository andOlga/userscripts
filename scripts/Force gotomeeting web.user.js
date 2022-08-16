// ==UserScript==
// @name         Force GoToMeeting web
// @namespace    https://github.com/andOlga/userscripts
// @description  Forces GoToMeeting links to open in a web browser, so that it doesn't try to force the client download on you.
// @homepageURL  https://github.com/andOlga/userscripts/tree/master/scripts
// @version      1
// @match        https://global.gotomeeting.com/join/*
// @grant        none
// ==/UserScript==

location.href = `https://app.gotomeeting.com/?meetingId=${location.href.match(/join\/(\d+)/)[1]}`
