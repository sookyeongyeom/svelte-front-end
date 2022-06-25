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

<!-- 요소를 추가/삭제하는 경우 꼭 키값(요소의 고유값)을 설정하는 것이 좋음
키값을 줌으로써 요소들의 위치를 개발자가 원하는 방향으로 제어할 수 있음 -->
<ul>
    {#each todos as todo (todo.id)}
        <li>
            <span>{todo.id}</span>
            <span>{todo.content}</span>
            <span>{todo.done}</span>
        </li>
    {/each}
</ul>