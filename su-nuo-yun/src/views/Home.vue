<template>
  <div class="home">
    <div id="fullpage">
      <div class="section">
        <div class="slide">
          <div class="full-d flex-middle pt-5" style="background-color: #4fa1ff">
            <div class="c-img">
              <img src="../assets/img/banner-pic1.png" alt="" style="background-size:cover;width:100%;">
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="full-d flex-middle pt-5"  style="background-color: #7762ff">
            <div class="c-img">
              <img src="../assets/img/banner-pic2.png" alt="" style="background-size:cover;width:100%;">
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="full-d flex-middle pt-5"  style="background-color: #4fa1ff">
            <div class="c-img">
              <img src="../assets/img/banner-pic3.png" alt="" style="background-size:cover;width:100%;">
            </div>
          </div>
        </div>
      </div>
      <!--第二页-->
      <div class="section">
        <div class="full-d flex-middle" id="could-view">
          <div class="pt-5">
            <div style=" text-align: center"><h3 class="blue">随时待命，即时响应</h3></div>
            <div><h2 class="b-hr2">全栈式 IT项目托管服务</h2></div>
          </div>
          <div class="row could-section">
            <transition-group name="custom" enter-active-class="animated bounceInLeft"
                              leave-active-class="animated bounceOutLeft" tag="div" class="row">
              <could-view v-for="item in items"
                          :price="item.price"
                          :bandwidth="item.bandwidth"
                          :defense="item.defense"
                          :core="item.core"
                          :capacity="item.capacity"
                          :key="item.price"
                          v-if="show">
              </could-view>
            </transition-group>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="flex-middle full-d">
          <div class="row content-d">
            <div class="col-md-6 col-sm-12">
              <div class="pl-4 d-left">
                <div><h3 class="blue">随时待命，即时响应</h3></div>
                <div><h2 class="b-hr2">全栈式 IT项目托管服务</h2></div>
                <div>
                  <p style="text-indent: 2rem">
                    远拓网络科技，为客户提供运行关键业务/任务型工作负载所需的基础设施，包括云虚拟主机，云服务器，独立服务器等，以及与之对应的技术支持。这种技术支持，包括成本优化、性能、安全性、容灾等多角度，帮助客户构建并维护最佳的应用环境并保证其持续健康运行。我们负责修补、安全保护、监控及其他工作，您可以省出精力专门处理业务。
                  </p>
                </div>


              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="c-img p-4">
                <img src="../assets/img/2.png" alt="" >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="full-d flex-middle pt-4">
          <div class="choice-me none">
            <h1>为什么 <span class="blue">选择远拓网络科技 ?</span></h1>
            <div class="choice-text">
              <p>
                我们的价值体系服务如一,对客户永远保持最好的服务团队配合,没有优秀的个人,只有优秀的团队明晰,精益专业
                明晰对象演化,不断发展的企业是一家健康的企业诚信,诚实守信是力量的一种象征企业文化服务如一。
              </p>
              <p>
                对客户永远保持最好的服务,为了维护你的客户,你需要始终如一地去服务客户,而不只是为了一次完美的业绩。
              </p>
              <p>
                对客户的反馈及建议积极去解决和更正,站在客户的角度,永远提前为客户着想团队配合,没有优秀的个人,只有优秀的团队, 相互协作,要依靠自己的队员增强自己的优势并弥补自己的缺点。
                诚实守信是力量的一种象征,勇于承认错误,敢于承担责任“诚信为天,品质如山”。
              </p>
            </div>

          </div>

        </div>
      </div>

      <!--第五页-->
      <div class="section">
        <div class="flex-middle full-d">
          <div class="row content-d">
            <div class="col-md-6 col-sm-12">
              <div class="pl-4 d-left">
                <div><h3 class="blue">创新内核，技术为先</h3></div>
                <div><h2 class="b-hr2">面向企业/开发者的优质IT资源交付</h2></div>
                <div>
                  <p style="text-indent: 2rem">
                    远拓网络科技，创建于中国，由资深云计算专家和行业顶尖运维工程师组建精英团队，专注企业级云计算服务、数据中心基础业务的深度开发与运营。依托郑州、宿迁、惠州、福州、香港、韩国、美国等数据中心集群资源，数掘科技基于XenServer®架构构建的云计算服务平台，以SSD级硬件设备确保高性能I/O，利用Ceph分布式存储实现自动冗余保障高可用，提供实时快照备份/回滚、私有网络、热迁移等功能，帮助企业/开发者构建和运维更加高效、可靠、敏捷的商务级IT部署解决方案，有效降低总体拥有成本(TCO)和运维支出。
                  </p>
                </div>


              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="row" style="width: 80%">
                <div class="col-md-6 col-sm-12 p-2">
                  <div class="pic flex-middle">
                    <img src="../assets/img/4.png" alt="">
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 p-2">
                  <div class="pic flex-middle">
                    <img src="../assets/img/4.png" alt="">
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 p-2">
                  <div class="pic flex-middle">
                    <img src="../assets/img/4.png" alt="">
                  </div>
                </div>
                <div class="col-md-6 col-sm-12 p-2">
                  <div class="pic flex-middle">
                    <img src="../assets/img/4.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--第六页-->
      <div class="section">
        <div class="d-left full-d" style="padding-bottom: 5rem">
          <h3 class="blue">构建互联网合作生态圈</h3>
          <h1 class="b-hr2">多边合作促进共同繁荣</h1>
          <div class="row img-target">
            <div class="col-md-2 col-sm-3">
              <div class="h-img"></div>
            </div>
            <div class="col-md-2 col-sm-3">
              <div class="h-img"></div>
            </div>
            <div class="col-md-2 col-sm-3">
              <div class="h-img"></div>
            </div>
            <div class="col-md-2 col-sm-3">
              <div class="h-img"></div>
            </div>
            <div class="col-md-2 col-sm-3">
              <div class="h-img"></div>
            </div>
            <div class="col-md-2 col-sm-3">
              <div class="h-img"></div>
            </div>
            <div class="col-md-2 col-sm-3">
              <div class="h-img"></div>
            </div>
            <div class="col-md-2 col-sm-3">
              <div class="h-img"></div>
            </div>
            <div class="col-md-2 col-sm-3">
              <div class="h-img"></div>
            </div>
            <div class="col-md-2 col-sm-3">
              <div class="h-img"></div>
            </div>
            <div class="col-md-2 col-sm-3">
              <div class="h-img"></div>
            </div>
            <div class="col-md-2 col-sm-3">
              <div class="h-img"></div>
            </div>
          </div>
        </div>
      </div>
      <!--第七页-->
      <div class="section">
        <div class="full-d pt-5">
          <div class="row about-us">
            <div class="col-md-6 pt-4">
              <div class="foot-left none">
                <h2>ABOUT US</h2>
                <p>
                  远拓网络科技，创建于中国，由资深云计算专家和行业顶尖运维工程师组建精英团队，专注企业级云计算服务、数据中心基础业务的深度开发与运营。依托郑州、宿迁、惠州、福州、香港、韩国、美国等数据中心集群资源，数掘科技基于XenServer®架构构建的云计算服务平台，以SSD级硬件设备确保高性能I/O，利用Ceph分布式存储实现自动冗余保障高可用，提供实时快照备份/回滚、私有网络、热迁移等功能，帮助企业/开发者构建和运维更加高效、可靠、敏捷的商务级IT部署解决方案，有效降低总体拥有成本(TCO)和运维支出。

                </p>

                <div style="padding-top: 3rem">
                  <h2>CONTACT US</h2>
                  <h3>
                    1 3 1 1 2 3 4 5 6 7
                  </h3>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="foot-right none">
                <iframe src="map.html" width="600" height="360" frameborder="0" scrolling="no"></iframe>
                <div style="padding-top: 1rem">
                  <p>
                    地址： 宁夏红寺堡

                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            Copyright©2001-2017 All rights reserved.    宁夏远拓网络科技 版权所有    备案号0000000
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import CouldView from '@/components/CouldView.vue'
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    components: {
      CouldView,
      HelloWorld
    },
    data () {
      return {
        items: [
          {
            price: 249,
            bandwidth: 10,
            defense: 60,
            core: 4,
            capacity: 4
          },
          {
            price: 600,
            bandwidth: 50,
            defense: 100,
            core: 16,
            capacity: 16
          },
          {
            price: 900,
            bandwidth: 5,
            defense: 0,
            core: 8,
            capacity: 8
          },
          {
            price: 1500,
            bandwidth: 5,
            defense: 15,
            core: 8,
            capacity: 8
          },
        ],
        show: false
      }
    },
    mounted() {
      let vue = this;
      $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#fff', '#f3f3f3', '#fff', 'rgba(1,1,1,0.3)', '#f3f3f3', '#fff', '#212121'],
        anchors: ['slide', 'server', 'introduce', 'why-me ', 'advantage', 'cooperation', 'about'],
        'navigation': false,
        'navigationPosition': 'right',
        // 'navigationColor': '#ff726f',
        'scrollingSpeed': 1200,
        // responsiveWidth: 1024,
        // responsiveHeight: 0,
        controlArrows: false,
        // controlArrowColor: 'rgba(1,1,1,0.2)',
        resetSliders: true,

        afterLoad: function(anchor, index){
          // section 加载完毕后
          if (index === 1){
            // var count = 1;
            setTimeout(function () {
              $.fn.fullpage.moveSlideRight();
            }, 2800);
          }

          if (index === 2) {
            vue.show = true;
          }

          if (index === 4){
            $('.choice-me').removeClass().addClass('choice-me animated lightSpeedIn')
          }

          if (index === 7){
            $('.foot-left').removeClass().addClass('foot-left animated slideInLeft');
            $('.foot-right').removeClass().addClass('foot-right animated slideInRight')
          }

        },

        onLeave: function(index, nextIndex, direction){

          if (index === 2) {
            vue.show = false;
          }

          if (index === 4){
            $('.choice-me').removeClass().addClass('choice-me animated lightSpeedOut')
          }

          if (index === 7){
            $('.foot-left').removeClass('slideInLeft').addClass('slideOutLeft');
            $('.foot-right').removeClass('slideInRight').addClass('slideOutRight')
          }
        },
        afterSlideLoad: function (anchorLink, index, slideIndex, direction) {
          if (index === 1){
            // var count = 1;
            setTimeout(function () {
              // count ++;
              clearTimeout();
              // console.log(count);
              $.fn.fullpage.moveSlideRight();
            }, 2800);
          }
        }
      })
    }
  }
</script>

