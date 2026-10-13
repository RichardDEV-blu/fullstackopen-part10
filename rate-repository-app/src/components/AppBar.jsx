import { View, StyleSheet, Pressable, Text } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  tab: {
    padding: 15,
  },
  text: {
    color: "white",
    fontWeight: "bold",
  },
});

const AppBarTab = ({ children }) => {
  return (
    <Pressable style={styles.tab}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab>Repositories</AppBarTab>
    </View>
  );
};
export default AppBar;
