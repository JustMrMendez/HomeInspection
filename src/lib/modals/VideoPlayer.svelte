<!-- <script lang="ts">
	// Props
	/** Exposes parent props to this component. */
	export let parent: any;
	// Base Classes
	const cBase = 'relative';
</script> -->

<!-- @component This example creates an embedded video modal. -->

<!-- <div class="modal-example-form {cBase}">
	<button
		class="btn-icon variant-filled-secondary absolute -top-4 -right-4 z-10"
		on:click={parent.onClose}>✕</button
	> -->
	<!-- <video class="w-full rounded" controls>
		<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
		<source src="https://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg" />
		Your browser does not support HTML video.
		<track
			kind="captions"
			label="English captions"
			src="https://www.w3schools.com/html/mov_bbb.vtt"
			srclang="en"
			default
		/>
	</video> -->

<script lang="ts">
	export let parent: any;
</script>

<!-- @component This example creates an embedded video modal. -->

<div class="relative shadow-xl z-50">
	<button class='absolute -top-3 -right-3 z-50 btn-icon variant-filled' on:click={parent.onClose} name="close">✕</button>
	<iframe
		class='bg-black w-full aspect-video rounded-container-token overflow-hidden'
		src="https://www.youtube.com/embed/cgIL4Rp3Hks"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
</div>