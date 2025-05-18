import 'package:day2/screens/QuizScreens/mathquiz.dart';
import 'package:day2/screens/QuizScreens/iqquiz.dart';
import 'package:day2/screens/QuizScreens/artquiz.dart';
import 'package:flutter/material.dart';

class DifferentScreen extends StatelessWidget {
  final String index;

  DifferentScreen(this.index);

  @override
  Widget build(BuildContext context) {


    switch (index) {
      case "Math":
            return MathQuiz();
      case "IQ":
            return IqQuiz();
      case "Art":
            return ArtQuiz();      
        default:
        return Scaffold(
          appBar: AppBar(
            title: Text('Unknown Page'),
          ),
          body: Center(
            child: Text('Unknown page index'),
          ),
        );
    }
  }
}