import React from 'react'
import './style-total.css'

const TotalMoney = ({valor}) => {
    return (
        <div className="total-conteiner">
            <div>
                <h3>Valor total:</h3>
                <p>R$ {valor},00</p>
            </div>
            <span>O valor se refere ao saldo</span>
        </div>
    )
}

export default TotalMoney