import { useState } from "react";

export function Ex3() {
  //cria novo estado textoInput e mètodo setTexto para dar valor à variavel texto
  const [textoInput, setTexto] = useState("");
  //Cria novo estado lista e método setLista que vai ser uma lista de string, para atribuir à variavel lista
  const [lista, setLista] = useState([]);

  //Funçao que  é chamada ao clicar no botão. Ela adiciona o valor atual do input à lista items e limpa o input.
  function handleSubmit(event) {     // poderia ser       const handleSubmit = (event) => {
    event.preventDefault();
    //    se houver algum texto no input,
    if (textoInput) {
      //define uma variàvel que vai ser o que tiver antes + texto do input, utilizando spread, que cria uma cópia de um array
      setLista([...lista, textoInput]);  // poderia ser setLista((listaAnterior) => {return [...listaAnterior, textoInput]})

      // Limpa o input após adicionar
      setTexto("");
    }

    // setTexto.item
    console.log(textoInput);
  }

  //funçao para quando clicar no botao pegar as informacoes do botao. //Funçao que é chamada sempre que o valor do input muda. Ela atualiza o estado textoInput com o valor atual do input.
  function inputValue(event) {  //formato pode ser function x (event) {}    ou const x = (event) => { }
    setTexto(event.target.value); //event.target.value significa pegar o valor do input. setTexto é o método para atribuir valor â variável texto
  }

  return (
    <div className="bloco">
       <form className="Form" >   {/*Poderia colocar handleSubmit no onSubmit aqui*/}
        <input type="text"     onChange={inputValue}          // poderia ser  onChange={(event) => {setTexto(event.target.value)}}
          ></input>
        <button  type="button" className="btn btn-secondary" onClick={handleSubmit}> Adicionar</button>
      </form>

      <div className="Lista">
        <ul>
          {/* Sempre que fizer renderiza+çao de lista no react, ele cria uma identificação para cada item, que é a key. Por isso é padrão usar da forma abaixo */}
          {lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
