import 'dart:convert';
import 'package:flutter/services.dart' show rootBundle;
import '../models/fear.dart';
import '../models/program.dart';

class FearService {
  Future<List<Fear>> getAllFears() async {
    final String response = await rootBundle.loadString('assets/fears.json');
    final List<dynamic> data = json.decode(response);
    return data.map((fear) => Fear.fromJson(fear)).toList();
  }

  Future<Program> getProgram(String slug) async {
    final String response = await rootBundle.loadString('assets/programs/$slug.json');
    final Map<String, dynamic> data = json.decode(response);
    return Program.fromJson(data);
  }
}
