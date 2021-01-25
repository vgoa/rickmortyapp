import React from 'react'
import styles from "./DetailedCharacter.module.scss"
import {useHistory} from "react-router-dom"
function DetailedCharacter(props) {
    const history = useHistory()

    const handleClick = () => {
       history.push("/")
    } 
    return (
        <section className={styles.characterContainer}>
            <div className={styles.charHeader}>
            <img src={props.data.image} alt={props.data.name}/>
            <h1>{props.data.name}</h1>
            </div>
            <div className={styles.charBody}>
                <div>
                    <h2>Especie:</h2>
                    <p>{props.data.species}</p>
                </div>
                <div>
                    <h2>Genero:</h2>
                    <p>{props.data.gender}</p>
                </div>
                <div>
                    <h2>Status:</h2>
                    <p>{props.data.status}</p>
                </div>
                <div>
                    <h2>Creado:</h2>
                    <p>{props.data.created}</p>
                </div>
                <div className={styles.regresar}>
                    <button onClick={handleClick}>
                        Regresar
                    </button>
                </div>
            </div>
        </section>
    )
}

export default DetailedCharacter
