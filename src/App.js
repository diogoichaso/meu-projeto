import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Pessoa2 from './components/Pessoa2';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicinal';
import ListaAula13 from './components/ListaAula13';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {
  //TODAS AS FUNÇÕES E VARIÁVEIS DEVES ESTAR NESTA ÁREA
  const name = 'Diogo'
  const newName = name.toUpperCase()

  //Listas da aula 13
  const meusItens = ['React', 'Vue', 'Angular']

  //STATE LIFT - Centraliza o state no pai para depois passar para os componentes filhos
  const [nome, setNome] = useState()

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

      <h1>Renderização Condicional</h1>
      <Condicional/>

      <h1>Renderização de listas</h1>
      <ListaAula13 itens={meusItens}/>
      <ListaAula13 itens={[]}/>

      <h1>STATE LIFT</h1>
      <SeuNome setNome = {setNome}/>{/**Está lendo o nome */}
      <Saudacao  nome={nome}/>
    </div>

    {/**ROTAS */}
  );
} 

export default App;
