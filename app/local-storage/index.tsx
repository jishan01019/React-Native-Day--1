import { View, Text, TextInput, Button, ToastAndroid } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (value: string) => {
  try {
    await AsyncStorage.setItem("name", value);
    ToastAndroid.show("Data saved successfully", ToastAndroid.SHORT);
  } catch (error) {
    alert(error);
    ToastAndroid.show("Failed to save the data", ToastAndroid.SHORT);
  }
};

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("name");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    alert(e);
  }
};

const LocalStorage = () => {
  const [name, setName] = useState("");

  const handelShowName = async () => {
    const name = await getData();
    alert(name);
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <TextInput
        placeholder="Enter your name"
        inputMode="text"
        style={{ backgroundColor: "gray", margin: 10 }}
        onChangeText={setName}
      />

      <Button title="Save" onPress={() => storeData(name)} />

      <Button title="Show name" onPress={() => handelShowName()} />
    </View>
  );
};

export default LocalStorage;
