import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import HeaderMenu from "../../components/Menus/HeaderMenu";
import FooterMenu from "../../components/Menus/FooterMenu";
import HomeScreen from "../../screens/Home";
import Login from "../../screens/auth/Login";
import Register from "../../screens/auth/Register";
import ProfileScreen from "../../screens/auth/ProfileScreen";
import SearchScreen from "../../screens/SearchScreen";
import Services from "../../screens/Services"

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("Login");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen("Home");
  };

  const handleGuestLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen("Home");
  };

  return (
    <View style={styles.container}>
      {isLoggedIn && <HeaderMenu setCurrentScreen={setCurrentScreen} />}
      <View style={styles.screenContainer}>
        {currentScreen === "Home" && <HomeScreen />}
        {currentScreen === "Search" && <SearchScreen />}
        {currentScreen === "Services" && <Services/>}
        {currentScreen === "Profile" && (
          <ProfileScreen setCurrentScreen={setCurrentScreen} />
        )}
        {currentScreen === "Login" && (
          <Login
            changeScreen={() => setCurrentScreen("Register")}
            onLogin={handleLogin}
            onGuestLogin={handleGuestLogin}
          />
        )}
        {currentScreen === "Register" && (
          <Register changeScreen={() => setCurrentScreen("Login")} />
        )}
      </View>
      {isLoggedIn && <FooterMenu setCurrentScreen={setCurrentScreen} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1d5c9",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});