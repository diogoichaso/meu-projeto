/*Exemplo da AULA 7: uso de fragmento
Exemplo da AULA 8: props com tipo */

import PropTypes from 'prop-types'

function Item(marca, ano_lancamento){
    return(
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes={
    marca: PropTypes.string.isRequired,/*isRequired é para tornar o argumento obrigatório */
    ano_lancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca: "sem marca",
    ano_lancamento: 0,
}

export default Item