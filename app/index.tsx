import { Link, router } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const handelNavigate = () => {
    router.push("/profile");
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Text>THis is index page</Text>

      <Link
        style={{
          width: "100%",
          backgroundColor: "pink",
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}
        href={{
          pathname: "/profile",
          params: { name: "hi nishan vai" },
        }}
      >
        <Text>Go to Profile with link</Text>
      </Link>

      <Button title="Go to profile with btn" onPress={() => handelNavigate()} />

      <TouchableOpacity
        style={{ backgroundColor: "green", padding: 10, marginTop: 10 }}
        onPress={() => handelNavigate()}
      >
        <Text>Go to Profile with touch</Text>
      </TouchableOpacity>

      <Link
        style={{
          width: "100%",
          backgroundColor: "pink",
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}
        href="/post-item"
      >
        <Text>Go to post</Text>
      </Link>

      <Link
        style={{
          width: "100%",
          backgroundColor: "pink",
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}
        href="/webview"
      >
        <Text>Go to Webview</Text>
      </Link>

      <Link
        style={{
          width: "100%",
          backgroundColor: "pink",
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}
        href="/tab"
      >
        <Text>Go to tab</Text>
      </Link>

      <Link
        style={{
          width: "100%",
          backgroundColor: "pink",
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}
        href="/drawer/(tab)"
      >
        <Text>Go to drawer</Text>
      </Link>
    </View>
  );
}
