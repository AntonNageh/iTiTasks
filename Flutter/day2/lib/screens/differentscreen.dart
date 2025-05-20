import 'package:day2/screens/QuizScreens/mathquiz.dart';
import 'package:flutter/material.dart';
import 'package:day2/utils/global.dart';

class DifferentScreen extends StatelessWidget {
  final String quiz;

  const DifferentScreen(this.quiz, {super.key});

  @override
  Widget build(BuildContext context) {
        quizName = quiz;
        return MathQuiz();     
    }
  }