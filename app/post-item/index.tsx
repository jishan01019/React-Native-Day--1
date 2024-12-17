import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function PostItem() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const resData = await response.json();

      setData(resData);
    };

    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.item}>
              <Text style={styles.title}>
                {`Index: ${index} - Title: ${item.title}`}
              </Text>
              <Text style={styles.body}>{item.body}</Text>

              <Button
                title="View"
                onPress={() =>
                  Alert.alert(
                    "Custom Alert Title", // Title of the alert
                    `This is item ${index + 1}:\n${item.title}`, // Message
                    [
                      { text: "OK", onPress: () => console.log("OK Pressed") },
                      { text: "Cancel", style: "cancel" },
                    ],
                    { cancelable: true } // Dismiss alert by tapping outside
                  )
                }
              />
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: "green",
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  body: {
    fontSize: 14,
    color: "white",
    marginTop: 4,
  },
});
