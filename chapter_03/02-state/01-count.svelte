<script>
    let count=0; // state(상태값)

    const handleClick = () => count++;
</script>

<button on:click="{handleClick}">클릭수 {count}</button>