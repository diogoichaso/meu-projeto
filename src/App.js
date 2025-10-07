import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Pessoa2 from './components/Pessoa2';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  //TODAS AS FUNÇÕES E VARIÁVEIS DEVES ESTAR NESTA ÁREA
  const name = 'Diogo'
  const newName = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = "https://i.ibb.co/kgJB1y4X/bandeira-do-brasil.png"

  return (
    <div className="App">
      <h1>Olá React!</h1>
        <p>Meu primeiro App</p>
      
      <h2>Alterando JSX</h2>
        <p>Olá, {newName}</p>
        <p>Soma 2 + 4 = {sum(2,4)}</p>
        <p>Multiplicação 2 x 4 = {2 * 4}</p>
        <img src = {url} alt='Minha Imagem'/>
        <HelloWorld/>

        <SayMyName nome="Diogo Fraga Rocha Ichaso"/>
        <SayMyName nome="Fernanda Montesuma"/>
        <SayMyName nome={name}/>
        <Pessoa 
          nome="Gabriel Montesuma Fraga Rocha Ichaso" 
          idade="9" 
          profissao="cientista" 
          foto={url}
        />
        <Pessoa2 
          nome="Guilherme Montesuma Fraga Rocha Ichaso" 
          idade="8"
          profissao="goleiro" 
          foto={url}
        />
        <List/>
        {/** Início da aula 9 - Eventos */}
      
      <h1>AULA 9 - Eventos</h1>

      <Evento numero = "1"/>
      <Evento numero = "2"/>
      <Form/>
    </div>
  );
} 

export default App;
