import { useState } from "react";
import { View, Text, StyleSheet, SectionList, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Task() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [doneCount, setDoneCount] = useState(0);

  const sections = [
    {
      title: "Tasks",
      data: tasks.map((task, idx) => ({ ...task, key: idx.toString() })),
    },
  ];

  const handleAddTask = () => {
    if (text.trim()) {
      setTasks([...tasks, { name: text.trim(), done: false }]);
      setText('');
    }
  };

  const handleToggleDone = (idx) => {
    setTasks((prev) => {
      const updated = [...prev];
      const wasDone = updated[idx].done;
      updated[idx].done = !wasDone;
      setDoneCount((count) => count + (wasDone ? -1 : 1));
      return updated;
    });
  };


  const handleDelete = (idx) => {
    setTasks((prev) => {
      const wasDone = prev[idx].done;
      if (wasDone) setDoneCount((count) => count - 1);
      return prev.filter((id, i) => i !== idx);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Tasks</Text>
      <View style={styles.inputBar}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Add a new task"
          placeholderTextColor="#888"
        />
        <TouchableOpacity
          style={[styles.addBtn, !text.trim() && { backgroundColor: "#ccc" }]}
          onPress={handleAddTask}
          disabled={!text.trim()}
        >
          <MaterialIcons name="add" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.counterBar}>
        <Text style={styles.counterText}>Done: {doneCount}</Text>
        <Text style={styles.counterText}>Total: {tasks.length}</Text>
      </View>
      {tasks.length === 0 && (
        <Text style={styles.noTasks}>No tasks</Text>
      )}
      <SectionList
        sections={sections}
        keyExtractor={(item) => item.key}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>
        )}
        renderItem={({ item, index }) => (
          <View style={styles.taskRow}>
            <TouchableOpacity
              style={styles.checkBox}
              onPress={() => handleToggleDone(index)}
            >
              {item.done ? (
                <MaterialCommunityIcons name="checkbox-marked" size={24} color="#4682B4" />
              ) : (
                <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="#bbb" />
              )}
            </TouchableOpacity>
            <Text
              style={[
                styles.taskName,
                item.done && styles.taskDone,
              ]}
            >
              {item.name}
            </Text>
            <TouchableOpacity
              style={styles.deleteBtn}
              onPress={() => handleDelete(index)}
            >
              <MaterialIcons name="delete" size={22} color="#e57373" />
            </TouchableOpacity>
          </View>
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
    backgroundColor: "#f8f8f8",
    paddingTop: 30,
    paddingHorizontal: 0,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4682B4",
    marginLeft: 18,
    marginBottom: 10,
    letterSpacing: 1,
  },
  inputBar: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 12,
    marginBottom: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.07,
    shadowRadius: 2,
  },
  input: {
    flex: 1,
    height: 44,
    color: "#222",
    fontSize: 16,
    paddingHorizontal: 8,
  },
  addBtn: {
    backgroundColor: "#4682B4",
    borderRadius: 8,
    padding: 6,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  counterBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 18,
    marginBottom: 6,
  },
  counterText: {
    fontSize: 15,
    color: "#4682B4",
    fontWeight: "600",
  },
  noTasks: {
    color: '#aaa',
    fontSize: 18,
    marginBottom: 10,
    alignSelf: "center",
    marginTop: 30,
  },
  sectionHeader: {
    backgroundColor: "#e6e6e6",
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4682B4",
    letterSpacing: 1,
  },
  taskRow: {
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
  checkBox: {
    marginRight: 12,
  },
  taskName: {
    flex: 1,
    fontSize: 17,
    color: "#222",
    fontWeight: "500",
    letterSpacing: 0.2,
  },
  taskDone: {
    textDecorationLine: "line-through",
    color: "#aaa",
    fontStyle: "italic",
  },
  deleteBtn: {
    marginLeft: 10,
    padding: 2,
  },
});
