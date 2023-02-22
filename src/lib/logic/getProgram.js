/**
 * Retrieves a single fear program by its slug.
 *
 * @function
 * @async
 * @param {string} programSlug - The slug of the fear program to retrieve.
 * @returns {Promise<Program>} A Promise that resolves with the fear program object.
 * @example
 * // Get the "fear-of-heights" program and log its title
 * const fearOfHeightsProgram = await getProgram('fear-of-heights');
 * console.log(fearOfHeightsProgram.title);
 */
export async function getProgram(programSlug) {
	/** @type {Promise<Program>}**/
	return import(/* @vite-ignore */ `../../collections/programs/${programSlug}.json`);
}
