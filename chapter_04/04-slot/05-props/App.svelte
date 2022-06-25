<script>
    import Card from "./card.svelte"
</script>

<Card let:hovering>
    <span slot=name>염초코</span>
    <span slot=address>서울특별시 마포구</span>
    <span slot=email>
        {#if hovering}
            <b>sookyeong.dev@gmail.com</b>
        {:else}
            sookyeong.dev@gmail.com
        {/if}
    </span>
</Card>