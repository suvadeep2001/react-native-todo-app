// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  FlatList,
  // ScrollView,
} from "react-native";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (!todos) {
      return;
    } else {
      setTodos([...todos, { id: Date.now(), text: todo }]);
      setTodo("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>React Native Todo App</Text>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => setTodo(text)}
          value={todo}
          placeholder="Enter your work here"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <Text style={styles.button}>Create</Text>
        </TouchableOpacity>
      </View>
      {/* <ScrollView> */}
      {/* {todos.map((todo)=>( */}
      {/* <Text key={todo.id}>{todo.text}</Text> */}
      {/* ))} */}
      {/* </ScrollView> */}
      <View>
        <FlatList
          data={todos}
          renderItem={({ item }) => <Text>{item.text}</Text>}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F7DAD9",
  },
  heading: {
    marginVertical: 10,
    fontSize: 30,
    fontWeight: "700",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    shadowColor: "black",
    elevation: 10,
    marginRight: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
  },
  button: {
    padding: 13,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 10,
  },
  inputContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    alignItems: "center",
  },
});
