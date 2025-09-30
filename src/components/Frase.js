import styles from './Frase.module.css'; /*Importação do CSS*/


function Frase() {
    return(
        <div className={styles.fraseConteiner}>{/*Classe é uma classe do module.css*/}
            <p className={styles.fraseContent}>Este é um compenente com uma frase!</p>
        </div>
    )
}

export default Frase