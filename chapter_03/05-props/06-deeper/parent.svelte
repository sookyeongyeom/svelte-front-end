<script>
	import Middle from './middle.svelte';

    let count = 0;

    const handleClick = () => count++;
</script>

<!-- 하나의 부모를 바라보고만 있다면 깊이가 아무리 깊어도 계속해서 아래로 Props를 전달하는 방식으로 상태값 또는 메소드를 전달할 수 있다. -->
<Middle {count} {handleClick}/>