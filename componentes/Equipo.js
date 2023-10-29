// equipo.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Equipo = ({ equipo, setEquipoActual }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setEquipoActual(equipo)}>
        <Text style={styles.buttonText}>{equipo}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 16
  }
});

export default Equipo;
