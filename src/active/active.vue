<template>
    <div class="container">
        <div class="info">
            <div class="bg">
                <div class="font">
                    <span>“Future Humanity”</span>
                    <span>“未来演化”</span>
                </div>
            </div>
            <div class="tit">
                <span>2018</span>
                <span>Hyundai Blue Prize</span>
            </div>
            <div class="con">
                "未来演化"（Future Humanity）是本届展览创作的灵感，结合现代汽车的Creative Energy理念，意在激发和寻求人类与科技、文化以及我们自身相关的共同愿景和使命。通过本次大奖，在发现中国策展新力量的同时，激发出更多关注当先和未来社会发展的论题与大众共享。
            </div>
            <div class="con">
                "未来演化"（Future Humanity）是本届展览创作的灵感，结合现代汽车的Creative Energy理念，意在激发和寻求人类与科技、文化以及我们自身相关的共同愿景和使命。通过本次大奖，在发现中国策展新力量的同时，激发出更多关注当先和未来社会发展的论题与大众共享。
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss">
    .container {
        width: 80%;
        margin: 0 auto;
    }
    .container .info .bg {
        position: relative;
        top: -1.5rem;
        text-align: center;
        height: 12.9rem;
        background: url("../assets/image/Layer 567.png") no-repeat;
        background-size: cover;
        color: skyblue;
        font-size: 1.2rem;
        font-weight: bold;
    }
    .container .info .bg .font {
        width: 100%;
        height: 37%;
        position: absolute;
        bottom: 0;
    }
    .container .info .bg .font span {
        display: block;
    }
    .container .info {
        color: #fff;
    }
    .container .info .tit {
        width: 57%;
        margin: 0 auto;
        margin-bottom: 1.125rem;
        font-size: 1rem;
    }
    .container .info .tit span{
        display: block;
    }
    .container .info .con{
        font-size: .9rem;
        text-align: justify;
        margin-bottom: 3.125rem;
    }
</style>