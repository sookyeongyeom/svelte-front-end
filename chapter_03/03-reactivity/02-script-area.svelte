<script>
    let count = 1;
    $: doubled = count*2;   // 상태값을 참조하는 새로운 변수: 해당 변수가 참조하는 상태값들이 변경될 경우 이를 감지해 자동으로 함께 변경됨
    
    // 블록으로 감싼 부분의 상태값이나 반응성코드가 변경되면 해당 블록 내부의 코드들도 자동으로 호출됨
    $: { 
        console.log(count);
        console.log(doubled);
    }

    function handleClick() {
        count++;
    }
</script>

<button on:click="{handleClick}">클릭수 {count} {count === 1 ? 'time' : 'times'}</button>

<p> {count}의 두배는 {doubled}!</p>