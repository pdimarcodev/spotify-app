// Action types
export const ADD_ARTISTS_TYPE = 'ADD_ARTISTS'

// Initial state
const initialState = {
  artistas: [],
  favoritos: {}, // objeto que tiene como key el nombre del artista y como valor si es favorito o no
}

//  Reducer
const artistsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_ARTISTS_TYPE:
      return {
        ...state,
        artistas: action.payload.artists,
      }

    default:
      return state
  }
}

export default artistsReducer
