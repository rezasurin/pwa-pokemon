/** @jsxRuntime classic */
/** @jsx jsx */

import React, {useEffect, useState} from 'react'
import { jsx, css } from '@emotion/react'
import {useQuery} from '@apollo/client'
import { GET_MY_POKEMONS } from '../queries/index'
import MyPokemCard from '../components/MyPokemonCard'
import { CircularProgress, Typography} from '@material-ui/core'
import { cache } from '../config/graphql'

export default function MyPokemonStorage () {
  const {data, loading } = useQuery(GET_MY_POKEMONS)
  const [myPokemon, setMyPokemon] = useState([])

  useEffect(() => {
    if (data) {
      setMyPokemon(data.myPokemons)
    }
  }, [data])
  
  const handleRelease = (pokemon) => {
    
    const newPokemonList = myPokemon.filter(poke => poke.nickname.nickname !== pokemon)
    setMyPokemon(newPokemonList)
    cache.writeQuery({
      query: GET_MY_POKEMONS,
      data: {
        myPokemons: newPokemonList
      }
    })
  }

  if (data?.myPokemons.length === 0) {
    return (
      <main css={css`
    background-color: #1F2937;
    `}
    className="lg:h-screen md:h-screen"
    >
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 md:container max-w-7xl mx-auto sm:px-4 lg:px-2 lg:h-screen md:h-screen"
      >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500" css={
            css`
              height: 577px;
              display: flex;
              flex-direction: rows;
              justify-content: center;
              align-items: center;
              padding-top: 10px;
            `
          }>
            <Typography>You don't have any Pokemon</Typography>
          </div>
        
      </div>
    </main>
    )
  }

  return (
    <main css={css`
    background-color: #1F2937;
    `}
    className="lg:h-screen md:h-screen"
    >
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 md:container max-w-7xl mx-auto sm:px-4 lg:px-2 lg:h-screen md:h-screen"
      >
        {
          loading ?
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500" css={
            css`
              height: 577px;
              display: flex;
              flex-direction: rows;
              justify-content: center;
              align-items: center;
              padding-top: 10px;
            `
          }>
            <CircularProgress />
          </div>
          :
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:gap-cols-2 md:gap-3 lg:gap-3 gap-y-8 py-8 auto-cols-auto justify-items-center">
          {
            myPokemon.map((pokemon, idx) => (
              <MyPokemCard key={idx} myPokemon={pokemon} handleRelease={handleRelease} />
            ))
          }
        </div>
        }
      </div>
    </main>
  )
}