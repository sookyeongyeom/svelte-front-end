<script>
    import {getContext} from 'svelte';

    let handleIncrementCount = getContext('incrementCount');
    let count = getContext('count');

    function myEvent() {
			handleIncrementCount();
			console.log(count);
		}
</script>

<button on:click={myEvent}>count 초기값: [{count}]</button>

<!--
패널에 보이는 count는 올라가지만,
console.log로 찍은 count는 10에 고정되어있다.

패널에 보이는 count는 App과 panel이 Props로 전달하여 공유하는 state이고,
버튼이 받은 초기값 count는 그저 데이터가 담긴 복사본을 받은 것과 같다.
즉, 이는 App과 panel의 count와 바인딩되어 공유되는 값이 아니다.
따라서 반응성적으로 동작하지 않는다.

이러한 한계점으로 인해
context API는 이벤트함수를 공유하거나 바뀌지 않아도 되는 초기값을 공유할 때 사용된다.
-->