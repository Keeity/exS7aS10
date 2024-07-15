import { useState, useEffect } from "react"

export function Ex2(){

    
    // cria a variavel text, escolhe o método setText (ou outro) para atribuir o valor obtido na fetch depois
const [text, setText] = useState(null)

// Criada a function para puxar notícias, com asyn await
   async function getNews () {    
        const noticia = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release')
        //transforma em Json
        const data = await noticia.json()
        //já especifica o item da pagina que se quer buscar e se é o primeito [0]
        const titulo = data.items[0].titulo  //nao entendi de onde vem o items

        // agora usa o método setText para atribuir ao text o valor do title
        setText(titulo)
            }
//para chamar a notícia na tela logo que carrega a página
//utiliza o useEffect chamando uma arrowfunction. Primeiro parametro é uma arrowfunction chamando a funçao, o segundo parâmetro é quando chamar. como deixei vazio, ele vai rodar uma vez só
useEffect(  
    () => {getNews()}, 
    []  
 )


return (

<div>
<h2>Noticia</h2>
<p>{text}</p>
</div>

)
   
}