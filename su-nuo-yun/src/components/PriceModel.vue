<template>
  <div class="price-model">
    <div class="price-model-title">
      <div class="h3-gray">{{price.title}}</div>
      <div class="h2-black-bold">
        {{price.price}}元/每月
      </div>
      <div class="intro">
        {{price.intro}}
      </div>
      <hr />
    </div>
    <div class="price-model-content">
      <ul>
        <li><b>{{price.line}}</b>线路</li>
        <li><b>{{price.memory}}</b>空间/<b>{{price.sqlMemory}}</b>数据库</li>
        <li><b>{{price.flow}}</b> 每月流量</li>
        <li><b>{{price.defense}}</b> 单机防御</li>
        <li><b>{{price.otherNum}}</b> {{price.otherContent}}</li>
        <li><b>{{price.domain}}</b> 绑域名数量</li>
        <li><b>{{price.env}} 环境</b></li>
      </ul>
      <hr />
      <button class="btn btn-outline-primary"><b>立即购买</b></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PriceModel',
    props: ['price']
  }
</script>

<style lang="stylus" scoped>
  ul
    list-style none
    padding 0
  .price-model
    text-align center
    background-color #f9f9f9
    border 1px solid #e5e5e5
    width 24%
    padding 2rem 1rem
    transition all .5s
    position relative
    .intro
      margin 0
    .price-model-content
      ul
        b
          color #4993ea
          font-weight 600
      /*text-align center*/
      color #566d78
      font-weight 500
      font-size 1rem
    &:hover
      box-shadow 0 0 10px 0 rgba(56, 113, 175, 0.5)
      border-radius 1rem
      z-index 999
      transform: scale(1.03)
</style>
