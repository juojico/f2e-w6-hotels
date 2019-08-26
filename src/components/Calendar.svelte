<script>
  export let onSelect = () => {};
  export let month = moment();
  export let endDay = false;
  export let open = true;
  import moment from 'moment';
  import { selectDay, selectDay2 } from '../store.js';

  let year = month.format('YYYY');
  let today = moment();
  let thisMonthStartDate = month.startOf('month').day();
  let thisMonthEnd = month.endOf('month').format('DD');
  const daysName = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St']

  let thisMonth = [];
  thisMonth.length = thisMonthStartDate;
  for (let i=1;i<=thisMonthEnd;i++) {
    thisMonth.push(i);
  }

  let beforeDay = today.format('DD');
  if(endDay) {
    beforeDay = moment($selectDay).format('DD');
  }

</script>

<style type="text/scss">

  .datePickerArea {
    padding: 10px;
    flex-grow: 1;
  }

  .calHeader {
    padding: 6px 10px 10px 10px;
    color: #38470B;
    text-align: center;
    font-weight: 500;
  }

  .calBody {
    padding: 12px;
    text-align: center;
    .tableBody {
      display: grid;
      grid-template-columns: auto auto auto auto auto auto auto;
      color: #38470B;
      span {
        position: relative;
        padding: 12px 8px;
        user-select: none;
        cursor: pointer;
      }
      .tableHeader {
        color: #9ba385;
        font-weight: 500;
        border-bottom: 1px solid #EAECE6;
        cursor: inherit;
      }
      .select {
        display: inline-block;
        width: 2em;
        height: 2em;
        padding: 0;
        margin-top: 6px;
        color: white;
        line-height: 2em;
        border-radius: 100%;
        background: #38470B;
      }
      .disable {
        color: #C3C7B5;
        text-decoration-line: line-through;
      }
      .today {
        &::before {
          position: absolute;
          content: '';
          width: 2em;
          height: 2em;
          top: 50%;
          left: 50%;
          border-radius: 100%;
          border: 1px solid #C3C7B5;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  @media all and (max-width: 480px) {
    .datePickerArea {
      padding: 4px;
    }
    .calBody {
      padding: 6px;
      .tableBody {
        span {
          padding: 6px 4px;
        }
        .select {
          margin-top: 0;
        }
      }
    }
  }

</style>

<div class='datePickerArea'>
  <div class="calHeader">{month.format('MMMM')} {year}</div>
  <div class="calBody">
    <div class="tableBody">
      {#each daysName as item}
        <span class="tableHeader">{item}</span>
      {/each}
      {#each thisMonth as day}
        {#if day}
          {#if (endDay?$selectDay2:$selectDay)===(month.format('YYYY-MM-')+day)}
            <div><span class="select">{day}</span></div>
          {:else}
            {#if today.format('MM')===month.format('MM')}
              {#if day < beforeDay}
                <span class="disable">{day}</span>
              {:else if day == today.format('DD') }
                <span class="today" on:click={()=>onSelect(month.format('YYYY-MM-')+day)}>{day}</span>
              {:else}
                <span on:click={()=>onSelect(month.format('YYYY-MM-')+day)}>{day}</span>
              {/if}
            {:else}
              <span on:click={()=>onSelect(month.format('YYYY-MM-')+day)}>{day}</span>
            {/if}
          {/if}
        {:else}
          <span> </span>
        {/if}
      {/each}
    </div>
  </div>
</div>
