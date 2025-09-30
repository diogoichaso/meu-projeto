import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Pessoa2 from './components/Pessoa2';

function App() {
  //TODAS AS FUNÇÕES E VARIÁVEIS DEVES ESTAR NESTA ÁREA
  const name = 'Diogo'
  const newName = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

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
        <Pessoa nome="Gabriel Montesuma Fraga Rocha Ichaso" idade="9" profissao="cientista"/>
        <Pessoa2 nome="Guilherme Montesuma Fraga Rocha Ichaso" idade="8"profissao="goleiro"/>
    </div>
  );
} 

export default App;
