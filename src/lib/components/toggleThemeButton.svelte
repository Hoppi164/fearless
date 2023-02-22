<script>
	import { toggleDarkMode } from '$lib/stores/ThemeStore.js';
</script>

<div class="clickable-button" on:click={toggleDarkMode} on:keypress={toggleDarkMode}>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
		<path
			fill-rule="nonzero"
			d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-1.5v-17a8.5 8.5 0 1 1 0 17Z"
		/>
	</svg>
</div>

<style>
	svg {
		display: block;
		width: 2em;
		background-color: var(--background-color);
		border-radius: 50%;
		fill: var(--h1-color);
		transition: fill 0.5s, background-color 0.5s;
	}
</style>
