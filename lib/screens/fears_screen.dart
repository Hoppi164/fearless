import 'package:flutter/material.dart';
import '../models/fear.dart';
import '../services/fear_service.dart';

class FearsScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Fears'),
      ),
      body: FutureBuilder<List<Fear>>(
        future: FearService().getAllFears(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
            return Center(child: Text('No fears found.'));
          } else {
            return ListView.builder(
              itemCount: snapshot.data!.length,
              itemBuilder: (context, index) {
                final fear = snapshot.data![index];
                return ListTile(
                  title: Text(fear.title),
                  subtitle: Text(fear.subtitle),
                  onTap: () {
                    Navigator.pushNamed(
                      context,
                      '/fear_detail',
                      arguments: fear,
                    );
                  },
                );
              },
            );
          }
        },
      ),
    );
  }
}
