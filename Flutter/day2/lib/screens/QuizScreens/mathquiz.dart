import 'package:day2/screens/resultscreen.dart';
import 'package:flutter/material.dart';
import 'package:day2/screens/models/data.dart';
import 'package:day2/utils/global.dart';
class MathQuiz extends StatefulWidget {
  const MathQuiz({super.key});

  @override
  _MathQuizState createState() => _MathQuizState();
}

 
class _MathQuizState extends State<MathQuiz> {
  int _currentIndex = 0;
  int result = 0;

  @override
  Widget build(BuildContext context) {

    return Scaffold(
      appBar: AppBar(
        title: Text('$quizName Quiz : '),
        actions: [
          Text("$_currentIndex/${questions[quizName]?.length}", style: TextStyle(fontSize: 16),),
          Padding(padding: EdgeInsets.all(16)),
        ],
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text("${questions[quizName]?[_currentIndex]["text"]}", style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, fontFamily: "Poppins"),),
            SizedBox(height: 16, width: 16,),
             Column(
                children: [
                  for(dynamic i = 0; i < questions[quizName]?[_currentIndex]["answers"].length; i++)
                  Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: ElevatedButton(
                  style: ButtonStyle(
                  minimumSize: WidgetStateProperty.all(Size(200, 40)),
                ),
                    onPressed: () {
                      if (questions[quizName]?[_currentIndex]["answers"][i].toString() == questions[quizName]?[_currentIndex]["correct"].toString()) {
                        result +=1;
                        _incrementIndex();
                      }
                      else {
                        _incrementIndex();
                      }
                      if (_currentIndex >= (questions[quizName]?.length ?? 0)) {
                        Navigator.push(context, MaterialPageRoute(builder: (context) => Resultscreen(result)));
                        setState(() {
                          _currentIndex = 0;
                        });
                      }
                    },
                    child: Text(
                      "${questions[quizName]?[_currentIndex]["answers"][i]}",
                      style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, fontFamily: "Poppins"),
                    ),
                  ),)
                ],
                
            ),
            
          ],
          
        ),
        
      ),
      
    );
  }

  void _incrementIndex() {
    setState(() {
      _currentIndex++;
    });
  }
}