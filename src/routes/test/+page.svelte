<script lang="ts">
    import { Layout } from "$lib/stores/LayoutStore";
    import Card from '$lib/test/Card.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;

    let text: string = "Hello";

    // similar to useEffect()
    $: {
        console.log($Layout.scrollDirection, text)
        const data = 3
        text = text.toUpperCase()
        setTimeout(() => 1000)
    }

    
</script>

<!-- <Card title="My second title"/> -->

<input type="text" bind:value={text} />
<p>{text}</p>
