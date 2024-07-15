import { useState } from "react"

function Ex5() {
const [texto, setTexto]= useState("")
//  const [visibled, setvisibled] = useState(false)
    const inputValue = (event) => {
event.preventDefault()


setTexto(event.target.value)
    }

  return (
    <div className="bloco">
         <form className="Form" >
      <input
      placeholder="Escreva alguma coisa"
        type="text"
        // type={visibled ? "text" : "password"} 
        onChange={inputValue} // poderia ser  onChange={(event) => {setTexto(event.target.value)}}
      ></input>
        {/* colocar botao para deixar visivel o que digita */}
        {/* <button onClick={() => setvisibled(prevState => !prevState)}>{visibled ? "esconder" : "Ver"}</button> */}
      </form>
      <h5>{texto}</h5>
    </div>
  );
}

export default Ex5;
