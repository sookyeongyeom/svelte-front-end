<script>
    function handleClick(){
        console.log("no more logs");
    }
</script>

<!-- 이벤트에 조건을 붙여 제어함: 단 한 번만 발생하도록 함 -->
<button on:click|once={handleClick}>Click me!</button>