import React from "react";
import { View, Text,StyleSheet } from "react-native";

export default function SingleTodo({ todo }) {
  return (
    <View style={styles.todo}>
      <Text>{todo.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

})