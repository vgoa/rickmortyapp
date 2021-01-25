import React from 'react'
import {useHistory} from "react-router-dom"
import styles from "./Card.module.scss"
function Card(props) {
    const history = useHistory()

    const handleClick = () => {
       history.push(`/Character/${props.data.id}`)
    } 
    return (
        <div className={styles.Card}>
            <img src={props.data.image} alt={`imagen${props.data.name}`} />
            <h1>{props.data.name}</h1>
            <div className={styles.locationContent}>
                <p>Location:</p>
                <p>{props.data.location.name}</p>
            </div>
            <button className={styles.boton}onClick={handleClick}>
                ver más
            </button>
        </div>
    )
}

export default Card
