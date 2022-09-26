const sass = require('sass')
const fs = require('fs')

let appJS = fs.readFileSync('src/index_template.js', 'utf8')
const idPug = fs.readFileSync('src/id.pug')
const css = sass.compile('src/id.sass', {style: 'compressed'})
const ready = appJS.replace(/\*\*\*template\*\*\*/, `style ${css.css}\n${idPug}`)
fs.writeFileSync('src/NRPG_ID_Card_Generator/index.js', ready)