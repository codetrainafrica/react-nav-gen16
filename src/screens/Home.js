import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = (props) => {
  const navigation = useNavigation();

  const handleNav = () => {
    navigation.navigate("Details", {
      name: "Tony",
      age: 60,
    });
  };

  return (
    <View>
      <Button title="Go to Details screen" onPress={handleNav} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
