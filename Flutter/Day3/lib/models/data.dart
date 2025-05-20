List<TaskModel> dataList = [
  TaskModel(
    taskType: "To Do",
    data: [
      Task(
        task: "Buy groceries",
        time: "5 PM",
      ),
      Task(
        task: "Buy fruits",
        time: "7 PM",
      ),
      Task(
        task: "Buy vegetables",
        time: "8 PM",
      ),
      Task(
        task: "Buy milk",
        time: "9 PM",
      ),
      Task(
        task: "Buy eggs",
        time: "10 PM",
      ),
    ],
  ),
  TaskModel(
    taskType: "Done",
    data: [
      Task(
        task: "Finish course",
        time: "5 PM",
      ),
    ],
  ),
  TaskModel(
    taskType: "Deleted",
    data: [
      Task(
        task: "Finish course",
        time: "5 PM",
      ),
    ],
  ),
];

class TaskModel {
  String taskType;
  List<Task> data;

  TaskModel({required this.taskType, required this.data});
}

class Task {
  String task;
  String time;

  Task({required this.task, required this.time});
}

 int selectedIndex = 0;
