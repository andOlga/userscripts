// ==UserScript==
// @name        Default Nitter settings
// @namespace   https://github.com/ooa113y/userscripts
// @homepageURL https://github.com/ooa113y/userscripts/tree/master/scripts
// @icon        https://nitter.net/favicon.ico
// @version     4
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
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_listValues
// ==/UserScript==

function getCookie(cookie) { // Helper function to check existing settings
  const found = document.cookie.split('; ').find(x => x.startsWith(`${cookie}=`))
  if (found) {
    return found.split('=')[1]
  } else {
    return null
  }
}

let needReload = false
const knownPrefs = ['hlsPlayback', 'muteVideos', 'proxyVideos', 'replaceYoutube', 'theme']
for (const pref of knownPrefs) {
  GM_setValue(pref, GM_getValue(pref, null)) // Initialise Values page with well-known settings
}

for (const val of GM_listValues()) { // Allow adding custom settings as well
  if (val === null) continue
  if (getCookie(val) === null) {
    document.cookie = `${val}=${GM_getValue(val)}`
    needReload = true
  }
}

if (needReload) location.reload()
