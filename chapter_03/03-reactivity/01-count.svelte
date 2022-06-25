<script>
    let count=1; // state(상태값)

    const handleClick = () => count++;
</script>

<button on:click="{handleClick}">클릭수 {count} {count === 1 ? 'time':'times'}</button>