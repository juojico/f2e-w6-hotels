<script>
  export let name = '';
  export let label = '';
  export let color = 'white';
  export let placeholder = '';
  export let value = '';
  export let fullWidth = false;
  export let readonly = false;
  export let type = 'text';
  export let onChange = ()=>{};
</script>

<style type="text/scss">

  input {
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    padding: 0.5em;
    margin-bottom: 16px;
  }

  label {
    font-size: 14px;
    margin-bottom: 6px;
  }

  .fullWidth {
    display: block;
    width: 100%;
  }

  .primary {
    color: #38470B;
  }

  .white {
    color: white;
  }

</style>

<label class={color}>{label}</label>
<input {name} {type} class={fullWidth?'fullWidth':null} {placeholder} {value} {readonly} on:change={()=>onChange(this.value)} />
