<script>
  export let name = '';
  export let price = 1;
  export let normalPrice = '';
  export let highPrice = '';
  export let close = '';
  export let confirm = '';
  import moment from 'moment';
  import { FEATURE_ICONS, FEATURE_NAME, selectDay, selectDay2 } from '../store.js';
  import { formatMoney } from '../utility.js';
  import Button from './Button.svelte';
  import Input from './Input.svelte';
  import CalendarInput from './CalendarInput.svelte';
  const feature = [1,0,0,1,0,1,0,1,0,1,1,1];

  let error = '';
  let date1 = moment($selectDay, 'YYYY-MM-DD').format('DDD');
  let date2 = moment($selectDay2, 'YYYY-MM-DD').format('DDD');
  let totalDays = 1;
  let totalPrice = 0;
  let date1day = 0;
  let normalDay = 0;
  let holiday = 0;

  const countTotal = () => {

    let remaDays = totalDays % 7;
    let remaHolidays = 0;

    if(date1day+remaDays>6){
      if (date1day===6){
        remaHolidays = 1;
      } else {
        remaHolidays = 2;
      }
    } else if(date1day+remaDays===6) {
      remaHolidays = 1;
    }

    holiday = Math.floor(totalDays / 7) * 2 + remaHolidays;
    normalDay = totalDays - holiday;

    if(totalDays > 0) {
      totalPrice = formatMoney(holiday * highPrice + normalDay * normalPrice);
    } else {
      totalPrice = 0;
    }

  }
  countTotal();

  const onChange1 = value =>{
    selectDay.set(value);
    date1 = moment(value).format('DDD');
    date1day = moment(value).day();
    totalDays = date2 - date1;
    if(totalDays < 1){
      error = "請選擇正確日期";
    } else {
      error = '';
    }
    countTotal();
  }
  const onChange2 = value =>{
    selectDay2.set(value);
    date2 = moment(value).format('DDD');
    totalDays = date2 - date1;
    if(totalDays < 1){
      error = "請選擇正確日期";
    } else {
      error = '';
    }
    countTotal();
  }

</script>

<style type="text/scss">

  .container {
    position: sticky;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    min-height: 100%;
    top: 0;
    background-color: rgba(125, 125, 125, 0.2);
    backdrop-filter: blur(2px);
    z-index: 30;
  }

  .mainArea {
    position: relative;
    display: flex;
    align-items: stretch;
    width: 100%;
    max-width: 1100px;
    border: 1px solid #38470B;
  }

  .area1 {
    flex-basis: 500px;
    padding: 48px 64px 24px 64px;
    background-color: #38470B;
    color: white;
  }
  .area2 {
    flex-shrink: 2;
    padding: 30px;
    background-color: white;
    h1, h2, h3, h4 {
      position: relative;
      overflow: hidden;
      &::after {
        position: absolute;
        content: '';
        width: 100%;
        height: 50%;
        margin-left: 6px;
        border-bottom: 1px solid #EAEBE5;
      }
    }
  }

  .close {
    position: absolute;
    padding: 10px;
    top: 28px;
    right: 28px;
    cursor: pointer;
  }

  .totalDays {
    padding: 14px 0;
    font-size: 14px;
    color: #949C7C;
    border-bottom: 1px solid #949C7C;
  }

  .totalMoney {
    padding: 10px 0;
    text-align: right;
    font-size: 14px;
    h1 {
      margin: 0;
      font-weight: 500;
    }
  }

  .note {
    font-size: 12px;
    text-align: center;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .featureIcon {
    position: relative;
    display: inline-block;
    margin: 9px 18px;
    span {
      font-size: 10px;
      display: block;
      text-align: center;
      white-space: nowrap;
    }
  }

  .chart {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    .item {
      min-width: 14em;
      padding: 0 8px 18px 8px;
      font-size: 12px;
      text-align: center;
      border: 1px solid #949C7C;
      border-radius: 0 0 10px 10px;
      .icon {
        display: block;
        width: 100%;
        margin: 0 -8px 12px -8px;
        padding: 8px;
        background: #949C7C;
      }
    }
    .arrow {
      margin: 16px 12px 0 12px;
    }
  }

  @media all and (max-width: 1080px) {
    .mainArea {
      flex-direction: column-reverse;
    }
  }

  @media all and (max-width: 768px) {
    .area1 {
      min-width: inherit;
      padding: 24px;
    }

    .chart {
      flex-wrap: wrap;
      .item {
        width: 100%;
      }
      .arrow {
        margin: 12px;
        transform: rotate(90deg);
      }
    }
  }

</style>

<div class='container'>
  <div class="mainArea">

    <div class="area1">
      <Input label='姓名' />
      <Input label='手機號碼' />
      <CalendarInput label="入住日期" value={$selectDay} onSelect={onChange1} />
      <CalendarInput label="退房日期" value={$selectDay2} onSelect={onChange2} endDay />
      <div class="totalDays">
        {#if error}
          {error}
        {:else}
          {totalDays} 天，{normalDay} 晚平日
        {/if}
      </div>
      <div class="totalMoney">總計<h1>$ {totalPrice}</h1></div>
      <Button text='確認送出' btnType='outline' color='white' fullWidth click={confirm} />
      <p class="note">此預約系統僅預約功能，並不會對您進行收費</p>
    </div>

    <div class="area2">
      <div class='close' on:click={close}><img src="img/icons/icons-close.svg" alt="close"></div>
      <h2>{name}</h2>
      <div class='content'>
        <div class="descript">
          <p>1人・ 單人床・ 附早餐・衛浴1間・18平方公尺</p>
          <p>平日（一～四）價格：{formatMoney(normalPrice)}  /  假日（五〜日）價格：{formatMoney(highPrice)}</p>
        </div>
        <div class="feature">
          {#each feature as has, index}
            {#if has}
            <div class="featureIcon">
              <img src={$FEATURE_ICONS[index]} alt='feature' />
              <span>{$FEATURE_NAME[index]}</span>
            </div>
            {/if}
          {/each}
        </div>
        <h3>訂房資訊</h3>
        <ul class="infoList">
          <li>入住時間：最早15：00，最晚21：00；退房時間：10：00，請自行確認行程安排。</li>
          <li>平日定義週一至週四；假日定義週五至週日及國定假日。</li>
          <li>好室旅店全面禁止吸菸。</li>
          <li>若您有任何問題，歡迎撥打 03-8321155 ( 服務時間 週一至週六 10:00 - 18:00 )。</li>
        </ul>
        <h3>預約流程</h3>
        <div class="chart">
          <div class="item">
            <div class="icon">
              <img src="img/icons/icons-order.svg" alt="sendOrder" />
            </div>
            送出線上預約單
          </div>
          <div class="arrow"><img src="img/icons/icons-next.svg" alt="arrowRight" /></div>
          <div class="item">
            <div class="icon">
              <img src="img/icons/icons-searchChat.svg" alt="searchChat" />
            </div>
            系統立即回覆是否預訂成功並以簡訊發送訂房通知(若未收到簡訊請來電確認)
          </div>
          <div class="arrow"><img src="img/icons/icons-next.svg" alt="arrowRight" /></div>
          <div class="item">
            <div class="icon">
              <img src="img/icons/icons-checkIn.svg" alt="checkIn" />
            </div>
            入住當日憑訂房通知以現金或刷卡付款即可(僅接受VISA.JCB.銀聯卡)
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
