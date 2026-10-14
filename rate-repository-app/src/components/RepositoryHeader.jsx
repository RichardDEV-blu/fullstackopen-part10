import { View, Image, StyleSheet } from "react-native";
import { Text } from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  repositoryInfo: {
    flex: 1,
    marginLeft: 10,
  },
  fullName: {
    fontWeight: theme.fontWeights.bold,
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
  },
  language: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    color: "white",
    padding: 4,
    borderRadius: 4,
  },
});

const RepositoryHeader = ({ item }) => {
  return (
    <View style={styles.header}>
      <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
      <View styles={styles.repositoryInfo}>
        <Text style={styles.fullName}>{item.fullName}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.language}>{item.language}</Text>
      </View>
    </View>
  );
};

export default RepositoryHeader;
