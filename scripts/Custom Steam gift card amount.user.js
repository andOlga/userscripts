// ==UserScript==
// @name        Custom Steam gift card amount
// @namespace   https://github.com/ooa113y/userscripts
// @homepageURL https://github.com/ooa113y/userscripts/tree/master/scripts
// @description Adds a "Custom amount" field for Steam gift cards
// @version     1
// @match       https://store.steampowered.com/digitalgiftcards/selectgiftcard
// @grant       none
// ==/UserScript==

const selectors = document.getElementsByClassName('giftcard_selection')
const firstSelector = selectors[0]
const lastSelector = selectors[selectors.length-1]
const newSelector = lastSelector.cloneNode()

const form = document.createElement('form')

const input = document.createElement('input')
input.type = 'number'
input.min = firstSelector.querySelector('.giftcard_style').innerText.match(/\d+/)[0]
input.required = true

const label = document.createElement('span')
label.innerText = 'Use custom value: '

const button = document.createElement('input')
button.type = 'submit'
button.style.marginLeft = '5px'

form.addEventListener('submit', event => {
  event.preventDefault()
  if (!form.checkValidity()) {
    return
  }
  submitSelectGiftCard(input.value*100)
})

form.appendChild(label)
form.appendChild(input)
form.appendChild(button)
newSelector.appendChild(form)

lastSelector.parentNode.appendChild(newSelector)
