import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import zomato from "../api/zomato";

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getResult = async id => {
    const response = await zomato.get("/restaurant", {
      params: {
        res_id: id
      }
    });
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  } else {
    return (
      <View>
        <Text>Results Show</Text>
        <FlatList
          data={result}
          renderItem={({ item }) => {
            return (
              <Image
                style={styles.image}
                source={{ uri: item.photos.photo.url }}
              />
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    margin: 10
  }
});

export default ResultsShowScreen;
