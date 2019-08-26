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
    width: 275px;
    height: 275px;
    background-size: cover;
    background-position: bottom;
    float: left;
    transition: 1s;
    cursor: pointer;
    span {
      position: absolute;
      top: 100%;
      left: 50%;
      color: white;
      opacity: 0;
      transform: translate(-50%,-50%);
      transition: 1s;
    }
    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background-color: #38470B;
      opacity: 0;
      transition: 1s;
    }
    &:hover {
      background-size: 110%;
      span {
        top: 50%;
        opacity: 1;
      }
      &::before {
        opacity: 0.6;
      }
    }
  }

  @media all and (max-width: 1080px) {
    .imgBox {
      width: 33.33%;
      height: 33.33vw;
    }
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
