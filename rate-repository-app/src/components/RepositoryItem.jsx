import { View, StyleSheet } from "react-native";

import RepositoryHeader from "./RepositoryHeader";
import RepositoryStatistics from "./RepositoryStatistics";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 5,
    backgroundColor: "white",
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <RepositoryHeader item={item} />
      <RepositoryStatistics item={item} />
    </View>
  );
};

export default RepositoryItem;
