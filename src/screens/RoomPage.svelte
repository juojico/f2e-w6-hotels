<script>
  import { fly } from 'svelte/transition';
  import { onHome, onPage, rooms } from '../store.js';
  import { formatMoney } from '../utility.js'
  import Carousel from '../components/Carousel.svelte';
  import Button from '../components/Button.svelte';

  let room = $rooms[$onPage];

  const { id, name, normalDayPrice, holidayPrice, imageUrl } = room;

  const today = new Date().getDay();

  const price = formatMoney(today > 4 ? holidayPrice : normalDayPrice);

  const onBackClick = () => {
    onHome.set(true);
  }

</script>

<style type="text/scss">
  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #38470B;
    overflow-y: auto;
    z-index: 20;
  }

  .navTop {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 10%;
    left: 10%;
    padding: 0.5em;
    cursor: pointer;
    z-index: 30;
    img {
      margin: 0 10px;
    }
  }

  .area1 {
    position: absolute;
    width: 40%;
    height: 100%;
    min-height: 12em;
    top: 0;
    left: 0;
    background-color: white;
  }
  .area2 {
    position: absolute;
    width: 60%;
    height: 100%;
    min-height: 60%;
    top: 0;
    left: 40%;
    background-color: white;
  }

  .bookingBox {
    position: absolute;
    top: 60%;
    left: 50%;
    padding: 1em;
    font-size: 20px;
    white-space: nowrap;
    background-color: rgba(255, 255, 255, .7);
    transform: translate(-50%, -50%);
    span {
      font-size: 36px;
    }
  }

  @media all and (max-width: 768px) {
    .navTop {
      top: 5%;
      left: 5%;
    }
    .area1 {
      position: relative;
      width: 100%;
      height: 40%;
    }
    .area2 {
      position: relative;
      width: 100%;
      left: 0;
      height: auto;
    }
  }

</style>

<div class="container">
  <div class="navTop" on:click={onBackClick} ><img src={'img/icons/back.svg'}>查看其它房型</div>
  <div class="area1" in:fly="{{ y: -300 }}" out:fly="{{ y: 300 }}">
    <Carousel imgs={[imageUrl]} />
    <div class="bookingBox">
      <span>${price}</span>　/　1 晚
      <Button text='Booking now' fullWidth />
    </div>
  </div>
  <div class="area2" in:fly="{{ y: 300 }}" out:fly="{{ y: -300 }}">

    <span>RoomInfo {$onPage}</span>
    normalDayPrice {normalDayPrice}
    holidayPrice {holidayPrice}
  </div>
</div>
