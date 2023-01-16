<script lang="ts">
import Counter from './lib/Counter.svelte'

export let test: string = 'Hello!';
</script>

<h1>{test}</h1>
<Counter />

<style>
h1 {
  color: red;
}
</style>