import { writable } from "svelte/store";

function createCount() {
    const { subscribe, set, update } = writable(0);

    // 사용자 정의 메소드
    const increment = () => update((count) => ++count);
    const decrement = () => update((count) => --count);
    const reset = () => set(0);

    return {
        subscribe,
        increment,
        decrement,
        reset,
    };
}

export const count = createCount();
