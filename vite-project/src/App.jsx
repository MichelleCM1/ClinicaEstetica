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
      <div>
      <h1>Cadastro do paciente</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value ={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Historico:
          <textarea value={historico} onChange={(e) => setHistorico(e.target.value)} />
        </label>
        <button type="submit"> Cadastrar</button>




      </form>
      </div>
     
    </>
  )
}

export default App
