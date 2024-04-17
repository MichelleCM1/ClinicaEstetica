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



        <main class="main">

          <form className='table'>

            <div >
                    <div className='l1'>
                     <input placeholder='Nome' type="text" name="name" id="name" />
                    </div> <br /><br />
                    
                    <div className='l2'>
                     <input placeholder='CPF' type="number" name="cpf" id="cpf" />
                    </div><br /><br />
                    
            </div>

            <div >
                    <div className='l3'>
                     <input placeholder='Endereço' type="text" name="eddress" id="eddress" />
                    </div><br /><br />
                    
                   <div className='l4'>
                     <input placeholder='Número' type="number" name="number" id="number" />
                    </div><br /><br />
                    
                    <div className='l5'>
                      <input placeholder='CEP' type="number" name="cep" id="cep" />
                    </div><br /><br />
                    
            </div>

             <div >
                    <div className='l7'>
                      <input placeholder='e-mail' type="email" name="email" id="email" />
                    </div><br /><br />
                                                          
                    <div className='l8'>
                      <input placeholder='Contato' type="number" name="Contatct" id="contact" />
                    </div><br /><br />
                                
                    <div className='l9'>
                    <input placeholder='Contato Emergência' type="number" name="contactem" id="contactem" />
                    </div><br /><br />
                    
            </div>

          </form>

            <section class="button">

              <button id="bt" >Pesquisa</button>
              <button id="bt" >Cadastrar</button>
              <button id="bt" >Editar</button>
              <button id="bt" >Excluir</button>
              <button id="bt" >Histórico</button>

            </section>
            

        </main>

      </div>

    </>
  )
}

export default App
