function Form(){

    function cadastrarUsuario(e){
        e.preventDefault()/*É utilizado quando o evente é submit - Para a execução fo formulário para executar o comando a seguir. Interrompe o funcionamento do HTML para rodar o JSX
        
        Normalmente o submit envia a informação e recarrega a página*/
        console.log("Usuário cadastrado")
    }

    return(
        <>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type = "text" placeholder = "Digite seu nome"></input>
                </div>
                <div>
                    <input type="submit" value = "Cadastrar"></input>
                </div>
            </form>
        </>
    )
}

export default Form