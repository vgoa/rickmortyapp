import React,{useEffect,useState} from 'react'
import axios from "axios"
import Card from "../../components/Card/Card"
import Search from "../../components/Search/Search"
import styles from "./HomeContainer.module.scss"
import Loader from "../../components/Loader/Loader"

function HomeContainer() {
    const [searchBar, setSearchBar] = useState("")
    const [filteredCharacters, setFilteredCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/character/?name=${searchBar}`)
        .then(response=>{
            setFilteredCharacters(response.data.results)
            setLoading(false)
        })
    },[searchBar])
    const searchHandler = (e) => {
        setSearchBar(e.target.value)
    }
    if(loading === true) {
        return <Loader/>
    }
    return (
        <section className={styles.HomeContainer}>
            <Search search={searchHandler}/>
           <main className={styles.cardContainer}>
            {filteredCharacters.map((data,id)=>{
                return <Card data={data} key={id} />
            })}
           </main>
       </section>
    )
}

export default HomeContainer
