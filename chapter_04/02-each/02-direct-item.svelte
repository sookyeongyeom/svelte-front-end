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

<!-- Object Destructuring -->
<ul>
    {#each todos as {id, content, done}}
        <li>
            <span>{id}</span>
            <span>{content}</span>
            <span>{done}</span>
        </li>
    {/each}
</ul>