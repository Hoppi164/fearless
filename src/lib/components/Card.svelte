<script>
	export let title = '';
	export let subtitle = '';
	export let tutorial = '';
	export let type = '';
	export let data = '';
</script>

<div class="card">
	{#if title}
		<h2>{title}</h2>
	{/if}
	{#if subtitle}
		<h4>{subtitle}</h4>
	{/if}
	{#if tutorial}
		<p class="tutorial">{tutorial}</p>
	{/if}

	{#if type === 'word'}
		<div class="word">{data}</div>
	{:else if type === 'markdown'}
		<p>{data}</p>
		<!-- <div class="markdown" @bind:innerHTML={data} /> -->
	{:else if type === 'image'}
		<img class="image" src={data} alt={title} />
	{:else if type === 'video'}
		<video class="video" src={data} controls>
			<track kind="captions" src="" label="English captions" />
		</video>
		<!-- {:else if type === 'exercise'}
		<svelte:component this={data} class="exercise" />
	{/if} -->
	{:else}
		<p>Unsupported type: {type}</p>
	{/if}
</div>

<style>
	.card {
		background: #fff;
		border-radius: 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		padding: 2rem;
		max-width: 400px;
		margin: 1rem auto;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h2,
	h4 {
		margin: 0.5rem 0;
	}
	.tutorial {
		color: #666;
		font-size: 1rem;
		margin-bottom: 1rem;
		text-align: center;
	}
	.word {
		font-size: 2rem;
		font-weight: bold;
		margin: 1rem 0;
	}
	.image {
		max-width: 100%;
		border-radius: 0.5rem;
		margin: 1rem 0;
	}
	.video {
		width: 100%;
		border-radius: 0.5rem;
		margin: 1rem 0;
	}
	/* .exercise {
		width: 100%;
		margin: 1rem 0;
		background: #f9f9f9;
		padding: 1rem;
		border-radius: 0.5rem;
	} */
</style>
