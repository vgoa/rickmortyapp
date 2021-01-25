import React,{useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios"
import DetailedCharacter from "../../components/DetailedCharacter/DetailedCharacter"


function Card(props) {
const [characterDetails, setCharacterDetails] = useState([])
const {id} = useParams()
useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response=>{
        setCharacterDetails(response.data)
    })
},[id])

    return (
        <div>
            <DetailedCharacter data={characterDetails}/>
        </div>
    )
}

export default Card