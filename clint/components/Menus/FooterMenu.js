import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const FooterMenu = ({ setCurrentScreen }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setCurrentScreen("Home")}>
        <FontAwesome5 name="home" style={styles.iconStyle} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCurrentScreen("Services")}>
        <FontAwesome5 name="plus" style={styles.iconStyle} />
        <Text>Services</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCurrentScreen("Search")}>
        <FontAwesome5 name="search" style={styles.iconStyle} />
        <Text>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setCurrentScreen("Profile")}>
        <FontAwesome5 name="user" style={styles.iconStyle} />
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
    justifyContent: "space-between",
  },
  iconStyle: {
    marginBottom: 3,
    alignSelf: "center",
    fontSize: 25,
  },
});

export default FooterMenu;
