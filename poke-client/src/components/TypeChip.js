/** @jsxRuntime classic */
/** @jsx jsx */

import React, {useEffect,useState} from 'react'
import { jsx } from '@emotion/react'
import styled from '@emotion/styled'
import { Typography } from '@material-ui/core'



export default function PokemonType({ type }) {
  const [chipColor, setChipColor] = useState({
    borderRadius: 4,
    margin: '0.25rem'
  })
  const Chip = styled.div(props => (chipColor))
  console.log(type, "<<type di compo")
  useEffect(() => {
    switch (type) {
      case 'water':
        setChipColor({...chipColor, backgroundColor: '#6890f0'})
        break;
      case 'grass':
        setChipColor({...chipColor, backgroundColor: '#78c850'})
        break;
      case 'fire':
        setChipColor({...chipColor, backgroundColor: '#f08030'})
        break;
      case 'normal':
        setChipColor({...chipColor, backgroundColor: '#a8a878'})
        break;
      case 'electric':
        setChipColor({...chipColor, backgroundColor: '#f8d030'})
        break;
      case 'flying':
        setChipColor({...chipColor, backgroundColor: '#a890f0'})
        break;
      case 'ice':
        setChipColor({...chipColor, backgroundColor: '#98d8d8'})
        break;
      case 'fighting':
        setChipColor({...chipColor, backgroundColor: '#c03028'})
        break;
      case 'poison':
        setChipColor({...chipColor, backgroundColor: '#a040a0'})
        break;
      case 'ground':
        setChipColor({...chipColor, backgroundColor: '#e0c068'})
        break;
      case 'psychic':
        setChipColor({...chipColor, backgroundColor: '#f85888'})
        break;
      case 'bug':
        setChipColor({...chipColor, backgroundColor: '#a8b820'})
        break;
      case 'rock':
        setChipColor({...chipColor, backgroundColor: '#b8a038'})
        break;
      case 'ghost':
        setChipColor({...chipColor, backgroundColor: '#705898'})
        break;
      case 'dragon':
        setChipColor({...chipColor, backgroundColor: '#7038f8'})
        break;
      case 'dark':
        setChipColor({...chipColor, backgroundColor: '#705848'})
        break;
      case 'fairy':
        setChipColor({...chipColor, backgroundColor: '#f0b6bc'})
        break;
      case 'steel':
        setChipColor({...chipColor, backgroundColor: '#b8b8d0'})
        break;
      default:
        setChipColor({...chipColor, backgroundColor: '#000000'})
        break;
    }
  }, [])

  return (
    <>
      <Chip>
        <Typography variant="subtitle1" style={{padding: '1px 3px'}}>#{type}</Typography>
      </Chip>
    </>
  )
}