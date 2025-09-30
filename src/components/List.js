/*Exemplo de Fragmento
usando a sintaxe <></> aos invés de <div</div>*/
import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985}/>
                <Item marca="Porsche" ano_lancamento={1964}/>
                <Item/>
            </ul>
        </>
    )
}



export default List