import axios from 'axios';
/*
Aca creo el mock de la funcion, para utilizarlo en las pruebas
basandome en el ejemplo numero 3 de la clase de test
*/

export const API = 'https://jsonplaceholder.typicode.com/users'
//Exporto la funcion con la cual voy a realizar los test
export const obtenerUsuarios = async query => {
    const url = `${API}/buscar?query=${query}`;

    return await axios.get(url);
}

obtenerUsuarios('datos');
