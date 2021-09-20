// ==UserScript==
// @name        Open in Steam
// @namespace   https://github.com/ooa113y/userscripts
// @description Open Steam links in the client
// @match       https://store.steampowered.com/*
// @match       https://steamcommunity.com/*
// @match       https://help.steampowered.com/*
// @grant       GM_registerMenuCommand
// ==/UserScript==

GM_registerMenuCommand("Open this page", _ => {
  window.open(`steam://openurl/${location.href}`)
})
