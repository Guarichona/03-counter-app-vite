describe('Pruebas en <DemoComponen />', () => {

    test('Esta prueba no debe debe fallar', () => {

        // 1. Inicialización 
        const message1 = 'Hola Mundo    ';

        // 2. Estímulo 
        const message2 = message1.trim();

        //3. Observar el Comportamiento - aquí hiría el If, pero lo sustituyo con Jest
        // expect(message1).toBe(message2)
        expect(message1).toBe(message2)


    })
})



