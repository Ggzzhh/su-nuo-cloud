<template>
  <div id="cloud-data">
    <des
      class="pt-5 pb-5"
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
      <h1 class="mt-5 mb-4">选择您的适配套餐</h1>
      <h6 class="text-white-50 mb-5">所有机器支持在线重启、开关机，进出口流量实时监控。我们将尽快为您配置、上架交付</h6>
      <div class="container mb-5 bg-starry-night p-3" style="border-radius: 1rem">
        <table class="table text-center">
          <thead>
          <tr>
            <th class="theme" width="15%"><div>处理器</div></th>
            <th class="theme"><div>内存</div></th>
            <th class="theme"><div>硬盘</div></th>
            <th class="theme"><div>带宽</div></th>
            <th class="theme"><div>防御</div></th>
            <th class="theme" width="10%"><div>IP数</div></th>
            <th class="theme"><div>价格</div></th>
            <th class="theme"><div></div></th>
          </tr>
          </thead>
          <tbody>


          <tr>
            <td><div class="feature">双线I3/I5</div></td>
            <td>8GB DDR3</td><td>Sata 500G/SSD 120G</td><td>20M独享</td><td>100Gbps</td><td>2个</td>
            <td>¥<span>800</span>元/月&nbsp;&nbsp;&nbsp;</td>
            <td>
              <div class="money">
                <a href="javascript:" class="buy-a">立即购买</a>
              </div>
            </td>
          </tr>


          <tr>
            <td><div class="feature">双线L5630*2</div></td>
            <td>16GB DDR3</td><td>Sata 500G/SSD 120G</td><td>20M独享</td><td>100Gbps</td><td>2个</td>
            <td>¥<span>850</span>元/月&nbsp;&nbsp;&nbsp;</td>
            <td>
              <div class="money">
                <a href="javascript:" class="buy-a">立即购买</a>
              </div>
            </td>
          </tr>


          <tr>
            <td><div class="feature">双线L5630*2</div></td>
            <td>16GB DDR3</td><td>Sata 500G/SSD 120G</td><td>G口/20M独享</td><td>200Gbps</td><td>2个</td>
            <td>¥<span>1000</span>元/月&nbsp;&nbsp;&nbsp;</td>
            <td>
              <div class="money">
                <a href="javascript:" class="buy-a">立即购买</a>
              </div>
            </td>
          </tr>


          <tr>
            <td><div class="feature">双线L5630*2</div></td>
            <td>16GB DDR3</td><td>Sata 500G/SSD 120G</td><td>G口/50M独享</td><td>300Gbps</td><td>2个</td>
            <td>¥<span>1300</span>元/月&nbsp;&nbsp;&nbsp;</td>
            <td>
              <div class="money">
                <a href="javascript:" class="buy-a">立即购买</a>
              </div>
            </td>
          </tr>


          <tr>
            <td><div class="feature">BGP L5630*2</div></td>
            <td>16GB DDR3</td><td>Sata 500G/SSD 120G</td><td>20M独享</td><td>20Gbps</td><td>1个</td>
            <td>¥<span>850</span>元/月&nbsp;&nbsp;&nbsp;</td>
            <td>
              <div class="money">
                <a href="javascript:" class="buy-a">立即购买</a>
              </div>
            </td>
          </tr>


          <tr>
            <td><div class="feature">BGP L5630*2</div></td>
            <td>16GB DDR3</td><td>Sata 500G/SSD 120G</td><td>20M独享</td><td>50Gbps</td><td>1个</td>
            <td>¥<span>900</span>元/月&nbsp;&nbsp;&nbsp;</td>
            <td>
              <div class="money">
                <a href="javascript:" class="buy-a">立即购买</a>
              </div>
            </td>
          </tr>


          <tr>
            <td><div class="feature">BGP L5630*2</div></td>
            <td>16GB DDR3</td><td>Sata 500G/SSD 120G</td><td>20M独享</td><td>100Gbps</td><td>1个</td>
            <td>¥<span>1000</span>元/月&nbsp;&nbsp;&nbsp;</td>
            <td>
              <div class="money">
                <a href="javascript:" class="buy-a">立即购买</a>
              </div>
            </td>
          </tr>


          <tr>
            <td><div class="feature">BGP L5630*2</div></td>
            <td>16GB DDR3</td><td>Sata 500G/SSD 120G</td><td>G口/50M独享</td><td>300Gbps</td><td>1个</td>
            <td>¥<span>1800</span>元/月&nbsp;&nbsp;&nbsp;</td>
            <td>
              <div class="money">
                <a href="javascript:" class="buy-a">立即购买</a>
              </div>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
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
      <h2 class="b-hr2 mt-5 mb-4">常见问题</h2>
      <div class="container mb-5">
        <div class="row flex-row align-items-start">
          <div class="col-6">
            <div class="row">
              <collapse
                title="目前有哪些优惠政策？"
                content='<p>您可享受：<br>1、年付送两个月<br>2、加盟代理后，可享受最低7折优惠；</p>'
              />
              <collapse
                title="我可以定制配置，创建适合我个人需要的服务器吗？"
                content='<p>暂时不行！我们有专业的团队代替您进行专业化的管理！请放心使用！</p>'
              />
              <collapse
                title="我能够在线管理我的服务器吗？"
                content='<p>当然可以。您可以随时联络我们，提交您的定制需求，获取报价。</p>'
              />
              <collapse
                title="服务器需要多少时间才能开通？"
                content='<p>我们会尽快为您安装系统、配置网络。最快30分钟内可上架交付使用。</p>'
              />
              <collapse
                title="是否提供技术服务？"
                content='<p> 服务器租用为特殊产品，您拥有最高管理权限，您须独立维护系统和网站内部的所有问题。我们仅提供基础的技术服务，例如重装系统、重启机器、安装基础环境、远超控制故障排查等。</p>'
              />
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <collapse
                title="服务器上不允许放置哪些内容？"
                content='<p>所有服务器谢绝放置黄色、赌博、反动、钓鱼、私服等内容,不接受垃圾邮件、侵犯版权、扫描与入侵等行为，须遵守中国及各地区法律法规许可。</p>'
              />
              <collapse
                title="我可以通过哪些方式付款？"
                content='<p>支付宝、微信、网银、银行、Paypal、财付通等支付方式，您选择任意一种方式，均可快速完成付款。</p>'
              />
              <collapse
                title="你们如何监控自己的数据中心和服务器？"
                content='<p>我们的技术团队始终坚守岗位，全年无休、每时每刻为您提供服务，以确保我们的服务器和您的网站即使在性能达到极限时也能正常运行。</p>'
              />
              <collapse
                title="有否提供备份服务？"
                content='<p>我们没有提供免费备份服务，您应负责所有数据备份，包括系统重装前数据备份。如果您希望我们为您代劳，欢迎随时联系我们。</p>'
              />
              <collapse
                title="是否提供发票？"
                content='<p>是的。我们提供增值税普通发票，用快递的方式邮寄予您。注意，服务器产品报价均为税前报价。</p>'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Collapse from '@/components/Collapse.vue'
  import des from '@/components/Describe.vue'

  export default {
    name: "CouldData",
    components: {
      des,
      Collapse
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
    .buy-a
      color white
      padding .5rem
      border-radius 1rem
      font-size .8rem
      border 1px solid white
      &:hover
        text-decoration none
    .table
      tbody, thead
        tr
          th
            border-top none
          td, th
            padding 1rem
            font-size 1rem
            font-weight 600
            line-height 2rem
</style>
