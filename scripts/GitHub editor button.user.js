// ==UserScript==
// @name        GitHub editor button
// @description Add a visual "Editor" button to GitHub repos to complement the "." shortcut
// @namespace   https://github.com/ooa113y/userscripts
// @match       https://github.com/*
// @grant       none
// @require     https://cdn.jsdelivr.net/npm/@violentmonkey/dom@1
// ==/UserScript==

VM.observe(document.body, _ => {
  let findButton = document.querySelector('[data-hydro-click*=FIND_FILE_BUTTON]')
  if (findButton) {
    let editButton = findButton.cloneNode()
    editButton.href = `https://github.dev/${location.pathname.replace('/', '')}`
    editButton.innerText = 'Open in web editor'
    findButton.parentNode.insertBefore(editButton, findButton)
    return true
  }
})
