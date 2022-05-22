import './App.css';
import { Column } from './components';
import {tree, abc, diagram, grammar, question} from './assets/images/'

function App() {
  return (
    <div className="App">
       <div className="header__title">
        Análisis sintáctico
      </div>
      <div className='header'>
        <Column color="rgb(235, 83, 83);opacity:0.90" height="100px"/>
        <Column color="rgb(249, 217, 35);opacity:0.90" height="100px"/>
        <Column color="rgb(54, 174, 124);opacity:0.90" height="100px"/>
        <Column color="rgb(24, 116, 152);opacity:0.90" height="100px"/>
        <Column color="rgb(118, 74, 241);opacity:0.90" height="100px"/>
      </div>
      <div className='body'>
        <Column color="rgb(235, 83, 83)" text="Definición y clasificación de gramática" anchor source={question}/>
        <Column color="rgb(249, 217, 35)" text="GLC: Gramáticas libres de contexto" anchor source={grammar}/>
        <Column color="rgb(54, 174, 124)" text="Árboles de derivación" anchor source={tree}/>
        <Column color="rgb(24, 116, 152)" text="Formas normales de Chomsky" anchor source={abc}/>
        <Column color="rgb(118, 74, 241)" text="Diagramas de sintáxis" anchor source={diagram}/>
      </div>
      
    </div>
  );
}

export default App;
