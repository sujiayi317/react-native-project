import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo() {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      {/* <TextInput placeholder="new todo ..." onChangeText={changeHandler} /> */}
      <TextInput
        style={styles.input}
        placeholder="new todo ..."
        onChangeText={(val) => changeHandler(val)}
      />
      <Button
        onPress={() => console.log(text)}
        title="add todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "coral",
  },
});
