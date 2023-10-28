import { StyleSheet, View } from 'react-native';

export default function listaJugador({ stylesProp, equipoActual }) {
  return (

    <View style={stylesProp}>
      <View style={styles.asideStyle}>
        {equipoActual &&
          jugadores.map((jugador, index) => (
            <Jugador
              key={index}
              onPress={() => console.log(`${equipoActual}.${jugador}`)}
              title={`${equipoActual}.${jugador}`}
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
  body: {
    borderColor: 'black',
    borderWidth: 2,
    flex: 1,
    flexDirection: 'row'
  },
  asideStyle: {
    width: 200
  },
});