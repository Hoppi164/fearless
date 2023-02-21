import { writable, derived } from 'svelte/store';

const themeMap = {
	true: 'dark',
	false: 'light'
};

export const isDarkMode = writable(true);

export function toggleDarkMode() {
	isDarkMode.update((isDarkMode) => !isDarkMode);
}

export const themeName = derived(isDarkMode, ($isDarkMode) => themeMap[`${$isDarkMode}`]);
