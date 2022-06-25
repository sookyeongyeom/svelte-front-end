<script>
    import {getContext} from 'svelte';

    let handleIncrementCount = getContext('incrementCount');
    let count = getContext('count');

    function myEvent() {
			handleIncrementCount();
			console.log(count);
		}
</script>

<button on:click={myEvent}>count 초기값: [{count}]</button>