import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: "white",
          },
          headerStyle: {
            backgroundColor: "green",
          },
          headerTintColor: "white",
        }}
      >
        <Drawer.Screen
          name="tab"
          options={{
            drawerLabel: "Drawer Home",
            title: "Toolbar Home",

            drawerItemStyle: {
              backgroundColor: "lightgray", // Light gray background
              borderBottomWidth: 1, // Bottom border
              borderBottomColor: "gray", // Border color
              borderRadius: 0,
            },

            drawerLabelStyle: {
              color: "black", // Text color
              fontSize: 16, // Optional: Adjust font size
              fontWeight: "bold", // Optional: Add emphasis to text
            },
          }}
        />

        <Drawer.Screen
          name="privacy"
          options={{
            drawerLabel: "Drawer Privacy",
            title: "Toolbar Privacy",
            drawerItemStyle: {
              backgroundColor: "lightgray", // Light gray background
              borderBottomWidth: 1, // Bottom border
              borderBottomColor: "gray", // Border color
              borderRadius: 0,
              marginTop: 10,
            },
            drawerLabelStyle: {
              color: "black", // Text color
              fontSize: 16, // Optional: Adjust font size
              fontWeight: "bold", // Optional: Add emphasis to text
            },
          }}
        />

        <Drawer.Screen
          name="share"
          options={{
            drawerLabel: "Drawer Share",
            title: "Toolbar Share",

            drawerItemStyle: {
              backgroundColor: "lightgray", // Light gray background
              borderBottomWidth: 1, // Bottom border
              borderBottomColor: "gray", // Border color
              borderRadius: 0,
              marginTop: 10,
            },

            drawerLabelStyle: {
              color: "black", // Text color
              fontSize: 16, // Optional: Adjust font size
              fontWeight: "bold", // Optional: Add emphasis to text
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
