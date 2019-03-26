<template>
  <div id="cloud-host">
    <div class="aside animated" :class="asideAnimate" v-if="handleTop">
      <fixed-aside :navs="asideNavs"></fixed-aside>
    </div>
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


    <des
      title="轻击鼠标"
      subTitle="即刻创建网站"
      describe="创建网站看起来十分复杂，我们让它变得简单。 无需上传文件，您可一键安装WordPress/Discuz以及更多博客/论坛/CMS系统。
如果您有特殊的程序需求，可提交服务单获取“程序免费安装”服务。"
      styleModel="transparent"
    />

    <div class="bg-light flex-column flex-middle section-serve" style="min-height: 300px">
      <div><h4 class="blue">专业托管意味着工作更简单</h4></div>
      <div><h2 class="b-hr2">您已获得7x24小时金牌服务</h2></div>
      <div class="serve-data">
        <div class="hvr-bob" v-for="data in serveDates" :key="data.name">
          <img :src="data.imgSrc" :alt="data.name" />
          <h5>{{data.name}}</h5>
          <p class="intro">{{data.intro}}</p>
        </div>
      </div>
    </div>


    <div class="contents bg-gray" id="content1">
      <section class="section ">
        <div class="container">
          <div class="row">
            <h3 class="vice-title text-center">架构</h3>
            <div class="text-border"></div>
          </div>
          <div class="row">
            <div class="">
              <table class="table table-bordered">
                <thead>
                </thead>
                <tbody>
                <tr>
                  <td width="20%"><div class="feature">操作系统</div></td>
                  <td><div class="zq">Linux+Apache</div></td>
                  <td width="20%">控制面板</td>
                  <td><div class="zq">Kangle</div></td>
                </tr>
                <tr>
                  <td><div class="feature">PHP版本</div></td>
                  <td><div class="zq">PHP 5.2/5.3/5.4/5.5/5.6/7.0/7.1</div></td>
                  <td>Apache版本</td>
                  <td><div class="zq">2.2/2.4</div></td>
                </tr>
                <tr>
                  <td><div class="feature">MySQL数据库版本</div></td>
                  <td><div class="zq">MySQL 5.6.37</div></td>
                  <td>phpMyAdmin版本</td>
                  <td><div class="zq">4.4.15.8</div></td>
                </tr>
                <tr>
                  <td><div class="feature">IP配置</div></td>
                  <td colspan="3"><div class="zq">用户共享1个IP地址。每个IP地址下用户数量限制在50名以内</div></td>
                </tr>
                <tr>
                  <td><div class="feature">硬件</div></td>
                  <td colspan="3"><div class="zq">Dell™服务器、Intel® Xeon® 处理器、Dell™ SAS企业级硬盘</div></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="contents bg-light" id="content2">
      <section class="section">
        <div class="container">
          <div class="row">
            <h3 class="vice-title text-center">程序支持</h3>
            <div class="text-border"></div>
          </div>
          <div class="row flex-row">
            <div class="support col-sm-3 hvr-wobble-to-top-right" v-for="support in supports" >
              <img :src="support" alt="">
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="contents bg-gray" id="content3" >
      <section class="section">
        <div class="container">
          <div class="row">
            <h3 class="vice-title text-center">开发支持</h3>
            <div class="text-border"></div>
            <div class="">
              <table class="table table-bordered">
                <thead>
                </thead>
                <tbody>
                <tr>
                  <td width="20%"><div class="feature">PHP 5.2/5.3/5.4/5.5/5.6/7.0/7.1</div></td>
                  <td><div class="zq"><img src='../assets/img/check.png' /></div></td>
                  <td width="20%">ionCube</td>
                  <td><div class="zq"><img src='../assets/img/check.png' /></div></td>
                </tr>
                <tr>
                  <td><div class="feature">HTML</div></td>
                  <td><div class="zq"><img src='../assets/img/check.png' /></div></td>
                  <td>WAP</td>
                  <td><div class="zq"><img src='../assets/img/check.png' /></div></td>
                </tr>
                <tr>
                  <td><div class="feature">XML</div></td>
                  <td><div class="zq"><img src='../assets/img/check.png' /></div></td>
                  <td>Zend Guard&amp; Zend Optimizer</td>
                  <td><div class="zq"><img src='../assets/img/check.png' /></div></td>
                </tr>
                <tr>
                  <td><div class="feature">自定义.htaccess</div></td>
                  <td><div class="zq"><img src='../assets/img/check.png' /></div></td>
                  <td>PDO</td>
                  <td><div class="zq"><img src='../assets/img/check.png' /></div></td>
                </tr>
                <tr>
                  <td><div class="feature">自定义php.ini</div></td>
                  <td><div class="zq"><img src='../assets/img/check.png' /></div></td>
                  <td>MySQL</td>
                  <td><div class="zq"><img src='../assets/img/check.png' /></div></td>
                </tr>
                <tr>
                  <td><div class="feature">HTTPS 加密</div></td>
                  <td><div class="zq"><img src='../assets/img/check.png' /></div></td>

                </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="contents bg-light" id="content4">
      <section class="section">
        <div class="row">
          <h3 class="vice-title text-center">数据中心</h3>
          <div class="text-border"></div>
        </div>
        <div class="container">
          <div class="row">
            <div class="">
              <table class="table table-bordered">
                <thead>
                <tr>
                  <th class="theme" width="20%"><div style="text-align:left;"></div></th>
                  <th class="theme"><div>国内</div></th>
                  <th class="theme"><div>香港</div></th>
                  <th class="theme"><div>韩国</div></th>
                  <th class="theme"><div>美国</div></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td><div class="feature">机房</div></td>
                  <td>惠州/宿迁</td>
                  <td>香港沙田</td>
                  <td>韩国KT</td>
                  <td>美国洛杉矶</td>
                </tr>
                <tr>
                  <td><div class="feature">网络</div></td>
                  <td>电信联通互联互通线路</td>
                  <td>电信CN2直连，BGP国际多线</td>
                  <td>BGP国际多线</td>
                  <td>BGP国际多线</td>
                </tr>
                <tr>
                  <td><div class="feature">带宽</div></td>
                  <td>1000Mbps共享带宽</td>
                  <td>1000Mbps共享带宽</td>
                  <td>1000Mbps共享带宽</td>
                  <td>1000Mbps共享带宽</td>
                </tr>
                <tr>
                  <td><div class="feature">安全</div></td>
                  <td>安全盾+金盾</td>
                  <td>安全盾+金盾</td>
                  <td>安全盾+金盾</td>
                  <td>安全盾+金盾</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


    </div>

    <div class="contents bg-gray" id="content5">
      <section class="agent-counting section sjk-section">
        <div class="container">
          <div class="row">
            <h3 class="vice-title text-center">数据库</h3>
            <div class="text-border"></div>
          </div>
          <div class="row">
            <div class="">
              <table class="table table-bordered">
                <thead>
                </thead>
                <tbody>
                <tr>
                  <td width="20%"><div class="feature">数据库类型</div></td>
                  <td>PHP5.2-PHP7.1可选，通过自助切换PHP版本，可实现“PHP+MySQL”任意版本组合</td>
                </tr>
                <tr>
                  <td><div class="feature">管理</div></td>
                  <td>用户拥有phpMyAdmin最高管理权限，支持编辑/删除/清空/备份导出和导入等操作</td>
                </tr>
                <tr>
                  <td><div class="feature">文件目录</div></td>
                  <td>不限文件目录数量。总文件大小不超出磁盘容量即可</td>
                </tr>
                <tr>
                  <td><div class="feature">备份</div></td>
                  <td>通过控制面板中MySQL“下载”功能，可将数据库压缩包下载至本地保存</td>
                </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


    </div>

    <div class="contents bg-light" id="content6">
      <section class="section">
        <div class="row">
          <h3 class="vice-title text-center">常见问题</h3>
          <div class="text-border"></div>

        </div>
        <div class="container" >

          <div class="row flex-row align-items-start">
            <div class="col-md-6">
              <div class="row">
                <collapse
                  title="硬盘/流量不够用，PHP云虚拟主机怎样升级？"
                  content="<p>数掘科技主机均支持一键升级。您可在会员中心-产品管理项，自主选择更高型号，即可一键完成升级。升级过程只需补足差价。</p>"
                />
                <collapse
                  title="我需要哪个地区的云虚拟主机？"
                  content="<p>数掘科技主机存放在国内/香港/免备案等多节点。您需要的主机节点取决于您想实现的网站用途。</p><p>例如，您需要正规备案号，那么你唯一的选择是国内主机；如果您的网站面向北美和欧洲客户群，建议将网站存放在国外节点；如果您的网站面向除中国大陆外的亚太区客户，建议使用国外节点；如果您不想备案，且对大陆客户访问速度持有较高要求，那么免备案节点则是您满意的最佳托管环境。</p>"
                />
                <collapse
                  title="SAS高速硬盘有哪些优势？"
                  content="
                    <p>数掘科技所有PHP云虚拟主机均使用SAS企业级硬盘，处理速度超过SSD硬盘两倍以上。通过采用Raid10阵列，提高服务器的处理速度和实现高速I/O。并且我们提供最大容量无限制套餐，大容量和通信速度都对应低价格。</p>
                  "
                />
                <collapse
                  title="SSL证书有什么用？怎样申领和安装？"
                  content="<p>绝大多数网站未安装服务器安装证书，极容易导致信息被黑客截获，造成数据被窃取、篡改，避免流量劫持，成为钓鱼网站。SSL证书通过安全协议对数据使用密文传输，并可证明您的网站是安全可信的，可有效保护访客隐私和付款信息，有效提升网站可信度，进而提高产品销量，同时还能帮助提升网站的搜索引擎排名。</p>"
                />
                <collapse
                  title="主机可以先试用吗？"
                  content="<p>很抱歉，我们不提供主机试用服务。但是，您购买主机后的3天内，如有任何不满意，可随时申请按天退款。我们提供3天无条件退款保证，绝不以任何理由拒绝退款或收取服务费。</p>"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <collapse
                title="付款后，我的主机多久能开通？"
                content="<p>我们的云虚拟主机已为您配置资源和网络环境。付款成功即自动开通，无需等待。您只需解析域名、上传网站程序即可使用，我们强大的技术团队会负责网络的始终快速。</p>"
              />
                <collapse
                  title="怎样把我自己的网站转入速诺云？"
                  content="
                <p>将您的网站转入数掘科技的过程非常简单。你需要获得您当前网站的全站备份，也就是网站副本，然后通过FTP软件(如FlashFXP等)上传到您的数掘科技主机。</p>
                <p>如果您在转移过程中有任何疑问，我们的技术团队可随时为您提供支持，甚至为您代搬家，不收取任何服务费用。</p>
              </div>"
                />
                <collapse
                  title="如何使用PHP云虚拟主机创建网站？"
                  content="<p>主机开通后，您需要将域名解析到您的主机IP地址，然后通过FTP（文件传输协议）将您的网站文件上传至主机。</p>"
                />
                <collapse
                  title="主机默认是哪个PHP版本，可以更换吗？"
                  content="<p>我们默认已安装最常用的PHP5.2/5.3/5.4/5.5/5.6/7.0/7.1版本。如需其他PHP版本，您可登录控制面板，在“更改设置”中自助切换到其他版本。或者，登录会员中心，使用“一键切换PHP版本”功能完成PHP版本切换。</p>"
                />
                <collapse
                  title="我是新手，不会使用主机怎么办？"
                  content="<p>更多问题，您可联系速诺云技术团队随时为您提供支持。</p>"
                />


              </div>
            </div>
          </div>
        </div>
      </section>


    </div>

  </div>
