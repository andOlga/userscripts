// ==UserScript==
// @name        GitHub editor button
// @description Add a visual "Editor" button to GitHub repos to complement the "." shortcut
// @namespace   https://github.com/ooa113y/userscripts
// @match       https://github.com/*
// @grant       none
// ==/UserScript==

setTimeout(_ => { // The buttons don't show up immediately on page load, so wait a bit for them to render
  let findButton = document.querySelector('[data-hydro-click*=FIND_FILE_BUTTON]')
  if (findButton) {
    let editButton = findButton.cloneNode()
    editButton.href = `https://github.dev/${location.pathname.replace('/', '')}`
    editButton.innerText = 'Open in web editor'
    findButton.parentNode.insertBefore(editButton, findButton)
  }
}, 1000)
