import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Body from './componentes/Body';
import Footer from './componentes/Footer';
import Header from './componentes/Header';

export default function App() {
  const [jugadores, setJugadores] = useState([1, 2, 3, 4, 5]);
  const [jugadorActual, setJugadorActual] = useState(null);
  const [equipoActual, setEquipoActual] = useState(null);

  return (
    <View style={styles.container}>
      <Header equipoActual={equipoActual} setEquipoActual={setEquipoActual} />

      <Body equipoActual={equipoActual} />

      <Footer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: '1000px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});