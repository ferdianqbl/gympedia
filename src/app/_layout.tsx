import React from "react";
import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Layout = () => {
  return (
    <SafeAreaProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen
          name="exercises/index"
          options={{
            presentation: "fullScreenModal",
          }}
        /> */}
      </Stack>
    </SafeAreaProvider>
  );
};

export default Layout;
