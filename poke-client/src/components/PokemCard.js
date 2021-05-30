/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react'
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import Color from 'color'
import { 
  CardMedia, IconButton, Card, CardActions, CardActionArea, CardContent,
  Typography,
  CircularProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

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
    height: "260px",
    borderRadius: 16,
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color()
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    }
  }
}))

export default function PokemCard ({ pokemon, loading }) {
  const classes = useStyles()
  // console.log(pokemon)
  const handleClickCard = (name) => {
    console.log(name)
  }

  return (
    <Card
      className={classes.cardCustom}
      raised
      elevation={4}
      >
        <h1 class="shadow-md text-xl font-thin text-center text-gray-600 uppercase p-1">{pokemon.name}</h1>
        <Link to={`/detail/${pokemon.name}`}>
          <CardActionArea onClick={() => handleClickCard(pokemon.name)}>
              <CardMedia elevation={6}>
                <div>
                  {
                    loading ? <CircularProgress /> :
                    <ImgContainer
                    style={{position: "relative"}}
                    src={pokemon.image}
                    />
                  }
                </div>
              </CardMedia>
              <CardContent>
                <Typography variant="body2" >Owned: </Typography>
              </CardContent>
          </CardActionArea>
        </Link>
      </Card>
  )
}