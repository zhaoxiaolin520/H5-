<template>
    <v-touch tag="div" class="page1" v-on:swipeup="UP()">
        <div class="qipao qipao1"></div>
        <div class="content">
            <span class="title">2018</span>
            <span class="subtitle">Hyundai Blue Prize</span>
            <span class="text1">助力中国青年策展人的</span>
            <span class="text2">多领域实践平台</span>
            <span class="line"></span>
            <span class="text1">入围作品线上投票</span>
            <span class="text3">正式开启</span>
        </div>
        <div class="qipao qipao2">
            <div class="cur" align="center">
                <span class="up">↑</span>
                <span>向上滑动</span>
            </div>
        </div>
    </v-touch>
</template>

<script>
    import $ from 'jquery'
    export default {
        methods: {
            UP() {
                this.$emit('myEvent',true);
                $('body').css('overflow','scroll');
                $('.main').css('height','auto')
            }
        }
    }
</script>

<style lang="scss">
    .page1 {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: skyblue;
    }
    .qipao {
        width: 110%;
        height: 50%;
        left: -5%;
        border: 1px solid #fff;
        position: absolute;
    }
    .qipao1 {
        top: -25%;
        border-bottom-right-radius: 50%;
        border-bottom-left-radius: 50%;
    }
    .qipao2 {
        bottom: -25%;
        border-top-right-radius: 50%;
        border-top-left-radius: 50%;
    }
    .cur {
        width: 20%;
        height: 20%;
        position: absolute;
        top: 0;
        bottom: 50%;
        left: 0;
        right: 0;
        margin: auto;
        color: #fff;
    }
    .cur span {
        display: block;
        height: 1.3125rem;
        text-align: justify;
    }
    .cur span:after {
        content: '';
        width: 100%;
        height: 0;
        margin: 0;
        display: inline-block;
        overflow: hidden;
    }
    .cur span.up {
        text-align: center;
        -webkit-animation: up 1s linear 0s infinite;
        -o-animation: up 1s linear 0s infinite;
        animation: up 1s linear 0s infinite;
    }
    @keyframes up {
        0% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        100% {
            -webkit-transform: translateY(-60%);
            transform: translateY(-60%);
        }
    }
    .content {
        width: 62%;
        height: calc(100% / 2);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    .content span{
        display: block;
        height: 1.8125rem;
        font-size: 1.375rem;
        color: #fff;
        text-align: justify;
    }
    .content span:after {
        content: '';
        width: 100%;
        height: 0;
        margin: 0;
        display: inline-block;
        overflow: hidden;
    }
    .title {
        -webkit-animation: come .5s linear 0s 1;
        -o-animation: come .5s linear 0s 1;
        animation: come .5s linear 0s 1;
    }
    @keyframes come {
        0% {
            opacity: 0;
            -webkit-transform: translateX(-100%);
            transform: translateX(-100%);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
    }
    .subtitle {
        -webkit-animation: big 1s linear 0s 1;
        -o-animation: big 1s linear 0s 1;
        animation: big 1s linear 0s 1;
    }
    @keyframes big {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
        }
        50% {
            -webkit-transform: scale(1.5);
            transform: scale(1.5);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }
    .content span.text1 {
        font-size: 1.1875rem;
        -webkit-animation: slide 1s linear 0s 1;
        -o-animation: slide 1s linear 0s 1;
        animation: slide 1s linear 0s 1;
    }
    .content span.text2 {
        font-size: 1.5rem;
        -webkit-animation: slide 1s linear 0s 1;
        -o-animation: slide 1s linear 0s 1;
        animation: slide 1s linear 0s 1;
    }
    .content span.text3 {
        font-size: 2rem;
        -webkit-animation: slide 1s linear 0s 1;
        -o-animation: slide 1s linear 0s 1;
        animation: slide 1s linear 0s 1;
    }
    .content span.line {
        height: .90625rem;
        margin-bottom: .90625rem;
        border-bottom: 1px solid #fff;
        -webkit-animation: slide 1s linear 0s 1;
        -o-animation: slide 1s linear 0s 1;
        animation: slide 1s linear 0s 1;
    }
    @keyframes slide {
        0% {
            opacity: 0;
            -webkit-transform: translateY(50px);
            transform: translateY(50px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
    }
</style>