import { View, Image, StyleSheet } from "react-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingBottom: 5,
    backgroundColor: "white",
  },
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
  statistics: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  statistic: {
    alignItems: "center",
  },
  statisticValue: {
    fontWeight: theme.fontWeights.bold,
  },
  statisticLabel: {
    color: theme.colors.textSecondary,
  },
});

const formatCount = (count) => {
  return count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString();
};

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />

        <View style={styles.repositoryInfo}>
          <Text style={styles.fullName}>{item.fullName}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>

      <View style={styles.statistics}>
        <View style={styles.statistic}>
          <Text style={styles.statisticValue}>
            {formatCount(item.stargazersCount)}
          </Text>
          <Text style={styles.statisticLabel}>Stars</Text>
        </View>

        <View style={styles.statistic}>
          <Text style={styles.statisticValue}>
            {formatCount(item.forksCount)}
          </Text>
          <Text style={styles.statisticLabel}>Forks</Text>
        </View>

        <View style={styles.statistic}>
          <Text style={styles.statisticValue}>
            {formatCount(item.reviewCount)}
          </Text>
          <Text style={styles.statisticLabel}>Reviews</Text>
        </View>

        <View style={styles.statistic}>
          <Text style={styles.statisticValue}>
            {formatCount(item.ratingAverage)}
          </Text>
          <Text style={styles.statisticLabel}>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
