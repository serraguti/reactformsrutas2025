import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cajaNumero = React.createRef();

    generarTabla = (event) =>{
        event.preventDefault();
        let aux = [];
        let numero = parseInt(this.cajaNumero.current.value);
        for (var i = 1; i <= 10; i++){
            var operacion = numero + " * " + i;
            var resultado = numero * i;
            aux.push(<tr>
                <td>{operacion}</td>
                <td>{resultado}</td>
            </tr>)
        }
        this.setState({
            tabla: aux
        })
    }

    state = {
        tabla: []
    }

  render() {
    return (
      <div>
        <h1>Tabla Multiplicar</h1>
        <form onSubmit={this.generarTabla}>
            <label>Introduzca número</label>
            <input type="number" ref={this.cajaNumero}/>
            <button>Mostrar tabla</button>
        </form>
        <table border="1">
            <thead>
                <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.tabla.map((fila, index) => {
                        return (fila)
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
