import 'package:day2/styles/icons.dart';
import 'package:flutter/material.dart';
import 'package:day2/screens/loginscreen.dart';
class Landingscreen extends StatelessWidget {
  const Landingscreen({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
            decoration: BoxDecoration(
            image:  
              DecorationImage(
                image: AssetImage(landingBackgroundImg), // Make sure landingBackgroundImg is a String path
                fit: BoxFit.cover,
              ),
            ),
          child: 
            Column(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
            children:[
           Center(
          child: Container(
            padding: EdgeInsets.all(16), // add some padding around the text
            decoration: BoxDecoration(
              color: Colors.white, // set the background color to white
              border: Border.all(color: Colors.black, width: 1), // add a black border around the text
              borderRadius: BorderRadius.circular(25), // add a rounded corner to the border
            ),
            child: Text(
              "iTi Quiz app",
              style: TextStyle(
                color: Colors.black, // set the text color to black
                fontWeight: FontWeight.bold,
                fontFamily: 'Poppins',
                fontSize: 36, // increase the font size
              ),
            ),
          ),
        ),
            Padding(padding: EdgeInsets.only(top: 300),
            child: SizedBox(
            width: 200, // set a specific width
            child: ElevatedButton(
              style: ElevatedButton.styleFrom(
                minimumSize: Size(200, 50), // adjust the width and height as needed
              ),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text("Login", style: TextStyle(fontSize: 16, fontFamily: 'Poppins', fontWeight: FontWeight.bold),),
                  SizedBox(width: 15.0),
                  Icon(Icons.login),
                ],
              ),
              onPressed: () {
                Navigator.push(context, MaterialPageRoute(builder: (context) => Loginscreen()));
              },
            ),
          )
            )
            ] 
          ),
  ));
  }
}