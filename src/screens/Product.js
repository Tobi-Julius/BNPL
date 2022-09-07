import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";
import { ScrollView, Animated } from "react-native";
import { Text } from "../component/common";
import { layout } from "../utils";
import { color } from "../constants";
import { globalStyles } from "../globalStyles";
import { ProductFooter } from "../component/screenSections";

export const Product = () => {
  const route = useRoute();
  const { title, subTitle, productInfo, imageUri1, imageUri2, price } =
    route.params?.item;

  const data = [
    {
      id: 1,
      image: imageUri1,
    },
    {
      id: 2,
      image: imageUri2,
    },
  ];

  const scrollX = new Animated.Value(0);

  const dotPositon = Animated.divide(scrollX, layout.width);

  return (
    <View>
      <View>
        <Animated.ScrollView
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{}}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
        >
          {data.map((item, index) => {
            return (
              <Image
                key={index}
                resizeMode="cover"
                source={{ uri: item.image }}
                style={styles.image}
              />
            );
          })}
        </Animated.ScrollView>
        <View style={styles.dotContainer}>
          {data.map((item, index) => {
            const opacity = dotPositon.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.3, 1, 0.3],

              extrapolate: "clamp",
            });
            const dotBorder = dotPositon.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0.4, 1, 0.4],
              extrapolate: "clamp",
            });
            const dotBorderColor = dotPositon.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [color.gray3, color.dark, color.gray3],

              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={`${item.id}id`}
                style={[
                  styles.rounded,
                  {
                    borderWidth: dotBorder,
                    opacity: opacity,
                    borderColor: dotBorderColor,
                  },
                ]}
              >
                <View style={[styles.dot, {}]} />
              </Animated.View>
            );
          })}
        </View>
      </View>
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={[globalStyles.columnCenter]}
      >
        <View
          style={{
            width: layout.width * 0.9,
          }}
        >
          <SharedElement
            style={{ marginTop: layout.pixelSizeVertical(10) }}
            id={`item.${title}.title`}
          >
            <Text textStyle={[styles.text]} text={title} />
          </SharedElement>
          <Text textStyle={[styles.subText]} text={subTitle} />
          <ProductFooter
            title={title}
            productInfo={productInfo}
            price={price}
          />
        </View>
        <View style={{ marginTop: layout.pixelSizeVertical(400) }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: layout.heightPixel(380),
    width: layout.width,
  },
  dotContainer: {
    position: "absolute",
    bottom: layout.pixelSizeVertical(10),
    alignSelf: "center",
    flexDirection: "row",
  },
  rounded: {
    marginRight: layout.pixelSizeVertical(5),
    borderRadius: layout.fontPixel(10),
    padding: layout.fontPixel(3),
  },
  dot: {
    padding: layout.pixelSizeHorizontal(2),
    borderRadius: layout.fontPixel(10),
    backgroundColor: color.dark,
  },
  text: {
    fontSize: layout.size.h2,
    fontFamily: "Nunito_600SemiBold",
  },
  subText: {
    color: color.gray2,
    fontFamily: "Nunito_500Medium",
    fontSize: layout.size.h5,
  },
});
