// ==UserScript==
// @name         KHInsider mass download
// @namespace    https://github.com/ooa113y/userscripts
// @match        https://downloads.khinsider.com/*
// @description  Allows mass downloads of soundtracks from downloads.khinsider.com.
// @grant GM_registerMenuCommand
// @grant GM_xmlhttpRequest
// @grant GM_download
// @grant GM_getValue
// @grant GM_setValue
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

GM_registerMenuCommand("Use MP3", _ => { GM_setValue('format', 'mp3'); location.reload(); })
GM_registerMenuCommand("Use FLAC (might not work on all albums)", _ => { GM_setValue('format', 'flac'); location.reload(); })

const dlink = document.querySelector('.albumMassDownload div a')
dlink.href = '#'
dlink.innerHTML = `<nobr>click to download as ${GM_getValue('format', 'mp3').toUpperCase()} (registration bypass enabled)</nobr>`
dlink.addEventListener('click', event => {
  event.preventDefault()
  dlink.innerText = 'Downloading, please wait...'
  download(GM_getValue('format', 'mp3'))
})
