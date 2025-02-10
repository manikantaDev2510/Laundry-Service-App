import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native';
import React from 'react';

const Services = () => {
    const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
      name: "Washing",
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
      name: "Laundry",
    },
    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
      name: "Wash & Iron",
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
      name: "Cleaning",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Services Available</Text>
      <ScrollView contentContainerStyle={styles.servicesContainer}>
        {services.map((service, index) => (
          <Pressable style={styles.serviceItem} key={index}>
            <Image source={{ uri: service.image }} style={styles.serviceImage} />
            <Text style={styles.serviceName}>{service.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceItem: {
    width: '48%',
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10, 
  },
  serviceImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  serviceName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Services;