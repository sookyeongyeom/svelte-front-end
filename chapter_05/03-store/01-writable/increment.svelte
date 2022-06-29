<script>
    import {count} from './store.js';

    function increment(){
        count.update(count=>++count);
    }
</script>

<button on:click={increment}>+</button>