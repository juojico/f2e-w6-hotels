<script>
  export let imgs = [];

  let i = 0;
  setInterval(()=>{
    if (i < imgs.length - 1) {
      i++;
    } else {
      i = 0;
    }
  },5000)

</script>

<style type="text/scss">
  .img {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    transition: 2s;
  }
  .close {
    opacity: 0;
  }

</style>

{#each imgs as item, index}
    <div class={'img' + (i === index? '':' close' )} style="background-image: url({item})" />
{/each}
