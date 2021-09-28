// ==UserScript==
// @name        Nitter image download
// @namespace   https://github.com/ooa113y/userscripts
// @homepageURL https://github.com/ooa113y/userscripts/tree/master/scripts
// @description Download images from Nitter with sensible filenames
// @icon        https://nitter.net/favicon.ico
// @version     3
// @match https://nitter.net/pic/*
// @match https://nitter.42l.fr/pic/*
// @match https://nitter.pussthecat.org/pic/*
// @match https://nitter.nixnet.services/pic/*
// @match https://nitter.fdn.fr/pic/*
// @match https://nitter.1d4.us/pic/*
// @match https://nitter.kavin.rocks/pic/*
// @match https://nitter.unixfox.eu/pic/*
// @match https://nitter.domain.glass/pic/*
// @match https://nitter.eu/pic/*
// @match https://nitter.ethibox.fr/pic/*
// @match https://nitter.namazso.eu/pic/*
// @match https://nitter.mailstation.de/pic/*
// @match https://nitter.actionsack.com/pic/*
// @match https://nitter.cattube.org/pic/*
// @match https://birdsite.xanny.family/pic/*
// @match https://nitter.hu/pic/*
// @match https://nitter.exonip.de/pic/*
// @match https://twitr.gq/pic/*
// @match https://nitter.moomoo.me/pic/*
// @match https://bird.trom.tf/pic/*
// @match https://nitter.it/pic/*
// @match https://nitter.bcow.xyz/pic/*
// @match https://bird.nogafam.es/pic/*
// @match https://twitter.censors.us/pic/*
// @match https://nitter.grimneko.de/pic/*
// @match https://nitter.koyu.space/pic/*
// @match https://nitter.alefvanoon.xyz/pic/*
// @match https://nitter.ir/pic/*
// @match https://nitter.autarkic.org/pic/*
// @match https://n.0x0.st/pic/*
// @match https://n.hyperborea.cloud/pic/*
// @match https://nitter.didw.to/pic/*
// @match https://nitter.ca/pic/*
// @match https://tweet.lambda.dance/pic/*
// @match https://twitter.076.ne.jp/pic/*
// @match http://6wtik35qytedxazoefyol74tb5qnwknxj3plr4czxlywlod5avkxskyd.onion/pic/*
// @match http://3nzoldnxplag42gqjs23xvghtzf6t6yzssrtytnntc6ppc7xxuoneoad.onion/pic/*
// @match http://nitter.l4qlywnpwqsluw65ts7md3khrivpirse744un3x7mlskqauz5pyuzgqd.onion/pic/*
// @match http://nitter7bryz3jv7e3uekphigvmoyoem4al3fynerxkj22dmoxoq553qd.onion/pic/*
// @match http://npf37k3mtzwxreiw52ccs5ay4e6qt2fkcs2ndieurdyn2cuzzsfyfvid.onion/pic/*
// @match http://nitter.v6vgyqpa7yefkorazmg5d5fimstmvm2vtbirt6676mt7qmllrcnwycqd.onion/pic/*
// @match http://i23nv6w3juvzlw32xzoxcqzktegd4i4fu3nmnc2ewv4ggiu4ledwklad.onion/pic/*
// @match http://26oq3gioiwcmfojub37nz5gzbkdiqp7fue5kvye7d4txv4ny6fb4wwid.onion/pic/*
// @match http://vfaomgh4jxphpbdfizkm5gbtjahmei234giqj4facbwhrfjtcldauqad.onion/pic/*
// @match http://nitterrrs6bbcba2bxjviwxzzapkhuuelljtig2ku2rxasweckxxxhid.onion/pic/*
// @match http://iwgu3cv7ywf3gssed5iqtavmrlszgsxazkmwwnt4h2kdait75thdyrqd.onion/pic/*
// @match http://erpnncl5nhyji3c32dcfmztujtl3xaddqb457jsbkulq24zqq7ifdgad.onion/pic/*
// @match http://ckzuw5misyahmg7j5t5xwwuj3bwy62jfolxyux4brfflramzsvvd3syd.onion/pic/*
// @match https://nitter.himiko.cloud/pic/*
// @match https://nitter.jae.fi/pic/*
// @match https://nitter.cc/pic/*
// @match https://nitter.ortion.xyz/pic/*
// @match https://nitter.vxempire.xyz/pic/*
// @match https://nitter.40two.app/pic/*
// @match https://nitter.dark.fail/pic/*
// @match https://nitter.sugoma.tk/pic/*
// @match https://twiiit.com/pic/*
// @match https://twitit.gq/pic/*
// @grant       GM_download
// ==/UserScript==

const button = document.createElement('button')
button.innerText = '⬇'
button.style.position = 'absolute'
button.style.left = 0
button.style.top = 0
button.addEventListener('click', _ => {
  GM_download(location.pathname, location.pathname.replace('/pic/media%2F', '').replace('%3Fname%3Dorig', ''))
})
document.body.appendChild(button)
