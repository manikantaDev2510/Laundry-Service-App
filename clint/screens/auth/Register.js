import { View, Text, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import InputBox from "../../components/Foms/InputBox";
import SubmitButton from "../../components/Foms/SubmitButton";
import axios from "axios";

const Register = ({ changeScreen }) => {
  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Register
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (!name || !email || !password) {
        Alert.alert("Please Fill All Fields");
        setLoading(false);
        return;
      }
      setLoading(false);
      const { data } = await axios.post("/auth/register", {
        name,
        email,
        password,
      });
      alert(data && data.message);
      changeScreen(); // Change to Login page
    } catch (error) {
      alert(error.response.data.message);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox inputTitle={"Name"} value={name} setValue={setName} />
        <InputBox inputTitle={"Email"} keyboardType="email-address" autoComplete="email" value={email} setValue={setEmail} />
        <InputBox inputTitle={"Password"} secureTextEntry={true} autoComplete="password" value={password} setValue={setPassword} />
      </View>

      <SubmitButton btnTitle="Register" loading={loading} handleSubmit={handleSubmit} />

      <Text style={styles.linkText}>
        Already registered?{" "}
        <Text style={styles.link} onPress={changeScreen}>
          LOGIN
        </Text>{" "}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#e1d5c9",
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1e2225",
    marginBottom: 20,
  },
  linkText: {
    textAlign: "center",
  },
  link: {
    color: "red",
  },
});

export default Register;
