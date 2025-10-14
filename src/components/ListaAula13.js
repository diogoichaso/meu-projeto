function ListaAula13({itens}){

    return(
        <>
            <h3>Lista de coisas boas</h3>
            {itens.length > 0 ?(
            itens.map((item, index)=> (//index é o índice do array
                    <p key={index}>{item}</p>
            ))):(
                <p>Não há itens na lista</p>
            )}
        </>
    )
}

export default ListaAula13