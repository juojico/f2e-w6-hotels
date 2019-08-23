<script>
  export let name = '';
  export let normalPrice = '';
  export let highPrice = '';
  export let close = '';
  import { FEATURE_ICONS, FEATURE_NAME } from '../store.js';
  import Button from './Button.svelte';
  const feature = [1,0,0,1,0,1,0,1,0,1,1,1];

  const onConfirm = () => {

  }

</script>

<style type="text/scss">

  .container {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(125,125,125, .9);
    z-index: 30;
  }

  .mainArea {
    position: absolute;
    display: flex;
    align-items: stretch;
    width: 80%;
    min-width: 1100px;
    top: 50%;
    left: 50%;
    border: 1px solid #38470B;
    transform: translate(-50%, -50%);
  }

  .area1 {
    flex-grow: 1;
    padding: 48px 64px 24px 64px;
    background-color: #38470B;
  }
  .area2 {
    flex-grow: 1;
    padding: 30px;
    background-color: white;
  }

  .close {
    position: absolute;
    top: 38px;
    right: 38px;
    cursor: pointer;
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
  <div class="mainArea">
    <div class="area1">
      <input />
      <input />
      <input />
      <input />
      <Button text='確認送出' fullWidth click={onConfirm} />
    </div>
    <div class="area2">
      <div class='close' on:click={close}><img src="img/icons/icons-close.svg" alt="close"></div>
      <div class='title'><h1>{name}</h1><small>1人・ 單人床・ 附早餐・衛浴1間・18平方公尺</small></div>
      <div class='content'>
        <div class="descript">
          <p>平日（一～四）價格：{normalPrice}  /  假日（五〜日）價格：{highPrice}</p>
          <p>入住時間：15：00（最早）/   21：00（最晚）</p>
          <p>退房時間：10：00</p>
        </div>
        <div class="feature">
          {#each feature as has, index}
            {#if has}
            <div class="featureIcon on">
              <img src={$FEATURE_ICONS[index]} alt='feature' />
              <span>{$FEATURE_NAME[index]}</span>
            </div>
            {/if}
          {/each}
        </div>
        <p>訂房資訊</p>
        <ul class="infoList">
          <li>單人間僅供一位客人使用。</li>
          <li>臥室配有單人床和私人浴室。</li>
          <li>您需要的一切為您準備：床單和毯子，毛巾，肥皂和洗髮水，吹風機。</li>
          <li>房間裡有AC，當然還有WiFi。</li>
        </ul>
        <p>預約流程</p>
      </div>
    </div>
  </div>
</div>
