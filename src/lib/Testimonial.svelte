<script lang="ts">
	export let testimonial: {
		name: string;
		city: string;
		text: string;
		date?: string;
	} = {
		name: 'John',
		city: 'Kendall',
		text: 'Their team was professional, knowledgeable, and thorough. John uncovered several issues that I would have never known about otherwise, which saved me a lot of time, money, and hassle. I highly recommend this company to anyone who needs a quality home inspection.',
		date: `${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getFullYear()}`
	};
</script>

<div class="card card-hover variant-glass-surface h-full min-h-full space-y-4 p-4 text-left">
	<div class="card-header pl-4">
		<h3>
			{testimonial.name}
		</h3>
		<small class="italic">
			{testimonial.city}
			<span class="opacity-50"
				>-
				{testimonial.date}
			</span>
		</small>
	</div>
	<blockquote class="!border-l-secondary-400 !text-success-50 ">
		<p>{testimonial.text}</p>
	</blockquote>
</div>
