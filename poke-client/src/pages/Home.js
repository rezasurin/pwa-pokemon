/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import {gql, useQuery} from '@apollo/client'
import { GET_ALL_POKEMONS } from '../queries/index'
import PokeCard from '../components/PokemCard'
import { CircularProgress} from '@material-ui/core'

const BigContainer = styled.div(props => ({
  display: 'flex',
  paddingHorizontal: 20,
  backgroundColor: 'black',
}))
const Card = styled.div(props => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '200px',
  borderRadius: 2,
}))

const cardGrid = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: var(--spacing-l);
  grid-row-gap: var(--spacing-l);
  max-width: var(--width-container);
  width: 100%;
`;
const breakpoints = [576, 768, 992, 1200]
// const mq = breakpoints.map(
//   bp => `@media(min-width, ${bp}px)`
// )
export default function Home() {
  const {data, loading, error} = useQuery(GET_ALL_POKEMONS)
  console.log(data?.pokemons.results)

  return (
    <main css={css`
    background-color: #1F2937;
    `}
    >
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 md:container max-w-7xl mx-auto sm:px-4 lg:px-2"
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
            data?.pokemons.results.map(pokemon => (
              <PokeCard pokemon={pokemon} loading={loading}/>
              
            ))
          }
        </div>
        }
      </div>
    </main>
  )
}
