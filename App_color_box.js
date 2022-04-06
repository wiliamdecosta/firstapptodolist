import { StyleSheet, Text, View} from 'react-native';
import {useState, useEffect} from 'react';
import TextButton from './widgets/TextButton';

export default function App() {

  const [numberPress, setNumber]= useState(0);
  const [rowDir, setRowDir]= useState('row');

  useEffect(()=>{
    console.log('use effect triggered');
    if(numberPress > 0 && numberPress % 5 == 0) {
      alert('Mencapai kelipatan 5');
    }
  },[numberPress, rowDir]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.header1}>{numberPress}</Text>
      </View>
      <View style={styles.row}>
        <TextButton title="Increase Me!" onPress={()=> setNumber(numberPress+1)} />
        <TextButton title="Decrease Me!" backgroundColor='orange' onPress={()=> setNumber(numberPress-1)} />
      </View>

      <View style={rowDir == 'row' ? styles.rowBox : styles.rowBoxReverse}>
        <View style={{width: 50, height: 50, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
           <Text>1</Text> 
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center'}}> 
          <Text>2</Text> 
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}> 
          <Text>3</Text> 
        </View>
      </View>
      <View style={styles.row}>
        <TextButton title="Switch" backgroundColor='purple'onPress={()=> setRowDir(rowDir == 'row' ? 'row-reverse' : 'row')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },

  rowBox : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:50,
  },

  rowBoxReverse : {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    marginTop:50,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
  },

  header1: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  defaultMargin: {
    margin: 16,
  },

  textButton : {
    padding: 10, borderWidth: 1, borderColor: 'green', borderRadius: 10,
    backgroundColor: 'green',
    color: 'white',
  },
});
