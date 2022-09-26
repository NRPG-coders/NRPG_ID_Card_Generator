import {compile} from 'pug'

const compiledFunction = (args) => compile(`
***template***
`, args)

function handleFormSubmit(event) {
    event.preventDefault()
    
    const data = new FormData(event.target)
    
    const formJSON = Object.fromEntries(data.entries())
    
    const results = document.querySelector('#results pre')
    results.innerText = compiledFunction()(formJSON)

    console.log(formJSON)

    const preview = document.querySelector('#preview pre')
    preview.innerHTML = compiledFunction()(formJSON)
  }
  
  const form = document.querySelector('#form')
  form.addEventListener('submit', handleFormSubmit)