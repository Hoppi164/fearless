class Program {
  final int index;
  final String slug;
  final String title;
  final String subtitle;
  final List<Exercise> plan;

  Program({
    required this.index,
    required this.slug,
    required this.title,
    required this.subtitle,
    required this.plan,
  });

  factory Program.fromJson(Map<String, dynamic> json) {
    return Program(
      index: json['index'],
      slug: json['slug'],
      title: json['title'],
      subtitle: json['subtitle'],
      plan: (json['plan'] as List).map((e) => Exercise.fromJson(e)).toList(),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'index': index,
      'slug': slug,
      'title': title,
      'subtitle': subtitle,
      'plan': plan.map((e) => e.toJson()).toList(),
    };
  }
}

class Exercise {
  final String type;
  final dynamic data;

  Exercise({
    required this.type,
    required this.data,
  });

  factory Exercise.fromJson(Map<String, dynamic> json) {
    return Exercise(
      type: json['type'],
      data: json['data'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'type': type,
      'data': data,
    };
  }
}
