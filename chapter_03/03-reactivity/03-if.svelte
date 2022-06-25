<script>
    let count = 1;
    $: doubled = count*2;
    
    // 조건절이 상태값에 반응하게 함
    $: if(count>=10) { 
        console.log('카운트가 10을 넘었습니다.');
        count = 9;
    }

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