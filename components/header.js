import React from "react";
import { StyleSheet, Text, View } from "react-native";

// export default function Header() {
export default Header = () => {
  return (
    <View style={styles.Header}>
      <Text style={styles.title}>My Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
