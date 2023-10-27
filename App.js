const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Card from "./screens/Card";
import Location from "./screens/Location";
import CategoriaDoces from "./screens/CategoriaDoces";
import Home from "./screens/Home";
import FrameScreen from "./screens/FrameScreen";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import SignUp1 from "./screens/SignUp1";
import HomePage from "./screens/HomePage";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Card"
              component={Card}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Location"
              component={Location}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CategoriaDoces"
              component={CategoriaDoces}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame26"
              component={FrameScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp1"
              component={SignUp1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
