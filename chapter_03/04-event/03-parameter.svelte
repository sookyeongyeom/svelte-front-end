<script>
    function handleClick_1(param) {
        console.log(`선택값 ${param}`)
    }

    function handleClick_2(param) {
        console.log(`선택값 ${param}`)
    }
</script>

<!-- 이벤트함수에 event 이외의 인자를 넘길 시에는 반드시 아래와 같이 람다를 통해 작성해야 함
그냥 바로 {handleClick_1('1번')} 이렇게 넘기게 되면 코드가 실행됨과 동시에 클릭이벤트와 상관없이 해당 함수가 실행됨 -->
<button on:click="{()=>handleClick_1('1번')}">1번 버튼</button>
<button on:click="{()=>handleClick_2('2번')}">2번 버튼</button>