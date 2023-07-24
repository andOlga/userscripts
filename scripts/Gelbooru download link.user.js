// ==UserScript==
// @name        Gelbooru download link
// @namespace   https://github.com/andOlga/userscripts
// @homepageURL https://github.com/andOlga/userscripts/tree/master/scripts
// @description Adds a "Download" link on Gelbooru image pages
// @icon        https://gelbooru.com/favicon.ico
// @version     2
// @match       https://gelbooru.com/*
// @grant       GM_download
// ==/UserScript==
function getFilename(link) {
  const parts = link.split('/')
  return parts[parts.length - 1]
}
const links = [...document.querySelectorAll('a[href^="https://img"]')]
for (const link of links) {
  if (link.innerText === 'Original image') {
    const newLink = link.cloneNode()
    newLink.download = ''
    newLink.innerText = 'Download / '
    newLink.onclick = event => {
      event.preventDefault()
      GM_download(newLink.href, getFilename(newLink.href))
    }
    link.parentNode.insertBefore(newLink, link)
    break
  }
}
