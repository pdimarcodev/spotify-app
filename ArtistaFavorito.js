import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ADD_ARTISTS_FAV} from './reducers/artists';

import {saveArtistFav, getArtistsFav} from './firestore';

class ArtistaFavorito extends React.Component {
  async componentDidMount () {
    const favorites = await getArtistsFav ();

    favorites.forEach (({name, isFav}) => {
      this.props.addToFavorites (name, isFav);
    });
  }

  handleStarButtonPress = () => {
    // TODO: acá se debería hacer un `dispatch` del action que marque el artista como favorito

    const {artista: {nombre}, esFavorito, addToFavorites} = this.props;
    saveArtistFav ({
      name: nombre,
      isFav: !esFavorito,
    });
    addToFavorites (nombre, !esFavorito);
  };

  render () {
    const {artista: {nombre, imagen}, esFavorito} = this.props;
    return (
      <View style={[styles.container, styles.conSombra]}>
        <Image source={{uri: imagen}} style={styles.imagen} />
        <View style={styles.dataContainer}>
          <Text style={styles.nombre}>{nombre}</Text>
          <TouchableOpacity onPress={this.handleStarButtonPress}>
            <Text style={[styles.starButton, esFavorito && styles.favorito]}>
              🌟
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    esFavorito: state.artists.favoritos[ownProps.artista.nombre] || false,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToFavorites: (name, isFav) => {
      return dispatch ({
        type: ADD_ARTISTS_FAV,
        payload: {
          name,
          fav: isFav,
        },
      });
    },
  };
};
//connect = function(mapStateToProps, mapDispatchToProps ) => function(ArtistaFavorito)
export default connect (mapStateToProps, mapDispatchToProps) (ArtistaFavorito);

ArtistaFavorito.propTypes = {
  artista: PropTypes.shape ({
    nombre: PropTypes.string,
    imagen: PropTypes.string,
  }),
};

ArtistaFavorito.defaultProps = {
  artista: {},
};

const styles = StyleSheet.create ({
  container: {
    height: 150,
    width: 350,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    marginVertical: 7,
    flexDirection: 'row',
  },

  nombre: {
    marginVertical: 5,
    marginHorizontal: 10,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },

  starButton: {
    textAlign: 'center',
    fontSize: 25,
    opacity: 0.7,
  },

  favorito: {
    fontSize: 40,
  },

  imagen: {
    height: 150,
    width: 150,
  },

  conSombra: {
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 1,
    },
    shadowRadius: 1.5,
    shadowOpacity: 0.4,
    elevation: 2,
  },

  dataContainer: {
    flex: 1,
  },
});
