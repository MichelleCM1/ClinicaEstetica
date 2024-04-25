import { useState } from 'react'
import Imagens from './assets/logoFigma1.png'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <div id="log" > <img id="logo" src={Imagens} /> </div>
      <br />

      <div id="client" ><h5>Cliente</h5></div>

      <form id="form">
        

        <div ><input placeholder="Nome" type="text" name="name" id="name" /></div><br />

        <div ><input placeholder="CPF" type="number" name="cpf" id="cpf" /> </div><br /><br />

        <div ><input placeholder="Endereço" type="text" name="eddress" id="eddress" /></div><br /><br />

        <div ><input placeholder="Numero" type="number" name="number" id="number" /></div> <br /><br />

        <div ><input placeholder="CEP" type="number" name="cep" id="cep" /></div><br /><br />

        <div ><input placeholder="Bairro" type="text" name="district" id="district" /></div><br /><br />

        <div ><input placeholder="Cidade" type="text" name="city" id="city" /></div> <br /><br />

        <div > <input placeholder="Estado" type="text" name="state" id="state" /></div> <br /><br />

        <div ><input placeholder="e-mail" type="email" name="email" id="email" /></div><br /><br />

        <div ><input placeholder="Contato" type="number" name="Contact" id="contact" /> </div> <br /><br />

        <div ><input placeholder="Contato Emergência" type="number" name="Contactem" id="contactem" /> </div> 


        <div class="button">

          <button>Pesquisa</button>
          <button>Cadastrar</button>
          <button>Editar</button>
          <button>Excluir</button>
          <button>Histórico</button>

        </div>
    

      </form >

    </>
  )
}

export default App


