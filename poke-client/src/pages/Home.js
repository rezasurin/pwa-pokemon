/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import {gql, useQuery} from '@apollo/client'
import { GET_ALL_POKEMONS } from '../queries/index'
import PokeCard from '../components/PokemCard'

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
const mq = breakpoints.map(
  bp => `@media(min-width, ${bp}px)`
)
export default function Home() {
  const {data, loading, error} = useQuery(GET_ALL_POKEMONS)
  console.log(data)

  return (
    <main css={css`
    background-color: #1F2937;
  `}>
      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 md:container max-w-7xl mx-auto sm:px-6 lg:px-2"
      >
        <div className="grid grid-cols-5 gap-y-8 py-8 auto-cols-auto justify-items-center">
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
            <PokeCard />
        </div>
        {/* <BigContainer row className="border-4 border-dashed border-gray-200 rounded-lg h-32">
          <div css={cardGrid}>
            <p >Lorem ipsum lorem lorem lorem lorem lorem lorem lorem</p>
          </div>
        </BigContainer> */}
      </div>
    </main>
  )
}
