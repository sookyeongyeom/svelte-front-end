<script>
    let a = 1;
    let b = 2;
    let sumElement;

    async function handleUpdate() {
        a = 2;
        b = 5;
        console.log(`${a}, ${b}`);
        console.log(sumElement.textContent);
    }
</script>

<div class="sum" bind:this="{sumElement}">{a} + {b} = {a + b}</div>
<button on:click="{handleUpdate}">숫자 업데이트</button>

<!-- 
첫번째 클릭
2, 5
1 + 2 = 3
-->

<!-- 
두번째 클릭
2, 5
2 + 5 = 7
-->

<!--
handleUpdate() 함수가 끝난 후
변경된 state를 참조하는 DOM 요소를 렌더링하므로
함수 내부에서 호출한 console.log에는 바뀐 state를 적용하기 전의 DOM content가 찍힌다.
-->