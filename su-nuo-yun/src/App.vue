<template>
  <div id="app">
    <div id="nav">
      <div class="navWrapper">
        <div class="navs">
          <div class="logo">
            <img alt="Vue logo" src="./assets/logo.png">
          </div>
          <div class="nav">
            <a href="#">产品中心</a>
            <a href="#">云服务器</a>
            <a href="#">服务器租用</a>
            <a href="#">平台与技术</a>
            <a href="#">关于</a>
          </div>
        </div>

        <div class="nav">
          <a href="#" style="padding-right: 10rem">会员登录</a>
        </div>
      </div>
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    </div>
    <router-view/>
  </div>
</template>
<style lang="stylus">
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

  #nav
    width: 100%;
    height: 4rem;
    margin: 0;
    z-index: 100;
    overflow: visible;
    position: fixed;
    background-color: rgb(255, 255, 255);
    box-shadow: 1px 1px 1px 1px rgba(172, 172, 172, 0.4);
    .navWrapper
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .navs
        display: flex;
        justify-content: space-between;
        .logo
          margin-left: 5rem;
          display flex
          align-items center
          img
            width 30px
            height 30px
      .nav
        display: flex;
        justify-content: space-around;
        align-items: center;
        a
          margin-left: 2rem;
          text-decoration: none;
          color: #8d8d8d;
          font-weight: bold;
</style>
