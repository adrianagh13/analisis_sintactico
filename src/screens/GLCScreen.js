import React from 'react'
import { Container } from '../components/Container'
import {glc, glc2} from "../assets/images";


function GLCScreen() {
  return (
    <>
      <Container height="1200px" column>
        <h1>Gramáticas Libres de Contexto (GLC)</h1>
        <img src={glc} alt='glc' width="400px" he/>

        <Container column height="400px">
          <h2>¿Qué son?</h2>
          <Container height="360px" width="92%" color='#FAFFAF' justify="center">
            <p >
            Estas gramáticas, conocidas también como gramáticas de tipo 2 o gramáticas independientes del contexto, son las que generan los lenguajes libres <br /> o independientes del contexto. 
            Los lenguajes libres del contexto son aquellos que pueden ser reconocidos por un autómata de pila determinístico o no determinístico. 
            <br />
            <br /> Como toda gramática se definen mediante una cuádrupla G = (N, T, P, S), siendo  <br />
            <br />
            &nbsp; &nbsp; &nbsp; • N es el vocabulario no terminal (también se representa por Vn), de símbolos introducidos por nosotros como elementos auxiliares para la definición de la gramática y que no 
            &nbsp;&nbsp;&nbsp;&nbsp;figuran en las sentencias del lenguaje. En oposición al vocabulario terminal T, se denomina a N vocabulario no terminal o de metanociones. 
            <br /> &nbsp;&nbsp;&nbsp; Los elementos de N se denominan indistintamente así: metanociones, variables o no terminales. <br />
            <br />
            &nbsp; &nbsp; &nbsp; • T es el vocabulario terminal (también se representa por Vt). Todas las sentencias del lenguaje definido por esta gramática están formadas con los símbolos o caracteres de T. <br />
            <br />
            &nbsp; &nbsp; &nbsp; • P es un conjunto de reglas de derivación de las tiras que tiene la forma: tira1  tira2  <br />
            &nbsp; &nbsp; &nbsp; También se puede escribir la regla como un par ordenado, escritos sus dos elementos entre paréntesis y separados por una coma. ( tira1 , tira2 ) <br />
            <br />
            &nbsp; &nbsp; &nbsp; &nbsp; • S es la metanoción más importante del conjunto N, se le llama “símbolo distinguido”, símbolo inicial o axioma. Gramáticas
            </p>
          </Container>
        </Container>

        <Container column height="160px" color="#FFFA4D">
          <h2>Ambigüedad</h2> 

          <Container width="80%" height="80px" color="#FFFA4D">
            <p>
              * Una gramática libre de contexto G, se dice que es ambigua, si existe alguna palabra perteneciente al lenguaje que genera que tenga más de un árbol de derivación.  
              Un lenguaje es intrínsecamente ambiguo cuando no existe ninguna gramática libre de contexto que lo genere que no sea ambigua.
            </p>
          </Container>

        </Container>

        <Container column height="250px">
          <h2>Ejemplo</h2>
          <Container width="80%" height="250px">
            <Container  color="#FFD36E" width="">
                Una simple gramática libre de contexto es
                S → aSb | ε
                donde | es un operador lógico y es usado para separar múltiples opciones para el mismo no
                terminal, ε indica una cadena vacía. Esta gramática genera el lenguaje
            </Container>
            <img src={glc2} alt='glc2' width="300px"/>
          </Container>
        </Container>
        <p>VIDEO</p>
      </Container>
    </>
  )
}

export default GLCScreen