<script>
	import HomeButton from './HomeButton.svelte';
	import Expander from './Expander.svelte';
	import MenuItem from './MenuItem.svelte';
	import EmailForm from './EmailForm.svelte';
	import { page } from '$app/stores';
</script>

<div class="shadow-lg bg-slate-50 dark:bg-slate-800 px-4 mb-6 ">
	<nav class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
		<div class="flex text-slate-50 justify-between">
			<HomeButton>📻 maurice.fm</HomeButton>
		</div>
	</nav>
</div>