</template>

<script>
  import des from '@/components/Describe.vue'
  import priceModel from '@/components/PriceModel.vue'
  import Collapse from '@/components/Collapse.vue'
  import FixedAside from '@/components/FixedAside.vue'
  import defaultPrice from '@/assets/data/cloudHostPrice'

  export default {
    name: 'cloud-host',
    props: ['line'],
    components: {
      Collapse,
      des,
      priceModel,
      FixedAside
    },
    computed: {
      prices () {
        return defaultPrice[this.line]
      }
    },
    data () {
      return {
        defaultPrice,
        handleTop: false,
        asideAnimate: '',
        serveDates: [
          {
            // 图片必须使用require来加载，否则会当成字符串处理
            imgSrc: require('../assets/img/icon/linux_icon1.svg'),
            name:'BGP自愈网络',
            intro:'超融合BGP网络，实时监控网络健康状态，秒级切换最佳路由。'
          },
          {
            // 图片必须使用require来加载，否则会当成字符串处理
            imgSrc: require('../assets/img/icon/linux_icon2.svg'),
            name:'集成缓存加速您的网站',
            intro:'通过自主开发的Web Caching配置和多节点支撑，自动加速。'
          },
          {
            // 图片必须使用require来加载，否则会当成字符串处理
            imgSrc: require('../assets/img/icon/linux_icon3.svg'),
            name:'免费搬家服务',
            intro:'订购主机后，您只需将备份数据交给我们，剩下的工作由我们完成。'
          },
          {
            // 图片必须使用require来加载，否则会当成字符串处理
            imgSrc: require('../assets/img/icon/linux_icon4.svg'),
            name:'不用等待，马上就好',
            intro:'海外节点无需备案，开通即发布网站。抢占市场的良机不再错过。'
          },
          {
            // 图片必须使用require来加载，否则会当成字符串处理
            imgSrc: require('../assets/img/icon/linux_icon5.svg'),
            name:'专业托管意味着工作更简单',
            intro:'我们负责网络、监控及其他工作，您可以省出精力专心处理业务。'
          },
          {
            // 图片必须使用require来加载，否则会当成字符串处理
            imgSrc: require('../assets/img/icon/linux_icon6.svg'),
            name:'选择您的专属客服',
            intro:'专属客服与您无缝对接，全程跟进。随时随地，您都能与她取得联系。'
          },
          {
            // 图片必须使用require来加载，否则会当成字符串处理
            imgSrc: require('../assets/img/icon/linux_icon7.svg'),
            name:'3天退款保证',
            intro:'购买3天内，使用不满意可随时办理按天退款，且无任何手续费。'
          },
          {
            // 图片必须使用require来加载，否则会当成字符串处理
            imgSrc: require('../assets/img/icon/linux_icon8.svg'),
            name:'按年支付',
            intro:'避免因产品逾期造成停机和网站业务中断。支持支付宝/微信/财付通支付。'
          },
        ],
        supports: [
          require('../assets/img/icon/logo7.png'),
          require('../assets/img/icon/logo7.png'),
          require('../assets/img/icon/logo7.png'),
          require('../assets/img/icon/logo7.png'),
          require('../assets/img/icon/logo7.png'),
          require('../assets/img/icon/logo7.png'),
          require('../assets/img/icon/logo7.png'),
          require('../assets/img/icon/logo7.png'),
          require('../assets/img/icon/logo7.png'),
          require('../assets/img/icon/logo7.png'),
          require('../assets/img/icon/logo7.png'),
          require('../assets/img/icon/logo7.png')
        ],
        asideNavs: [
          {
            toSrc: '#content1',
            text: '架构',
            bgColor:"#496c97"
          },
          {
            toSrc: '#content2',
            text: '程序支持',
            bgColor:"#5a5497"
          },
          {
            toSrc: '#content3',
            text: '开发支持',
            bgColor:"#845097"
          },
          {
            toSrc: '#content4',
            text: '数据中心',
            bgColor:"#97325b"
          },
          {
            toSrc: '#content5',
            text: '数据库',
            bgColor:"#974e3e"
          },
          {
            toSrc: '#content6',
            text: '常见问题',
            bgColor:"#7a9765"
          },
        ]
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleIsScroll)
    },
    methods:{
      handleIsScroll(){
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        const offsetTop = document.querySelector('#content1').offsetTop - 200
        if (scrollTop > offsetTop){
            this.asideAnimate = 'fadeIn'
            this.handleTop = true
        }
        else
          this.handleTop = false
      }
    }
  }
</script>

<style lang="stylus" scoped>


  #cloud-host
    .bg-light
      background-color white!important
    /*color white*/
    .content-title
      text-align center
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
    .section-serve
      padding 5rem
    .serve-data
      width 80%
      display flex
      justify-content space-between
      flex-flow wrap
      div
        width 25%
        padding 0 1rem
        .intro
          font-size 0.8rem
          text-align left
        img
          width 4rem
          height 4rem
        h5
          font-size 1.1rem
          margin-top 1.2rem
          margin-bottom 0.6rem
    .section
      padding 5rem
      width 100%
      .text-border
        height 0
        width 50px
        border-top 1px solid rgba(33,33,33,.2)
        margin 0 0 2rem 0
    .container
      width 100%!important
    .row
    .content
      display flex
      flex-direction column
      justify-content center
      align-items center
      div
        width 100%
      .zq
        img
          width 2.3rem
      .support
        background-color white
        padding 1rem
        img
          width 10rems
    td
      padding 1rem
</style>
