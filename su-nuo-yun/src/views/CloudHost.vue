<template>
  <div id="cloud-host">
    <des
      title="云虚拟主机"
      subTitle=""
      describe="基于SAS卓越性能构建的 PHP专用主机，搭配Kangle面板。从单个网站最优价格，到多个站点最复杂的运算和最繁重的流量需求，均可满足"
      styleModel="default"
    />
    <div class="bg-light">
      <div class="flex-center">
        <div class="content-title">
          <div class="h1-black-bold">套餐/金额</div>
          <div class="intro">所有型号支持轻松安装 WordPress/Discuz/ECshop等常用程序</div>
        </div>
        <div class="price-content">
          {{price}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Des from '@/components/Describe.vue'
  import defaultPrice from '@/assets/data/cloudHostPrice'

  export default {
    name: "cloud-host",
    props:['line'],
    components: {
      Des
    },
    computed: {
      price() {
        return this.line
      }
    },
    data () {
      return {
        defaultPrice
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #cloud-host
    /*color white*/
  .content-title
    padding-top 5rem
    padding-bottom 5rem
</style>
