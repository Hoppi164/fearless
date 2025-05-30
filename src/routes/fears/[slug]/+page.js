import { getProgram } from '$lib/logic/getProgram';

/**
 * @param {{ params: { slug: string } }} event
 */
export const load = async ({ params }) => {
	const program = await getProgram(params.slug);
	return { program };
};
