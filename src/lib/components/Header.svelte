<script lang="ts">
	import { Button } from './ui/button';
	import ThemeToggleIcon from './ThemeToggleIcon.svelte';
</script>

<header class="flex items-center justify-between px-inline py-2">
	<Button class="font-bold" variant="ghost" href="/">Hex Fitness</Button>
	<div>
		<nav class="flex items-center">
			<Button variant="ghost" href="/contact">Contact</Button>
		</nav>
		<Button
			variant="ghost"
			aria-label="Toggle Theme"
			onclick={() => {
				window.toggleTheme?.();
			}}><ThemeToggleIcon /></Button
		>
	</div>
</header>

<style lang="postcss">
	header {
		view-transition-name: header; /* to not use the view transition defined in app.css */
	}
</style>
