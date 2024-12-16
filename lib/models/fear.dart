class Fear {
  final int index;
  final String slug;
  final String title;
  final String subtitle;

  Fear({
    required this.index,
    required this.slug,
    required this.title,
    required this.subtitle,
  });

  factory Fear.fromJson(Map<String, dynamic> json) {
    return Fear(
      index: json['index'],
      slug: json['slug'],
      title: json['title'],
      subtitle: json['subtitle'],
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'index': index,
      'slug': slug,
      'title': title,
      'subtitle': subtitle,
    };
  }
}
