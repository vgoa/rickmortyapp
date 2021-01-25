import React from 'react'
import styles from "./Search.module.scss"

function Card(props) {
    return (
       <div className={styles.searchBar}>
            <input type="text" onChange={props.search} placeholder="Buscar personaje..."/>
       </div>
    )
}

export default Card
