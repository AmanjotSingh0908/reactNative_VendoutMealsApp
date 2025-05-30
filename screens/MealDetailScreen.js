import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { use, useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("Pressed!");
  }

 useLayoutEffect(() => {
    navigation.setOptions({
      headerRight : () => {
        return <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/>
      }
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootCointainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={{ alignItems: 'center' }}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>

          {/* {selectedMeal.ingredients.map((steps) => (
        <Text key={steps}>{steps}</Text>
      ))} =? Created a component for this*/}
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootCointainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOutputContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
