<script>
    let x = 14;
</script>

{#if x>10}
    <p>{x}는 10보다 큽니다.</p>
{:else if 5>x}
    <p>{x}는 5보다 작습니다.</p>
{:else}
    <p>{x}는 5와 10 사이입니다.</p>
{/if}