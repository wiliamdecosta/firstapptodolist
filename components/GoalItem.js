import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function GoalItem(props) {

  let itemData = props.data;

  function deleteHandler() {
    props.onDelete(itemData.item, itemData.index);
  }

  return (
    <View style={styles.itemContainer}>
        <View style={styles.noteContainer}>
            <Text numberOfLines={1} 
                style={styles.itemText}>
                    {(itemData.index+1)}. {itemData.item.text}
            </Text>
        </View>
        <View style={styles.deleteContainer}>
            <TouchableOpacity onPress={deleteHandler}>
                <Text style={styles.removeIcon}> X </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    noteContainer : {
        flex:9,
        marginRight: 8,
        borderWidth: 1,
        backgroundColor: '#b892f7',
        borderRadius: 10,
        padding: 8,
        borderColor: '#b892f7',
    },
    itemText : {
        overflow: 'hidden', 
        color: 'white',
    },    
    deleteContainer : {
        flex:1,
    },
    removeIcon: {
        color: 'white',
        fontWeight: 'bold',
        padding: 5,
        backgroundColor: 'red',
        textAlign: 'center',
    },
});