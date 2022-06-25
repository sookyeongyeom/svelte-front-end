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

<ul>
    {#each todos as todo}
        <li>
            <span>{todo.id}</span>
            <span>{todo.content}</span>
            <span>{todo.done}</span>
        </li>
    {/each}
</ul>