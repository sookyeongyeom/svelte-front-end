# Config File

## Usage of readable store

원격 또는 로컬에서 설정파일을 가져와 readable에 넣어 사용하는 방법도 있다.  
이런 설정파일은 수정할 일이 잘 발생하지 않으므로 readable을 이용하면 좋다.

```javascript
import { readable } from 'svelte/store';

export const siteConfig = readable(
    [],
    set => {
        const res = await fetch('https://원격주소');
        const conf = await res.json();
        set(conf);
    }
)
```
