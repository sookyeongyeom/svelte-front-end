<script>
    let current = "one";
</script>

<button
    class:active="{current==='one'}"
    on:click="{() => current = 'one'}">
    첫 번째
</button>

<button
    class:active="{current==='two'}"
    on:click="{() => current = 'two'}">
    두 번째
</button>

<button
    class:active="{current==='three'}"
    on:click="{() => current = 'three'}">
    세 번째
</button>

<style>
    button {
        display: block;
    }

    .active {
        background-color: #ff3e00;
        color: white;
    }
</style>