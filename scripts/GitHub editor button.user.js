// ==UserScript==
// @name        GitHub editor button
// @description Add a visual "Editor" button to GitHub repos to complement the "." shortcut
// @namespace   https://github.com/ooa113y/userscripts
// @match       https://github.com/*
// @grant       none
// ==/UserScript==

let counter = 0

setInterval(_ => {
  if (document.querySelector('[data-editor-button]')) return
  const findButton = document.querySelector('[data-hydro-click*=FIND_FILE_BUTTON]')
  if (findButton) {
    const editButton = findButton.cloneNode()
    const path = location.pathname.split('/')
    const owner = path[1]
    const repo = path[2]
    editButton.href = `https://github.dev/${owner}/${repo}`
    editButton.innerText = 'Open in web editor'
    editButton.dataset.editorButton = true
    findButton.parentNode.insertBefore(editButton, findButton)
  }
}, 1000)
