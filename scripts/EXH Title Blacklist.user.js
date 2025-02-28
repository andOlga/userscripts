// ==UserScript==
// @name        EXH Title blacklist
// @namespace   https://github.com/andOlga/userscripts
// @homepageURL https://github.com/andOlga/userscripts/tree/master/scripts
// @version     1
// @match       https://exhentai.org/*
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

// Note: titles should be stored as btoa(encodeURIComponent(title))

const list = GM_getValue('blacklist', [])
GM_setValue('blacklist', list)
for (const encodedTitle of list) {
  const title = decodeURIComponent(atob(encodedTitle))
  const images = [...document.querySelectorAll(`[title="${title}"]`)]
  for (const image of images) {
    let parent = image
    for (let i = 1; i <= 3; i++) {
      parent = parent.parentNode
    }
    parent.remove()
  }
}
