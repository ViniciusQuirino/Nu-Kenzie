import React from 'react'
import './style-home.css'

const Homepage = ({ setLogin }) => {
    return (
        <div className="home">
            <h1>Nu Kenzie</h1>
            <p>Centralize o controle das suas finanças</p>
            <span>de forma rápida e segura</span>
            <button onClick={() => { setLogin(true) }}>Iniciar</button>
        </div >
    )
}

export default Homepage