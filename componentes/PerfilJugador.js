import { Image, StyleSheet, View } from 'react-native';

export default function perfilJugador() {
  return (

    <View style={styles.container}>
      <View style={styles.imagenJugador}>
        <Image
          source={require('../assets/Ronaldinho.jpg')}
          style={styles.imageStyle}
          resizeMode="cover"
        />
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
    width: '100%',
    height: '100%',
  },
});

