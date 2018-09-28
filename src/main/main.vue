<template>
    <div class="page1">
        <ul class="nav">
            <li v-for="v in list" @click="change(v.url)" :class="{active: $route.path.indexOf(v.url) != -1}">{{v.text}}</li>
        </ul>
        <div id="page">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                list: [
                    {
                        text: '活动介绍',
                        url: '/active'
                    },
                    {
                        text: '评委',
                        url: '/rater'
                    },
                    {
                        text: '投票',
                        url: '/vote/'
                    }
                ]
            }
        },
        methods: {
            change(url) {
                this.$router.push({path:url})
                console.log(this.$route)
            }
        }
    }
</script>

<style lang="scss">
    #page {
        -webkit-animation: slide .5s linear 0s 1;
        -o-animation: slide .5s linear 0s 1;
        animation: slide .5s linear 0s 1;
    }
    .nav {
        width: 100%;
        position: fixed;
        bottom: 0;
        -webkit-animation: slide .5s linear 0s 1;
        -o-animation: slide .5s linear 0s 1;
        animation: slide .5s linear 0s 1;
    }
    .nav li {
        float: left;
        width: calc(100% / 3);
        height: 3.125rem;
        line-height: 3.125rem;
        color: #fff;
        text-align: center;
        background-color: cyan;
        font-weight: bolder;
    }
    .nav li.active {
        background: rgb(230, 245, 255);
        color: skyblue;
    }
</style>