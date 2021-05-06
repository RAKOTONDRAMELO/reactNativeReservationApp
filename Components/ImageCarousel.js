import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  Dimensions
} from "react-native";

const window = Dimensions.get("window");

export default class Carousel extends Component {
  scrollX = new Animated.Value(0);

  state = {
    dimensions: {
      window
    }
  };

  onDimensionsChange = ({ window }) => {
    this.setState({ dimensions: { window } });
  };

  componentDidMount() {
    Dimensions.addEventListener("change", this.onDimensionsChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.onDimensionsChange);
  }

  render() {
    const windowWidth = this.state.dimensions.window.width;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.scrollContainer}>
          <ScrollView
            horizontal={true}
            style={styles.scrollViewStyle}
            pagingEnabled
            showsHorizontalScrollIndicator={true}
          >
            <View
                  style={{
                    width: windowWidth,
                    height: 650
                  }}
            >
                <ImageBackground source={require('../Static/image/hifampitantsoa/1.jpg')} style={styles.card}/>
            </View>
            <View
                  style={{
                    width: windowWidth,
                    height: 650
                  }}
                  
            >
                <ImageBackground source={require('../Static/image/hifampitantsoa/2.jpg')} style={styles.card}/>
            </View>
            <View
                  style={{
                    width: windowWidth,
                    height: 650
                  }}
                  
            >
                <ImageBackground source={require('../Static/image/hifampitantsoa/3.jpg')} style={styles.card}/>
            </View>
            <View
                  style={{
                    width: windowWidth,
                    height: 650
                  }}
                  
            >
                <ImageBackground source={require('../Static/image/hifampitantsoa/4.jpg')} style={styles.card}/>

            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  scrollContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
});