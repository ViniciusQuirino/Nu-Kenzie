import './App.css';
import Header from './componentes/Header/header'
import Form from './componentes/Form/form'
import TotalMoney from './componentes/TotalMoney/totalmoney';
import Up from './componentes/Up/up'
import ListCards from './componentes/List-cards/list-cards'
import { useState } from 'react'
import Homepage from './componentes/HomePage/homepage';


function App() {
  const [login, setLogin] = useState(false)
  const [input, setAppInput] = useState('')
  const [valor, setAppValor] = useState('')
  const [tipo, setAppTipo] = useState('')
  const [dados, setDados] = useState([])
  const [dadosFiltrado, setDadosFiltrado] = useState([])


  const valorTotal = dados.reduce((acc, valorAtual) => acc + valorAtual.valor, 0)

  return (
    <div className="App">


      {!login && < Homepage setLogin={setLogin} />}


      {login && < Header setLogin={setLogin} />}
      {login && <main className="main">
        <section className="lateral-esquerda">
          <Form estado={setAppInput} setAppValor={setAppValor} setAppTipo={setAppTipo} setDados={setDados} />
          <TotalMoney valor={valorTotal} />
        </section>
        <section className="lateral-direita">
          <Up dados={dados} setDados={setDados} setDadosFiltrado={setDadosFiltrado} />

          <ListCards dados={dados} setDados={setDados} setDadosFiltrado={dadosFiltrado} />
        </section>
      </main>}

    </div>
  );
}

export default App;
