<script>
  export let onSelect = () => {};
  export let label = '';
  export let value = '';
  export let endDay = false;

  import moment from 'moment';
  import Calendar from './Calendar.svelte';
  import Input from './Input.svelte';

  let openCalendar = false;

  let month = moment(value);

  const toggleCalendar = () => {
    openCalendar = !openCalendar;
  }

  let displayMonth = month;

  const lastMonth = () => {
    displayMonth = month.subtract(1, 'M');
  }

  const nextMonth = () => {
    displayMonth = month.add(1, 'M');
  }

</script>

<style type="text/scss">
  .inputArea {
    position: relative;
  }
  .calendarArea {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    padding: 10px;
    background: white;
    border: 1px solid #38470B;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .lastMonth, .nextMonth {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 20px;
    background: url(img/icons/icons-next.svg);
    background-repeat: no-repeat;
    background-position: center;
  }
  .lastMonth {
    transform: rotate(180deg);
  }
  .nextMonth {
    left: 100%;
    margin-left: -40px;
  }
</style>

<div class="inputArea">
  <div on:click={toggleCalendar}>
    <Input label={label} {value} readonly />
  </div>
  {#if openCalendar}
    <div class="calendarArea">
      {#if moment(value).format('YYMM') < moment(displayMonth).format('YYMM') }
        <div class="lastMonth" on:click={lastMonth}></div>
      {/if}
      <div class="nextMonth" on:click={nextMonth}></div>
      <div on:click={toggleCalendar}>
        <Calendar onSelect={onSelect} month={displayMonth} {endDay} />
      </div>
    </div>
  {/if}
</div>
