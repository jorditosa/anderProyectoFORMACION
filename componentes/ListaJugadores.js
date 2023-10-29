import { StyleSheet, View } from 'react-native';
import Jugador from './Jugador';

export default function listaJugador({ stylesProp, equipoActual, equipos, jugadorActual, setJugadorActual }) {

  const jugadores = equipos[equipoActual];
  console.log('jugadores:', jugadores)

  return (

    <View style={stylesProp}>
      <View style={styles.asideStyle}>
        {equipoActual &&
          jugadores.map((jugador) => (
            <Jugador
              key={jugador.nombre}
              onPress={() => console.log('Jugador:', jugador.nombre)}
              nombre={jugador.nombre}
              jugadorActual={jugadorActual}
              setJugadorActual={setJugadorActual}
            />
          ))
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  text: {
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 22,
    margin: 10,
    padding: 4
  },
  asideStyle: {
    width: '200px'
  },
});