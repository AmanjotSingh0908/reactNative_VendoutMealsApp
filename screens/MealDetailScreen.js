import { Text } from "react-native";

function MealDetailScreen(route) {
  const mealId = route.params.mealId;
  return <Text>Hii {mealId}</Text>;
}

export default MealDetailScreen;
