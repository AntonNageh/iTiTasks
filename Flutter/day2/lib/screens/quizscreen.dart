import 'package:day2/screens/differentscreen.dart';
import 'package:flutter/material.dart';
import 'package:day2/utils/global.dart';
class QuizScreen extends StatelessWidget {
  const QuizScreen({super.key});

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
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
        Text("Welcome $username!", style: TextStyle(color: Colors.black, fontSize: 24, fontWeight: FontWeight.bold),),
        Text("Please select a Quiz : ", style: TextStyle(color: Colors.black, fontSize: 24, fontWeight: FontWeight.bold),),
        SizedBox(height: 32,),
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
            height: MediaQuery.of(context).size.height * 0.259, 
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