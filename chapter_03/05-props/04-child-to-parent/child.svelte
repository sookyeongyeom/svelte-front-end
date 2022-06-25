<script>
    export let carryValue;
    export let handleClick;
</script>

<p>전달된 값은 {carryValue} 입니다.</p>

<button on:click="{handleClick}">Click!</button>