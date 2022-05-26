import React from 'react'
import { def, example, properties } from '../assets/images'
import { Container } from '../components/Container'

function TreesScreen() {
  return (
    <>
      <Container height="2000px" column>
        <h1>Árboles de derivación</h1>

        <Container height="250px">
            <Container height="200px" color="#B4FF9F" width="80%">
              <Container height="150px" color="#B4FF9F" width="95%">
                * Existen básicamente dos formas de describir cómo en una cierta gramática una cadena puede ser derivada desde el símbolo inicial. La forma más simple es listar las cadenas de símbolos consecutivas, comenzando por el símbolo inicial y finalizando con la cadena y las reglas que han sido aplicadas. <br />
                <br /> * La distinción entre derivación por la izquierda y por la derecha es importante porque en la mayoría de analizadores, la transformación de la entrada es definida dando una parte de código para cada producción que es ejecutada cuando la regla es aplicada.
              </Container>
            </Container>
        </Container>

        <Container height="600px" column >
          <h2>¿Qué son?</h2>
          <img src={def} alt='defincion arboles' width="600px"/>

            <Container height="260px" color="#00FFAB" width="90%">
              <Container height="250px" width="95%"  color="#00FFAB">
                Un árbol de derivación permite mostrar gráficamente cómo se puede derivar cualquier cadena de un lenguaje a partir del símbolo distinguido de una gramática que genera ese lenguaje. Un árbol es un conjunto de puntos, llamados nodos, unidos por líneas, llamadas arcos. Un arco conecta dos nodos distintos. <br/>

                <br/> + Para ser un árbol un conjunto de nodos y arcos debe satisfacer ciertas propiedades: <br/>
                &nbsp;&nbsp;&nbsp;- hay un único nodo distinguido, llamado raíz (se dibuja en la parte superior) que no tiene arcos incidentes. <br/>
                &nbsp;&nbsp;&nbsp;- todo nodo c excepto el nodo raíz está conectado con un arco a otro nodo k, llamado el padre de c (c es el hijo de k). El padre de un nodo, se dibuja por encima del &nbsp;&nbsp;&nbsp;nodo. <br/>
                &nbsp;&nbsp;&nbsp;- todos los nodos están conectados al nodo raíz mediante un único camino. <br/>
                &nbsp;&nbsp;&nbsp;- los nodos que no tienen hijos se denominan hojas, el resto de los nodos se denominan nodos interiores. <br/>
              </Container>
            </Container>
        </Container>

        <Container height="700px" column>
          <h2>Propiedades</h2>

          <Container height="250px">
            <Container height="170px" color="#14C38E" width="60%">
              <Container height="150px" width="95%" color="#14C38E">
                El árbol de derivación tiene las siguientes propiedades: <br/>
                &nbsp;&nbsp;&nbsp;- el nodo raíz está rotulado con el símbolo distinguido de la gramática; <br/>
                &nbsp;&nbsp;&nbsp;- cada hoja corresponde a un símbolo terminal o un símbolo no terminal; <br/>
                &nbsp;&nbsp;&nbsp; - cada nodo interior corresponde a un símbolo no terminal <br/>
                Para cada cadena del lenguaje generado por una gramática es posible construir (al menos) un árbol de derivación, en el cual cada hoja tiene como rótulo uno de los símbolos de la cadena. 
              </Container>
            </Container>
            <img src={properties} alt='propiedades' width="400px"/>
          </Container>

          <img src={example} alt='ejemplo' width="500px"/>
        </Container>


          <Container>
            VIDEO
          </Container>
      </Container>
    </>
  )
}

export default TreesScreen