import 'package:day2/screens/differentscreen.dart';
import 'package:flutter/material.dart';
class QuizScreen extends StatelessWidget {
  QuizScreen({this.username});
  final String ? username;
  @override
  Widget build(BuildContext context) {
  const List<String> texts = [
  "Math","IQ","Art",
];
const List<Color> colorMap = [
  Colors.red,
  Colors.blue,
  Colors.green,
];
    return Scaffold(
      appBar: AppBar(
        title: Text("Quiz Screen"),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          for (int i = 0; i < 3; i++)
              GestureDetector(
                onTap: () {
                  // Navigate to a different screen when tapped
                  Navigator.push(
                    context,
                    MaterialPageRoute(builder: (context) => DifferentScreen(texts[i])),
                  );
                },
        child:
          Expanded(
            child: Container(
              height: 224, // add this line
              padding: EdgeInsets.all(16),
              decoration: BoxDecoration(
              color: colorMap[i],
              ),
                  child: Center(
                  child: Text("${texts[i]} Quiz", style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold),),
                ),
              ),
            ),
        )
        ],
      ),
    );
  }

}