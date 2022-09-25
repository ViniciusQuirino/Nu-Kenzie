import React from 'react'
import './style-up.css'

const Up = ({ dados, setDados, setDadosFiltrado }) => {
   
    function todos() {
        setDadosFiltrado([])
    }

    function entradas() {
        const resultado = dados.filter(elem => elem.tipo === "Entrada")
        setDadosFiltrado(resultado)
    }

    function despesas() {
        const resultado = dados.filter(elem => elem.tipo === "Saida")
        setDadosFiltrado(resultado)
    }

    return (
        <div className="filter">
            <h1>Resumo financeiro</h1>
            <button onClick={todos} className="todos">Todos</button>
            <button onClick={entradas} className="entradas">Entradas</button>
            <button onClick={despesas} className="despesas">Despesas</button>
        </div>
    )
}

export default Up