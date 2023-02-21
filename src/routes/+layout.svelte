<script>
	import '@picocss/pico/css/pico.css';
	import { themeName } from '$lib/stores/ThemeStore.js';
	import ToggleThemeButton from '$lib/components/toggleThemeButton.svelte';
</script>

<div data-theme={$themeName}>
	<div class="container-fluid">
		<nav>
			<ul>
				<a href="/"><li>Home</li></a>
			</ul>
			<ul>
				<li>
					<ToggleThemeButton />
				</li>
			</ul>
		</nav>

		<slot />
	</div>
</div>

<style>
	/*     
nav{
box-shadow: 0 4px 3px -3px black;
}
*/

	:global(.text-center) {
		text-align: center;
	}
</style>
