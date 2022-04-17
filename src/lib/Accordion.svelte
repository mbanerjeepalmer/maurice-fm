<script>
	import SecondaryHeading from './SecondaryHeading.svelte';
	import { fade } from 'svelte/transition';

	let accordionHidden;
	let toggleHiddenAccordion = function () {
		accordionHidden = !accordionHidden;
		return accordionHidden;
	};
</script>

<div class="border-gray-300 border rounded-md px-4 py-2">
	<button on:click={toggleHiddenAccordion} id="reminder-toggle" class="w-full text-lg font-light">
		<SecondaryHeading>
			<span class="float-left"><slot name="accordion-title" /></span><span
				hidden={!accordionHidden}
				class="float-right">▸</span
			><span class="float-right" hidden={accordionHidden}>▾</span>
		</SecondaryHeading>
	</button>
	<div class="" hidden={accordionHidden} transition:fade>
		<slot name="accordion-content" />
	</div>
</div>
