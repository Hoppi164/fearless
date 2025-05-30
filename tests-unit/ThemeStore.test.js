import { describe, it, expect } from 'vitest';
import { isDarkMode, toggleDarkMode, themeName } from '../src/lib/stores/ThemeStore.js';
import { get } from 'svelte/store';

describe('ThemeStore', () => {
	it('toggles dark mode', () => {
		const initial = get(isDarkMode);
		toggleDarkMode();
		expect(get(isDarkMode)).toBe(!initial);
	});
	it('themeName matches mode', () => {
		isDarkMode.set(true);
		expect(get(themeName)).toBe('dark');
		isDarkMode.set(false);
		expect(get(themeName)).toBe('light');
	});
});
