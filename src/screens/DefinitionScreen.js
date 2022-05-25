import React from 'react'
import { Container } from '../components/Container'
import { ContainerGeneral } from '../components/Container/styled'
import {gramaticas} from "../assets/images";

function DefinitionScreen () {
  return (
    <div>
      <ContainerGeneral height="420px" justify="center" column>
        <Container >
          <h1>Definición y clasificación de gramáticas</h1>
        </Container>

        <Container height="200px">

          <Container column width="400px" height="150px">
            ¿Qué es gramática?
            <p>Chomsky la define como: “Descripción formalizada de las oraciones de un lenguaje. Una gramática genera o describe un lenguaje.”</p>
          </Container>

          <Container column width="500px" height="200px">
            Definición formal
            <p>
              Una gramática es una cuádrupla: G = (VT, VN, S, P)
              donde: <br />
              VT = conjunto finito de símbolos terminales <br />
              VN = conjunto finito de símbolos no terminales <br />
              S = el símbolo inicial y pertenece a VN <br />
              P = conjunto de producciones o de reglas de derivación<br />
            </p>
          </Container>

        </Container>
      </ContainerGeneral>

      <ContainerGeneral height ="900px" column >
        <h2>Jerarquía de las gramaticas</h2>
        <img src={gramaticas} height="250px" alt='gramaticas'/>
        
        <ContainerGeneral  height="500px" column>
          <h2>La gramática de Chomsky consta de cuatro niveles:</h2>
          <ContainerGeneral height="350px" align="flex-start">
           
            <ContainerGeneral column height="320px" width="20%">
              <p>GRAMÁTICAS TIPO 0</p>
              <p>
                * Son no restringidas <br />
                * Reconocidas por la máquina de Turing.<br />
                * Solo cumplen la definición de gramática.<br />
                * Sus reglas de producción tiene la forma: <br />
                α → ꞵ , α y ꞵ ∈ (N U Z) * <br />
                * Tanto el lado derecho como izquierdo pueden contener símbolos terminales como no terminales. <br />
              </p>
            </ContainerGeneral>

            <ContainerGeneral column height="240px" width="20%">
              <p>GRAMÁTICAS TIPO 1</p>
              <p>
                * Sensitivas al contexto.<br />
                * Son reconocidos por el autómata linealmente acotado.<br />
                α → ꞵ , |ꞵ| >= |α|<br />
                * En la regla de producción la longitud del lado izquierdo es mayor o igual que la longitud del lado derecho.<br />
              </p>
            </ContainerGeneral>

            <ContainerGeneral column height="320px" width="20%">
              <p>GRAMÁTICAS TIPO 2</p>
              <p>
                * Libre de contexto.<br />
                * Reconocidas por el autómata de pila.<br />
                * Usado en los lenguajes de programación para definir su estructura sintáctica.<br />
                A → ꞵ, A ∈ N , ꞵ ∈ (N U Z) * <br />
                * En el lado izquierdo de la producción solo existe un símbolo no terminal <br />y en el lado izquierdo puede existir una combinación de símbolos terminales como no terminales.

              </p>
            </ContainerGeneral>

            <ContainerGeneral column height="350px" width="25%">
              <p>GRAMÁTICAS TIPO 3</p>
              <p>
              * Gramáticas regulares. <br />
              * Reconocidas por el autómata finito. <br />
              * Los lenguajes que son representados por éste tipo de gramática se denominan: lenguajes regulares. <br />
              A → aB | B | a | λ <br />
              * En el lado izquierdo de la producción solo puede estar un símbolo no terminal. <br />
              * En el lado derecho sólo puede estar un símbolo terminal o no terminal,  <br />puede existir una combinación de uno de cada uno, como también ninguno (λ).

              </p>
            </ContainerGeneral>
          </ContainerGeneral>
        </ContainerGeneral>
      </ContainerGeneral>
    </div>
  )
}

export default DefinitionScreen
