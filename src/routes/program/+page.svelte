<script>
	import { Button } from '$lib/components/ui/button';
</script>

<h1 class="text-6xl">Week's program</h1>
<ul>
	<li>
		<h2>chest</h2>
		<p>military</p>
	</li>
	<li>
		<h2>lower</h2>
		<p>squat</p>
	</li>
	<li>
		<h2>arm</h2>
		<p>press</p>
	</li>
	<li>
		<h2>cardio</h2>
		<p>run</p>
	</li>
</ul>
<Button
	onclick={() => {
		console.log('someone downloaded it');
	}}>download</Button
>

<p>want an own program?</p>
<Button href="/create">create your own program</Button>
