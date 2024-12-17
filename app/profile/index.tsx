import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function Profile() {
  const params = useLocalSearchParams();

  const [name, setName] = useState("");

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      {/* Dismiss keyboard when tapping outside */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            <Text style={styles.text}>
              My Name : {params?.name ? params?.name : "Welcome Profile"}
            </Text>

            <Image
              source={{ uri: "https://i.ibb.co/k3XQkZ5/image.png" }}
              style={styles.image}
            />

            <TextInput
              placeholder="Enter your name"
              inputMode="text"
              onChangeText={setName}
              style={styles.input}
            />

            <TextInput
              placeholder="Enter your email"
              inputMode="email"
              style={styles.input}
              onChangeText={(text) => setUser({ ...user, email: text })}
            />

            <TextInput
              placeholder="Enter your location"
              inputMode="text"
              style={styles.input}
              onChangeText={(text) => setUser({ ...user, email: text })}
            />

            <TextInput
              placeholder="Enter your hobby"
              inputMode="text"
              style={styles.input}
              onChangeText={(text) => setUser({ ...user, email: text })}
            />

            <TextInput
              placeholder="Enter your address"
              inputMode="text"
              style={styles.input}
              onChangeText={(text) => setUser({ ...user, email: text })}
            />

            <TextInput
              placeholder="Enter your phone"
              inputMode="tel"
              style={styles.input}
              onChangeText={(text) => setUser({ ...user, email: text })}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flexGrow: 1, // Ensure content fills the ScrollView
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  content: {
    width: "100%",
    paddingHorizontal: 20,
  },
  text: {
    color: "green",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    marginVertical: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#333",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});
