import 'package:day3/widgets/datepicker.dart';
import 'package:day3/widgets/task_container.dart';
import 'package:flutter/material.dart';
import 'package:day3/models/data.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  int _selectedIndex = 0;
  String taskName = "";
  String time = "";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      floatingActionButton: Visibility(
        visible: _selectedIndex == 0,
        child: FloatingActionButton(
          onPressed: () {
            showDialog(
              context: context,
              builder: (context) {
                return AlertDialog(
                  title: const Text("Add Task"),
                  content: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      TextFormField(
                        decoration: const InputDecoration(
                          labelText: 'Task name',
                        ),
                        onChanged: (text) {
                          taskName = text;
                        },
                      ),

                      SizedBox(height: 20,),
                    Column(
                      children: [
                      TimePickerWidget (
                      onTimeSelected: (dateString) {
                        time = dateString;
                      },
                      ),
                      ],
                    )
                    ],
                  ),
                  actions: [
                    TextButton(
                      onPressed: () {
                        setState(() {
                          dataList[_selectedIndex].data.add(
                            Task(task: taskName, time: time),
                          );
                          Navigator.pop(context);
                        });
                      },
                      child: const Text("Add"),
                    ),
                    TextButton(
                      onPressed: () {
                        Navigator.pop(context);
                      },
                      child: const Text("Cancel"),
                    ),
                  ],
                );
              },
            );
          },
          child: const Icon(Icons.add),
        ),
      ),
      appBar: AppBar(
        title: const Text("To-do App"),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(12),
        child: SingleChildScrollView(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 10.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    for (int i = 0; i < dataList.length; i++)
                      GestureDetector(
                        onTap: () {
                          setState(() {
                            _selectedIndex = i;
                            selectedIndex = _selectedIndex;
                          });
                        },
                        child: Container(
                          margin: const EdgeInsets.symmetric(horizontal: 8.0),
                          height: 40,
                          width: 100,
                          decoration: BoxDecoration(
                            color: _selectedIndex == i
                                ? const Color.fromARGB(255, 98, 165, 220)
                                : Colors.white,
                            borderRadius: BorderRadius.circular(20),
                          ),
                          child: Center(
                            child: Text(dataList[i].taskType),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
              Column(
                children: [
                  for (int i = 0; i < dataList[_selectedIndex].data.length; i++)
                    TaskContainer(
                      task: dataList[_selectedIndex].data[i].task,
                      time: dataList[_selectedIndex].data[i].time,
                      index: i,
                      onComplete: (){
                        setState(() {
                          dataList[1].data.add(
                            Task(
                              task: dataList[_selectedIndex].data[i].task,
                              time: dataList[_selectedIndex].data[i].time,
                            ),
                          );
                          dataList[0].data.removeAt(i);
                        });
                      },
                      onRestore: () {
                        setState(() {
                          dataList[0].data.add(
                            Task(
                              task: dataList[_selectedIndex].data[i].task,
                              time: dataList[_selectedIndex].data[i].time,
                            ),
                          );
                          dataList[2].data.removeAt(i);
                        });
                      },
                      onDelete: () {
                        setState(() {
                          dataList[2].data.add(
                            Task(
                              task: dataList[_selectedIndex].data[i].task,
                              time: dataList[_selectedIndex].data[i].time,
                            ),
                          );
                          dataList[_selectedIndex].data.removeAt(i);
                        });
                      },
                      onUpdate: () {
                        showDialog(
                          context: context,
                          builder: (context) {
                            TextEditingController nameController =
                                TextEditingController(
                                    text: dataList[_selectedIndex].data[i].task);
                            TextEditingController timeController =
                                TextEditingController(
                                    text: dataList[_selectedIndex].data[i].time);
                            return AlertDialog(
                              title: const Text("Update Task"),
                              content: Column(
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  TextFormField(
                                    controller: nameController,
                                    decoration: const InputDecoration(
                                      labelText: 'New Task name',
                                    ),
                                    onChanged: (text) {
                                      taskName = text;
                                    },
                                  ),
                                  SizedBox(height: 20,),
                                   Visibility(
                                    visible: selectedIndex == 0,
                                    child: 
                                  TimePickerWidget (
                                  initialTimeString: dataList[_selectedIndex].data[i].time,
                                  onTimeSelected: (dateString) {
                                    // Save dateString to your Task model's time property
                                    time = dateString;
                                  },
                                  ),
                                  ),
                                ],
                              ),
                              actions: [
                                TextButton(
                                  onPressed: () {
                                    setState(() {
                                      dataList[_selectedIndex].data[i] = Task(
                                        task: taskName.isNotEmpty
                                            ? taskName
                                            : dataList[_selectedIndex].data[i].task,
                                        time: time.isNotEmpty
                                            ? time
                                            : dataList[_selectedIndex].data[i].time,
                                      );
                                    });
                                    Navigator.pop(context);
                                  },
                                  child: const Text("Update"),
                                ),
                                TextButton(
                                  onPressed: () {
                                    Navigator.pop(context);
                                  },
                                  child: const Text("Cancel"),
                                ),
                              ],
                            );
                          },
                        );
                      },
                    ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}