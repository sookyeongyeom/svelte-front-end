<script>
    let selected = 0;
</script>

<h2>Size</h2>

<!-- selected: 같은 group으로 묶인 라디오 버튼들 중 선택된 버튼의 value -->
<label>
    <input type=radio bind:group={selected} value={1}>
    One Scoop
</label>

<label>
    <input type=radio bind:group={selected} value={2}>
    Two Scoops
</label>

<label>
    <input type=radio bind:group={selected} value={3}>
    Three Scoops
</label>

<p>선택된 라디오 버튼: {selected}번째</p>