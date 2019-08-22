<script>
  import { onMount } from 'svelte';
  import { onHome, rooms, bgImgs } from '../store.js';
	import ImgBox from '../components/ImgBox.svelte';
  import Carousel from '../components/Carousel.svelte';

  let rooms = [];
  const getRooms = async () => {
    const res = await fetch('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms',{
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ALLJVsZTa23igMRLnEmt9GEhOpVm5mSP5NmJW3EFj2ti11aSoiItcgKRtNNK' ,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res=>res.json());
    rooms = res.items;
  }
  // onMount(()=>getRooms());

  const onRoomClick = () => {
    onHome.set(false);
    console.log('click',$onHome);
  };

</script>

<style type="text/scss">
  .container {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: black;
    z-index: -1;
  }
  .mainArea {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }

  .area1 {
    width: 148px;
    height: 550px;
  }
  .area2 {
    width: 825px;
    height: 550px;
  }
  .logo {

  }
  .info {
    color: white;
    font-size: 12px;
    font-weight: 300;
    span {
      display: inline-block;
      font-weight: 500;
      margin-bottom: 16px;
    }
  }

  @media all and (max-width: 1000px) {
    .mainArea {
      flex-direction: column;
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
      <div class="logo"></div>
      <div class="info">
        <span>好室旅店。HOUSE HOTEL</span>
        花蓮縣花蓮市國聯一路1號
        03-8321155
        HOUSE@HOTEL.COM
      </div>
    </div>
    <div class="area2">
      <div>
        {#await getRooms}
          <p>資料讀取中...</p>
        {:then res}
          {#each rooms as room, i}
            <div on:click={onRoomClick}>
              <ImgBox {...room} />
            </div>
          {/each}
        {/await}
      </div>
    </div>
  </div>

  <div class="bg">
    <Carousel {bgImgs} />
  </div>

</div>
