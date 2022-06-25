# Context API

## 필요성

컴포넌트끼리 거리가 있을 때, 모든 계층을 타고 Props를 전달하는 것은 효율적이지 못하다.  
이 때 Context API를 사용하면 상위 계층에서 바로 특정 하위 계층으로 상태값 또는 이벤트 메소드를 전달할 수 있다.

## 사용법

### 상위 계층

```javascript
<script>
import {setContext} from 'svelte';

const setValues = {
    a: 1,
    b: 2
};

setContext('키값', setValue);
</script>
```

### 하위 계층

```javascript
<script>
    import {getContext} from 'svelte'; const getValue = getContext('키값');
</script>
```

## 한계점

가장 큰 한계점은 반응성적으로 작동하지 않는다는 것이다.  
버튼의 count는 getContext로 받아와서 설정했으므로 처음 로드될 때의 값인 10은 정상적으로 나타난다.  
하지만 버튼을 클릭해 값을 증가시키더라도 버튼의 count 값은 변경이 일어나지 않는다.  
따라서 보통 context API는 첫 로드 때 받은 값을 변경할 필요가 없거나, 이벤트 메소드를 전달할 때 유용하다.
