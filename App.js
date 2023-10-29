import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Body from './componentes/Body';
import Footer from './componentes/Footer';
import ListaEquipos from './componentes/ListaEquipos';

export default function App() {
  const equipos = { Barcelona: [{ nombre: "Ronaldinho", imagen: 1 }, { nombre: "Messi", imagen: 2 }, { nombre: "Xavi", imagen: 3 }, { nombre: "Iniesta", imagen: 4 }, { nombre: "Puyol", imagen: 5 }], Milan: [{ nombre: "Van Basten", imagen: 6 }, { nombre: "Maldini", imagen: 7 }, { nombre: "Pirlo", imagen: 8 }, { nombre: "Gatuso", imagen: 9 }, { nombre: "Baresi", imagen: 10 }], Manchester: [{ nombre: "Cantona", imagen: 11 }, { nombre: "Scholes", imagen: 12 }, { nombre: "Rooney", imagen: 13 }, { nombre: "Best", imagen: 14 }, { nombre: "Ferdinand", imagen: 15 }] };
  const [equipoActual, setEquipoActual] = useState(null);
  const [jugadorActual, setJugadorActual] = useState(null);


  console.log('equipoActual:', equipoActual)

  return (
    <View style={styles.container}>
      <ListaEquipos equipoActual={equipoActual} setEquipoActual={setEquipoActual} equipos={equipos} />

      <Body equipoActual={equipoActual} equipos={equipos} jugadorActual={jugadorActual} setJugadorActual={setJugadorActual} />

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