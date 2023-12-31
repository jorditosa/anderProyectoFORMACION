import { StyleSheet, View } from 'react-native';
import Equipo from './Equipo';

export default function ListaEquipos({ equipoActual, setEquipoActual, equipos }) {

  return (
    <View style={styles.header}>
      {Object.keys(equipos).map((equipo, index) => (
        <Equipo
          key={index}
          equipo={equipo}
          equipoActual={equipoActual}
          setEquipoActual={setEquipoActual}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100px',
    padding: '10px',
    borderColor: 'black',
    borderWidth: '2px',
    display: 'flex',
    justifyContent: 'start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '20px'

  },
  text: {
    color: 'black',
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 22,
    margin: 10,
    padding: 4

  },
});