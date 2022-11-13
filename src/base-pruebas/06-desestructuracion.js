// Desestructuración 
// Asignación Desestructación 

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman',
    // rango: 'Soldado'

};

const { edad, clave } = persona;
console.log(edad);

const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {

    console.log(nombre, edad, rango);
    return ({
        nombreClave: clave,
        anios: edad,
        LongLat: {
            Long: 2345,
            Lat: 2345

        }
    })
}

console.log(useContext(persona))

// const averanger = useContext(persona);

const { nombreClave, anios } = useContext(persona)

console.log({ nombreClave })

// Desestructuración a partir de un Objeto Implícito

const DePrueba = () => ({
    raza: "pug",
    edad: 7,
})

const { raza, edad: edadPerro } = DePrueba();
console.log({ raza });

// Desestructuración de Objetos aninados 

const { LongLat: { Long, Lat } } = useContext(persona);
console.log(Long);