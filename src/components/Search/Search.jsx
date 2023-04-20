import React from 'react'
import './Search.css'
import axios from 'axios'

function Search({setCharacters}) {

    //need state to store user input
    const [query, setQuery] = React.useState('')

    //https://rickandmortyapi.com/api/character/?name=rick
    const handleSearch = (e) =>{
        //stops default form action of auto refreshing 
        e.preventDefault();

        console.log(query)
        //make api call to get characters that match
        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(res =>{
            console.log(res.data.results)
            //change what is in setCharacters
            setCharacters(res.data.results)
        })
        .catch(err=> console.log(err))
    }

  return (
    <form className='search-container' onSubmit={handleSearch}>
        <input type="text" 
        onChange={e=> setQuery(e.target.value)}
        placeholder='Search all characters' />
        
        </form>
  )
}

export default Search