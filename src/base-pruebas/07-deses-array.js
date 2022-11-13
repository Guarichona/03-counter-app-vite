// const personajes = ['Goku', 'Vegeta', 'Trunks']

// const [, , Nazh3] = personajes;

// console.log(Nazh3)


// const retornaNazh = () => {
//     return ['ABC', 123]
// }

// const arr = retornaNazh()
// console.log(arr)

// const [letras, numeros] = retornaNazh()

const usState = (valor) => {

    return [valor, () => { console.log('Hola Mundo') }]
};


// console.log(useState('Peta'));
// // arr[0];
// // console.log(arr[1]());

const [nombre, setNombre] = usState('Marly')

console.log(setNombre);
setNombre();
