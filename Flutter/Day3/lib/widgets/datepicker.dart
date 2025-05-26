import 'package:flutter/material.dart';

class TimePickerWidget extends StatefulWidget {
  final String? initialTimeString;
  final ValueChanged<String> onTimeSelected;

  const TimePickerWidget({
    super.key,
    this.initialTimeString,
    required this.onTimeSelected,
  });

  @override
  State<TimePickerWidget> createState() => _TimePickerWidgetState();
}

class _TimePickerWidgetState extends State<TimePickerWidget> {
  String? _selectedTimeString;

  @override
  void initState() {
    super.initState();
    _selectedTimeString = widget.initialTimeString;
  }

  Future<void> _pickTime() async {
    TimeOfDay initialTime = TimeOfDay.now();
    if (_selectedTimeString != null) {
      final timeParts = _selectedTimeString!.split(':');
      if (timeParts.length == 2) {
        initialTime = TimeOfDay(
          hour: int.tryParse(timeParts[0]) ?? TimeOfDay.now().hour,
          minute: int.tryParse(timeParts[1].replaceAll(RegExp(r'[^0-9]'), '')) ?? TimeOfDay.now().minute,
        );
      }
    }
    final TimeOfDay? picked = await showTimePicker(
      context: context,
      initialTime: initialTime,
    );
    if (picked != null) {
      final formatted = picked.format(context); // e.g., 5:00 PM
      setState(() {
        _selectedTimeString = formatted;
      });
      widget.onTimeSelected(_selectedTimeString!);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        ElevatedButton(
          onPressed: _pickTime,
          child: const Text('Pick Time'),
        ),
        SizedBox(width: 8,),
        Text(_selectedTimeString ?? 'No time selected'),
        const SizedBox(width: 8),
      ],
    );
  }
}