<script>
    import { scale } from 'svelte/transition';

    let visible = false;
</script>

<label>
    <input type=checkbox bind:checked="{visible}"/>
    효과 보기
</label>

{#if visible}
    <div transition:scale="{{start:5}}" class="wrap">
        <h1>transition 예제</h1>
    </div>
{/if}

<style>
    .wrap {
        padding:20px;
        background-color:#288edd;
        text-align:center;
    }
</style>