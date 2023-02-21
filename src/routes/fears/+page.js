const fears = {
	'fear-of-spiders': {
		index: 0,
		slug: 'fear-of-spiders',
		title: 'Arachnaphobia',
		subtitle: 'Fear Of Spiders'
	},
	'fear-of-dogs': {
		index: 1,
		slug: 'fear-of-dogs',
		title: 'Cynophobia',
		subtitle: 'Fear Of Dogs'
	},
	'fear-of-snakes': {
		index: 2,
		slug: 'fear-of-snakes',
		title: 'Ophidiophobia ',
		subtitle: 'Fear Of Snakes'
	}
};

export async function load() {
	return fears;
}
