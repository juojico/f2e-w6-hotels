<script>
  export let name = '';
  export let normalPrice = '';
  export let highPrice = '';
  import moment from 'moment';
  import { FEATURE_ICONS, FEATURE_NAME } from '../store.js';
  import Calendar from './Calendar.svelte';
  const feature = [1,0,0,1,0,1,0,1,0,1,1,1];
  let selectDay = moment().add(1,'d').format('YYYY-MM-DD');

  const onSelect = pickDay => {
    console.log(pickDay);
    selectDay = pickDay;
  }

</script>

<style type="text/scss">

  .container {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .featureIcon {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 60px;
    margin: 9px 18px;
    opacity: 0.2;
    &::before {
      position: absolute;
      content: '';
      width: 16px;
      height: 16px;
      top: 0;
      right: 0;
      background-image: url('img/icons/icons-no.svg');
      background-repeat: no-repeat;
    }
    &.on {
      opacity: 1;
      &::before {
        background-image: url('img/icons/icons-ok.svg');
      }
    }
    span {
      font-size: 10px;
      display: block;
      margin-left: -16px;
      text-align: center;
      white-space: nowrap;
    }
  }

  .calendar {
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 10px;
    border: 1px solid #38470B;
  }

  @media all and (max-width: 1080px) {
    .calendar {
      flex-direction: column;
    }
  }

  @media all and (max-width: 480px) {
    .title {
      flex-direction: column;
      small {
        margin-top: -20px;
        margin-bottom: 12px;
      }
    }
  }

</style>

<div class='container'>
  <div class='title'><h1>{name}</h1><small>1人・ 單人床・ 附早餐・衛浴1間・18平方公尺</small></div>
  <div class='content'>
    <div class="descript">
      <p>平日（一～四）價格：{normalPrice}  /  假日（五〜日）價格：{highPrice}</p>
      <p>入住時間：15：00（最早）/   21：00（最晚）</p>
      <p>退房時間：10：00</p>
    </div>
    <ul class="infoList">
      <li>單人間僅供一位客人使用。</li>
      <li>臥室配有單人床和私人浴室。</li>
      <li>您需要的一切為您準備：床單和毯子，毛巾，肥皂和洗髮水，吹風機。</li>
      <li>房間裡有AC，當然還有WiFi。</li>
    </ul>
    <div class="feature">
      {#each feature as has, index}
        <div class="featureIcon {has?'on':''}">
          <img src={$FEATURE_ICONS[index]} alt='feature' />
          <span>{$FEATURE_NAME[index]}</span>
        </div>
      {/each}
    </div>
  </div>

  <p>空房狀態查詢</p>
  <div class="calendar">
    <Calendar onSelect={onSelect} bind:selectDay />
    <Calendar month={moment().add(1, 'M')} onSelect={onSelect} bind:selectDay />
  </div>
</div>
