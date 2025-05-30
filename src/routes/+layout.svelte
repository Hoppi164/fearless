<script>
	import '@picocss/pico/css/pico.css';
	import { themeName } from '$lib/stores/ThemeStore.js';
	import ToggleThemeButton from '$lib/components/toggleThemeButton.svelte';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div id="main-content" data-theme={$themeName}>
	<div class="container-fluid">
		<nav>
			<ul>
				<li><strong><a href="/">Home</a></strong></li>
			</ul>
			<ul>
				<li>
					<ToggleThemeButton />
				</li>
			</ul>
		</nav>

		{@render children?.()}
	</div>
</div>

<style>
	#main-content {
		background-color: var(--background-color);
		height: 100%;
		min-height: 100vh;
	}

	nav {
		box-shadow: 0 4px 2px -3px var(--h2-color);
	}

	:global(.text-center) {
		text-align: center;
	}
	:global(.clickable-button) {
		cursor: pointer;
	}
</style>
