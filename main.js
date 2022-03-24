import './style.css'

const hacked = document.querySelector('.hacked-input')
const printText = document.querySelector('.changer')
const result = document.querySelector('.result')

hacked.addEventListener('paste', event => {
    event.preventDefault()
    event.target.value = "Hacked!"
})

printText.addEventListener('input', event => {
    result.textContent = event.target.value
})

document.querySelector('#app').innerHTML = `
  <h1>Hello World!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
