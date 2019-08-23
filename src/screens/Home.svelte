<script>
  import { onMount } from 'svelte';
  import { onHome, onPage, BG_IMGS, MOCK_ROOMS, rooms } from '../store.js';
	import ImgBox from '../components/ImgBox.svelte';
  import Carousel from '../components/Carousel.svelte';

  const getRooms = async () => {
    const res = await fetch('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',{
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ALLJVsZTa23igMRLnEmt9GEhOpVm5mSP5NmJW3EFj2ti11aSoiItcgKRtNNK' ,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res=>res.json());
    rooms.set(res.items);
    console.log(rooms);
  }

  onMount(()=>{
    rooms.set($MOCK_ROOMS);
    // getRooms();
  });

  const onRoomClick = index => () => {
    onHome.set(false);
    onPage.set(index);
    console.log('click',$onHome, index);
  };

</script>

<style type="text/scss">
  .container {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: black;
    overflow-y: auto;
  }
  .bg {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.4;
    pointer-events: none;
    z-index: 1;
  }
  .mainArea {
    position: absolute;
    width: 100%;
    height: auto;
    min-height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
    z-index: 10;
  }

  .area1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 550px;
  }
  .area2 {
    width: 825px;
    height: 550px;
  }
  .logo {
    padding: 30px;
  }
  .info {
    padding: 12px;
    color: white;
    font-size: 12px;
    font-weight: 300;
    h4 {
      display: inline-block;
      font-weight: 500;
      margin-bottom: 16px;
    }
  }

  @media all and (max-width: 1080px) {
    .mainArea {
      flex-direction: column;
      height: auto;
    }
    .area1, .area2 {
      width: 100%;
      height: auto;
    }
  }

</style>

<div class="container">

  <div class="mainArea">
    <div class="area1" >
      <div class="logo"><img src={'img/logo.svg'} alt='好室旅店logo'></div>
      <div class="info">
        <h4>好室旅店。HOUSE HOTEL</h4>
        <p>花蓮縣花蓮市國聯一路1號</p>
        <p>03-8321155</p>
        <p>HOUSE@HOTEL.COM</p>
      </div>
    </div>
    <div class="area2">
      {#each $rooms as room, i}
        <div on:click={onRoomClick(i)}>
          <ImgBox {...room} />
        </div>
      {/each}
    </div>
  </div>

  <div class="bg">
    <Carousel imgs={$BG_IMGS} />
  </div>

</div>
