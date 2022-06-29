<script>
    import { fly } from 'svelte/transition';

    let visible = false;
</script>

<label>
    <input type=checkbox bind:checked="{visible}"/>
    효과 보기
</label>

{#if visible}
    <!-- 시작 좌표 (x, y) 필수 설정 -->
    <div transition:fly="{{x:200, y:100}}" class="wrap">
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