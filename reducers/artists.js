import {getArtistsFav} from '../firestore';
// Action types
export const ADD_ARTISTS_TYPE = 'ADD_ARTISTS';
export const ADD_ARTISTS_FAV = 'ADD_ARTISTS_FAV';

// Initial state
const initialState = {
  artistas: [],
  favoritos: {}, // objeto que tiene como key el nombre del artista y como valor si es favorito o no
};

//  Reducer
const artistsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_ARTISTS_TYPE:
      return {
        ...state,
        artistas: action.payload.artists,
      };
    case ADD_ARTISTS_FAV:
      console.log ({
        ...state,
        favoritos: {
          ...state.favoritos,
          [`${action.payload.name}`]: action.payload.fav,
        },
      });
      return {
        ...state,
        favoritos: {
          ...state.favoritos,
          [`${action.payload.name}`]: action.payload.fav,
        },
      };

    default:
      return state;
  }
};

export default artistsReducer;
