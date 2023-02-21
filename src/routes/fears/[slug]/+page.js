// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	return { content: 'test' };

	// try {
	// 	const post = await import(`../../../posts/${params.slug}.md`);
	// 	return {
	// 		content: post.default,
	// 		...post.metadata
	// 	};
	// } catch (err) {
	// 	throw error(404, 'Not Found');
	// }
}
