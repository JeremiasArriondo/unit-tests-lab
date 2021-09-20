import React, { Component } from 'react';

// Componente Perfil.
class Perfil extends Component {

    // Constructor para el manejo de props y state.
    constructor(props) {
        super(props);
        this.state = {
            usuario: this.props.usuario
        }
    }

    // Muestra en pantalla cada una de las cartas 
    // en componente renderizado
    render() {
        const {usuario} = this.state;
        return (
            <div className="celda">
                <p><span className="titulo">Nombre:</span><span className="nombre"> {usuario.nombre}</span></p>
                <p><span className="titulo">E-mail:</span><span className="email"> {usuario.email}</span></p>
                <p><span className="titulo">Teléfono:</span><span className="telefono"> {usuario.telefono}</span></p>
                <p><span className="titulo">Código Postal:</span><span className="codigoPostal"> {usuario.codigoPostal}</span></p>
            </div>
        );
    }
}

export default Perfil;