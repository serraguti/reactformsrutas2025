import React, { Component } from 'react'

export default class TablaMultiplicarv2 extends Component {
    selectNumero = React.createRef();

    generarTabla = (event) =>{
        event.preventDefault();
        let aux = [];
        let numero = parseInt(this.selectNumero.current.value);
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

    generarRandoms = () => {
        for (var i = 1; i <= 5; i++){
            var random = parseInt(Math.random() * 50) + 1;
            this.numeros.push(random);
        }
    }

    state = {
        tabla: [], 
        
    }
    numeros = [8, 4, 6, 9]
    mensaje = "State solo cuando cambiemos"
  render() {
    return (
      <div>
        <h1 style={{color:"red"}}>Tabla Multiplicar V2 {this.mensaje}</h1>
        {this.generarRandoms()}
        <button onClick={this.generarRandoms}>
            Cargar datos...
        </button>
        <form onSubmit={this.generarTabla}>
            <label>Seleccione número</label>
            <select ref={this.selectNumero}>
                {
                    this.numeros.map((num, index) => {
                        return (<option key={index}>{num}</option>)
                    })
                }
            </select>
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
