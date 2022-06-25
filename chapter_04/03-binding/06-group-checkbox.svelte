<script>
    let numbers = [
        'one',
        'two',
        'three',
    ]

    let getNumbers = []
</script>

<!-- getNumbers: 같은 group으로 묶인 checkbox 중 check된 박스의 value의 배열 -->
{#each numbers as number}
    <label>
        <input type="checkbox" bind:group={getNumbers} value={number}>
        {number}
    </label>
{/each}

<p>선택된 숫자들: {getNumbers}</p>