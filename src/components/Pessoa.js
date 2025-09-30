function Pessoa(props) {
    return(
        <div>
            <h2>Pessoa</h2>
            <img src={props.foto} alt = {props.nome}/>
            <p>Nome: {props.nome}</p>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </div>
    )
}

export default Pessoa