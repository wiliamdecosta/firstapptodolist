import { StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';
import TextButton from '../widgets/TextButton';

export default function GoalInput(props) {
    const [goalText, setGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onInputGoal(goalText);
        setGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                maxLength={50}
                onChangeText={goalInputHandler}
                placeholder='What are you gonna do today ?'
                style={styles.textInput}
                value={goalText} />
            <TextButton 
                title='Add Item'
                style={{flex:1}}
                onPress={addGoalHandler} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingBottom: 15,
    },

    textInput: {
        backgroundColor: '#fff389',
        borderColor: '#fff389',
        borderRadius: 10,
        borderWidth: 1,
        flex:2,
        marginRight: 10,
        padding: 8,
    },
});