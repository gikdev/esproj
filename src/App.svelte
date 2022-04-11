<script lang="ts">
import Nav from './lib/Nav/index.svelte'
import { marked } from 'marked'
let value = ''
</script>
<style lang="stylus">
 
</style>
<Nav />
{@html marked(value)}
<textarea bind:value={value}></textarea>