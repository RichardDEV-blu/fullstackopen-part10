import { View, StyleSheet, Text, ScrollView } from "react-native";
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
  scrollViewContent: {
    flexDirection: "row",
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
      <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
        <AppBarTab to="/">Repositories</AppBarTab>
        <AppBarTab to="/signin">Sign in</AppBarTab>
      </ScrollView>
    </View>
  );
};
export default AppBar;
