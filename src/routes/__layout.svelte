<script>
	import Nav from '$lib/Nav.svelte';
	import EmailForm from '$lib/EmailForm.svelte';
	import '../app.css';
</script>

<div class="">
	<Nav />

	<section class="container max-w-3xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8">
		<article class="prose dark:prose-invert pt-12 pb-2">
			<slot />
		</article>
	</section>
</div>
<footer class="mt-20" />
