<script>
  import { onHome } from '../store.js';
  import Home from './Home.svelte';
	import RoomPage from './RoomPage.svelte';
</script>

<style>
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
</style>

<div class="container">
  <Home />
  {#if !$onHome}
    <RoomPage room='1'/>
  {/if}
</div>
