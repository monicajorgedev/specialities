const express = require('express')
const app = express()
const usersData = require('./data.js')


let marketing = []
let developers = []
let QAs = []
let ventas = []

const linkHome = '<a href="/">Home</a>'
const linkMarketing = '<a href="/marketing">Marketing</a>'
const linkDevelopers = '<a href="/developers">Developers</a>'
const linkQAs = '<a href="/QAs">QAs</a>'
const linkVentas = '<a href="/ventas">Ventas</a>'
const linkAdministracion = '<a href="/administracion">Administracion</a>'

Object.entries(usersData).forEach(([key, value]) => {
    if(value.specialty === 'marketing'){
        marketing.push({name: value.name, age: value.age})
    }  if(value.specialty === 'developers'){
        developers.push({name: value.name, age: value.age})
    }  if(value.specialty === 'QAs'){
        QAs.push({name: value.name, age: value.age})
    }  if(value.specialty === 'ventas'){
        ventas.push({name: value.name, age: value.age})
    }
})

app.get('/', (req, res) => {
    res.send(`<h1>Home</h1> ${linkMarketing}   ${linkDevelopers}   ${linkQAs}   ${linkVentas}   ${linkAdministracion}`)
})

app.get('/marketing', (req, res) => {
    let list = ''
    for(let i = 0; i < marketing.length; i++ ){
        list += `<li>Name: ${marketing[i].name} - Age: ${marketing[i].age}</li>`
    }
    res.send(`
        ${linkHome}   ${linkDevelopers}   ${linkQAs}   ${linkVentas}   ${linkAdministracion}
        <h1>Marketing</h1> <p>Número de personas: ${marketing.length} </p> 
        <ul> ${list}
        </ul>`
    )
})

app.get('/developers', (req, res) => {
    let list = ''
    for(let i = 0; i < developers.length; i++ ){
        list += `<li>Name: ${developers[i].name} - Age: ${developers[i].age}</li>`
    }
    res.send(`
        ${linkHome}   ${linkMarketing}   ${linkQAs}   ${linkVentas}   ${linkAdministracion}
        <h1>Developers</h1> <p>Número de personas: ${developers.length}</p>
        <ul> ${list}
        </ul>`)
})

app.get('/QAs', (req, res) => {
    let list = ''
    for(let i = 0; i < QAs.length; i++ ){
        list += `<li>Name: ${QAs[i].name} - Age: ${QAs[i].age}</li>`
    }
    res.send(`
        ${linkHome}   ${linkMarketing}   ${linkDevelopers}   ${linkVentas}   ${linkAdministracion}
        <h1>QAs</h1> <p>Número de personas: ${QAs.length}</p>
        <ul> ${list}
        </ul>`)
})

app.get('/ventas', (req, res) => {
    let list = ''
    for(let i = 0; i < ventas.length; i++ ){
        list += `<li>Name: ${ventas[i].name} - Age: ${ventas[i].age}</li>`
    }
    res.send(`
        ${linkHome}   ${linkMarketing}   ${linkDevelopers}   ${linkQAs}   ${linkAdministracion}
        <h1>Ventas</h1> <p>Número de personas: ${ventas.length}</p>
        <ul> ${list}
        </ul>`)
})

app.use((req,res) => {
    res.status(404).send(`<h1>Pagina no encontrada</h1><a href="/">Home</a>`)
})

app.listen(3000, () => {
    console.log('Node.js esta escuchando en el puerto 3000')
})