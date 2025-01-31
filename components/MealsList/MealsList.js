import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";
function MealsList({ items }) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps}></MealItem>;
  }
  return (
    <>
      <View style={styles.container}>
        {/* <Text>Meals overview screen - {categoryId}</Text> */}
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderMealItem}
        ></FlatList>
      </View>
    </>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
