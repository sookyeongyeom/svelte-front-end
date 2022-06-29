<script>
    let active;
</script>

<style>
    .box {
        padding:10px;
        border:1px solid #FF003A;
    }

    .checkBorder {
        border:5px solid #FF003A;
    }
</style>

<input type=checkbox bind:checked="{active}"/>Bold

<p class=box class:checkBorder={active}>Style Box</p>