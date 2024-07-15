import { useEffect, useState } from "react"

    
function Ex4(){
        //ao invés de fazer um por um...
        // const [name, setName] = useState("")
        // const [email, setEmail] = useState("")
       // const [age, setAge] = useState("")
//Faz assim: Usamos useState para criar um estado inicial para os dados do formulário, com campos nome, email e idade, todos inicialmente vazios.
const [formdata, setFormdata] = useState({ // formdata é um objeto com três propriedades:
    nome: '',
    email: '',
    idade: ''
})

//Usamos useState para criar um estado para a mensagem de erro, inicialmente null.
const [message, setMessage] = useState(null);

//usado para executar um efeito colateral sempre que formdata mudar.
useEffect(() => {
    //    verifica se algum campo do formulário está vazio. Se estiver, incrementa o totalizador.
  //Object.values(formdata): Converte o objeto formdata em um array contendo os valores de suas propriedades 
  //reduce: Itera sobre o array e acumula um valor (totalizador). Neste caso, conta quantos campos estão vazios.
    const isError = Object.values(formdata).reduce((totalizador, item) => {
//item: Cada valor no array. Se item estiver vazio (!item), incrementa totalizador em 1.
//Resultado: isError será o número de campos vazios.
        if(!item) totalizador += 1
        return totalizador
    }, 0)
            //Se algum campo estiver vazio, setMessage define a mensagem de erro. Caso contrário, a mensagem é definida como null.

        if (isError>0) {  
            setMessage('Preencha todos os campos!!!');
        } else {
            setMessage(null);
        }
    }, [formdata])

     // Ao invés de pegar o campo anterior e acrescenta ao atual no proprio inputpode fazer por funçao 
//cria funçao chamada sempre que o input altera -  Extraímos name e value do event.target. de cada input
const inputData = (event) => {
  const { name, value } = event.target;  // poderia fazer uma funçapo para cada, mas, assim, faz uma para todos. Só tem que colocar o name em cada input
        setFormdata(prevState => ({
            ...prevState, [name]: value  }));
    };   


return (
    <div className="container mt-4">
    <form  className="mb-4">
        {/* INPUT DE NOME */}
        <input 
            name="nome"
            placeholder="Informe seu nome" 
            type="text" 
            className="form-control" 
            onChange={inputData}
            //opçao deixar no input:  onChange={(event) => setFormdata(prevState => ({ ...prevState, nome: event.target.value }))} 
            />
        {/* INPUT DE E-MAIL */}
        <input 
                name="email"
            placeholder="Informe seu e-mail" 
            type="email" 
            className="form-control"  
            onChange={inputData}
            // onChange={(event) => setFormdata(prevState => ({ ...prevState, email: event.target.value }))}  
        />

        {/* INPUT DE IDADE */}
        <input 
        name="idade"
            placeholder="Informe sua idade" 
            type="number" 
            className="form-control"  
            onChange={inputData}
            // onChange={(event) => setFormdata(prevState => ({ ...prevState, idade: event.target.value }))}
        />

        <button className="btn btn-primary mt-4">Cadastrar</button>
    </form>

    <code>
        {message}
    </code>

    
</div>
    )
    
}

export default Ex4