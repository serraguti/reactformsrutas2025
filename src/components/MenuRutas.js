import React, { Component } from 'react'
import './MenuRutas.css'


export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul className='menu'>
            <li>
                <a href="/">Home</a> |  
            </li>
            <li>
                <a href="/multiple">Selección múltiple</a> |  
            </li>                 
            <li>
                <a href="/tablamultiplicar2">Tabla multiplicar V2</a> |  
            </li>              
            <li>
                <a href="/tablamultiplicar">Tabla multiplicar</a> |  
            </li>              
            <li>
                <a href="/collatz">Collatz</a> |  
            </li>            
            <li>
                <a href="/formsimple">Form Simple</a> |  
            </li>
            <li>
                <a href="/cine">Cine</a> |  
            </li>
            <li>
                <a href="/musica">Música</a>
            </li>
        </ul>
      </div>
    )
  }
}
