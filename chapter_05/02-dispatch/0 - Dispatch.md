# Dispatch

## 필요성

Dispatch는 이벤트 전달을 위한 통신방법이다.  
Props를 이용하여 이벤트를 전달할 경우 상위 계층에서 하위 계층에 도달할 때까지 계속해서 Props를 전달 후 export let으로 이벤트 메소드를 전달받아야 하는 번거로움이 있다.

Svelte에서는 컴포넌트 간 이벤트 버블링이 발생하지 않으므로, 이벤트 전달을 위한 기능으로 Dispatch를 제공한다.

> 이벤트 버블링(Event Bubbling)

하위 요소에서 이벤트가 발생해 상위 요소로 전달되는 것 (이벤트가 발생한 곳에서 이벤트가 필요한 곳으로 전달하는 것)

> 이벤트 캡처(Event Capture)

상위 요소에서 이벤트가 발생한 하위 요소로 찾아가는 것

## 사용법

이벤트가 발생하는 곳에서 createEventDispatcher라는 메소드를 이용해 이벤트를 만들고, 이것을 상위 컴포넌트로 전달한다.  
이 때, 전달방향을 `하위 컴포넌트(이벤트 발생 컴포넌트) → 상위 컴포넌트`로 이해해야 한다.

```javascript
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();

// Dispatch 생성방법
dispatch("add", {
    value: "전달할 값",
    message: "전달할 메시지",
});

// 전달방법
<컴포넌트 이름 on:dispatch 이름 />;
```
