import { StyleSheet, Text, View, Pressable, Modal, Button, Image } from 'react-native';
import {useState} from 'react';
import Formulario from './src/components/formulario'; // Sin llaves
import { FlatList } from 'react-native-web';


export default function App() {
const [modalVisble, setModalVisible] = useState(false)
const [paciente, setPaciente] = useState([])
console.log(modalVisble)  

  const nuevaCita = () => {
    console.log('presione el boton');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de citas
        <Text style={styles.tituloBold}> Veterinaria </Text>
      </Text>
      <Image
        source={require('./assets/vete.jpg')}
        style={{ width: 300, height: 170,  }}
      />
      <Text style={styles.textmarca}> Veterinay clinic </Text>

      <Pressable onPress={()=> setModalVisible(true)} 
      style={styles.btnnuevacita}>
        <Text style={styles.btntextnuevacita}> Nueva Cita</Text>
      </Pressable>
      {paciente.length ===0?
        <Text style={styles.noPaciente}>No hya Pacientes</Text>:
        <FlatList
          data={paciente}
          keyExtractor={({item})=>{
            return(
              <paciente>
                item={item}
              </paciente>
            )
          }}
        />
      };
      
      <Formulario
        modalVisble ={modalVisble}
        setModalVisible = {setModalVisible}
        paciente ={paciente}
        setPaciente ={setPaciente}
      />
      <Text style={styles.maracAgua}> Daniel galindo 2558108 </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3B7B7',
    padding: 8,
  },
  titulo: {
    margin: 20,
    fontSize: 30,
    textTransform: 'uppercase',
    fontWeight: 600,
    textAlign: 'center',
    
  },
  tituloBold: {
    fontWeight: 700,
    color: 'red',
  },
  btnnuevacita: {
    backgroundColor: 'green',
    padding: 15,
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  btntextnuevacita: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 900,
    textTransform: 'uppercase',
  },
  maracAgua: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 900,
    marginTop: 10,
    borderRadius: '10',
    backgroundColor: '#BC2424',
    color: '#fff',
    marginRight: 20,
    marginLeft: 20,
  },
  textmarca:{
    textTransform: 'uppercase',
    textAlign: 'center',
    backgroundColor: '#black',
    fontWeight: 900,

  },
  noPaciente:{
    marginTop:40,
    textAlign:'center',
    fontSize: 24,
    fontWeight: '600'
  }

});
