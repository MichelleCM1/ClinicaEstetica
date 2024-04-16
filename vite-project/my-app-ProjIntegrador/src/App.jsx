import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div class="register">

        <h4>Cliente</h4>

        <form>
          
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" />
          <br /><br />

          <label htmlFor="cpf">CPF</label>
          <input type="number" name="cpf" id="cpf" />
          <br /><br />

          <label htmlFor="address">Endereço</label>
          <input type="text" name="eddress" id="eddress" />
          <br /><br />

          <label htmlFor="numero">Número</label>
          <input type="number" name="number" id="number" />
          <br /><br />

          <label htmlFor="cep">CEP</label>
          <input type="number" name="cep" id="cep" />
          <br /><br />

          <label htmlFor="district">Bairro</label>
          <input type="text" name="district" id="district" />
          <br /><br />

          <label htmlFor="city">Cidade</label>
          <input type="text" name="city" id="city" />
          <br /><br />

          <label htmlFor="state">Estado</label>
          <input type="text" name="state" id="state" />
          <br /><br />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <br /><br />

          <label htmlFor="contact">Contato</label>
          <input type="number" name="Contatct" id="contact" />
          <br /><br />

          <label htmlFor="contactem">Contato Emergência</label>
          <input type="number" name="contactem" id="contactem" />
          <br /><br />

        </form>

        <button>Pesquisa</button>
        <button>Cadastrar</button>
        <button>Editar</button>
        <button>Excluir</button>
        <button>Histórico</button>

      </div>

    </>
  )
}

export default App
