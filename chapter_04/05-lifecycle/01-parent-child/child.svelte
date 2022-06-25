<script>
    import {onMount, onDestroy, beforeUpdate, afterUpdate} from 'svelte';

    onMount(async() => {
        console.log('Child onMount');
    })

    onDestroy(async() => {
        console.log('Child onDestroy');
    })

    beforeUpdate(async() => {
        console.log('Child beforeUpdate');
    })

    afterUpdate(async() => {
        console.log('Child afterUpdate');
    })
</script>

<p>자식컴포넌트</p>