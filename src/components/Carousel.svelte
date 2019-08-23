<script>
  export let imgs = [];
  export let duration = 5000;
  export let itemIndex = 0;
  export let pause = false;

  let i = itemIndex;

  const play = setInterval(()=>{
    if (i < imgs.length - 1) {
      i++;
    } else {
      i = 0;
    }
  }, duration)

  if(pause) {
    clearInterval(play);
  }

</script>

<style type="text/scss">
  .img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: 2s;
  }
  .close {
    opacity: 0;
  }

</style>

{#each imgs as item, index}
    <div class={'img' + (i === index? '':' close' )} style="background-image: url({item})" />
{/each}
