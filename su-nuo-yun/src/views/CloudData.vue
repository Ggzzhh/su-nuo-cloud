<template>
  <div id="cloud-data">
    <des
      title="速诺云"
      subTitle="服务器租用"
      describe="服务器基于SSD高效能运算和Intel® Xeon® L5630处理器构建，以12*10GE高速光纤直连ChinaNET西北骨干
节点，端到端最高延迟＜50ms，全网访问IP极速连接."
      styleModel="transparent"
      :contentStyle="contentStyle"
    />

    <div class="flex-middle bg-light">
      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="col-7 p-5">
            <h5 class="text-primary"><b>BGP极速互联</b></h5>
            <h4>
              <b>以最低成本获取高效能。</b>
            </h4>
            <p class="mt-4 text-black-50 mb-4">
              服务器部署在中国各个大数据中心，是政府重点扶持的互联网数据存储、运算以及信息灾备基地。机房不仅通过12*10GE光纤直接中国电信骨干节点，更与中国联通线路互联互通，面向电信、联通、移动、铁通等全覆盖的客户群，提供高速网络。
            </p>
            <ul class="des-ul">
              <li>
                100%备案成功率。
                <span class="text-danger">
                  15-30日备案时间，备案专员全程协助，直至成功!
                </span>
              </li>
              <li>
                高速网络骨干。
                <span class="text-danger">
                  12*10GE光纤接入ChinaNet骨干节点，全国极速连接
                </span>
              </li>
              <li>
                BGP互通。
                <span class="text-danger">
                                  电信联通互联互通，直达电信、联通、移动、铁通客户群
                </span>
              </li>
              <li>
                免费组内网。
                <span class="text-danger">
                                  多台机器免费组建内部专用网络，互联速度≥1000Mbps

                </span>
              </li>
              <li>
                深度监控。
                <span class="text-danger">
                                  流量实时监控、记录，并呈现为清晰的实时/历史流量图

                </span>
              </li>
              <li>
                极致安全。
                <span class="text-danger">
                                  多层数据流量监控以及独立防火墙隔离各个互联网连线

                </span>
              </li>
            </ul>
          </div>
          <div class="col-5">
            <div class="row">
              <div class="col-6 hvr-wobble-vertical">
                <div class="card flex-middle mb-3 mt-3 p-3">
                  <img class="card-img-top mt-2" src="../assets/img/svg/cn_icon1f195.svg" alt="">
                  <div class="card-body">
                    <p class="card-text">
                      BGP极速互访
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-6 hvr-wobble-vertical">
                <div class="card flex-middle mb-3 mt-3 p-3">
                  <img class="card-img-top mt-2" src="../assets/img/svg/cn_icon2f195.svg" alt="">
                  <div class="card-body">
                    <p class="card-text">
                      24x7技术支持
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-6 hvr-wobble-vertical">
                <div class="card flex-middle mb-3 mt-3 p-3">
                  <img class="card-img-top mt-2" src="../assets/img/svg/cn_icon3f195.svg" alt="">
                  <div class="card-body">
                    <p class="card-text">
                      极致安全
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-6 hvr-wobble-vertical">
                <div class="card flex-middle mb-3 mt-3 p-3">
                  <img class="card-img-top mt-2" src="../assets/img/svg/cn_icon4f195.svg" alt="">
                  <div class="card-body">
                    <p class="card-text">
                      低至￥99/月
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-middle bg-blue">
        <h1>选择您的适配套餐</h1>
        <h6 class="text-white-50">所有机器支持在线重启、开关机，进出口流量实时监控。我们将尽快为您配置、上架交付</h6>
    </div>

    <div class="flex-middle bg-light">
      <div class="container mt-5 mb-5">
        <div class="row">
          <div class="col-7 p-5">
            <h2 class="b-hr">
              <b>
                随时随地控制您的机器
              </b>
            </h2>
            <p class="mt-4 mb-4 text-black-50" style="width: 90%">
              在会员中心，已集成 <b>实时流量监控功能</b>。您可以查看实时或30天内任意时段的进出口网络速率及流量使用情况。利用我们清晰的流量变化图和数据显示，您可以准确地评估带宽和使用量。
            </p>
            <p class="mt-4 mb-4 text-black-50" style="width: 90%">
              我们还集成了 <b>远端电源管理开关</b>。无论何时何地，您都可以简单方便地重启您的机器电源，或者开机、关机操作，以进行如操作系统更新或解决问题等运作。这一切都将使您的管理工作变得更加简单。
            </p>
          </div>
          <div class="col-5">
            <div class="card border-0">
              <img src="../assets/img/svg/enterprises.png"
                   alt="" class="card-img-overlay"
                   style="width: 100%; height:inherit">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex-middle bg-gray">
        <h2 class="b-hr2">常见问题</h2>
    </div>
  </div>
</template>

<script>
  import des from '@/components/Describe.vue'

  export default {
    name: "CouldData",
    components: {
      des,
    },
    data(){
      return {
        contentStyle: {
          width: '60%',
          fontSize: '1rem'
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  #cloud-data
    width 100%
    div
      width 100%
    .bg-light
      background-color white!important
    .des-ul
      list-style none
      margin 0
      padding 0
      li
        color #3f3f3f
        margin-bottom 2px
    .card
      img
        width 4rem
        height 4rem
      .card-body
        margin-top .5rem
      .card-text
        text-align center
</style>
