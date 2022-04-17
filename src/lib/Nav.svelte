<script>
	import HomeButton from './HomeButton.svelte';
	import Expander from './Expander.svelte';
	import MenuItem from './MenuItem.svelte';
	import EmailForm from './EmailForm.svelte';
	import { page } from '$app/stores';

	$: {
		$page.path, (accordionHidden = true);
	}
	let accordionHidden = true;
	let toggleHiddenAccordion = function () {
		accordionHidden = !accordionHidden;
		return accordionHidden;
	};
</script>

<div class="shadow-lg bg-slate-700 px-4 mb-6 ">
	<nav class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
		<div class="flex text-slate-50 justify-between">
			<HomeButton>3000 Grafts</HomeButton>
			<Expander on:click={toggleHiddenAccordion}
				>More <span hidden={!accordionHidden}>▾</span><span hidden={accordionHidden}>▴</span
				></Expander
			>
		</div>
		<div class={accordionHidden ? `hidden` : `flex flex-col items-end`}>
			<MenuItem>
				<a href="/"> Home </a>
			</MenuItem>
			<MenuItem>
				<a href="/about"> About </a>
			</MenuItem>
			<EmailForm />
		</div>
	</nav>
</div>
