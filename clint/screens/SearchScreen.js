import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";

const PickUpScreen = () => {
  const today = new Date();

  const getFormattedDate = (date) => date.toISOString().split("T")[0];

  const pickupDates = Array.from({ length: 4 }, (_, index) => {
    const nextDate = new Date();
    nextDate.setDate(today.getDate() + index);
    return getFormattedDate(nextDate);
  });

  const deliveryOptions = pickupDates.map((date) => `${date} (2-3 Days)`);

  const pickupTimes = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  const [selectedDate, setSelectedDate] = useState(pickupDates[0]);
  const [selectedTime, setSelectedTime] = useState(pickupTimes[0]);
  const [selectedDelivery, setSelectedDelivery] = useState(deliveryOptions[0]);
  const [selectedLocation, setSelectedLocation] = useState(""); // Stores selected location

  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

  // Example locations
  const locationSuggestions = [
    "Nayabazar, Sastrinagar, Cuttack",
    "Bhubaneswar, Odisha",
    "Mumbai, Maharashtra",
    "Delhi, India",
    "Kolkata, West Bengal",
  ];

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
    setSearchText(location);
    setIsSearching(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search Location"
          onFocus={() => setIsSearching(true)}
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
        />

        {/* Location Suggestions (Visible Only When Searching) */}
        {isSearching && (
          <View style={styles.suggestionsBox}>
            {locationSuggestions
              .filter((loc) =>
                loc.toLowerCase().includes(searchText.toLowerCase())
              )
              .map((loc, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.suggestionItem}
                  onPress={() => handleSelectLocation(loc)}
                >
                  <Text>{loc}</Text>
                </TouchableOpacity>
              ))}
          </View>
        )}

        {/* Selected Location Display */}
        {selectedLocation ? (
          <Text style={styles.selectedLocationText}>
            Selected Location: {selectedLocation}
          </Text>
        ) : null}

        {/* PickUp Date */}
        <Text style={styles.heading}>PickUp Date</Text>
        <View style={styles.selectionRow}>
          {pickupDates.map((item) => (
            <TouchableOpacity key={item} onPress={() => setSelectedDate(item)}>
              <Text
                style={[
                  styles.optionBox,
                  selectedDate === item && styles.selectedOption,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Select Time */}
        <Text style={styles.heading}>Select Time</Text>
        <View style={styles.selectionRow}>
          {pickupTimes.map((item) => (
            <TouchableOpacity key={item} onPress={() => setSelectedTime(item)}>
              <Text
                style={[
                  styles.optionBox,
                  selectedTime === item && styles.selectedOption,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Delivery Date */}
        <Text style={styles.heading}>Delivery Date</Text>
        <View style={styles.selectionRow}>
          {deliveryOptions.map((item) => (
            <TouchableOpacity
              key={item}
              onPress={() => setSelectedDelivery(item)}
            >
              <Text
                style={[
                  styles.optionBox,
                  selectedDelivery === item && styles.selectedOption,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Footer (Fixed at Bottom) */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>2 items | ₹20</Text>
        <TouchableOpacity onPress={() => console.log("Book Your Washing")}>
          <Text style={styles.footerButton}>Book Your Washing</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F0E3D3" },
  scrollContainer: { paddingBottom: 120, padding: 20 },
  searchBar: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  suggestionsBox: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 5,
  },
  suggestionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  selectedLocationText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 10,
    backgroundColor: "#dff0d8",
    padding: 10,
    borderRadius: 5,
  },
  heading: { fontSize: 18, fontWeight: "bold", marginTop: 20 },
  selectionRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 10 },
  optionBox: {
    padding: 10,
    backgroundColor: "#ccc",
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    textAlign: "center",
  },
  selectedOption: { backgroundColor: "#000", color: "#fff" },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#008CBA",
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: { color: "#fff", fontSize: 16 },
  footerButton: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});

export default PickUpScreen;
