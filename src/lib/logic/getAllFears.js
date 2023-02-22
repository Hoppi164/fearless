/**
 * Gets an array of fears.
 *
 * @function
 * @returns {Promise<Object<string, Fear>>} An Object of fears.
 * @example
 * // Example usage:
 * const allFears = await getAllFears();
 * console.log(allFears);
 * // Output: {
 * //   "../../collections/fears/fear-of-dogs.json": {
 * //     "index": 1,
 * //     "slug": "fear1",
 * //     "title": "Fear 1",
 * //     "subtitle": "Subtitle for Fear 1",
 * //   },
 * //   "../../collections/fears/fear-of-snakes.json": {
 * //     "index": 2,
 * //     "slug": "fear2",
 * //     "title": "Fear 2",
 * //     "subtitle": "Subtitle for Fear 2",
 * //   },
 * //   ...
 * // }
 */
export async function getAllFears() {
	/** @type {Object<string, Fear>}**/
	return import.meta.glob('../../collections/fears/*.json', { eager: true });
}
