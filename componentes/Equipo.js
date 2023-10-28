// equipo.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Equipo = ({ title, equipoActual, setEquipoActual }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setEquipoActual(title)}>
        <Text style={styles.buttonText}>{title}</Text>
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
