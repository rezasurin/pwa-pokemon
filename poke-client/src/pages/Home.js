/** @jsxRuntime classic */
/** @jsx jsx */
import React, {useState, useEffect} from 'react'
import { jsx, css } from '@emotion/react'
import { useQuery} from '@apollo/client'
import { GET_ALL_POKEMONS, GET_MY_POKEMONS } from '../queries/index'
import PokeCard from '../components/PokemCard'
import { CircularProgress} from '@material-ui/core'


export default function Home() {
  const {data, loading, error} = useQuery(GET_ALL_POKEMONS)
  const {data: myPokemonsData } = useQuery(GET_MY_POKEMONS)
  const [pokemons, setPokemons] = useState([])
  
  useEffect(() => {
    if (!loading) {
      setPokemons([data?.pokemons.results, ...pokemons])
    }
  }, [loading])

  return (
    <main css={css`
    background-color: #1F2937;
    `}
    >
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 md:container max-w-7xl mx-auto sm:px-4 lg:px-2"
      >
        <div>
          <h1>TOTAL OWNED POKEMON: {myPokemonsData.myPokemons.length}</h1>
        </div>
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
            data?.pokemons.results.map((pokemon) => (
              <PokeCard key={pokemon.id} pokemon={pokemon} myPokemon={myPokemonsData?.myPokemons} loading={loading}/>
            ))
          }
        </div>
        }
      </div>
    </main>
  )
}
