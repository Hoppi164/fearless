import { describe, it, expect } from 'vitest';
import Card from '../src/lib/components/Card.svelte';
import { render } from '@testing-library/svelte';

describe('Card.svelte', () => {
	it('renders title and subtitle', () => {
		const { getByText } = render(Card, {
			props: { title: 'Test Title', subtitle: 'Test Subtitle' }
		});
		expect(getByText('Test Title')).toBeTruthy();
		expect(getByText('Test Subtitle')).toBeTruthy();
	});
	it('shows unsupported type for unknown type', () => {
		const { getByText } = render(Card, { props: { type: 'unknown', data: 'foo' } });
		expect(getByText('Unsupported type: unknown')).toBeTruthy();
	});
});
