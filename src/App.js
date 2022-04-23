import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './estilo.css';
import api from './service/api';


function App() {

    const [input, setInput] = useState ('');
    const [cep, setCep] = useState({});

   async function hendleSearch(){
      //01310930 /json/

            if(input ===''){
              alert("Coloque o CEP!")
              return;
            }

                try{
                      const response = await api.get(`${input}/json`);
                   setCep(response.data) 
                   setInput("");

                }catch{
                      alert("Deu Erro!")
                      setInput("")

                }


    }

  return (
    <div className="container">
      <h1 className="title">Procurando Cep</h1>
       

     <div className="containerInput" >
       
      <input
         type="text"
         placeholder = "Introduza o seu Cep... "
         value={input}
         onChange={(e) => setInput(e.target.value)}
         />

      <button className="buttonSearch" onClick={hendleSearch}> 
        <FiSearch size={25} color="red"/>
      </button>

     </div> 

            {Object.keys(cep).length > 0 && (


            <main className="main">
                    
                  <h2> CEP: {cep.cep} </h2>
                  <span>  {cep.logragouro} </span> 
                  <span> Complemento: {cep.complemento} </span>
                  <span> {cep.bairro}</span>
                  <span> {cep.localidade} - {cep.uf} </span>

            </main>

            )}


        


    </div>
  );
}

export default App;
