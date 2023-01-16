<script lang="ts">
import Counter from './lib/Counter.svelte'

export let test: string = 'Hoi!';
</script>

<h1>{test}</h1>
<Counter />

<style>
h1 {
  color: red;
}
</style>