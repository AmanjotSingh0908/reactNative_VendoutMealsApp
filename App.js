import { Button, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import Ionicons from "@expo/vector-icons/Ionicons"; 
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator(); //obj with two properties
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white", //Text color of the header
        sceneContainerStyle: { backgroundColor: "#3f2f25" }, //content style is named as SceneContainerStyle for drawer navigator
        drawerContentStyle: { backgroundColor: "#351401" }, //This is the background color of the drawer
        drawerInactiveTintColor: "white", //This is the color of the text when the drawer is closed
        drawerActiveTintColor: "#351401", //This is the color of the text when the drawer is open
        drawerActiveBackgroundColor: "#e4baa1", //This is the background color of the text when the drawer is open
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
             <Ionicons name="list" color={"white"} size={size} />
        ), 
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{
          drawerIcon: ({ color, size }) => (
             <Ionicons name="star" color={color} size={size} />
        ), 
        }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white", //Text color of the header
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              // title: "All Categories",
              headerShown: false, //This will hide the header for the drawer navigator
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId
            //   return {
            //     title: catId,
            //   };
            // }}   Alternative is to set options from inside the component
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{title: "About the Meal"}} //This is the title that will be shown in the header
            // options={{
            //   headerRight: () => {
            //     // This is a function that returns a component and is good if there is no direct interaction with the component
            //     return (
            //       <Button
            //         title="Tap me!"
            //         onPress={() => {
            //           console.log("Pressed!");
            //         }}
            //       />
            //     );
            //     return <Button title="Tap me!" />;
            //   },
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
