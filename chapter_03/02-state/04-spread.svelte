<script>
    let list = [
        {
            id: 0,
            content: "첫 번째 할 일",
            done: false
        },
        {
            id: 1,
            content: "두 번째 할 일",
            done: false
        },
        {
            id: 2,
            content: "세 번째 할 일",
            done: true
        }
    ]

    const handleAddTodo = ()=>{
        const todo = {
            id: list.length+1,
            content: "새로운 할 일",
            done: false
        }
        
        list = [...list, todo];     // 스프레드 연산자 (추가하여 즉시 재할당)
    }
</script>

<ul>
    {#each list as item}
        <li>
            <p>{item.id}</p>
            <p>{item.content}</p>
            <p>{item.done}</p>
        </li>
    {/each}
</ul>

<button on:click="{handleAddTodo}">할 일 추가</button>