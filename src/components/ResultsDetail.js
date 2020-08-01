import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Text style={styles.name}>{result.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: result.thumb
            ? result.thumb
            : "https://static.vecteezy.com/system/resources/previews/000/108/392/original/free-fast-food-vector.png"
        }}
      />
      <Text style={styles.details}>
        Rating :{" "}
        {result.user_rating.aggregate_rating != "0"
          ? result.user_rating.aggregate_rating
          : "N/A"}{" "}
        , Reviews : {result.all_reviews_count}
      </Text>
      <Text style={styles.details}>
        Avg Cost for 2 : {result.average_cost_for_two}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    margin: 15,
    borderRadius: 5
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 15
  },
  details: {
    fontWeight: "bold",
    marginLeft: 15
  }
});

export default ResultsDetail;
