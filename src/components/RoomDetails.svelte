<script>
  export let id = '';
  export let name = '';
  export let normalDayPrice = '';
  export let holidayPrice = '';
  export let imageUrl = '';
</script>

<style type="text/scss">

  .imgBox {
    position: relative;
    width: 100%;
    height: 100%;
  }


  @media all and (max-width: 480px) {
    .imgBox {
      width: 50%;
      height: 50vw;
    }
  }

</style>

<div class='imgBox' style="background-image: url({imageUrl})">
  <span>{name}</span>
</div>
