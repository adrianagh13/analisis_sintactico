import React from "react";
import { abc, diagram, grammar, question, tree } from "../assets/images";
import { Column } from "../components";
import { Body, Header, HeaderTitle } from "./styled";

function Home (){
  return ( 
    <div>
      <HeaderTitle>
        Análisis sintáctico
      </HeaderTitle>
      <Header>
        <Column color="rgb(235, 83, 83);opacity:0.90" height="140px"/>
        <Column color="rgb(249, 217, 35);opacity:0.90" height="140px"/>
        <Column color="rgb(54, 174, 124);opacity:0.90" height="140px"/>
        <Column color="rgb(24, 116, 152);opacity:0.90" height="140px"/>
        <Column color="rgb(118, 74, 241);opacity:0.90" height="140px"/>
      </Header>
      <Body>
        <Column color="rgb(235, 83, 83)" text="Definición y clasificación de gramática" anchor source={question}/>
        <Column color="rgb(249, 217, 35)" text="GLC: Gramáticas libres de contexto" anchor source={grammar}/>
        <Column color="rgb(54, 174, 124)" text="Árboles de derivación" anchor source={tree}/>
        <Column color="rgb(24, 116, 152)" text="Formas normales de Chomsky" anchor source={abc}/>
        <Column color="rgb(118, 74, 241)" text="Diagramas de sintáxis" anchor source={diagram}/>
      </Body>
    </div>
  )
}

export default Home