<script>
    import Child from "./child.svelte"

    let count = 0;

    const handleClick = () => count++;
</script>

<!-- 변경 메소드를 Props로 넘겨준다. -->
<Child carryValue={count} handleClick={handleClick}/>