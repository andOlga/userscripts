// ==UserScript==
// @name         KHInsider mass download
// @namespace    https://github.com/ooa113y/userscripts
// @match        https://downloads.khinsider.com/*
// @description  Allows mass downloads of soundtracks from downloads.khinsider.com.
// @homepageURL  https://github.com/ooa113y/userscripts/tree/master/scripts
// @version      3
// @grant GM_xmlhttpRequest
// @grant GM_download
// @grant GM_getValue
// @grant GM_setValue
// @connect vgmsite.com
// ==/UserScript==

GM_setValue('format', GM_getValue('format', 'mp3'))

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

let alerted = false

function download (suffix) {
    for (const song of songs) {
        GM_xmlhttpRequest({url: song.url, onload: data => {
            dlPage.innerHTML = data.responseText
            const link = dlPage.querySelector(`a[href$=${suffix}]`)
            if (!link) {
              if (!alerted) alert(`${GM_getValue('format').toUpperCase()} is not supported for this album. Switching to MP3.`)
              alerted = true
              GM_setValue('format', 'mp3')
              location.reload()
              return
            }
            GM_download(
              link.href,
              `${String(song.idx).padStart(padLength, '0')} - ${song.name}.${suffix}`
            )
        }})
    }
}

const dlink = document.querySelector('.albumMassDownload div a')
dlink.href = '#'
dlink.innerHTML = `click to download as ${GM_getValue('format').toUpperCase()}`
dlink.addEventListener('click', event => {
  event.preventDefault()
  dlink.innerText = 'Downloading, please wait...'
  download(GM_getValue('format'))
})

const clink = document.createElement('a')
clink.innerText = ' (change format?)'
clink.href = '#'
clink.addEventListener('click', _ => {
  GM_setValue('format', GM_getValue('format') === 'mp3' ? 'flac' : 'mp3')
  location.reload()
})
dlink.parentNode.appendChild(clink)
