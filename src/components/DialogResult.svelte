<script>
  export let close = '';
  export let result = false;

</script>

<style type="text/scss">

  .container {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    min-height: 100%;
    background-color: rgba(125, 125, 125, 0.2);
    backdrop-filter: blur(2px);
    z-index: 30;
  }

  .mainArea {
    position: relative;
    width: 100%;
    max-width: 1100px;
    padding: 105px 20px;
    background: #38470B;
    color: white;
    text-align: center;
    &>img {
      margin-top: 20px;
    }
    h1 {
      margin: 46px 0;
      font-size: 50px;
    }
  }

  .close {
    position: absolute;
    top: 38px;
    right: 38px;
    cursor: pointer;
  }

</style>

<div class='container'>
  <div class="mainArea">
      <div class='close' on:click={close}><img src="img/icons/icons-closeWhite.svg" alt="close" fill="white" /></div>

      {#if result}
        <img src="img/icons/icons-success.svg" alt="success" />
        <h1>預約成功</h1>
        <p>請留意簡訊發送訂房通知，入住當日務必出示此訂房通知，</p>
        <p>若未收到簡訊請來電確認，謝謝您</p>
      {:else}
        <img src="img/icons/icons-failure.svg" alt="failure" />
        <h1>預約失敗</h1>
        <p>哎呀！晚了一步！您預約的日期已經被預約走了，</p>
        <p>再看看其它房型吧</p>
      {/if}

  </div>
</div>
