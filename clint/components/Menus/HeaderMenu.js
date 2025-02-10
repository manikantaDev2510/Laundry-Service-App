import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons"; // Import Ionicons

const HeaderMenu = () => {
  return (
    <View style={styles.header}>
      {/* Left Side: Location Icon */}
      <Ionicons name="location-outline" size={24} color="black" />

      {/* Center Text */}
      <Text style={styles.title}>Laundry Service</Text>

      {/* Right Side: Profile Icon */}
      <Ionicons name="person-circle-outline" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default HeaderMenu;
