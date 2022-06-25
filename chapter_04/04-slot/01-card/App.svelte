<script>
    import Card from './card.svelte'
</script>

<!-- 슬롯을 이용하면 자식컴포넌트에서 정의된 CSS 및 태그 골격을 쉽게 재사용할 수 있음 -->
<Card>
    <h2>안녕하세요!</h2>
    <p>이곳은 내용이 들어가는 영역입니다.</p>
</Card>

<Card>
    <h2>Hello Svelte</h2>
    <p>오 진짜 말그대로 슬롯이네</p>
    <p>스벨트 반가워!</p>
</Card>