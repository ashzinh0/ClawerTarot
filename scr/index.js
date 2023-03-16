import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import home from "./screens/home";
import splash from "./screens/splash";


const Tab = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator>
        
        <Tab.Screen
          name="splash"
          component={splash}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="home"
          component={home}
          options={{ headerShown: false }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/*<Tab.Screen
          name="TabsNavigation"
          component={TabsNavigation}
          options={{ headerShown: false }}
        />{" "}*/

    
/*const Tabs = createNativeStackNavigator();
function TabsNavigation() {
  return (
    <Tabs.Navigator>
      {" "}
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false, tabBarLabel: "Home" }}
      />{" "}
      <Tabs.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: true, tabBarLabel: "Login" }}
      />{" "}
      <Tabs.Screen
        name="CadastrarScreen"
        component={CadastrarScreen}
        options={{ headerShown: true, tabBarLabel: "Cadastro" }}
      />{" "}
    </Tabs.Navigator>
  );
} */
/*const Tabss = createMaterialBottomTabNavigator();function TabssNavigation(){    return(        <Tabss.Navigator>            <Tabss.Screen            name="HomeScreen"            component={HomeScreen}            />        </Tabss.Navigator>    )}*/
