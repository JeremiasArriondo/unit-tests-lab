import React from 'react';
import { shallow } from "enzyme";
import App from '../App';
import Perfil from '../Perfil';


describe('Test suite Cartas obtener usuarios', () => {
    let wrapper;
    /*
    Hago uso de la funcion beforeEach para evitar la repeticion en las pruebas
    */
    beforeEach(() => {
        wrapper = shallow (
            <App />
        );
    });
    /*
    Punto a, aqui busco matchear o hacer coincidir con el snapshot, verificando que exista un archivo con
    el mismo nombre que el de donde se encuentra el test con extension .snap dentro de la carpeta __snapshots__
    */
    test('Debe coincidir con Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    /*
    Punto b, simplemente busco el titulo que posee una etiqueta h2 en el componente App, utilizo toEqual para comparar
    el argumento con lo que posee el titulo.
    */
    test('El titulo debe ser "Listado de Usuarios"', () => {
        expect(
            wrapper.find("h2").text()
        ).toEqual("Listado de Usuarios");
    });
    /*
    Punto c, hago uso de la funcion containsMatchingElement para evaluar el texto de cargando página, esta funcion 
    retorna un booleano cuando coincide con un elemento del arbol de renderizado
    */
    test('Debe existir un loader con texto "Cargando página"', () => {
        expect(
            wrapper.containsMatchingElement(
                <p>Cargando página...</p>
            )
        ).toBe(true);
    });
    
    describe('Test suite componente Perfil', () => {
        let wrapper;
        
        beforeEach(() => {
            //Creo un mock de un usuario para utilizar en uno de los tests
            const user = {
                nombre: 'Jeremias',
                email: 'unit-test@mock.org.us',
                telefono: 202109,
                codigoPostal: 2705
            };
            wrapper = shallow (
                <Perfil usuario={user}/>
            );

        });
        /*
        Punto d, aqui busco matchear o hacer coincidir con el snapshot, verificando que exista un archivo con
        el mismo nombre que el de donde se encuentra el test con extension .snap dentro de la carpeta __snapshots__
        */
        test('Perfil debe coincidir con Snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        });
        /*
        Punto e, utilizo el metodo .state() que me devuelve el estado del nodo de envoltura 
        para hacer uso del nombre de accesorio y devolver ese valor, luego utilizo toEqual para comparar
        */
        test('El usuario debe tener una dirección de e-mail unit-test@mock.org.us', () => {
            expect(
                wrapper.state().usuario.email
            ).toEqual("unit-test@mock.org.us");
        });
        /*
        Punto f. En este punto hago uso de find, el cual lo utilizó para encontrar el nodo que necesito, luego utilizo lenght 
        para comparar la cantidad de elementos con toBe
        */
        test('Cada carta debe tener 4 elementos de párrafo con clase "titulo"', () => {
            expect(
                wrapper.find("p").find(".titulo").length
            ).toBe(4);
        });
        /*
        Punto g. El metodo some devuelve un booleano si algun selector coincide con el proporcionado, lo utilice en
        conjunto con toBe para hacer coincidir el test con un valor booleano.
        */
        test('El elemento div dentro de cada carta debe tener una clase "celda"', () => {
            expect(
                wrapper.find('div').some('.celda')
            ).toBe(true);
        });
    });
    /*
    Punto h. En este punto vuelvo a utilizar el estado, en este caso, el estado inicial, buscando
    en su propiedad color, luego con toEqual lo comparo
    */
    test('El color de fondo debe ser inicialmente "#ccffff"', () => {
        expect(
            wrapper.state().color
        ).toEqual("#ccffff");
    });
    /*
    Punto i. En este punto con find busco al div contenedor, simulo el click y busco
    si la propiedad del color cambia al valor con el cual lo comparo.
    */
    test('El color de fondo debe ser "#ffff99" al hacer click en el div contenedor', () => {
        wrapper.find('div.container').simulate('click');
        expect(
            wrapper.state().color
        ).toEqual('#ffff99');
    });
})
