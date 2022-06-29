<script>
    import {spring} from 'svelte/motion';

    let coords = spring({x:50, y:50}, {
        stiffness: 0.2,
        damping: 0.1
    });
    
    // stiffness: 강성
    // damping: 제동
    // precision: 정밀도
</script>

<svg on:mousemove="{e=>coords.set({x:e.clientX, y:e.clientY})}">
    <circle cx={$coords.x} cy={$coords.y} r=20/>
</svg>

<style>
    svg {
        width:100%;
        height:100%
    }
    circle {
        fill:#ff3e00;
    }
</style>