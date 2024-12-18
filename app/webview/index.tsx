import React, { useRef, useState } from "react";
import { BackHandler, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
import Constants from "expo-constants";

export default function App() {
  const webViewRef = useRef(null); // To reference the WebView
  const [canGoBack, setCanGoBack] = useState(false); // Track if we can go back

  // Handle back press on Android
  const handleBackPress = () => {
    if (canGoBack && webViewRef.current) {
      webViewRef.current.goBack(); // Navigate back in WebView
      return true; // Prevent default back behavior
    }
    return false; // Allow default behavior (exit app)
  };

  React.useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, [canGoBack]);

  return (
    <WebView
      ref={webViewRef}
      style={styles.container}
      source={{ uri: "https://www.prothomalo.com/" }}
      onNavigationStateChange={(navState) => setCanGoBack(navState.canGoBack)} // Update back navigation state
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
