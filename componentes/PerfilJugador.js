import { Image, StyleSheet, Text, View } from 'react-native';

export default function perfilJugador({ jugadorActual }) {
  return (
    <View style={styles.container}>
      <View style={styles.imagenJugador}>
        {
          jugadorActual ? (
            <Image
              source={require(`../assets/${jugadorActual}.jpg`)}
              style={styles.imageStyle}
              resizeMode="cover"
            />
          ) : (
            <Text>
              Selecciona un jugador
            </Text>
          )
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagenJugador: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 2,
  },
  imageStyle: {
    width: '400px',
    margin: 'auto',
    height: '100%',
    objectFit: 'cover',
  },
});

