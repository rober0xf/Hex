<script>
	import { Button } from '@/components/ui/button';
</script>

<div class="stack h-[50svh] bg-gradient-to-br from-orange-500 via-orange-300 to-teal-500">
	<div class="m-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 lg:m-8"></div>
	<div class="flex flex-col items-center gap-4 place-self-center">
		<h1
			class="place-self-center bg-gradient-to-br from-orange-500 via-purple-300 to-teal-500 bg-clip-text text-6xl text-transparent"
		>
			Hex Fitness
		</h1>
		<!-- we can use variants in the shadcn button using: variant, also change the size with: size -->
		<Button href="/program">check this week's program</Button>
	</div>
</div>
