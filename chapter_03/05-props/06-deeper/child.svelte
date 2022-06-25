<script>
    export let count;
    export let handleClick;
</script>

<p>전달된 값은 {count} 입니다.</p>

<button on:click="{handleClick}">Click!</button>