import { describe, it, expect } from 'vitest';
import ToggleThemeButton from '../src/lib/components/ToggleThemeButton.svelte';
import { render } from '@testing-library/svelte';

describe('ToggleThemeButton.svelte', () => {
	it('renders button', () => {
		const { container } = render(ToggleThemeButton);
		expect(container.querySelector('.clickable-button')).toBeTruthy();
	});
});
