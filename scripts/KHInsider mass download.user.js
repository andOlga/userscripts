// ==UserScript==
// @name         KHInsider mass download
// @namespace    https://github.com/ooa113y/userscripts
// @match        https://downloads.khinsider.com/*
// @description  Allows mass downloads of soundtracks from downloads.khinsider.com.
// @grant GM_registerMenuCommand
// @grant GM_xmlhttpRequest
// @grant GM_download
// @connect vgmsite.com
// ==/UserScript==

let idx = 1
const songs = Array.from(document.getElementsByClassName('playlistDownloadSong')).map(x => {
    return {
        name: x.parentElement.querySelector('.clickable-row a').innerText,
        idx: idx++,
        url: x.querySelector('a').href
    }
})
const padLength = String(document.getElementById('songlist').rows.length - 2).length
const dlPage = document.createElement('div')

function download (suffix) {
    for (const song of songs) {
        GM_xmlhttpRequest({url: song.url, onload: data => {
            dlPage.innerHTML = data.responseText
            GM_download(
              dlPage.querySelector(`a[href$=${suffix}]`).href,
              `${String(song.idx).padStart(padLength, '0')} - ${song.name}.${suffix}`
            )
        }})
    }
}

GM_registerMenuCommand("as MP3", _ => download('mp3'))
GM_registerMenuCommand("as FLAC", _ => download('flac'))
