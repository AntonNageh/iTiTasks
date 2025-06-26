import { View, SectionList, TouchableOpacity, Text, Dimensions, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


// Users array grouped by title
const users = [
  {
    title: "A",
    data: [
      { username: "Anton" },
      { username: "Aya" },
      { username: "Ahmed" },
    ],
  },
  {
    title: "B",
    data: [
      { username: "Basma" },
      { username: "Belal" },
      { username: "Batikha" },
    ],
  },
  {
    title: "C",
    data: [
      { username: "Charlie" },
      { username: "Cathy" },
      { username: "Chris" },
    ],
  },
];

export default function User() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={users}
        keyExtractor={(item) => item.username}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.contactRow}
            activeOpacity={0.8}
            onPress={() => console.log(item.username)}
          >
            <View style={styles.avatar}>
              <MaterialIcons name="person" size={28} color="#fff" />
            </View>
            <Text style={styles.contactName}>{item.username}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 0,
    backgroundColor: "#f8f8f8",
    paddingTop: 30,
  },
  sectionHeader: {
    backgroundColor: "#e6e6e6",
    paddingVertical: 6,
    paddingHorizontal: 18,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4682B4",
    letterSpacing: 1,
  },
  contactRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 12,
    marginVertical: 4,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#4682B4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  contactName: {
    fontSize: 17,
    color: "#222",
    fontWeight: "500",
    letterSpacing: 0.2,
  },
});
