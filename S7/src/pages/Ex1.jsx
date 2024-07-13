import { useState } from 'react'

export function Ex1 () {

const [numero, setNumero] = useState(0)

//pode criar uma funcao e chamar abaixo, como feito com sub, ou criar a funcao na linha...
function sub () { 
     //padrao para resolver a questao poderia apenas fazer assim, mas traria numero negativo
// setNumero((prevNumero) => prevNumero - 1) 

//se quisesse colocar que nao traz numero negativo
setNumero((prevNumero) => { if(prevNumero - 1 < 0) return 0; return prevNumero - 1}) }

//Aqui, seria criar a funçao e chamar lá embaixo
// function som () {   
//  setNumero(prevNumero => prevNumero + 1) 
//     }

    return(
<div className="btn-toolbar">
  <div className="btn-group">
    <button type="button" 
       onClick={sub}
      //  onClick={() => {setNumero(prevNumero => prevNumero - 1) }} 
    className="btn btn-secondary">-</button>
    </div>
<h3> {numero}</h3>
  <div className="btn-group" >
    <button type="button" 
    // onClick={som}
    //utilizando a funçao dentro do elemento
    onClick={() => {setNumero(prevNumero => prevNumero + 1) }} 
    className="btn btn-secondary">+</button>
   </div>
 </div>
    )
}
