<script>
    import {onMount, onDestroy, beforeUpdate, afterUpdate} from 'svelte';
    import Child from "./child.svelte"

    onMount(async() => {
        console.log('Parent onMount');
    })

    onDestroy(async() => {
        console.log('Parent onDestroy');
    })

    beforeUpdate(async() => {
        console.log('Parent beforeUpdate');
    })

    afterUpdate(async() => {
        console.log('Parent afterUpdate');
    })
</script>

<h1>부모컴포넌트</h1>
<Child/>

<!--
"Parent beforeUpdate"
"Child beforeUpdate"
"Child onMount"
"Child afterUpdate"
"Parent onMount"
"Parent afterUpdate"
-->