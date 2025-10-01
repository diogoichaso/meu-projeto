/*Exemplo da AULA 7: uso de fragmento
Exemplo da AULA 8: props com tipo */

import PropTypes from 'prop-types'

function Item({ marca = 'sem marca', ano_lancamento = 0 }) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}
/*isRequired é para tornar o argumento obrigatório */

Item.propTypes={
    marca: PropTypes.string.isRequired,/*Após colocar um valor padrão para o atributo, não precisa maos do isRequired, pois o valor padrão vai ser requerido */
    ano_lancamento: PropTypes.number,
}

export default Item