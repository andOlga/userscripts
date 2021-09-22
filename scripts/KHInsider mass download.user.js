// ==UserScript==
// @name         KHInsider mass download
// @namespace    https://github.com/ooa113y/userscripts
// @match        https://downloads.khinsider.com/*
// @description  Allows mass downloads of soundtracks from downloads.khinsider.com.
// @homepageURL  https://github.com/ooa113y/userscripts/tree/master/scripts
// @version      12
// @grant GM_xmlhttpRequest
// @grant GM_download
// @grant GM_setValue
// @grant GM_getValue
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
              if (!alerted) alert(`${suffix.toUpperCase()} is not supported for this album. Falling back to MP3.`)
              alerted = true
              suffix = 'mp3'
              link = dlPage.querySelector(`a[href$=${suffix}]`)
            }
            GM_download({
              url: link.href,
              name: `${String(song.idx).padStart(padLength, '0')} - ${song.name}.${suffix}`,
              onerror: console.error
            })
        }})
    }
}

const formats = [...new Set(
  GM_getValue('formats', ['mp3', 'flac'])
  .map(x => x.toLowerCase())
  .filter(x => x.match(/^[a-z0-9]+$/))
)]
if (!formats.includes('mp3')) formats.unshift('mp3')
GM_setValue('formats', formats)
const originalLink = document.querySelector('.albumMassDownload div a')
const container = originalLink.parentNode
originalLink.remove()

let separator

for (const format of formats) {
  const link = document.createElement('a')
  link.innerText = format.toUpperCase()
  link.href = '#'
  link.addEventListener('click', _ => {
    event.preventDefault()
    document.querySelector('.albumMassDownload').remove()
    download(format)
  })
  container.appendChild(link)
  separator = document.createElement('span')
  separator.innerText = ' | '
  container.appendChild(separator)
}

separator.remove()
