<script>
    import Increment from "./increment.svelte";

    let value = 0;
</script>

<input type=number bind:value="{value}">

<h2>{value}</h2>

<Increment bind:count={value}/>