import React from 'react'
import Portal from "../../assets/img/portal.png"
import styles from "./Loader.module.scss"

function Loader() {
    return (
        <div className={styles.portalContainer}>
            <img src={Portal} alt={"portal"}/>
        </div>
    )
}

export default Loader
