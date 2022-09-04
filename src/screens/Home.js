import { StyleSheet, View } from "react-native";
import React from "react";
import { HomeHeader, HomeBody } from "../component/screenSections";

export const Home = () => {
  return (
    <View>
      <HomeHeader />
      <HomeBody />
    </View>
  );
};

const styles = StyleSheet.create({});
