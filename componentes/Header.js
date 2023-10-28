import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Equipo from './Equipo';

export default function header() {
  const [equipos, setEquipo] = useState(['Barcelona', 'Osasuna', 'Atlhetic']);
  const [equipoActual, setEquipoActual] = useState(null);

  return (
    <View style={styles.header}>
      {equipos.map((equipo, index) => (
        <Equipo
          key={index}
          title={equipo}
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