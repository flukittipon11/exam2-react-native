import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Headers from "./components/contents/Headers";
import Details from "./components/contents/Details";

import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#052135", "transparent"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.container_card}
      />
      <Headers />
      <Details />
      {/* <Header />
      <Cards />
      <Details /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box_header: {
    backgroundColor: "#052135",
  },
  container_card: {
    width: "100%",
    height: "45%",
    position: "absolute",
    backgroundColor: "#22577E",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
