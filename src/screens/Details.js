import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const Details = (props) => {
  const goBack = () => {
    props.navigation.goBack();
  };

  console.log(props.route.params);

  return (
    <View>
      <Text>{props.route.params.name}</Text>
      {/* <Button title="Go back" onPress={goBack} /> */}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({});
