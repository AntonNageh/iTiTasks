import 'package:flutter/material.dart';
import 'package:day3/models/data.dart';

class TaskContainer extends StatelessWidget {
 String task;
 String time;
 final int index;
 final VoidCallback onDelete;
 final VoidCallback onUpdate;
 final VoidCallback onRestore;
 final VoidCallback onComplete;
  

   TaskContainer({
    super.key,
    required this.task,
    required this.time,
    required this.index, 
    required this.onDelete,
    required this.onUpdate,
    required this.onRestore,
    required this.onComplete,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
     margin: EdgeInsets.only(top: 12),
     decoration: BoxDecoration(
       color: Colors.white,
       borderRadius: BorderRadius.circular(8),
     ),
     
     padding: EdgeInsets.all(22),child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
        Text(task,style:selectedIndex == 1 ? TextStyle(decoration: TextDecoration.lineThrough, fontSize: 20, fontWeight: FontWeight.bold) : TextStyle(fontSize: 20, fontWeight: FontWeight.bold),),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
            Text(time ,style:selectedIndex == 1 ? TextStyle(decoration: TextDecoration.lineThrough, fontSize: 20) : TextStyle(fontSize: 20),),

            SizedBox(width: 12,),
            IconButton(
            icon: 
            selectedIndex == 2 ? Icon(Icons.restore) : Icon(Icons.delete),
            onPressed: selectedIndex == 2 ? onRestore : onDelete
          ),
            IconButton(
            icon: Icon(Icons.edit),
            onPressed: onUpdate,
          ),
          Visibility(
            visible: selectedIndex == 0,
            child: IconButton(
              onPressed: onComplete ,
              icon: Icon(Icons.done),
            ),
          )
              ],
            )
         ],),
         );
  }
}