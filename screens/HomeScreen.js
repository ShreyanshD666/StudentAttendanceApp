import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../config';


export default class HomeScreen extends React.Component {
 aishu1Pressed(){
  var aishu1 = db.ref('Aishu/' + '/')
  aishu1.update({
    'absent': 'true'
  })
}

aishu2Pressed(){
  var aishu2 = db.ref('Aishu/' + '/')
  aishu2.update({
    'present': 'true'
  })
}
anajli1Pressed(){
  var anjali1 = db.ref('Anjali/' + '/')
  anjali1.update({
    'absent': 'true'
  })
}

anjali2Pressed(){
  var anjali2 = db.ref('Anjali/' + '/')
  anjali2.update({
    'present': 'true'
  })
}
ravi1Pressed(){
  var aishu1 = db.ref('Ravi/' + '/')
  aishu1.update({
    'absent': 'true'
  })
}

ravi2Pressed(){
  var aishu2 = db.ref('Ravi/' + '/')
  aishu2.update({
    'present': 'true'
  })
}
jacob1Pressed(){
  var anjali1 = db.ref('Jacob/' + '/')
  anjali1.update({
    'absent': 'true'
  })
}

jacob2Pressed(){
  var anjali2 = db.ref('Jacob/' + '/')
  anjali2.update({
    'present': 'true'
  })
}

  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  render() {
    return (
      <View>
        <AppHeader />

        <Text style={styles.studenChartContainer}>Aishu</Text>
        <Text style={styles.studenChartContainer}>Anjali</Text>
        <Text style={styles.studenChartContainer}>Ravi</Text>
        <Text style={styles.studenChartContainer}>Jacob</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.aishu1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttona}
          onPress={() => {
            this.anjali1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonb}
          onPress={() => {
               this.ravi1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonc}
          onPress={() => {
             this.jacob1Pressed();
          }}>
          <Text style={styles.buttonText}>Absent</Text>
        </TouchableOpacity>
           <TouchableOpacity
          style={styles.button2}
          onPress={() => {
           this.aishu2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2a}
          onPress={() => {
             this.anjali2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2b}
          onPress={() => {
              this.ravi2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button2c}
          onPress={() => {
              this.jacob2Pressed();
          }}>
          <Text style={styles.button2Text}>Present</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button3}
          onPress={() => {
            this.goToBuzzerScreen('yellow');
          }}>
          <Text style={styles.button3Text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
  },
  studenChartContainer: {
     flexDirection: 'row',
     padding: 10,
     alignItems: 'center',
     margin: 20
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 200,
    marginTop: -288,
    width: 100,
    height: 30,
    backgroundColor: 'red'
  },
  buttona: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 200,
    marginTop: 50,
    width: 100,
    height: 30,
    backgroundColor: 'red'
  },
  buttonb: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 200,
    marginTop: 48,
    width: 100,
    height: 30,
    backgroundColor: 'red'
  },
  buttonc: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginLeft: 200,
    marginTop: 50,
    width: 100,
    height: 30,
    backgroundColor: 'red'
  },
  button2: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: -268,
    marginLeft: -30,
    width: 100,
    height: 30,
    backgroundColor: 'green'
  },
  button2Text: {
    textAlign: 'center',
    color: 'white',
  },
  button2a: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 40,
    marginLeft: -30,
    width: 100,
    height: 30,
    backgroundColor: 'green'
  },
  button2b: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 38,
    marginLeft: -30,
    width: 100,
    height: 30,
    backgroundColor: 'green'
  },
  button2c: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 40,
    marginLeft: -30,
    width: 100,
    height: 30,
    backgroundColor: 'green'
  },
  button3: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 5,
    //marginBottom: 10,
    marginTop: 60,
    //marginLeft: 0,
    width: 200,
    height: 50,
    backgroundColor: 'yellow',
  },
   button3Text: {
    textAlign: 'center',
    color: 'purple',
  },
 
});