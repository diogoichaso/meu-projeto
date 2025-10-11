import Butao from "./Butao"

function Evento({numero}) {


    function meuEvento() {
        console.log(`Opa, fui ativado ${numero}`)
    }   

    return(
        <>
            <p>Clique para disparar um evento</p>
            <button onClick={meuEvento}>Ativar</button>

            <h1>AULA 11</h1>
            <Butao event={meuEvento} text = "Primeiro Evento"/>
        </>
    )
}

export default Evento