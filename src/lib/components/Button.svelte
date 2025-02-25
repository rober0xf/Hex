<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Button, type ButtonRootProps } from 'bits-ui';

	// we can make the Button dynamic like this:
	type Props = {
		children: Snippet; // snippet let us to use other elements, not just a string
	} & ButtonRootProps;

	let { children, ...restProps }: Props = $props(); // restProps is for onClick action for example
</script>

<Button.Root class="rounded-xl bg-orange-400 px-4 py-2 text-orange-200" {...restProps}
	>{@render children()}
</Button.Root>
