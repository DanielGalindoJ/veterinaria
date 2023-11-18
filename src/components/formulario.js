import React from 'react';
import { Modal,Text,Button,StyleSheet,View, TextInput, ScrollView, Pressable, Alert} from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import { useState } from "react";

const Formulario = (modalVisible, setModalVisible, paciente, setPaciente) => {
  const [fecha, setFecha] = useState(new Date());
  const [paciente, setPaciente] = useState("");
  const [nombrePropietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handlCita =()=>{
    if([paciente,nombrePropietario,email,fecha,sintomas].includes('')){
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios'
      )
      return

    }
    const nuuevoPaciente ={
      id: Date.now(),
      paciente,
      nombrePropietario,
      email,
      telefono,
      fecha,
      sintomas
    }
    setPaciente([...paciente, nuuevoPaciente])
    setModalVisible(!modalVisible)

    setPaciente('')
    setPropietario('')
    setEmail('')
    setTelefono('')
    setFecha(new Date())
    setSintomas
  }
  

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Formulario
            <Text style={styles.tituloBold}> Nueva Cita</Text>
          </Text>

          <Pressable
            style={styles.btnCancelar}
            onLongPress={() => setModalVisible(!modalVisible)} >
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>


          <View style={styles.campo}>
            <Text style={styles.label}>
              Nombre del paciente
              <TextInput
                style={styles.input}
                placeholder="Nombre del paciente "
                placeholderTextColor={"#666"}
                value={paciente}
                onChangeText={setPaciente}
              />
            </Text>
            {errors.paciente? <Text style={styles.textValidation}>{errors.paciente}</Text>: null}
          </View>


          <View style={styles.campo}>
            <Text style={styles.label}>
              Nombre del propietario
              <TextInput
                style={styles.input}
                placeholder="Nombre del propietario "
                placeholderTextColor={"#666"}
                value={nombrePropietario}
                onChangeText={setPropietario}
              />
            </Text>
            {errors.nombrePropietario? <Text style={styles.textValidation}>{errors.nombrePropietario}</Text>: null}

          </View>


          <View style={styles.campo}>
            <Text style={styles.label}>
              Email propietario
              <TextInput
                style={styles.input}
                placeholder="E-mail del propietario"
                placeholderTextColor={"#666"}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </Text>
            {errors.email? <Text style={styles.textValidation}>{errors.email}</Text>: null}

          </View>


          <View style={styles.campo}>
            <Text style={styles.label}>
              Telefono propietario
              <TextInput
                style={styles.input}
                placeholder="Telefono del propietario"
                placeholderTextColor={"#666"}
                keyboardType="number-pad"
                value={telefono}
                onChangeText={setTelefono}
              />
            </Text>
            {errors.telefono? <Text style={styles.textValidation}>{errors.telefono}</Text>: null}

          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Fecha
              <View style={styles.FechaContenedor}>
                <DateTimePicker
                  date={fecha}
                  locale="es"
                  mode="date"
                  onValueChange={(date) => setFecha(date)}
                />
              </View>
            </Text>
          </View>


          <View style={styles.campo}>
            <Text style={styles.label}>
              Sintomas
              <TextInput
                style={[styles.input, styles.SintomasInput]}
                placeholder="Sintomas paciente"
                placeholderTextColor={"#666"}
                value={sintomas}
                onChangeText={setSintomas}
                multiline={true}
                rows={4}
              />
            </Text>
            {errors.sintomas? <Text style={styles.textValidation}>{errors.sintomas}</Text>: null}

          </View>

          <Pressable style={styles.btnNuevaCita} onPress={action}>
            <Text style={styles.btnNuevaCitaTexto}>Agregar paciente</Text>
          </Pressable>
          

        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 2,
    color: '#fff'
  },
  tituloBold: {
    fontWeight: '900',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
    //borderRadius: 20,

  },
  label: {
    color: '#fff',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    

  },
  FechaContenedor: {
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  SintomasInput: {
    height: 100,
  },
  btnCancelar: {
    marginVertical: 30,
    backgroundColor: "#5827A4",
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  btnCancelarTexto: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase,",
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    textAlign: 'center',
    color: '#5827A4',
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: 16,
  },

});

export default Formulario;


