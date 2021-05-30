/** @jsxRuntime classic */
/** @jsx jsx */
import React, {useState, useEffect} from 'react'
import { jsx, css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import {useQuery} from '@apollo/client'
import { useParams } from 'react-router-dom'
import { GET_POKEMON_DETAIL } from '../queries/index'
import { Typography } from '@material-ui/core'
import PokemonType from '../components/TypeChip'
import ModalGotPoke from '../components/ModalGetPoke'

const ImgContainer = styled.img(props => ({
  height: '52vh',
  width: '52vh'
}))

const SectionDetail = styled.div(props => ({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap',
  flexDirection: 'column',
  padding: '10px',
}))
const SectionDesc = styled.div(props => ({
  display: 'flex',
  flexDireciton: 'column',
}))
const ImageCard = styled.div(props => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',
  alignItems: 'center',
  width: '20rem'
}))

const shakesBottom = keyframes`
0% {
  -webkit-transform: scale(1);
          transform: scale(1);
}
50% {
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
}
100% {
  -webkit-transform: scale(1);
          transform: scale(1);
}
}
@keyframes pulsate-bck {
0% {
  -webkit-transform: scale(1);
          transform: scale(1);
}
50% {
  -webkit-transform: scale(0.9);
          transform: scale(0.9);
}
100% {
  -webkit-transform: scale(1);
          transform: scale(1);
}
`
const ImageActionArea = styled.button`
  background-color: white;
  border-radius: 10px;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.28);
}
  &:hover::after {
    transform: scaleX(1.8) scaleY(1.6);
    opacity: 0;
}
`
export default function PokemonDetail () {
  const { name } = useParams()
  const {data} = useQuery(GET_POKEMON_DETAIL, { variables: {inputName: name}})
  const [onCatch, setOnCatch] = useState(false)
  const [modalGotPoke, setModalGotPoke] = useState(false)
  const [isGotPokemon, setIsGotPokemon] = useState(false)
  
  const catching = () => {
    setOnCatch(true)
    setTimeout(() => {
      const gatcha = Math.round(Math.random())
      
      if (gatcha === 1) {
        
        setIsGotPokemon(!isGotPokemon)
      }
      setOnCatch(false)
    }, 2000)
    setModalGotPoke(true)
  }

  if (onCatch) {
    return (
      <main
    css={css`
    background-color: #1F2937;
    `}
    >
      <div className="md:container max-w-7xl mx-auto sm:px-4 lg:px-2 md:px-1"
      >
      <SectionDetail className="bg-gradient-to-r md:grid-cols-1 lg:h-screen md:h-screen sm:h-screen from-green-400 to-green-500">
        <p>
          Loading...
        </p>
      </SectionDetail>
      </div>
    </main>
    )
  }

  return (
    <main
    css={css`
    background-color: #1F2937;
    `}
    >
      <div className="md:container max-w-7xl mx-auto sm:px-4 lg:px-2 md:px-1"
      >
        <SectionDetail
        className="bg-gradient-to-r gap-4 grid grid-cols-2 md:grid-cols-1 lg:h-screen md:h-full sm:h-full from-green-400 to-green-500">
            <ImageActionArea onClick={() => catching()}
            >
              <ImageCard
              css={
                css`
                @media (min-width: 320px, max-width: 576px) {
                  width: 14rem;
                }
                `
              }
              >
                <Typography variant="h5" style={{position: 'relative'}}
                css={
                  css`
                  animation: ${shakesBottom} 0.8s cubic-bezier(0.550, 0.085, 0.680, 0.530) 4s infinite both;
                  padding-top: 20px;
                  `
                }
                >Tap me to catch!</Typography>
                <ImgContainer 
                style={{position: "relative"}}
                src={data?.pokemon.sprites.front_default}
                css={css`
                @media (min-width: 320px, max-width: 576px) {
                  height: 32vh;
                  width: 32vh;
                }
                `}
                />
                <SectionDesc >
                  <Typography variant="h5">Types</Typography>
                </SectionDesc>
                <SectionDesc >
                  {
                    data?.pokemon.types.map(item => (
                      <PokemonType class="m-2 rounded-lg text-gray-600" type={item.type.name} />
                    ))
                  }
                </SectionDesc>
              </ImageCard>
            </ImageActionArea>
            <div css={css`
              display: flex;
              @media (min-width: 768px) {
                width: 680px;
                height: 420px;
              }
              flex-direction: column;
              background-color: white;
              @media (min-width: 320px, max-width: 576px) {
                width: 320px;
              }
              `}>
              <div css={css`
              `}>
                <Typography variant="h3">{data?.pokemon.name}</Typography>
              </div>
              <SectionDesc>
                <div css={css`
                flex: 1;
                max-height: 60px;
                `}>
                  <Typography variant="h5">
                    Weight
                  </Typography>  
                  <Typography variant="h5">
                    {data?.pokemon.weight}
                  </Typography>  
                </div>
                <div css={css`
                max-height: 60px;
                flex: 1;
                `}>
                  <Typography variant="h5">
                    Height
                  </Typography>  
                  <Typography variant="h5">
                    {data?.pokemon.height}
                  </Typography>
                </div>
              </SectionDesc>
              <div className="flex flex-col col-span-2 ">
                <div className="flex justify-center items-center">
                  <Typography variant="h5">Abilities</Typography>
                </div>
                <div class="text-black flex flex-wrap px-2 justify-center">
                  {
                    data?.pokemon.abilities.map((item, idx) => (
                      <div key={idx} class="m-1 px-3 py-1 bg-gray-300 rounded-lg text-gray-800 ">{item.ability.name}</div>
                    ))
                  }
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Typography variant="h5" style={{marginTop: '8px'}}>Moves</Typography>
              </div>
              <SectionDesc style={{paddingLeft: '10px', overflow: 'scroll'}} className="flex flex-col col-span-2 ">
                <div className="my-1/2 flex flex-wrap px-1 py-2 justify-center">
                  {
                    data?.pokemon.moves.map((item, idx) => (
                      <div key={idx} class="px-2 py-1 bg-gray-200 m-2 rounded-lg text-gray-600">{item.move.name}</div>
                    ))
                  }
                </div>
              </SectionDesc>
            </div>
          </SectionDetail>
        <ModalGotPoke openModal={modalGotPoke} closeModal={setModalGotPoke} 
        isGotPokemon={isGotPokemon} pokemon={data?.pokemon}
        />
      </div>
    </main>
  )
}