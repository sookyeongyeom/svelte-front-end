<script>
    let boxChecked = true;
</script>

<label>
    체크박스 예제
    <input type=checkbox bind:checked="{boxChecked}">
</label>

<button disabled={!boxChecked}>전송</button>