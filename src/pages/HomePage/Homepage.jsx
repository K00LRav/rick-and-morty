import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard';

function Homepage() {

  //create state to store characters
const [characters,setCharacters] = useState([])

  //I need to make api call when the page loads
    useEffect(
        () =>{
            console.log('homepage loaded')
            //use axios to make api call
            axios.get (`https://rickandmortyapi.com/api/character`)
            .then(
              res=>{
                console.log(res.data.results)
                //what do i do with this data
                //store instate
                setCharacters(res.data.results)
              }
            )
            .catch(err => console.log(err))
        }, []
    )
    

  return (
    <div className='home-container'>
        <h1>Main Characters</h1>
        <div className="characters-container">
            {
              characters.map(item=><CharacterCard key={item.id} character={item}/>)
              // characters.map(item=><p key={item.id}>{item.name}</p>)
            }
        </div>
    </div>
  )
}

export default Homepage