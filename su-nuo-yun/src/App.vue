<template>
  <div id="app">
    <div id="nav">
      <div class="navWrapper">
        <div class="navs">
          <div class="logo">
            <router-link to="/">
              <img alt="Vue logo" src="./assets/logo.png">
            </router-link>
          </div>
          <div class="nav" id="menu">
            <a href="/#slide">首页</a>
            <!--<a href="/cloud-host/GD">云虚拟主机</a>-->
            <div class="">
              <span>云虚拟主机</span>
              <ul>
                <li><a href="/cloud-host/GD">广东电信</a></li>
                <li><a href="/cloud-host/JS">江苏电信</a></li>
                <li><a href="/cloud-host/HK">香港高防</a></li>
                <li><a href="/cloud-host/US">美国高防</a></li>
                <li><a href="/cloud-host/HK2">香港无防</a></li>
                <li><a href="/cloud-host/MZ">秒赞专用</a></li>
              </ul>
            </div>
            <a href="/cloud-serve">云服务器</a>
            <router-link to="/">数据中心</router-link>
            <router-link to="/">服务器租用</router-link>
            <router-link to="/">平台与技术</router-link>
            <a href="/#about">联系我们</a>
          </div>
        </div>

        <div class="nav">
          <a href="#" style="padding-right: 10rem">会员登录</a>
        </div>
      </div>
    </div>
    <router-view class="mt4"/>
    <div class="back-top" v-show="show">
      <button class="btn btn-sm btn-primary" @click="$scrollTo($event, '.nav')">置顶</button>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        show: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleIsScroll)
    },
    methods:{
      handleIsScroll(){
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        const offsetTop = document.querySelector('#nav').offsetTop + 200
        if (scrollTop > offsetTop){
          this.show = true
        }
        else
          this.show = false
      }
    }
  }
</script>
<style lang="stylus" scoped>
  html
    width:100%
    height:100%
    body
      font-family: '华文细黑'
      background: url("./assets/img/1.jpg") repeat-y
      background-size: 100%
      font-size: 1rem
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    /*text-align center*/
    color #2c3e50
  .mt4
    margin-top 4rem
  .back-top
    position fixed
    bottom 1rem
    right 1rem
    transition all .5s ease-in-out
  #nav
    width: 100%
    height: 4rem
    margin: 0
    z-index: 1001
    overflow: visible
    position: fixed
    top 0
    left 0
    right 0
    background-color: rgb(255, 255, 255)
    box-shadow: 1px 1px 1px 1px rgba(172, 172, 172, 0.4)
    .navWrapper
      width: 100%
      height: 100%
      display: flex
      justify-content: space-between
      .navs
        display: flex
        justify-content: space-between
        .logo
          margin-left: 5rem
          display flex
          align-items center
          img
            width 30px
            height 30px
      .nav
        display: flex
        justify-content: space-around
        align-items: center
        a, div
          cursor pointer
          margin-left: 2rem
          text-decoration: none
          color: #8d8d8d
          font-weight: bold
          &:hover
            color #4fa1ff
        div
          /*overflow: hidden*/
          position relative
          height 100%
          display flex
          justify-content center
          align-items center
          ul
            background-color #fff
            z-index 1001
            list-style none
            position absolute
            visibility hidden
            top 4rem
            left -1rem
            text-align center
            opacity 0
            width 7rem
            padding-bottom 1rem
            padding-left 0
            box-shadow 0 5px 3px 0 rgba(0,0,0,.4)
            border-radius 0 0 5px 5px
            transition all .3s ease-in-out
            li
              padding .5rem
              font-size .9rem
              a
                margin 0
          &:hover > ul
            visibility visible
            opacity 1

  .flex-middle
    display: flex
    flex-wrap: wrap
    flex-direction: row
    justify-content: center
    align-items: center

</style>
