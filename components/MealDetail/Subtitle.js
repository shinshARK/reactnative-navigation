import { Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
  return <Text style={styles.subtitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 4,
    marginHorizontal: 24,
    textAlign: "center",
    padding: 6,
    borderBottomColor: "#e77d19",
    borderBottomWidth: 2,
  },
});

export default Subtitle;
