// ==UserScript==
// @name         KHInsider mass download
// @namespace    https://github.com/ooa113y/userscripts
// @match        https://downloads.khinsider.com/*
// @description  Allows mass downloads of soundtracks from downloads.khinsider.com.
// @homepageURL  https://github.com/ooa113y/userscripts/tree/master/scripts
// @version      5
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

let alerted = false

function download (suffix) {
    for (const song of songs) {
        GM_xmlhttpRequest({url: song.url, onload: data => {
            dlPage.innerHTML = data.responseText
            let link = dlPage.querySelector(`a[href$=${suffix}]`)
            if (!link) {
              suffix = 'mp3'
              link = dlPage.querySelector(`a[href$=${suffix}]`)
              if (!alerted) alert(`FLAC is not supported for this album. Falling back to MP3.`)
              alerted = true
            }
            GM_download(
              link.href,
              `${String(song.idx).padStart(padLength, '0')} - ${song.name}.${suffix}`
            )
        }})
    }
}

const mp3link = document.querySelector('.albumMassDownload div a')
mp3link.href = '#'
mp3link.innerHTML = `MP3`
mp3link.addEventListener('click', event => {
  event.preventDefault()
  mp3link.remove()
  flaclink.remove()
  download('mp3')
})

const flaclink = document.createElement('a')
flaclink.innerText = ' | FLAC'
flaclink.href = '#'
flaclink.addEventListener('click', _ => {
  event.preventDefault()
  flaclink.remove()
  mp3link.remove()
  download('flac')
})
mp3link.parentNode.appendChild(flaclink)
