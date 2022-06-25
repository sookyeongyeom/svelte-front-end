<script>
    import Child from "./child.svelte";

    let count = 0;

    const handleClick = () => count++;
</script>

<!-- Props 이름과 상태값의 이름이 같으면 {상태값} 형식으로 Props를 전달할 수 있다. -->
<Child {count} {handleClick}/>