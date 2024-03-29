// ==UserScript==
// @name         Display AO3 chapter lengths
// @namespace    https://github.com/andOlga/userscripts
// @description  Displays the word count of the current chapter on AO3 works alongside the total word count.
// @icon         https://archiveofourown.org/favicon.ico
// @homepageURL  https://github.com/andOlga/userscripts/tree/master/scripts
// @version      2
// @match        https://archiveofourown.org/works/*/chapters/*
// @grant        none
// ==/UserScript==

const dd = document.querySelector('dd.words')
const chapterText = document.querySelector('[role=article]').innerText
const chapterCount = chapterText
  .split(/\s+/) // split into words
  .filter(x => x.match(/\w/)) // filter out punctuation
  .length // Get word count
  - 2 // Remove "Chapter text"/"Work text" heading
dd.innerText = `${chapterCount}/${dd.innerText}`
