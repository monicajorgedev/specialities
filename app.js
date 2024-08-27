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
    res.send(`<h1>Home</h1> <nav>${linkMarketing}   ${linkDevelopers}   ${linkQAs}   ${linkVentas}   ${linkAdministracion}</nav>`)
})

app.get('/marketing', (req, res) => {
    let list = ''
    for(let i = 0; i < marketing.length; i++ ){
        list += `<li>Name: ${marketing[i].name} - Age: ${marketing[i].age}</li>`
    }
    res.send(`
        <nav>${linkHome}   ${linkDevelopers}   ${linkQAs}   ${linkVentas}   ${linkAdministracion}</nav>
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


/*
solución de clase
const express = require("express");

const app = express();

const usersData = [
  { id: 1, name: "Alice", age: 28, specialty: "marketing" },
  { id: 2, name: "Bob", age: 35, specialty: "developers" },
  { id: 3, name: "Charlie", age: 30, specialty: "developers" },
  { id: 4, name: "David", age: 25, specialty: "QAs" },
  { id: 5, name: "Emma", age: 32, specialty: "ventas" },
  { id: 6, name: "Frank", age: 28, specialty: "marketing" },
  { id: 7, name: "Grace", age: 34, specialty: "developers" },
  { id: 8, name: "Hank", age: 27, specialty: "QAs" },
  { id: 9, name: "Ivy", age: 31, specialty: "ventas" },
  { id: 10, name: "Jack", age: 29, specialty: "marketing" },
  { id: 11, name: "Karen", age: 36, specialty: "developers" },
  { id: 12, name: "Leo", age: 26, specialty: "QAs" },
  { id: 13, name: "Mia", age: 33, specialty: "ventas" },
  { id: 14, name: "Nathan", age: 30, specialty: "marketing" },
  { id: 15, name: "Olivia", age: 37, specialty: "developers" },
  { id: 16, name: "Paul", age: 24, specialty: "QAs" },
  { id: 17, name: "Quinn", age: 32, specialty: "ventas" },
  { id: 18, name: "Ryan", age: 28, specialty: "marketing" },
  { id: 19, name: "Sara", age: 35, specialty: "developers" },
  { id: 20, name: "Tom", age: 29, specialty: "QAs" },
  { id: 21, name: "Uma", age: 30, specialty: "ventas" },
  { id: 22, name: "Victor", age: 27, specialty: "marketing" },
  { id: 23, name: "Wendy", age: 34, specialty: "developers" },
  { id: 24, name: "Xander", age: 31, specialty: "QAs" },
  { id: 25, name: "Yara", age: 33, specialty: "ventas" },
  { id: 26, name: "Zack", age: 28, specialty: "marketing" },
  { id: 27, name: "Ava", age: 36, specialty: "developers" },
  { id: 28, name: "Bryan", age: 26, specialty: "QAs" },
  { id: 29, name: "Cynthia", age: 32, specialty: "ventas" },
  { id: 30, name: "Derek", age: 30, specialty: "marketing" },
  { id: 31, name: "Data", age: 28, specialty: "data" },
];

const filterBySpeciality = (specialty) => {
  return usersData.filter((user) => {
    return user.specialty.toLowerCase() === specialty;
  });
};

// const arrCategories = []

// usersData.forEach(ele => {
//     if(!arrCategories.includes(ele.specialty) ) {
//         arrCategories.push(ele.specialty)
//     }
// })

const categories = [...new Set(usersData.map((user) => user.specialty))];

const template = (specialty) => {
  const filteredUsers = filterBySpeciality(specialty);
  const totalUsers = filteredUsers.length;
  const template = `
  <!DOCTYPE html>
  <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <nav>
        <a href="/">Home</a>
        ${categories
          .map(
            (category) => `
            <a href=/${category}>${category}</a>
        `
          )
          .join("")}
    </nav>
        <h1>${specialty}</h1>
        <h2>Número de usuarios: ${totalUsers}</h2>
        <ul>
        ${filteredUsers
          .map((user) => {
            return `<li>Id: ${user.id} | Name: ${user.name} - Edad: ${user.age}</li>`;
          })
          .join("")}
        </ul>
    </body>
</html>
  `;

  return template;
};

app.get("/", (req, res) => {
  res.send("<h1>Hola mundo</h1>");
});

app.get("/marketing", (req, res) => {
  console.log(categories);
  res.send(template("marketing"));
});

app.get("/developers", (req, res) => {
  res.send(template("developers"));
});

app.get("/qas", (req, res) => {
  res.send(template("qas"));
});

app.get("/ventas", (req, res) => {
  res.send(template("ventas"));
});

app.get("/data", (req, res) => {
  res.send(template("data"));
});

app.use((req, res) => {
  res.status(404).send(`<h1>Página no encontrada</h1>`);
});

app.listen(3000, () => {
  console.log(`el servidor está escuchando en el puerto http://localhost:3000`);
});

// const http = require("node:http");

// const server = http.createServer((req, res) => {
//   res.end("<h1>Hola mundo</h1>");
// });

// server.listen(3000, () => {
//   console.log(`el servidor está escuchando en el puerto http://localhost:3000`);
// });


*/ 