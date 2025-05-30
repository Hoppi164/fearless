<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('./$types').PageData} data
	 */

	/** @type {Props} */
	let { data } = $props();
	const allFears = Object.values(data);
</script>

<div>
	<h1 class="text-center">Select a fear</h1>
	<div class="grid">
		{#each allFears as fear}
			<a href={`/fears/${fear.slug}`}>
				<article id="article">
					<h2>{fear.title}</h2>
					<small>{fear.subtitle}</small>
				</article>
			</a>
		{/each}
	</div>
</div>
