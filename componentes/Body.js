import React from 'react';
import { StyleSheet, View } from 'react-native';
import ListaJugadores from './ListaJugadores';
import PerfilJugador from './PerfilJugador';

const Body = (props) => {
  return (
    <View style={styles.body}>
      <ListaJugadores
        stylesProp={styles.bodyAside}
      />
      <PerfilJugador />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '500px',
    borderColor: 'black',
    borderWidth: 2,
    display: 'flex',
    flexDirection: 'row',
  },
  bodyAside: {

  },
  bodyPicture: {

  }
});

export default Body;