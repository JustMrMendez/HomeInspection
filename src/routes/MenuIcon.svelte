<script lang="ts">
	export let open: boolean = false;
	function classNames(...classes: any[]) {
		return classes.filter(Boolean).join(' ');
	}
</script>

<button
	on:click={() => (open = !open)}
	class={classNames(
		'flex h-10 w-10 flex-col justify-between  rounded-full transition-all duration-300 lg:hover:shadow-md',
		open ? 'p-1 lg:hover:bg-secondary-100' : 'p-2 lg:hover:bg-success-500'
	)}
>
	<div
		class={classNames(
			'h-1 w-full rounded transition-all duration-300',
			open ? 'translate-y-3 rotate-45 bg-secondary-400 dark:bg-secondary-400' : 'bg-primary-500'
		)}
	/>
	<div
		class={classNames(
			'h-1 w-5/6 -translate-x-px justify-self-start rounded bg-primary-500 transition-all duration-300',
			open ? 'translate-x-2 opacity-0' : ''
		)}
	/>
	<div
		class={classNames(
			'h-1 w-full rounded transition-all duration-300',
			open ? '-translate-y-3 -rotate-45 bg-secondary-400 dark:bg-secondary-400' : 'bg-primary-500'
		)}
	/>
</button>
