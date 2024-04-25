import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [historico, setHistorico] =useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Dados do paciente:', {nome, idade, email, historico});

    setNome('');
    setIdade('');
    setEmail('');
    setHistorico('');
  };

  return (
    <>
      <div id='barra'></div>
      <div id='BlocoForm'>
      <h1>Home Care</h1>
      <form id='FormHomeCare' onSubmit={handleSubmit}>
        <label>
          <input type="text" id='Nome' placeholder="Nome" value ={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          
          <input type="Data"id='Data' placeholder="Data"  onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <input type="text" id='Procd' placeholder='Procedimento'/>
        </label>
        <label>
            <input type="text" className="Ind" placeholder='Indicaçõens'/>
        </label>
        <div id="Botoens">
        <button id="Enviar">Enviar</button>
        <button id="Voltar">Voltar</button>
        </div>



      </form>
      </div>
     
    </>
  )
}

export default App
