import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <div id="logo">  
   
      </div>
      <br /><br />

      <div id='tela1'>

        <div><h3>Cliente</h3></div>

        <section class="grid-coloumn grud-column 1">

          <div id='form1'>

            <form class="justify-itens ">
              
                <div class="name">

                  <input placeholder="Nome" type="text" name="name" id="name" />
                  <br />

                  <input placeholder="CPF" type="number" name="cpf" id="cpf" />
                  <br /><br />

                </div>

                <div class="eddress">

                  <input placeholder="Endereço" type="text" name="eddress" id="eddress" />
                  <br /><br />


                  <input placeholder="Numero" type="number" name="number" id="number" />
                  <br /><br />

                  <input placeholder="CEP" type="number" name="cep" id="cep" />
                  <br /><br />
                </div>

                <div class="district">

                  <input placeholder="Bairro" type="text" name="district" id="district" />
                  <br /><br />

                  <input placeholder="Cidade" type="text" name="city" id="city" />
                  <br /><br />

                  <input placeholder="Estado" type="text" name="state" id="state" />
                  <br /><br />
                </div>

                <div class="email">

                  <input placeholder="e-mail" type="email" name="email" id="email" />
                  <br /><br />

                  <input placeholder="Contato" type="number" name="Contatct" id="contact" />
                  <br /><br />

                  <input placeholder="Contato de Emergencia" type="number" name="contactem" id="contactem" />
                  <br /><br />

                </div>

                <section class="button">

                  <button id="bt" >Pesquisa</button>
                  <button id="bt" >Cadastrar</button>
                  <button id="bt" >Editar</button>
                  <button id="bt" >Excluir</button>
                  <button id="bt" >Histórico</button>

                </section>
            
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default App