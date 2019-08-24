<script>
  export let size = '';
  export let color = 'primary';
  export let btnType = 'fill';
  export let text = '';
  export let fullWidth = false;
  export let click = '';
</script>

<style type="text/scss">

  .btn {
    box-sizing: border-box;
    display: inline-block;
    margin: auto;
    padding: 0.4em 3.5em 0.5em 3.5em;
    color: white;
    text-align: center;
    transition: 0.2s;
    cursor: pointer;

    &.sm {
      font-size: 0.75em;
    }
    &.lg {
      font-size: 1.25em;
    }
    &.xl {
      font-size: 1.5em;
    }

    &.fullWidth {
      display: block;
      width: 100%;
      margin-top: 10px;
    }

    &.fill {
      &.primary {
        background-color: #38470B;
        &:hover {
          box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
          background-color: lighten(#38470B, 7%);
        }
      }
      &.secondary {
        background-color: #e48d21;
        &:hover {
          box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
          background-color: lighten(#e48d21, 7%);
        }
      }
    }

    &.outline {
      &.primary {
        color: #38470B;
        background-color: transparent;
        border: 1px solid #38470B;
        &:hover {
          box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
          color: lighten(#38470B, 10%);
          border-color: #38470B;
        }
      }
      &.secondary {
        color: #e48d21;
        background-color: transparent;
        border: 1px solid #e48d21;
        &:hover {
          box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
          background-color: lighten(#e48d21, 10%);
          border-color: #e48d21;
        }
      }
      &.white {
        color: white;
        background-color: transparent;
        border: 1px solid white;
        &:hover {
          box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
          background-color: rgba(255, 255, 255, .1);
        }
      }
    }

  }

</style>

<div class={`btn ${fullWidth?'fullWidth':null} ${size} ${btnType} ${color}`} on:click={click}>
  {text}
</div>
