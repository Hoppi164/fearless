<script>
	import Card from '$lib/components/Card.svelte';
	/**
	 * @typedef {Object} Props
	 * @property {import('./$types').PageData} data
	 */

	/** @type {Props} */
	let { data } = $props();
	const program = data.program;
</script>

<div>
	<h1 class="text-center">{program.title}</h1>

	<!-- 	
Example of program data structure:
{
	"index": 0,
	"slug": "fear-of-spiders",
	"title": "Arachnaphobia",
	"subtitle": "Fear Of Spiders",
	"plan": [
		{ "type": "word", "data": "Legs" },
		{ "type": "word", "data": "Eyes" },
		{ "type": "word", "data": "Bite" }
	]
}
-->

	{#if !program.plan || program.plan.length <= 0}
		<p>No plan available.</p>
	{:else}
		{#each program.plan as step, index}
			<Card
				title={step.title || `Step ${index + 1}`}
				type={step.type || 'word'}
				data={step.data || ''}
			/>
		{/each}
	{/if}

	<p class="text-center">
		This program is designed to help you overcome your fear of {program.title}.
	</p>
	<p class="text-center">Follow the steps in the plan to gradually face and conquer your fear.</p>
</div>
