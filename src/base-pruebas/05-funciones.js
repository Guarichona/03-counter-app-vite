// Funcion en Js

// function saludar(nombre) {

// return `Hola ${nombre}`
// }

// // console.log(saludar(`Marly💕`))

// saludar = 30
// console.log(saludar)

const saludar = function (nombre) {
    return `Hola ${nombre}`
}


const saludar2 = (nombre) => {
    return `Hola ${nombre}`
}

console.log(saludar2('Vegeta'))


const saludar3 = (nombre) => `Hola ${nombre}`
const saludar4 = (nombre) => `Hola Mundo`

console.log(saludar3('Nazhir'))
console.log(saludar4())

// Retornar objetos con función flecha

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502',
})

console.log(getUser())

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username2: nombre,
})

const UsuarioActivo = getUsuarioActivo(`Marly`);



console.log(UsuarioActivo)