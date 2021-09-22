// ==UserScript==
// @name         KHInsider mass download
// @namespace    https://github.com/ooa113y/userscripts
// @match        https://downloads.khinsider.com/*
// @description  Allows mass downloads of soundtracks from downloads.khinsider.com.
// @homepageURL  https://github.com/ooa113y/userscripts/tree/master/scripts
// @version      7
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

GM_setValue('extra_formats', GM_getValue('extra_formats', ['flac']).map(x => x.toLowerCase()))
const extraFormats = GM_getValue('extra_formats')
const extraLinks = []

function removeExtraLinks() {
  for (const link of extraLinks) link.remove()
}

const mp3link = document.querySelector('.albumMassDownload div a')
mp3link.href = '#'
mp3link.innerHTML = `MP3`
mp3link.addEventListener('click', event => {
  event.preventDefault()
  mp3link.remove()
  removeExtraLinks()
  download('mp3')
})

for (const format of extraFormats) {
  const extraLink = document.createElement('a')
  extraLink.innerText = ` | ${format.toUpperCase()}`
  extraLink.href = '#'
  extraLink.addEventListener('click', _ => {
    event.preventDefault()
    removeExtraLinks()
    mp3link.remove()
    download(format)
  })
  extraLinks.push(extraLink)
  mp3link.parentNode.appendChild(extraLink)
}
