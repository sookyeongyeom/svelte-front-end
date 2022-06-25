<style>
    .contact_card {
        width: 300px;
        border: 1px solid #aaa;
        border-radius: 2px;
        box-shadow: 2px 2px 8px rgba(0,0,0,0.1);
        padding: 1em;
    }

    h2 {
        padding: 0 0 0.2em 0;
        margin: 0 0 1em 0;
        border-bottom: 3px solid #ffdddd;
    }

    .address, .email {
        padding: 0 0 0 1.5em;
        background: 0 50% no-repeat;
        background-size: 1em 1em;
        margin: 0 0 0.5em 0;
        line-height: 1.2;
    }

    .address { background-image: url(https://www.emojiall.com/en/header-svg/%F0%9F%8F%A0.png);}
    .email { background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaIsknC_HoFhnYjZEMAcuda7JxLxGh3FlLow&usqp=CAU); }
    .missing { color: #999 }
</style>

<article class="contact_card">
    <h2>
        <slot name=name>
            <span class=missing>이름 미입력</span>
        </slot>
    </h2>

    <div class=address>
        <slot name=address>
            <span class=missing>주소 미입력</span>
        </slot>
    </div>

    <div class=email>
        <slot name=email>
            <span class=missing>이메일 미입력</span>
        </slot>
    </div>
</article>


