<script>
    let todos = [
        {
            id:1,
            content:"첫 번째 할 일",
            done:false
        },
        {
            id:2,
            content:"두 번째 할 일",
            done:true
        },
        {
            id:3,
            content:"세 번째 할 일",
            done:false
        },
    ]
</script>

<!-- 인덱스는 반복블록의 두 번째 인자로 설정되어있음 -->
<ul>
    {#each todos as {id, content, done}, i}
        <li>
            <span>{i} →</span>
            <span>{id}</span>
            <span>{content}</span>
            <span>{done}</span>
        </li>
    {/each}
</ul>