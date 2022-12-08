import './style-form.css'
import React from 'react'
import { useState } from 'react'

const Form = ({ estado, setAppValor, setAppTipo, setDados }) => {
    const [input, setInput] = useState('')
    const [valor, setValor] = useState('')
    const [tipo, setTipo] = useState('')

  

    function pegarValor(event) {

        event.preventDefault()
        setDados((dados) => [...dados, { input, valor, tipo }])

        estado(input)
        setAppValor(valor)
        setAppTipo(tipo)

    }

    return (
        <form onSubmit={(event) => pegarValor(event)} className="conteiner">
            <label htmlFor="descricao">Descrição</label>

            <input type="text" id="descricao" placeholder='Digite aqui sua descrição' onChange={(event) => setInput(event.target.value)} />

            <p>Ex: Compra de roupas</p>

            <div>
                <label htmlFor="valor">Valor</label>
                <label htmlFor="tipo">Tipo de valor</label>
            </div>
            <div>
                <input type="number" placeholder='R$' id="valor" className="valor" onChange={(event) => setValor(parseInt(event.target.value))} />
                <select onClick={(event) => setTipo(event.target.value)}>
                    <option value="Entrada">Entrada</option>
                    <option value="Saida">Saida</option>
                </select>
            </div>

            <button type="submit">Inserir valor</button>
        </form>
    )
}

export default Form;