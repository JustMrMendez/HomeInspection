<script lang="ts">
	import { Layout } from "$lib/stores/LayoutStore";

    export let title: string="This is a test title";
</script>

<div class="card">
    <img src="" alt="" class="aspect-square object-cover" />
        <h1>{title}</h1>
        <div class="">div test</div>
        <button class="">submit {$Layout.scrollPosition}</button>
</div>
