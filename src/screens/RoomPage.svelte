<script>
  import { fly } from 'svelte/transition';
  import { onHome, onPage, rooms } from '../store.js';
  import { formatMoney } from '../utility.js';
  import Carousel from '../components/Carousel.svelte';
  import Button from '../components/Button.svelte';
  import RoomDetails from '../components/RoomDetails.svelte';
  import DialogBooking from '../components/DialogBooking.svelte';
  import DialogResult from '../components/DialogResult.svelte';

  let room = $rooms[$onPage];

  const { id, name, normalDayPrice, holidayPrice, imageUrl } = room;

  //取得今日價格並轉換為金額格式
  const today = new Date().getDay();
  const normalPrice = formatMoney(normalDayPrice);
  const highPrice = formatMoney(holidayPrice);
  const price = today > 4 ? holidayPrice : normalDayPrice;

  const onBackClick = () => {
    onHome.set(true);
  }

  //訂房結果
  let result = true;

  //dialog
  let dialogOpen = false;
  let resultOpen = false;

  const onBookingClick = () => {
    dialogOpen = true;
  }

  const onBookingClose = () => {
    dialogOpen = false;
  }

  const onBookingConfirm = () => {
    dialogOpen = false;
    resultOpen = true;
  }

  const onResultClose = () => {
    resultOpen = false;
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
    z-index: 25;
    img {
      margin: 0 10px;
    }
  }

  .area1 {
    position: fixed;
    width: 40%;
    height: 100%;
    min-height: 12em;
    top: 0;
    left: 0;
    background-color: white;
  }
  .area2 {
    box-sizing: border-box;
    position: absolute;
    width: 60%;
    height: auto;
    min-height: 100%;
    top: 0;
    left: 40%;
    background-color: white;
    padding: 64px 28px 28px 28px;
  }

  .bookingBox {
    position: absolute;
    top: 60%;
    left: 50%;
    padding: 1em;
    font-size: 20px;
    text-align: center;
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
      min-height: 60%;
    }
  }

</style>

<div class="container">
  {#if dialogOpen}
    <DialogBooking name={name} price={price} normalPrice={normalPrice} highPrice={highPrice} close={onBookingClose} confirm={onBookingConfirm} />
  {/if}
  {#if resultOpen}
    <DialogResult result={result} close={onResultClose} />
  {/if}
  <div class="area1" in:fly="{{ y: -300 }}" out:fly="{{ y: -300 }}">
    <div class="navTop" on:click={onBackClick}>
      <img src={'img/icons/icons-back.svg'} alt="backToHome">查看其它房型
    </div>
    <Carousel imgs={[imageUrl]} />
    <div class="bookingBox">
      <span>${formatMoney(price)}</span>　/　1 晚
      <Button text='Booking now' fullWidth click={onBookingClick} />
    </div>
  </div>
  <div class="area2" in:fly="{{ y: 300 }}" out:fly="{{ y: 300 }}">
    <RoomDetails name={name} normalPrice={normalPrice} highPrice={highPrice} />
  </div>
</div>
