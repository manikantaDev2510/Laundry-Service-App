import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const services = [
  {
    id: "0",
    image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
    name: "Shirt",
    quantity: 0,
    price: 10,
  },
  {
    id: "11",
    image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
    name: "T-shirt",
    quantity: 0,
    price: 10,
  },
  {
    id: "12",
    image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
    name: "Dresses",
    quantity: 0,
    price: 10,
  },
  {
    id: "13",
    image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
    name: "Jeans",
    quantity: 0,
    price: 10,
  },
  {
    id: "14",
    image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
    name: "Sweater",
    quantity: 0,
    price: 10,
  },
  {
    id: "15",
    image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
    name: "Shorts",
    quantity: 0,
    price: 10,
  },
];

const HomeScreen = ({ setCurrentScreen }) => {
  const [cart, setCart] = useState(services);

  // Function to increase quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Calculate total quantity and price
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Laundry Items</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.serviceItem}>
            <Image source={{ uri: item.image }} style={styles.serviceImage} />
            <View style={styles.serviceInfo}>
              <Text style={styles.serviceName}>{item.name}</Text>
              <Text style={styles.servicePrice}>₹{item.price}</Text>
            </View>
            {item.quantity === 0 ? (
              <TouchableOpacity
                style={styles.addButton}
                onPress={() => increaseQuantity(item.id)}
              >
                <Text style={styles.addText}>Add</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.quantityButton}>
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.quantityButton}>
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />
      
      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {totalItems} items | ₹{totalPrice}
        </Text>
        <TouchableOpacity style={styles.proceedButton} >
          <Text style={styles.proceedText}>Proceed to PickUp</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.extraChargeText}>Extra Charges might apply</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  serviceItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  serviceImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  serviceInfo: {
    flex: 1,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  servicePrice: {
    fontSize: 14,
    color: "gray",
  },
  addButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#28a745",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  addText: {
    color: "#28a745",
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  quantityButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#007bff",
    borderRadius: 8,
    marginTop: 15,
  },
  footerText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  proceedButton: {
    backgroundColor: "#0056b3",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  proceedText: {
    color: "#fff",
    fontWeight: "bold",
  },
  extraChargeText: {
    textAlign: "center",
    fontSize: 12,
    color: "gray",
    marginTop: 5,
  },
});

export default HomeScreen;
