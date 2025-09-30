function Pessoa2({nome, idade, profissao, foto}){
    return(
        <div>
            <h2>Pessoa</h2>
            <img src={foto} alt = {nome}/>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa2