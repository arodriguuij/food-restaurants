import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import yelp from "../api/yelp";

const ResultScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  useEffect(() => {
    getResult(id);
  }, [id, getResult]);

  const getResult = async (id) => {
    const response = await yelp(`/${id}`);
    setResult(response.data);
  };

  return !result ? null : (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 300,
    borderRadius: 4,
  },
});

export default ResultScreen;
