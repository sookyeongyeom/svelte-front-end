<script>
    import Child from "./child.svelte"

    let count = 0;

    const handleClick = () => count++;
</script>

<Child carryValue={count}/>

<button on:click="{handleClick}">Click!</button>