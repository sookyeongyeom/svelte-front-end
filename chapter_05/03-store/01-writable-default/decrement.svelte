<script>
    import {count} from './store.js';

    function decrement(){
        count.update(count=>--count);
    }
</script>

<button on:click={decrement}>-</button>