/** @jsxRuntime classic */
/** @jsx jsx */

// import React, {useState, useEffect} from 'react'
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import Color from 'color'
import { 
  CardMedia, Card, CardActionArea, CardContent,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/outline'

const ImgContainer = styled.img(props => ({
  height: '28vh',
  width: '208px',
  left: 10,
}))

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  cardCustom: {
    width: "220px",
    borderRadius: 16,
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color()
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    }
  }
}))

export default function MyPokemCard ({myPokemon, handleRelease }) {
  const classes = useStyles()
  
  return (
    <Card
      className={classes.cardCustom}
      raised
      elevation={4}
      >
       
        <div className="shadow-md" css={css`
        display: flex;
        align-items: center;
        `}>
          <h1 className="text-xl font-thin flex flex-1 justify-center text-center text-gray-600 uppercase p-2">{myPokemon.name}</h1>
          <button onClick={() => handleRelease(myPokemon?.nickname.nickname)}>
            <TrashIcon className="block h-8 w-8 border-2"></TrashIcon>
          </button>
        </div>
        <Link to={`/detail/${myPokemon.name}`}>
          <CardActionArea >
              <CardMedia elevation={6}>
                <div>
                  <ImgContainer
                  style={{position: "relative"}}
                  loading="lazy"
                  src={myPokemon.image}
                  />
                </div>
              </CardMedia>
              <CardContent style={{padding: 0}}>
                <Typography variant="body2" >Nickname: {myPokemon?.nickname.nickname}</Typography>
              </CardContent>
          </CardActionArea>
        </Link>
      </Card>
  )
}