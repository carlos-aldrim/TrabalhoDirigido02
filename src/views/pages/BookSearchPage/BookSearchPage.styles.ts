import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    padding: 16,
  },
  title: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    backgroundColor: "#C4C4C4",
    borderRadius: 10,
    marginBottom: 10,
  },
  bookContent: {
    backgroundColor: "#636dcc",
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
  bookLine: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 5,
  },
  textBookData: {
    fontSize: 10,
    color: "#fff",
    width: "95%",
    marginLeft: 5,
  },
  listContent: {
    marginBottom: 15,
  },
  buttonContent: {
    backgroundColor: "#353b6e",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    marginBottom: 15,
  },
  button: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
  },
  stars: {
    display: "flex",
    width: "10%",
    marginLeft: 5,
  },
});
