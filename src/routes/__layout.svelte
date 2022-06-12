<script>
	import Nav from '$lib/Nav.svelte';
	import EmailForm from '$lib/EmailForm.svelte';
	import '../app.css';
</script>

<div class="dark:bg-slate-900">
	<Nav />

	<section class="container max-w-3xl min-h-screen mx-auto px-4 sm:px-6 lg:px-8">
		<article class="prose dark:prose-invert">
			<slot />
		</article>
	</section>
	<footer class="bg-slate-700 ">
		<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
			<EmailForm />
		</div>
	</footer>
</div>
