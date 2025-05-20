import 'package:day2/screens/quizscreen.dart';
import 'package:flutter/material.dart';
import 'package:day2/utils/global.dart';
class Resultscreen extends StatelessWidget {
  final int result;
  const Resultscreen(this.result, {super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Result Screen"),
      ),
      body: Center(
      child:
      Column(mainAxisAlignment: MainAxisAlignment.center, 
      children: [
      Text('Thanks $username for Playing', style: TextStyle(color: Colors.black, fontSize: 24, fontWeight: FontWeight.bold),),
      if(result <= 15 && result >= 10) Text('You are a Genius !!', style: TextStyle(color: Colors.black, fontSize: 24, fontWeight: FontWeight.bold),),
      if(result < 10 && result>= 5) Text('You are Good!', style: TextStyle(color: Colors.black, fontSize: 24, fontWeight: FontWeight.bold),),
      Text('Your score is : $result', style: TextStyle(color: Colors.black, fontSize: 24, fontWeight: FontWeight.bold),),
      
      SizedBox(height: 16,),
      ElevatedButton(onPressed: (){
        Navigator.push(context, MaterialPageRoute(builder: (context) => QuizScreen()));
      }, child: Text("Play Again")),
      ]
      )
      ),
    );
  }

}