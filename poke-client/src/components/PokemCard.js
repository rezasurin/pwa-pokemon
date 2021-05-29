/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react'
import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'
import Color from 'color'
import { 
  CardMedia, IconButton, Card, CardActions, CardActionArea
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress'

const ImgContainer = styled.img(props => ({
  height: '38vh',
  width: '312px'
}))

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  cardCustom: {
    width: "240px",
    height: "240px",
    borderRadius: 16,
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color()
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    }
  },
  iconButtonStyle: {
    positon: "absolute",
    top: 0,
    left: 0,
    width: 25,
    height: "50%"
  }
}))

export default function PokemCard () {
  const classes = useStyles()

  return (
    <Card
      className={classes.cardCustom}
      raised
      elevation={4}
      >
        <h1 class="shadow-md text-xl font-thin text-center text-gray-600 uppercase p-1">Bubasaurus</h1>
        <CardActionArea >
            <CardMedia elevation={6}>
              <div>
                  <ImgContainer
                  style={{position: "relative"}}
                  src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                  cover={{ width: 300, height: 200, mode: 'horizontal_center' }}
                  />
              </div>
            </CardMedia>
        </CardActionArea>
      </Card>
  )
}