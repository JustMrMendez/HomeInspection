<script lang="ts">
    // import { page } from '$app/stores'
	import BaseHero from '$lib/sections/BaseHero.svelte';

    export let data

    const hero = {
      title: data.service.title,
      titleAccent: data.service.title2,
      subtitle: data.service.description
    }
  </script>
  
<BaseHero  {hero} />