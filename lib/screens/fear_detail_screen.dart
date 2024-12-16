import 'package:flutter/material.dart';
import '../models/fear.dart';

class FearDetailScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final Fear fear = ModalRoute.of(context)!.settings.arguments as Fear;

    return Scaffold(
      appBar: AppBar(
        title: Text(fear.title),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              fear.title,
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
            SizedBox(height: 8),
            Text(
              fear.subtitle,
              style: TextStyle(fontSize: 18, fontStyle: FontStyle.italic),
            ),
            SizedBox(height: 16),
            Text(
              'Details about the fear will be displayed here.',
              style: TextStyle(fontSize: 16),
            ),
          ],
        ),
      ),
    );
  }
}
