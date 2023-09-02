<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="min-h-screen flex flex-col justify-center items-center">
	<div class="p-8 rounded-lg shadow-md w-1/3">
		<h1 class="text-2xl font-bold">{$page.status}: {$page.error?.message || `Service ${$page.params.slug} not found`}</h1>
		<p class="mt-4">The service you are looking for could not be found.</p> 
	</div>
</div>
