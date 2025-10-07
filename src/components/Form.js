/**Aula 10 - para usar o useState é preciso importar */
import { useState } from "react"

function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()/*É utilizado quando o evente é submit - Para a execução fo formulário para executar o comando a seguir. Interrompe o funcionamento do HTML para rodar o JSX
        
        Normalmente o submit envia a informação e recarrega a página*/
        console.log("Usuário cadastrado")
        console.log(`O usuário ${name} foi cadastrado com a senha ${pass}`)
    }

    /**o useState é usado em uma constante com a dupla [recuperação do valor, atribuição do valor] é como se fosse 
     * [variável, função para alterar a variável]*/
    const [name, setName] = useState('valor default')
    const [pass, setPass] = useState()

    return(
        <>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                        type = "text" 
                        id = "name" 
                        name="name" 
                        placeholder = "Digite seu nome"
                        value={name}/**inicializa o valor do input */
                        onChange={(e) => setName(e.target.value)}
                        /*a cada letra digitada muda o estado */
                    />

                </div>
                 <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                        type = "password" 
                        id = "password" 
                        name = "password" 
                        placeholder = "Digite sua senha"
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value = "Cadastrar"></input>
                </div>
            </form>
        </>
    )
}

export default Form