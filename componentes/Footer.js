import { StyleSheet, Text, View } from 'react-native';

export default function footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>www.equipo.com</Text>
      <Text style={styles.text}>123456789</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  footer: {
    width: '100%',
    height: '100px',
    padding: '10px',
    borderColor: 'black',
    borderWidth: '2px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px'

  },
});