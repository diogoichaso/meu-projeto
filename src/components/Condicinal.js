import { useState } from "react"

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(e){
        e.preventDefault()
        setUserEmail()
    }

    return(
        <div>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input 
                    type="email" 
                    placeholder="digite seu e-mail" 
                    onChange={(e)=>setEmail(e.target.value)}/>
            </form>
            <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
            {/**Estrutura condiciona: É verdadeira quando diferente de vazio = variável &&*/}
            {userEmail && (
                <div>
                   <p> o email do usuário é: {userEmail}</p>
                   <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )}
        </div>
    )
}

export default Condicional