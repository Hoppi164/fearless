import { getProgram } from '$lib/logic/getProgram';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const program = await getProgram(params.slug);
	return { program };
}
