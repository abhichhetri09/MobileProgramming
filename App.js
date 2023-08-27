import React, { useState } from "react";
import { Button } from 'react-native-elements';
import { StyleSheet, Text, View, TextInput, FlatList, ScrollView } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const calculateSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum.toString());
    setHistory(prevHistory => [...prevHistory, `${num1} + ${num2} = ${sum}`]);
  };

 
  const calculateSubtraction = () => {
    const subtraction = parseFloat(num1) - parseFloat(num2);
    setResult(subtraction.toString());
    setHistory(prevHistory => [...prevHistory, `${num1} - ${num2} = ${subtraction}`]);
  };
  const renderItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {result !== '' && <Text style={styles.resultText}>Result: {result}</Text>}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter a number"
            keyboardType="numeric"
            value={num1}
            onChangeText={setNum1}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter a number"
            keyboardType="numeric"
            value={num2}
            onChangeText={setNum2}
          />
          <Button style={styles.button} title="Add +" onPress={calculateSum} />
          <Button title="Subtract -" onPress={calculateSubtraction} />
          <Text style={styles.historyText}>History</Text>
        </View>
        <FlatList
          data={history}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: '20%'
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    width: 200,
  },
  button:{
    backgroundColor: 'skyblue',
    
    padding: 2,
    borderRadius: 1,



  },
  resultText: {
    fontSize: 20,
    marginTop: 20,
  },
  historyItem: {
   
    paddingVertical: 10,
  },
  historyText: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 5,
  }
});
