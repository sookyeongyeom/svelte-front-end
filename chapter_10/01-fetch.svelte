<script>
    let page = 1;
    let limit = 10;

    $: items = fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    ).then((response) => response.json());

    function nextPage() {
        page++;
    }
</script>

<header>
    <div>
        <h1>REST API PAGE</h1>
    </div>
</header>

<div>
    <div>
        <span>PAGE: {page}</span>
    </div>
</div>

<div>
    {#await items}
        <p>...Loading</p>
    {:then items}
        <ul>
            {#each items as item, index}
                <li>
                    <p>[{item.id}] {item.title}</p>
                </li>
            {/each}
        </ul>
    {:catch error}
        <p>오류가 발생했습니다.</p>
    {/await}

    <a href="#null" on:click={nextPage}>NEXT PAGE</a>
</div>
