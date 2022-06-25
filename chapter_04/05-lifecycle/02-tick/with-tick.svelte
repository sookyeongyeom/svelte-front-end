<!-- tick은 변경된 상태값이 실제 돔에 적용되면 다음 단계를 진행할 수 있도록 도와주는 기능이다. -->
<script>
    import { tick } from "svelte";

    let a = 1;
    let b = 2;
    let sumElement;

    async function handleUpdate() {
        a = 2;
        b = 5;

        await tick();   // tick()을 이용해 변경된 상태값이 돔에 적용되기를 기다림

        console.log(`${a}, ${b}`);
        console.log(sumElement.textContent);
    }
</script>

<div class="sum" bind:this="{sumElement}">{a} + {b} = {a + b}</div>
<button on:click="{handleUpdate}">숫자 업데이트</button>

<!-- 
첫번째 클릭
2, 5
2 + 5 = 7
-->