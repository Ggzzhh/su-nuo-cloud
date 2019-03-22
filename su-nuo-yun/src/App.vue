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
            <a href="/cloud-host/GD">云虚拟主机</a>
            <router-link to="/about">云服务器</router-link>
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
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    </div>
    <router-view class="mt4"/>
  </div>
</template>
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
    text-align center
    color #2c3e50
  .mt4
    margin-top 4rem

  #nav
    width: 100%
    height: 4rem
    margin: 0
    z-index: 100
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
        a
          margin-left: 2rem
          text-decoration: none
          color: #8d8d8d
          font-weight: bold
          &:hover
            color #4fa1ff
  .flex-middle
    display: flex
    flex-wrap: wrap
    flex-direction: row
    justify-content: center
    align-items: center

</style>
