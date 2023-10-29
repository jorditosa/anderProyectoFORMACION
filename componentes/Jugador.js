import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Jugador = ({ nombre, jugadorActual, setJugadorActual }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => setJugadorActual(nombre)}
    >
      <Text style={styles.buttonText}>{nombre}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#ffAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Jugador;
