/** @jsxRuntime classic */
/** @jsx jsx */
import React, {useState, useEffect} from 'react'
import { jsx, css } from '@emotion/react'
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Typography, Button, TextField
} from '@material-ui/core'
import { cache } from '../config/graphql'
import { GET_MY_POKEMONS } from '../queries/index'
import { useQuery } from '@apollo/client'

export default function ModalGotPoke({ openModal, closeModal, isGotPokemon, pokemon}) {
  const [nickname, setNickname] = useState("")
  const [nicknameAvail, setNicknameAvail] = useState(true)
  const [inputError, setInputError] = useState("")
  const {data} = useQuery(GET_MY_POKEMONS)
  const handleClose =  () => {
    closeModal(false)
  }
  const onChange = (e) => {
    const {value} = e.target
    setNickname({...nickname, nickname: value})
  }
  // console.log(nicknameAvail)
  useEffect(() => {
    setTimeout(() =>{
      data?.myPokemons.find((data) => {
        console.log(data.nickname?.nickname, nickname?.nickname, "<<<")
        if (data.nickname.nickname === nickname.nickname) {
          setNicknameAvail(!nicknameAvail)
          
        } else {
          setNicknameAvail(true)
        }
      })
      validateName()
    }, 500)
  }, [nickname])

  const validateName = () => {
    if (!nicknameAvail) {
      setInputError({...inputError, inputError: "Nickname already exists!"})
    } else {
      setInputError({...inputError, inputError: ""})
    }
  }
  
  const addPokemon =() => {
    const pokemonData = cache.readQuery({
      query: GET_MY_POKEMONS
    })
    const newData = {
      nickname,
      name: pokemon.name,
      image: pokemon.sprites.front_default,
      types: pokemon.types,
      abilities: pokemon.abilities,
      moves: pokemon.moves
    }
    console.log(newData)
    cache.writeQuery({
      query: GET_MY_POKEMONS,
      data: {
        myPokemons: [newData, ...pokemonData?.myPokemons]
      }
    })
    closeModal(false)
  }

  return (
    <div >
      <Dialog open={openModal} onClose={handleClose}
      css={css`
      @media(min-width: 320px, max-width: 576px){
        width: 20rem;
      }
      `}
      >
        <DialogTitle>{ isGotPokemon ? "Hey! You've got pokemon!" : "Sorry, you've missed it:("}</DialogTitle>
        <DialogContent dividers>
          <div
          css={css`
          display: flex;
          align-items: center;
          @media(min-width: 320px, max-width: 576px){
            width: 20rem;
          }
          `}
          >
            <div
            css={css`
            display: flex;
            flex: 2;
            `}
            >
              <img
              css={css`
              width: 340px;
              `}
              src={pokemon?.sprites.front_default} loading="lazy" />
            </div>
            <div
            css={css`
            display: flex;
            flex: 1;
            justify-content: center;
            flex-wrap: wrap;
            `}
            >
              {
                isGotPokemon ?
                <Typography>{pokemon.name.toUpperCase()}</Typography>
                :
                <Typography>POKEMON MISSED!</Typography>
              }
            </div>
          </div>
          <div css={css`
          display: flex;
          flex: 1;
          `}>
            {
              isGotPokemon ?
              <span>
                <TextField id="outlined-basic" label="Insert Pokemon Nickname" variant="outlined" style={{width: "100%"}}
                onChange={onChange}
                onBlur={validateName}
                />
                <p>{
                !nicknameAvail ? inputError.inputError : null}</p>
              </span>
              :
              <></>
            }
          </div>
        </DialogContent>
        <DialogActions>
          {
            isGotPokemon ?
            <>
              <Button onClick={addPokemon} disabled={!nicknameAvail}>Save</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </>
            :
            <Button onClick={handleClose}>Close</Button>
          }
        </DialogActions>
      </Dialog>
    </div>
  )
}