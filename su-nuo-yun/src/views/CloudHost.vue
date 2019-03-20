<template>
  <div id="cloud-host">
    <des
      title="云虚拟主机"
      subTitle=""
      describe="基于SAS卓越性能构建的 PHP专用主机，搭配Kangle面板。从单个网站最优价格，到多个站点最复杂的运算和最繁重的流量需求，均可满足"
      styleModel="default"
    />
    <div class="bg-light" style="height: 100vh">
    </div>
  </div>
</template>

<script>
  import Des from '@/components/Describe.vue'

  export default {
    name: "cloud-host",
    components: {
      Des
    }
  }
</script>

<style lang="stylus" scoped>
  #cloud-host
    color white

</style>
