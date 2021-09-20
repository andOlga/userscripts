// ==UserScript==
// @name         Display AO3 chapter lengths
// @namespace    https://github.com/ooa113y/userscripts
// @description  Displays the word count of the current chapter on AO3 works alongside the total word count.
// @homepageURL  https://github.com/ooa113y/userscripts/tree/master/scripts
// @version      1
// @match        https://archiveofourown.org/works/*/chapters/*
// @grant        none
// ==/UserScript==

(function() {
    const dd = document.querySelector('dd.words')
    const chapterText = document.querySelector('[role=article]').innerText
    const chapterCount = chapterText
      .split(/\s+/) // split into words
      .filter(x => x.match(/\w/)) // filter out punctuation
      .length // Get word count
      - 2 // Remove "Chapter text"/"Work text" heading
    dd.innerText = `${chapterCount}/${dd.innerText}`
})();
