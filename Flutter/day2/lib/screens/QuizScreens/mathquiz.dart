import 'package:flutter/material.dart';
class MathQuiz extends StatelessWidget {
  const MathQuiz({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
    appBar: AppBar(
      title: Text('Math Quiz : '),
    ),
    body: Center(
      child: Text('What is 2 + 2?', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold, fontFamily: "Poppins"),),

    ),
    );
}
}