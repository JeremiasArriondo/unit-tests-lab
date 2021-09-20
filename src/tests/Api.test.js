import axios from 'axios';
import { API, obtenerUsuarios } from '../Api';
 
// Mock de Axios
jest.mock('axios')

describe('Test suite para APIs', () => {
    /*
    En este test, busco igualar el uso de la data con una llamada a la api, la cual exporto del
    archivo Api, donde cree el mock del endpoint, utilizo la funcion mockImplementationOnce la cual usa la implementacion de jest.mock
    luego hago uso de resolves.toEqual para comparar data.
    */
    test('Recobra datos de forma exitosa de una API', async () => {
        const data = {
            data:{
                name: 'Leanne Graham',
                username: 'Bret',
                email: 'Sincere@april.biz',
                phone: '1-770-736-8031 x56442',
                zipcode: '92998-3874' 
            }
        } 
        axios.get.mockImplementationOnce( () => Promise.resolve(data));
        
        await expect(obtenerUsuarios('datos')).resolves.toEqual(data);
        //Aca utilizo la funcion de toHaveBeenCalledWith para asegurarme de que se llama a la funcion simulada
        expect(axios.get).toHaveBeenCalledWith(
            `${API}/buscar?query=datos`,
        )
    });
})