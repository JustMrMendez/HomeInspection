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


<!-- @component This example creates an embedded video modal. -->

<div class="relative z-50 shadow-xl w-2/3 h-auto">
	<button
		class="btn-icon variant-filled absolute -top-3 -right-3 z-50"
		on:click={parent.onClose}
		name="close">✕</button
	>
	<iframe
		class="aspect-video w-full h-full overflow-hidden bg-black rounded-container-token"
		src="https://www.youtube.com/embed/cgIL4Rp3Hks"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
</div>
