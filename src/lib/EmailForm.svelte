<script>
	function getPlaceholder() {
		let placeholders = [
'maurice@example.com', 'maurice.ravel@free.fr', 'mauricegreene@aol.com'];
		let random = Math.floor(Math.random() * placeholders.length);
		let placeholder = placeholders[random];
		return placeholder;
	}
	let placeholder = getPlaceholder();
</script>

<form
	action="https://buttondown.email/api/emails/embed-subscribe/maurice"
	method="post"
	target="popupwindow"
	onsubmit="window.open('https://buttondown.email/maurice', 'popupwindow')"
	class="max-w-lg grid auto-cols-min items-stretch gap-x-2 gap-y-1 embeddable-buttondown-form
text-slate-50"
>
	<label class=" row-start-1 self-end font-medium" for="bd-email"
		>Spam email signup</label
	>
	<input
		class="min-w-40 row-start-2 rounded text-slate-900 p-2"
		type="email"
		{placeholder}
		name="email"
		id="bd-email"
	/>
	<button
		class="row-start-2 justify-self-end bg-blue-700 rounded-lg 
py-1 px-2"
	>
		<input class="text-center" type="submit" value="Subscribe" /></button
	>
	<a
		class="row-start-3 col-span-2 
text-sm text-slate-300"
		href="https://buttondown.email"
		target="_blank">Powered by Buttondown.</a
	>
</form>
