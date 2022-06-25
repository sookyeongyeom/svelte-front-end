<script>
    function handleClick(){
        console.log("no more logs");
    }
</script>

<!-- 이벤트에 조건을 붙여 제어함: 단 한 번만 발생하도록 함
on:click|once|preventDefault와 같은 형태로 여러 개의 수식어를 사용할 수도 있음 -->
<button on:click|once={handleClick}>Click me!</button>