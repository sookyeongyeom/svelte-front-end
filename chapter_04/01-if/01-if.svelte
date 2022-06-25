<script>
    let user = { loggedIn: false };

    function toggle(){
        user.loggedIn = !user.loggedIn;
    }
</script>

<!-- 로그인 상태 -->
{#if user.loggedIn}
    <button on:click="{toggle}">Logout</button>
    <p>로그인 상태입니다.</p>
{/if}

<!-- 로그아웃 상태 -->
{#if !user.loggedIn}
    <button on:click="{toggle}">Login</button>
    <p>로그아웃 상태입니다.</p>
{/if}