import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import './list-style.css'

const ListCards = ({ dados, setDados, setDadosFiltrado }) => {

    function remover(obj) {
        const resultado = dados.filter((elem) => elem !== obj)
        setDados(resultado)
    }

    return (
        <ul>
            {
                dados.length === 0 &&
                <div className='nenhum'>
                    <h1>Você ainda não possui nenhum lançamento</h1>
                </div>
            }

            {setDadosFiltrado.length === 0 && dados.map((elem, index) => (

                <li className="li-card" key={index} style={{ borderLeft: elem.tipo === "Entrada" ? "5px solid #03B898" : "5px solid #E9ECEF" }}>

                    <div>
                        <h3>{elem.input}</h3>
                        <p>R$ {elem.valor}</p>
                        <FaTrashAlt onClick={() => remover(elem)} className="comp" style={{ cursor: "pointer" }} />
                    </div>
                    <h4>{elem.tipo}</h4>

                </li>

            ))
            }

            {setDadosFiltrado.length > 0 && setDadosFiltrado.map((elem, index) => (

                <li className="li-card" key={index} style={{ borderLeft: elem.tipo === "Entrada" ? "5px solid #03B898" : "5px solid #E9ECEF" }}>

                    <div>
                        <h3>{elem.input}</h3>
                        <p>R$ {elem.valor}</p>
                        <FaTrashAlt onClick={() => remover(elem)} className="comp" style={{ cursor: "pointer" }} />
                    </div>
                    <h4>{elem.tipo}</h4>

                </li>

            ))
            }


        </ul>


    )
}

export default ListCards