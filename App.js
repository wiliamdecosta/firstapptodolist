import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import { useState, useEffect } from 'react';
import TextButton from './widgets/TextButton';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import NoDataFound from './widgets/NoDataFound';

export default function App() {

  const [goalList, setGoalList] = useState([]);

  function addGoalHandler(goalText) {
    if (goalText !== '') {
      setGoalList((currentGoalList) => [...currentGoalList, { text: goalText, id: Math.random().toString() }]);
    } else {
      alert('Teks tidak boleh kosong');
    }
  }

  function deleteItem(data, index) {
    var array = [...goalList];
    var index = array.indexOf(data);
    if (index !== -1) {
      array.splice(index, 1);
      setGoalList(array);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <GoalInput onInputGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text style={styles.todoTitle}>TODO LIST ({goalList.length}) : </Text>
        {goalList.length == 0 ?
          <NoDataFound />
          :
          <FlatList data={goalList}
            renderItem={(itemData) => {
              return (
                <GoalItem data={itemData} onDelete={deleteItem} />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  todoTitle: {
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  goalsContainer: {
    flex: 7,
  },
});
