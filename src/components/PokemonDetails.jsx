import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {

  const [pokeInfo, setPokeInfo] = useState()

  const {name} = useParams()

  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
    .then(res => setPokeInfo(res.data))
    .catch(err => console.log(err))
  }, [])
  
  console.log(pokeInfo)

  return (
    <article className='view'>
        <div className='img'>
          <img src={pokeInfo?.sprites.other['official-artwork'].front_default} alt="" />
          <h1>{name}</h1>
        </div>
    </article>
  )
}

export default PokemonDetails