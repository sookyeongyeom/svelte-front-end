<script>
    import Card from "./card.svelte"
</script>

<!-- 각 slot 내부를 완전히 대체한다고 생각하면 됨 -->
<Card>
    <!-- name값으로 개별 슬롯을 지정할 수 있음 -->
    <span slot=name>염초코</span>
    <span slot=address>서울특별시 마포구</span>
</Card>