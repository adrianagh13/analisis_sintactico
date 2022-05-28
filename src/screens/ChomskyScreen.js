import React from 'react'
import { Container } from '../components/Container'
import { lenguaje } from '../assets/images'
import ReactPlayer from 'react-player'

function ChomskyScreen() {
  return (
    <>
      <Container column height="2100px">
        <h1>Formas normales de Chomksy</h1>
        <Container height="350px">
          <Container height="350px" width="70%">
            <Container height="300px" color="#79DAE8">
              <Container height="250px" width="95%" color="#79DAE8">
                Una gramática formal está en Forma normal de Chomsky si todas sus reglas de producción son de alguna de las siguientes formas: <br />
                <br />A → BC o <br />
                <br />A → α <br />
                <br />donde A,B,C son símbolos no terminales (o variables) y α es un símbolo terminal.<br />
                <br />Todo lenguaje independiente del contexto que no posee a la cadena vacía, es expresable por medio de una gramática en forma normal de Chomsky (GFNCH) y recíprocamente. Además, dada una gramática independiente del contexto, es posible algorítmicamente producir una GFNCH equivalente, es decir, que genera el mismo lenguaje.
              </Container>
            </Container>
          </Container>
          <img src={lenguaje} alt='lenguaje' width="350px"/>
        </Container>

        <Container height="380px">
          <Container height="330px">
            <Container height="250px" width="40%" color="#C4DDFF">
              <Container height="200px" width="95%" column size="18px" color="#C4DDFF">
                <h2>¿Para qué sirve?</h2>
                <br/> * Para un mejor entendimiento en la gramática.
                <br/> * Para un funcionamiento óptimo.
                <br/> * Correcciones en gramática.
                <br/> * Se compone de símbolos terminables y no terminables.
              </Container>
            </Container>

            <Container height="330px" width="50%" color="#C4DDFF">
              <Container height="280px" width="95%" column color="#C4DDFF">
                <h2>Eliminación de símbolos inútiles</h2>
                &nbsp;&nbsp;&nbsp;* Limpieza de GLC. Restringir el formato de las producciones de la gramática sin reducir su &nbsp;&nbsp;&nbsp;poder generativo de palabras de un LLC. <br/>
                &nbsp;&nbsp;&nbsp;* Cada símbolo no terminal y cada símbolo terminal aparece en la derivación de alguna &nbsp;&nbsp;&nbsp;palabra del LLC generado por la GLC. <br/>
                &nbsp;&nbsp;&nbsp;* Se pretende que todos los símbolos sean útiles. <br/>
                <br/>Una gramatica es FNC si...<br/>
                &nbsp;&nbsp;&nbsp;* Variables Accesibles = Derivación desde el símbolo inicial. <br/>
                &nbsp;&nbsp;&nbsp;* Variables Generativas = Si existe una derivación desde la variable. <br/>
                &nbsp;&nbsp;&nbsp;* Variables útiles. <br/>
              </Container>
            </Container>
          </Container>
        </Container>

        <Container height="600px" column color="#B8FFF9">
          <h2>¿Cómo se construye un FNC?</h2>
          <Container width="65%" height="470px" column>
            <Container width="95%" height="430px">
              Para cualquier lenguaje libre de contexto existe una gramática en forma normal de Chomsky, que genera el mismo lenguaje. <br/>
              <br/>¿Cómo se construye un FNC?<br/>
              <br/>1. Eliminamos las variables inútiles.<br/>
              2. modificamos las reglas para que no haya mezcla de variables y constantes en las partes derechas de las producciones.<br/>
              3. sustituimos las reglas cuya longitud de su parte derecha es >2. <br/>
              4. sustituimos las reglas de tipo X -> E. <br/>
              5. sustituimos las reglas de tipo X -> Y , las reglas unitarias <br/>
              <br/> Si G contiene solo variables utiles. <br/>
              Si todas las producciones de G son: X --> XZ y X --> a. <br/>
              Si S es decir el simbolos incial de G no aparece en el lado derecho de una produccion. <br/>
              <br/>Observamos... <br/>
              La primera condición garantiza que todas las variables son necesarias para derivar por lo menos una sentencia. <br/>
              La segunda condición garantiza que un árbol de derivación es un árbol binario. <br/>
              La tercera condición es necesaria para poder derivar.<br/> 
            </Container>
          </Container>
        </Container>

        <Container height="450px" column>
          <h2>Video explicativo</h2>
          <ReactPlayer url='https://www.youtube.com/watch?v=6krGKfLJtZ8'/>
        </Container>

      </Container>
    </>
  )
}

export default ChomskyScreen