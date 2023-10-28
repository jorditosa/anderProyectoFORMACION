import { StyleSheet, Text, View } from 'react-native';

export default function listaJugador({ stylesProp }) {
  return (

    <View style={stylesProp}>
      <View style={styles.asideStyle}>
        <Text style={styles.text}>Jugador 1.1</Text>
        <Text style={styles.text}>Jugador 1.2</Text>
        <Text style={styles.text}>Jugador 1.3</Text>
        <Text style={styles.text}>Jugador 1.4</Text>
        <Text style={styles.text}>Jugador 1.5</Text>
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