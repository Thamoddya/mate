import { TextStyles } from "@/constants/AppStyles";
import { Colors } from "@/constants/Colors";
import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function SplashScreenComponent() {
  const isLogged = false;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.splashText]}>Mate</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.dark.PRIMARY_BLACK,
    flex: 1,
  },
  splashText: {
    ...TextStyles.H1,
    color: Colors.dark.PRIMARY_WHITE,
    fontSize: 40,
  },
});
