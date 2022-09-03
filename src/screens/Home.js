import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeHeader } from "../component/screenSections";

export const Home = () => {
  return (
    <SafeAreaView>
      <HomeHeader />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
