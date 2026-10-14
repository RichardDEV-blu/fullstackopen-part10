import { View, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
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

const Statistic = ({ value, label }) => {
  return (
    <View style={styles.statistic}>
      <Text style={styles.statisticValue}>{formatCount(value)}</Text>
      <Text style={styles.statisticLabel}>{label}</Text>
    </View>
  );
};
const RepositoryStatistics = ({ item }) => {
  return (
    <View style={styles.statistics}>
      <Statistic value={item.stargazersCount} label="Stars" />
      <Statistic value={item.forksCount} label="Forks" />
      <Statistic value={item.reviewCount} label="Reviews" />
      <Statistic value={item.ratingAverage} label="Rating" />
    </View>
  );
};
export default RepositoryStatistics;
