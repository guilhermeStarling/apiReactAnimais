import { useEffect, useState } from 'react'
import styles from './card.css'

function Card(nome, porte, especie, distribuicao_geografica) {

    return (

        <>
           <section className={styles.card}>

                <h3>{nome}</h3>
                <p>{porte}</p>
                <p>{especie}</p>
                <div className={styles.card_footer}/>
                <p>{distribuicao_geografica}</p>
            </section>
        </>

    )
    
}

export default Card