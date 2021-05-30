import { gql } from '@apollo/client'

export const GET_ALL_POKEMONS = gql`
  query AllPokemons {
    pokemons(limit: 20, offset: 20) {
      results {
        name
        image
        id
      }
      count
      next
      previous
      status
      message
    }
  }
`;

export const GET_POKEMON_DETAIL = gql`
query GetPokemonDetail ($inputName: String!) {
  pokemon(name: $inputName) {
    name
    weight
    height
    abilities {
      ability {
        name
      }
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
    sprites {
      front_default
      back_default
    }
  }
}
`;