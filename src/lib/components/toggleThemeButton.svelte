<script>
	import ToggleThemeIcon from '$lib/components/icons/toggleThemeIcon.svelte';
	import { isDarkMode, toggleDarkMode } from '$lib/stores/ThemeStore.js';
</script>

<div>
	<button on:click={toggleDarkMode}>
		<ToggleThemeIcon />
	</button>
	<p>{$isDarkMode}</p>
</div>
