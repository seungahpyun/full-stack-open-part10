import { View, StyleSheet } from "react-native";
import Main from "./src/components/Main";
import theme from "./src/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: theme.padding.paddingTop,
    backgroundColor: "#e1e4e8",
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
};

export default App;
