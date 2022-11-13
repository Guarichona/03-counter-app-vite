import { getHeroeById } from "./bases/08-find-filter";


// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // console.log('Marly, 👽 2 segundos después')
//         const EntradaHeroe = getHeroeById(2)
//         // resolve(EntradaHeroe);
//         reject('No se pudo encontrar el héroe')
//     }, 2000);


// })
// console.log('COMIENZA');

// promesa.then((p2) => {
//     console.log('Heroe', p2);
// })
//     .catch(err => console.warn(err))

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const EntradaHeroe = getHeroeById(id)

            if (EntradaHeroe) {
                resolve(EntradaHeroe);
            }
            else {

                reject('No se pudo encontrar el héroe')
            }
        }, 2000);
    });
};

getHeroeByIdAsync(1)
    .then(console.log)
    .catch(console.warn);