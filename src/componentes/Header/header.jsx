import React from 'react'
import './style-header.css'
import './reset.css'

const Header = ({ setLogin }) => {
    return (
        <div className="header">
            <div className="header-conteiner">
                <h1>Nu Kenzie</h1>
                <button onClick={() => setLogin(false)} type="button" > Inicio</button>
            </div>
        </div >
    )
}

export default Header