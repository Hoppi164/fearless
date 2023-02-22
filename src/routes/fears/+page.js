import { getAllFears } from '$lib/logic/getAllFears';

export async function load() {
	return getAllFears();
}
