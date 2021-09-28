// ==UserScript==
// @name        Fix Nitter video links
// @namespace   https://github.com/ooa113y/userscripts
// @homepageURL https://github.com/ooa113y/userscripts/tree/master/scripts
// @description Copies video links on Nitter to clipboard as TwitFix links (for Discord embeds)
// @icon        https://nitter.net/favicon.ico
// @version     4
// @match https://nitter.net/*/status/*
// @match https://nitter.42l.fr/*/status/*
// @match https://nitter.pussthecat.org/*/status/*
// @match https://nitter.nixnet.services/*/status/*
// @match https://nitter.fdn.fr/*/status/*
// @match https://nitter.1d4.us/*/status/*
// @match https://nitter.kavin.rocks/*/status/*
// @match https://nitter.unixfox.eu/*/status/*
// @match https://nitter.domain.glass/*/status/*
// @match https://nitter.eu/*/status/*
// @match https://nitter.ethibox.fr/*/status/*
// @match https://nitter.namazso.eu/*/status/*
// @match https://nitter.mailstation.de/*/status/*
// @match https://nitter.actionsack.com/*/status/*
// @match https://nitter.cattube.org/*/status/*
// @match https://birdsite.xanny.family/*/status/*
// @match https://nitter.hu/*/status/*
// @match https://nitter.exonip.de/*/status/*
// @match https://twitr.gq/*/status/*
// @match https://nitter.moomoo.me/*/status/*
// @match https://bird.trom.tf/*/status/*
// @match https://nitter.it/*/status/*
// @match https://nitter.bcow.xyz/*/status/*
// @match https://bird.nogafam.es/*/status/*
// @match https://twitter.censors.us/*/status/*
// @match https://nitter.grimneko.de/*/status/*
// @match https://nitter.koyu.space/*/status/*
// @match https://nitter.alefvanoon.xyz/*/status/*
// @match https://nitter.ir/*/status/*
// @match https://nitter.autarkic.org/*/status/*
// @match https://n.0x0.st/*/status/*
// @match https://n.hyperborea.cloud/*/status/*
// @match https://nitter.didw.to/*/status/*
// @match https://nitter.ca/*/status/*
// @match https://tweet.lambda.dance/*/status/*
// @match https://twitter.076.ne.jp/*/status/*
// @match http://6wtik35qytedxazoefyol74tb5qnwknxj3plr4czxlywlod5avkxskyd.onion/*/status/*
// @match http://3nzoldnxplag42gqjs23xvghtzf6t6yzssrtytnntc6ppc7xxuoneoad.onion/*/status/*
// @match http://nitter.l4qlywnpwqsluw65ts7md3khrivpirse744un3x7mlskqauz5pyuzgqd.onion/*/status/*
// @match http://nitter7bryz3jv7e3uekphigvmoyoem4al3fynerxkj22dmoxoq553qd.onion/*/status/*
// @match http://npf37k3mtzwxreiw52ccs5ay4e6qt2fkcs2ndieurdyn2cuzzsfyfvid.onion/*/status/*
// @match http://nitter.v6vgyqpa7yefkorazmg5d5fimstmvm2vtbirt6676mt7qmllrcnwycqd.onion/*/status/*
// @match http://i23nv6w3juvzlw32xzoxcqzktegd4i4fu3nmnc2ewv4ggiu4ledwklad.onion/*/status/*
// @match http://26oq3gioiwcmfojub37nz5gzbkdiqp7fue5kvye7d4txv4ny6fb4wwid.onion/*/status/*
// @match http://vfaomgh4jxphpbdfizkm5gbtjahmei234giqj4facbwhrfjtcldauqad.onion/*/status/*
// @match http://nitterrrs6bbcba2bxjviwxzzapkhuuelljtig2ku2rxasweckxxxhid.onion/*/status/*
// @match http://iwgu3cv7ywf3gssed5iqtavmrlszgsxazkmwwnt4h2kdait75thdyrqd.onion/*/status/*
// @match http://erpnncl5nhyji3c32dcfmztujtl3xaddqb457jsbkulq24zqq7ifdgad.onion/*/status/*
// @match http://ckzuw5misyahmg7j5t5xwwuj3bwy62jfolxyux4brfflramzsvvd3syd.onion/*/status/*
// @match https://nitter.himiko.cloud/*/status/*
// @match https://nitter.jae.fi/*/status/*
// @match https://nitter.cc/*/status/*
// @match https://nitter.ortion.xyz/*/status/*
// @match https://nitter.vxempire.xyz/*/status/*
// @match https://nitter.40two.app/*/status/*
// @match https://nitter.dark.fail/*/status/*
// @match https://nitter.sugoma.tk/*/status/*
// @match https://twiiit.com/*/status/*
// @match https://twitit.gq/*/status/*
// @grant       GM_setClipboard
// ==/UserScript==


const videoContainer = document.getElementsByTagName('video')[0].closest('.card')
const button = document.createElement('button')
button.innerText = 'Copy TwitFix link'
button.addEventListener('click', event => {
  GM_setClipboard(location.href.replace(location.host, 'fxtwitter.com'))
  button.innerText = 'Copied!'
  setTimeout(_ => { button.innerText = 'Copy TwitFix link'}, 1000)
})
videoContainer.appendChild(button)
