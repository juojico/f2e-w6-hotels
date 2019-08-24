<script>
  export let selectDay = '';
  export let open = true;
  import moment from 'moment';

  let today = moment();
  let year = today.format('YYYY');
  let month = today.format('MMMM');
  let day = today.format('DD');
  let days = today.format('dd');

</script>

<style type="text/scss">

  .datePickerArea {

  }

</style>

<div class='datePickerArea'>
{today}{month}{year}
{days}{day}
</div>
