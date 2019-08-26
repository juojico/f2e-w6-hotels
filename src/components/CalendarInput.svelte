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
<<<<<<< HEAD
    min-width: 100%;
=======
    width: 100%;
>>>>>>> ae48720af8cfe2f30343fc45cbc95cb5c9866b55
    padding: 10px;
    background: white;
    border: 1px solid #38470B;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
</style>

<div class="inputArea" on:click={toggleCalendar}>
  <Input label={label} {value} readonly />
  {#if openCalendar}
    <div class="calendarArea">
      <Calendar onSelect={onSelect} on:click={toggleCalendar} {endDay} {month} />
    </div>
  {/if}
</div>
