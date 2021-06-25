import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingTop: 40,
    backgroundColor: "#333",
  },
  boxOne: {
    flex: 2,
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "gold",
    padding: 20,
  },
  boxThree: {
    flex: 2,
    backgroundColor: "coral",
    padding: 30,
  },
});
