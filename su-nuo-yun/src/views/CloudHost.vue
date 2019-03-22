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
          <price-model v-for="price in prices" :key="price.price" :price="price" />
        </div>
      </div>
    </div>
    <div class="bg-gray price-wrapper flex-middle">
      <div class="price-tag-wrapper">
        <div class="price-tag hvr-float-shadow">
          <div class="text">
            动态BGP直连骨干网络
            <div class="intro">
              采用动态BGP企业专线直连骨网，速度与稳定性远超普通友商，免备案沿海 ping≤10ms
            </div>
          </div>
        </div>
        <div class="price-tag hvr-float-shadow">
          <div class="text">
            SAS高速运转
            <div class="intro">
              标配SAS企业硬盘，机器运行和数据处理速度超出普通硬盘2倍以上，即使高负载工作也能轻松应对
            </div>
          </div>
        </div>
        <div class="price-tag hvr-float-shadow">
          <div class="text">
            免费可信SSL证书
            <div class="intro">
              独家免费开放SSL证书功能，一键申领可信证书，支持一键安装，轻松实现全站https加密
            </div>
          </div>
        </div>
        <div class="price-tag hvr-float-shadow">
          <div class="text">
            PHP版本一键切换
            <div class="intro">
              利用我们精巧的一键式PHP版本切换功能，PHP 5.2/5.3/5.4/5.5/5.6/7.0/7.1可选，总能找到您所需的PHP
            </div>
          </div>
        </div>
        <div class="price-tag hvr-float-shadow">
          <div class="text">
            轻松安装网站程序
            <div class="intro">
              常用Web程序如WordPress/Zblog/Discuz/帝国CMS/DedeCMS均可即刻迁移到您的主机
            </div>
          </div>
        </div>
        <div class="price-tag hvr-float-shadow">
          <div class="text">
            一键清空/重建资源
            <div class="intro">
              云虚拟主机环境一键清空/重建，轻松重置建站环境，灵活应对多样化需求
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light" style="min-height: 300px">

    </div>

    <des
      title="轻击鼠标"
      subTitle="即刻创建网站"
      describe="创建网站看起来十分复杂，我们让它变得简单。 无需上传文件，您可一键安装WordPress/Discuz以及更多博客/论坛/CMS系统。
如果您有特殊的程序需求，可提交服务单获取“程序免费安装”服务。"
      styleModel="transparent"
    />
  </div>
</template>

<script>
  import des from '@/components/Describe.vue'
  import priceModel from '@/components/PriceModel.vue'
  import defaultPrice from '@/assets/data/cloudHostPrice'

  export default {
    name: 'cloud-host',
    props: ['line'],
    components: {
      des,
      priceModel
    },
    computed: {
      prices () {
        return defaultPrice[this.line]
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
    .price-content
      width 80%
      padding-bottom 6rem
      display flex
      justify-content space-between
      margin 0 auto
    .price-wrapper
      width 100%
      padding 6rem
      .price-tag-wrapper
        width 92%
        flex-flow: row wrap
        display flex
        justify-content space-between
        .price-tag
          padding 1.5rem 2rem
          text-align left
          background-color #fcfcfc
          width 30%
          margin 1rem 0
          .intro
            text-align left
            font-size 0.7rem
            margin 0.5rem 0
      *
        cursor pointer
</style>
