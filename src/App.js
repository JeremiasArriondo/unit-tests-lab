import React, { Component } from 'react';
import axios from 'axios';
import Perfil from './Perfil';

// Componente App.
class App extends Component {
  
  // Estado inicial para state.
  state = {
    usuarios: [],
    isCargandoPagina: true,
    error: null,
    color: '#ccffff'
  }

  // Evento onChange sobre div contenedor,
  // el cual hace que cambie el color del background
  onChange = () => {
    if (this.state.color === '#ccffff') {
      this.setState({ color: '#ffff99' });
    } else {
      this.setState({ color: '#ccffff' });
    }
  }

  // Invocación al API endpoint de typicode
  // y mapeo de resultados
  obtenerUsuarios() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response =>
        response.data.map(usuario => ({
          nombre: `${usuario.name}`,
          nombreUsuario: `${usuario.username}`,
          email: `${usuario.email}`,
          telefono: `${usuario.phone}`,
          codigoPostal: `${usuario.address.zipcode}`
        }))
      )
      .then(usuarios => {
        this.setState({
          usuarios,
          isCargandoPagina: false
        });
      })
      .catch(error => this.setState({ error, isCargandoPagina: false }));
  }

  // Una vez que el componente se inserta al árbol React
  // Se invoca al API endpoint y se mapean los usuarios
  componentDidMount() {
    this.obtenerUsuarios();
  }

  // Se pasan los resultados de la invocación
  // del API endpoint al componente Perfil
  // via iteración
  render() {
    const { isCargandoPagina, usuarios } = this.state;
    return (
      <div style={{ backgroundColor: this.state.color }} onClick={this.onChange} className="container">
        <h2>Listado de Usuarios</h2>
        <div className="row">
          {!isCargandoPagina ? (
            usuarios.map(usuario => {
              return (
                <Perfil usuario={usuario} />
              );
            })
          ) : (
              <p>Cargando página...</p>
            )}
        </div>
      </div>
    );
  }
}

export default App;
