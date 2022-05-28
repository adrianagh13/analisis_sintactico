import React from 'react'
import { Container } from '../components/Container'
import { terminal, noTerminal, grafo, constante, representacion, sintaxis, ejemplo, ejemplo2 } from '../assets/images'
import ReactPlayer from 'react-player'

function DiagramsScreen() {
  return (
    <>
      <Container height="3850px" column>
        <h1>Diagramas de sintáxis</h1>

        <Container height="350px" column size="20px" > 
          <h2>Definición</h2>
            <Container height="200px" width="80%" color="#A760FF">
              <Container height="150px" size="20px" width="95%" color="#A760FF">
                Los diagramas sintácticos, de sintaxis o diagramas del ferrocarril son una forma de representar una gramática libre de contexto.<br /> Representan una alternativa gráfica para la Forma de Backus-Naur (BNF, por sus siglas en inglés) o la Forma Extendida de Backus-Naur (EBNF).
              </Container>
            </Container>
        </Container>
        
        <Container height="1200px" column>
          <Container size="22px" width="80%">
            Constan de una serie de cajas o símbolos geométricos conectados por arcos dirigidos.<br /> Veamos las reglas que rigen la construcción de cada grafo:
          </Container>

          <Container height="200px">
            <Container width="70%" color="#AB46D2" height="150px">
              <Container width="95%" size="18px">
                1. Cada símbolo terminal se representa por su nombre encerrado en un círculo o en una caja de bordes circulares.
                <br /> Terminal: Un símbolo es terminal cuando tiene entidad propia y se describe por sí mismo.
              </Container>
            </Container>
            <img src={terminal} alt='terminal' width="350px"/>
          </Container>

          <Container height="200px">
            <img src={noTerminal} alt='terminal' width="350px"/>
            <Container width="70%" color="#A85CF9" height="150px">
              <Container width="95%" size="18px">
                2. Cada símbolo no terminal se representa por su nombre encerrado en un rectángulo. <br />
                No Terminal: Un símbolo es no terminal cuando requiere una explicación mediante una regla o producción.
              </Container>
            </Container>
          </Container>

          <Container height="200px">
            <Container width="70%" color="#AB46D2" height="150px">
              <Container width="95%" size="18px">
                3. Para las producciones que tengan varias alternativas, el grafo resultante será del tipo:
              </Container>
            </Container>
            <img src={grafo} alt='terminal' width="300px"/>
          </Container>

          <Container height="200px">
            <img src={constante} alt='terminal' width="380px" height="100px"/>
            <Container width="70%" color="#A85CF9" height="150px">
              <Container width="95%" size="18px">
                4. Para las producciones que contengan una serie concatenada de símbolos terminales <br />
                y/o no terminales, bastara simplemente con conectar simplemente a continuación del otro grafo de cada símbolo. 
              </Container>
            </Container>
          </Container>

          <Container height="200px">
            <Container width="70%" color="#AB46D2" height="150px">
              <Container width="95%" size="18px">
                5. Para las producciones que tengan cero, una o más repeticiones de un símbolo la representación será: 
              </Container>
            </Container>
            <img src={representacion} alt='terminal' width="300px"/>
          </Container>
        </Container>

        <Container height="1500px" column>
          <Container height="130px" width="60%" color="#CAB8FF">
            <Container width="95%" height="80px" color="#CAB8FF" size="20px"> 
              Veamos la sintaxis de SENTENCIA CONDICIONAL, usando diagramas sintácticos en vez de BNF.  
            </Container>
          </Container>

          <img src={sintaxis} alt='sintaxis' width="650px"/>

          <Container height="150px" width="85%" color="#CAB8FF">
            <Container height="100px" width="95%" color="#CAB8FF">
              Con los grafos o diagramas sintácticos somos capaces de representar la sintaxis de un lenguaje 
              y podemos utilizarlos en lugar del conjunto de producciones en BNF. Es más, los diagramas sintácticos 
              son mucho más claros y concisos, facilitando la comprensión del lenguaje, dada su mejor asimilación. 
              Tiene un inconveniente, y es la dificultad de representación.
            </Container>
          </Container>

          <img src={ejemplo} alt='ejemplo-diagrama' width='500px'/>
          <Container width="50%" color="#C490E4">
            <h3>Ejemplo: Diagrama sintáctico para expresiones aritméticas. </h3>
          </Container>
          <img src={ejemplo2} alt='ejemplo2' width="400px"/>
        </Container>

        <Container height="450px" column>
          <h2>Video explicativo</h2>
          <ReactPlayer url='https://www.youtube.com/watch?v=fQuaEd2Em98'/>
        </Container>
      </Container>
    </>
  )
}

export default DiagramsScreen