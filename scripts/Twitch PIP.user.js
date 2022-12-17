// ==UserScript==
// @name        Twitch PIP
// @namespace   https://github.com/andOlga/userscripts
// @homepageURL https://github.com/andOlga/userscripts/tree/master/scripts
// @description Replace the Twitch "Popout Player" with standard Picture in Picture
// @icon        https://static.twitchcdn.net/assets/favicon-32-e29e246c157142c94346.png
// @version     6
// @match       https://www.twitch.tv/*
// ==/UserScript==
const mo = new MutationObserver(_ => {
  const btn = [...document.getElementsByTagName('button')].find(x => x.innerText === 'Popout Player')
  if (btn) {
    btn.children[0].children[0].innerText = 'Picture in Picture'
    btn.addEventListener('click', event => {
      event.preventDefault()
      event.stopImmediatePropagation()
      event.stopPropagation()
      document.getElementsByTagName('video')[0].requestPictureInPicture()
      const closeBtn = [...document.getElementsByTagName('button')].find(x => x.innerText === "Close")
      closeBtn.click()
    })
  }
})
mo.observe(document.body, { subtree: true, childList: true })
