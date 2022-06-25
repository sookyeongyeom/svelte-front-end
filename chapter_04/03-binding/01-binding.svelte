<script>
    let textValue = '';

    function clearText(){
        textValue = ''
    }
</script>

<!-- 양방향 바인딩: 입력폼 → 상태값 방향의 바인딩을 추가 -->
<input type="text" bind:value={textValue}>
<p>입력값: {textValue}</p>
<button on:click="{clearText}">지우기</button>