<script>
    import { fade } from 'svelte/transition';
    import { quintIn, backOut } from 'svelte/easing';

    let visible = false;
</script>

<label>
    <input type=checkbox bind:checked="{visible}"/>
    효과 보기
</label>

{#if visible}
    <!-- transition:fade -->
    <!-- transition:fade="{{delay:1000, duration:1000}}" -->
    <div transition:fade="{{easing: quintIn}}" class="wrap">
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

<!--
easing 관련 효과 확인
https://svelte.dev/examples#easing
-->