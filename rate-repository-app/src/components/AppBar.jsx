import { View, StyleSheet, Text } from "react-native";
import { Link } from "react-router-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
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

const AppBarTab = ({ children, to }) => {
  return (
    <Link to={to} style={styles.tab}>
      <Text style={styles.text}>{children}</Text>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab to="/">Repositories</AppBarTab>
      <AppBarTab to="/signin">Sign in</AppBarTab>
    </View>
  );
};
export default AppBar;
