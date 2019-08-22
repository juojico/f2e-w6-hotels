<script>
  import { onHome } from '../store.js';
  import { fly } from 'svelte/transition';

  const onBackClick = () => {
    onHome.set(true);
    console.log('click',onHome);
  }

</script>

<style type="text/scss">
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .area1 {
    position: absolute;
    width: 30%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: white;
  }
  .area2 {
    position: absolute;
    width: 70%;
    height: 100%;
    top: 0;
    left: 30%;
    background-color: white;
  }

  @media all and (max-width: 768px) {
    .area1 {
      position: relative;
      width: 100%;
      height: 30%;
    }
    .area2 {
      position: relative;
      width: 100%;
      left: 0;
      height: auto;
      min-height: 70%;
    }
  }

</style>

<div class="container">
  <div class="area1" in:fly="{{ y: -300 }}" out:fly="{{ y: 300 }}">
    <span>RoomPage</span>
  </div>
  <div class="area2" in:fly="{{ y: 300 }}" out:fly="{{ y: -300 }}">
    <span>RoomInfo</span>
    <button on:click={onBackClick}>home</button>
  </div>
</div>
