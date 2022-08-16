// ==UserScript==
// @name        Nitter Enhancements
// @namespace   https://github.com/andOlga/userscripts
// @homepageURL https://github.com/andOlga/userscripts/tree/master/scripts
// @icon        https://nitter.net/favicon.ico
// @version     4
// @noframes
// @match https://nitter.net/*
// @match https://nitter.42l.fr/*
// @match https://nitter.pussthecat.org/*
// @match https://nitter.nixnet.services/*
// @match https://nitter.fdn.fr/*
// @match https://nitter.1d4.us/*
// @match https://nitter.kavin.rocks/*
// @match https://nitter.unixfox.eu/*
// @match https://nitter.domain.glass/*
// @match https://nitter.eu/*
// @match https://nitter.ethibox.fr/*
// @match https://nitter.namazso.eu/*
// @match https://nitter.mailstation.de/*
// @match https://nitter.actionsack.com/*
// @match https://nitter.cattube.org/*
// @match https://birdsite.xanny.family/*
// @match https://nitter.hu/*
// @match https://nitter.exonip.de/*
// @match https://twitr.gq/*
// @match https://nitter.moomoo.me/*
// @match https://bird.trom.tf/*
// @match https://nitter.it/*
// @match https://nitter.bcow.xyz/*
// @match https://bird.nogafam.es/*
// @match https://twitter.censors.us/*
// @match https://nitter.grimneko.de/*
// @match https://nitter.koyu.space/*
// @match https://nitter.alefvanoon.xyz/*
// @match https://nitter.ir/*
// @match https://nitter.autarkic.org/*
// @match https://n.0x0.st/*
// @match https://n.hyperborea.cloud/*
// @match https://nitter.didw.to/*
// @match https://nitter.ca/*
// @match https://tweet.lambda.dance/*
// @match https://twitter.076.ne.jp/*
// @match http://6wtik35qytedxazoefyol74tb5qnwknxj3plr4czxlywlod5avkxskyd.onion/*
// @match http://3nzoldnxplag42gqjs23xvghtzf6t6yzssrtytnntc6ppc7xxuoneoad.onion/*
// @match http://nitter.l4qlywnpwqsluw65ts7md3khrivpirse744un3x7mlskqauz5pyuzgqd.onion/*
// @match http://nitter7bryz3jv7e3uekphigvmoyoem4al3fynerxkj22dmoxoq553qd.onion/*
// @match http://npf37k3mtzwxreiw52ccs5ay4e6qt2fkcs2ndieurdyn2cuzzsfyfvid.onion/*
// @match http://nitter.v6vgyqpa7yefkorazmg5d5fimstmvm2vtbirt6676mt7qmllrcnwycqd.onion/*
// @match http://i23nv6w3juvzlw32xzoxcqzktegd4i4fu3nmnc2ewv4ggiu4ledwklad.onion/*
// @match http://26oq3gioiwcmfojub37nz5gzbkdiqp7fue5kvye7d4txv4ny6fb4wwid.onion/*
// @match http://vfaomgh4jxphpbdfizkm5gbtjahmei234giqj4facbwhrfjtcldauqad.onion/*
// @match http://nitterrrs6bbcba2bxjviwxzzapkhuuelljtig2ku2rxasweckxxxhid.onion/*
// @match http://iwgu3cv7ywf3gssed5iqtavmrlszgsxazkmwwnt4h2kdait75thdyrqd.onion/*
// @match http://erpnncl5nhyji3c32dcfmztujtl3xaddqb457jsbkulq24zqq7ifdgad.onion/*
// @match http://ckzuw5misyahmg7j5t5xwwuj3bwy62jfolxyux4brfflramzsvvd3syd.onion/*
// @match https://nitter.himiko.cloud/*
// @match https://nitter.jae.fi/*
// @match https://nitter.cc/*
// @match https://nitter.ortion.xyz/*
// @match https://nitter.vxempire.xyz/*
// @match https://nitter.40two.app/*
// @match https://nitter.dark.fail/*
// @match https://nitter.sugoma.tk/*
// @match https://twiiit.com/*
// @match https://twitit.gq/*
// @match https://*.twitter.com/*
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// @grant GM_download
// @grant GM_setClipboard
// ==/UserScript==

// === Check whether individual parts of the script are enabled/disabled ===
GM_setValue('enable_redirect', GM_getValue('enable_redirect', true))
GM_setValue('enable_settings', GM_getValue('enable_settings', true))
GM_setValue('enable_videofix', GM_getValue('enable_videofix', true))
GM_setValue('enable_imagedownload', GM_getValue('enable_imagedownload', true))

// === Redirect from Twitter ===
if (GM_getValue('enable_redirect')) {
  if (location.hostname.includes('twitter.com')) {
    GM_setValue('redirect_instance', GM_getValue('redirect_instance', 'nitter.net'))
    location.href = location.href.replace(location.hostname, GM_getValue('redirect_instance'))
  }
}

// === Set Default Settings ===
if (GM_getValue('enable_settings')) {
  function getCookie(cookie) { // Helper function to check existing settings
    const found = document.cookie.split('; ').find(x => x.startsWith(`${cookie}=`))
    if (found) {
      return found.split('=')[1]
    } else {
      return null
    }
  }

  let needReload = false
  const knownPrefs = ['hlsPlayback', 'muteVideos', 'proxyVideos', 'replaceYouTube', 'theme']
  for (const pref of knownPrefs) {
    GM_setValue(pref, GM_getValue(pref, null)) // Initialise Values page with well-known settings
  }

  for (const val of knownPrefs) {
    if (GM_getValue(val) === null) continue
    if (getCookie(val) === null) {
      document.cookie = `${val}=${GM_getValue(val)}`
      needReload = true
    }
  }

  if (needReload) location.reload()
}

// === Fix Video Links ===
if (GM_getValue('enable_videofix')) {
  if (location.pathname.includes('/status/')) {
      const videoContainer = document.getElementsByTagName('video')[0].closest('.card')
      const button = document.createElement('button')
      button.innerText = 'Copy TwitFix link'
      button.addEventListener('click', event => {
        GM_setClipboard(location.href.replace(location.host, 'fxtwitter.com'))
        button.innerText = 'Copied!'
        setTimeout(_ => { button.innerText = 'Copy TwitFix link'}, 1000)
      })
      videoContainer.appendChild(button)
  }
}

// == Allow Image Download ==
if (GM_getValue('enable_imagedownload')) {
  if (location.pathname.includes('/pic/')) {
    const button = document.createElement('button')
    button.innerText = '⬇'
    button.style.position = 'absolute'
    button.style.left = 0
    button.style.top = 0
    button.addEventListener('click', _ => {
      GM_download(location.pathname, location.pathname.replace('/pic/media%2F', '').replace('%3Fname%3Dorig', ''))
    })
    document.body.appendChild(button)
  }
}
