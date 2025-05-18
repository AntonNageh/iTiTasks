import 'package:day2/screens/quizscreen.dart';
import 'package:day2/styles/Icons.dart';
import 'package:flutter/material.dart';

class Loginscreen extends StatelessWidget  {
  const Loginscreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Login Screen"),
      ),
    body: Container(
    decoration: BoxDecoration(
      image: DecorationImage(
        image: AssetImage(formBackground),
        fit: BoxFit.cover,
      ),
    ),
    child: Center(
      child: SizedBox(
        width: 200,
        child: TextField(
          decoration: InputDecoration(
            border: OutlineInputBorder(),
            labelText: 'Enter your username',
          ),
          onSubmitted: (text){
            String username = text;
                Navigator.push(context, MaterialPageRoute(builder: (context) => QuizScreen(username: username)));
          },
        ),
      ),
    ),
  ),
);
  }
}