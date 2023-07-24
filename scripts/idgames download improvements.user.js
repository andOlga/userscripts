// ==UserScript==
// @name        /idgames download improvements
// @namespace   https://github.com/andOlga/userscripts
// @homepageURL https://github.com/andOlga/userscripts/tree/master/scripts
// @description Adjusts the download section of /idgames pages to be more user-friendly
// @icon        https://www.idsoftware.com/favicon.ico
// @version     2
// @match       https://www.doomworld.com/idgames/*
// @grant       GM_download
// @grant       GM_getValue
// ==/UserScript==
const downloadTable = document.querySelector('table.download')
if (downloadTable) {
  const links = [...downloadTable.querySelectorAll('a')]
  for (const link of links) {
    if (link.href.startsWith('ftp://') && !GM_getValue('keep_ftp')) {
      // Get rid of FTP links altogether -- most browsers no longer support these...
      link.parentNode.remove()
    } else {
      // For remaining links, download them as PK3 instead of ZIP, so that they're instantly playable
      const fileElements = link.href.split('/')
      const fileName = fileElements[fileElements.length - 1].replace(/\.zip$/, '.pk3')
      link.onclick = event => {
        event.preventDefault()
        GM_download({url: link.href, name: fileName})
      }
    }
  }
}
