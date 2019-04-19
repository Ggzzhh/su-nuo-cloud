<template>
  <div id="cloud-serve" class="bg-gray">

    <div class="bg-default-blue title">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="wrap">
              <img class="cloud-1" src="../assets/img/icon/cloud-01.svg" alt="">
              <img class="cloud-2" src="../assets/img/icon/cloud-02.svg" alt="">
            </div>
          </div>
          <div class="col-md-7">
            <h2><b>弹性云服务器</b></h2>
            <p>
              速诺云基于XenServer® 架构，使您快速获取弹性、高可用的计算能力，并运行在成熟的数掘科技计算环境中。无论简单搭建还是高度的开发环境，都可以轻松地实现。
            </p>
          </div>

        </div>
      </div>
    </div>
    <div class="container bg-light mt-4" style="border-radius: 5px">
      <div class="serve-content">
        <div class="flex-middle">
          <h2>选购专属云服务器</h2>
        </div>
        <div class="flex-column">
          <div class="container flex-middle" style="margin-left: -12rem">
            <div class="input-group">
              <div class="input-group-prepend">
                <label for="line-select" class="input-group-text">线路</label>
              </div>
              <select class="custom-select" name="line-select" id="line-select" disabled v-model="lineChoice">
                <option value="电信">电信</option>
              </select>
            </div>

            <div class="input-group">
              <div class="input-group-prepend">
                <label for="config-select" class="input-group-text">配置</label>
              </div>
              <select class="custom-select" name="config-select" id="config-select" disabled v-model="configNumber">
                <option value="60">60G单机防御</option>
              </select>
            </div>

            <div class="input-group">
              <div class="input-group-prepend">
                <label for="CPU-select" class="input-group-text">CPU</label>
              </div>
              <select class="custom-select" name="CPU-select" id="CPU-select" v-model="CPUNumber">
                <option value="4">4 核</option>
                <option value="8">8 核</option>
                <option value="16">16 核</option>
              </select>
            </div>

            <div class="input-group">
              <div class="input-group-prepend">
                <label for="memory-select" class="input-group-text">内存</label>
              </div>
              <select class="custom-select" name="memory-select" id="memory-select" v-model="memoryNumber">
                <option value="4">4 GB</option>
                <option value="8">8 GB</option>
                <option value="16">16 GB</option>
              </select>
            </div>

            <div class="input-group">
              <div class="input-group-prepend">
                <label for="store-select" class="input-group-text">存储</label>
              </div>
              <select class="custom-select" name="store-select" id="store-select" v-model="storeNumber">
                <option value="30">30 GB</option>
                <option value="60">60 GB</option>
                <option value="80">80 GB</option>
                <option value="100">100 GB</option>
                <option value="150">150 GB</option>
                <option value="300">300 GB</option>
              </select>
            </div>

            <div class="input-group slide">
              <div class="input-group-prepend">
                <label for="bandwidth-select" class="input-group-text">带宽</label>
                <label class="input-group-text" style="min-width: 5.2rem">{{bandwidthNum}} MB</label>
              </div>
              <input class="form-control"
                     id="bandwidth-select"
                     type="range"
                     max="100"
                     min="10"
                     step="1"
                     value=10
                     v-model="bandwidthValue"
              >
            </div>

            <div class="input-group">
              <div class="input-group-prepend">
                <label for="" class="input-group-text">流量</label>
              </div>
              <input class="form-control"
                     type="text"
                     value="不限"
                     disabled
              >
            </div>

            <div class="input-group">
              <div class="input-group-prepend">
                <label for="IP-select" class="input-group-text">IP 地址</label>
              </div>
              <select class="custom-select" name="IP-select" id="IP-select" v-model="IPNumber">
                <option value=1>1 个</option>
                <option value=2>2 个</option>
                <option value=4>4 个</option>
                <option value=8>8 个</option>
                <option value=16>16 个</option>
              </select>
            </div>

            <div class="input-group">
              <div class="input-group-prepend">
                <label for="system-select" class="input-group-text">系统</label>
              </div>
              <select class="custom-select" v-model="system" name="systems" id="systems" style="max-width: 10rem">
                <option value="windows">windows</option>
                <option value="linux">linux</option>
              </select>
              <select class="custom-select" name="system" id="system" v-model="systemChoice">
                <option v-for="system in systems" :key="system.id" :value="system.name">{{system.name}}</option>
              </select>
            </div>

          </div>
          <div class="config">
            <h4 class="b-hr">当前配置</h4>
            <div class="d-flex flex-column">
              <div class="d-flex flex-row">
                <div class="flex-left">线路：</div>
                <div class="flex-right">{{lineChoice}}</div>
              </div>
              <div class="d-flex flex-row">
                <div class="flex-left">配置：</div>
                <div class="flex-right">{{configNumber}} GB单机防御</div>
              </div>
              <div class="d-flex flex-row">
                <div class="flex-left">CPU：</div>
                <div class="flex-right">{{CPUNumber}} 核</div>
              </div>
              <div class="d-flex flex-row">
                <div class="flex-left">内存：</div>
                <div class="flex-right">{{memoryNumber}} GB</div>
              </div>
              <div class="d-flex flex-row">
                <div class="flex-left">存储：</div>
                <div class="flex-right">{{storeNumber}} GB</div>
              </div>
              <div class="d-flex flex-row">
                <div class="flex-left">带宽：</div>
                <div class="flex-right">{{bandwidthValue}} MB</div>
              </div>
              <div class="d-flex flex-row">
                <div class="flex-left">流量：</div>
                <div class="flex-right">不限</div>
              </div>
              <div class="d-flex flex-row">
                <div class="flex-left">IP数量：</div>
                <div class="flex-right">{{IPNumber}} 个</div>
              </div>
              <div class="d-flex flex-row">
                <div class="flex-left">系统：</div>
                <div class="flex-right">{{systemChoice}}</div>
              </div>
              <div class="d-flex flex-row">
                <div class="flex-left">价格：</div>
                <div class="flex-right"><b class="text-danger">{{price}} 元/月</b></div>
              </div>
              <div class="flex-middle mt-3">
                <button class="btn btn-primary">立即购买</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import TWEEN from '@tweenjs/tween.js'
  // var TWEEN = require('@tweenjs/tween.js');
  import ChoiceButton from '@/components/choiceButton.vue'

  export default {
    name: "CloudServe",
    components: {
      ChoiceButton
    },
    methods: {
      clicked(e){
        const id = e.currentTarget.id
        this.$data[id + "Active"] = !this.$data[id + "Active"]
      },

    },
    data(){
      return {
        lineChoice: '电信',
        configNumber: '60',
        IPNumber: '1',
        CPUNumber: '4',
        storeNumber: '30',
        memoryNumber: '4',
        bandwidthValue: 10,
        windows: [
          {
            id: 1,
            name: 'Windows 2003 R2'
          },
          {
            id: 2,
            name: 'Windows 2003 R2 64bit'
          },
          {
            id: 3,
            name: 'Windows 2003 R2 English'
          },
          {
            id: 4,
            name: 'Windows 2008 R2'
          },
          {
            id: 5,
            name: 'Windows 2008 R2 English'
          },
          {
            id: 6,
            name: 'Windows 7 32bit'
          },
          {
            id: 7,
            name: 'Windows 7 64bit'
          },
          {
            id: 8,
            name: 'Windows 2012 R2'
          },
          {
            id: 9,
            name: 'Windows XP SP3'
          },
          {
            id: 10,
            name: 'Windows 2016'
          }
        ],
        linux: [
          {
            id: 1,
            name: 'CentOS 7 32bit'
          },
          {
            id: 2,
            name: 'CentOS 7 64bit'
          },
          {
            id: 3,
            name: 'Debian 7 32bit'
          },
          {
            id: 4,
            name: 'Debian 7 64bit'
          },
          {
            id: 5,
            name: 'Ubuntu 12 32bit'
          },
          {
            id: 6,
            name: 'Ubuntu 14 64bit'
          },
          {
            id: 7,
            name: 'kangle3.5.10'
          }
        ],
        system: 'windows',
        systemChoice: ''
      }
    },
    computed:{
      bandwidthNum: function(){
        return Number(this.bandwidthValue).toFixed(0)
      },
      systems: function () {
        this.systemChoice = this.system !== 'linux'? 'Windows 7 64bit': 'CentOS 7 64bit'
        return this.system === 'linux'? this.linux: this.windows
      },
      price: function () {
        const CPUPrice = Number(this.CPUNumber) * 15 - 60
        const memoryPrice = Number(this.memoryNumber) * 30 - 120
        const storePrice = Number(this.storeNumber) - 30
        const bandwidthPrice = Number(this.bandwidthValue) * 20
        const IPPrice = Number(this.IPNumber) * 100 - 100
        const basePrice = 49

        return basePrice + CPUPrice + memoryPrice + storePrice + bandwidthPrice + IPPrice
      }
    },
    watch: {
      bandwidthValue: function (newValue) {
        let t = new TWEEN.Tween(this.$data)
        t.to({})
      }
    },
    mounted() {
      // console.log(document.getElementById('c1').getAttribute('value'))
    }
  }
</script>

<style lang="stylus" scoped>
  #cloud-serve
    margin-top 4rem
    width 100%
    height 100%
    .title
      color white
      width 100%
      height 45vh
      display flex
      flex-direction column
      justify-content center
      align-items center
      .wrap
        position relative
        img
          position absolute
        .cloud-1
          left 3rem
          width 220px
          animation upDownCloud1 5s ease-in-out infinite
        .cloud-2
          width 150px
          height 220px
          left 14rem
          top -5rem
          animation upDownCloud2 5s ease-in-out infinite
    .serve-content
      padding 2rem
      position relative
      .config
        position absolute
        top 10rem
        right 5rem
        width 20rem
        .d-flex
          width 100%
        .flex-left
          min-width 5rem
          text-align right
        .flex-right
          text-indent 2rem
    .input-group
      margin .7rem
      max-width 30rem
  #bandwidth-select
    border-left 1px solid rgba(206, 212, 218, 1)
  .btn-outline-secondary
    background-color #e9ecef
    border-color rgba(206, 212, 218, 1)
    &:hover
      background-color  #363636
  .slide
    input[type=range]
      -webkit-appearance: none;/*清除系统默认样式*/
      /*width: 100%;*/
      background-color #f8f9fa
      /*设置左边颜色为#61bd12，右边颜色为#ddd*/
      /*设置左右宽度比例*/
    .form-control
      border none
      box-shadow none
      &:focus
        border none
          box-shadow none

    input[type=range]::-webkit-slider-runnable-track
      height: 15px;
      border-radius: 40px; /*将轨道设为圆角的*/
      background-color #4993ea
      box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em #0d1112; /*轨道内置阴影效果*/

    /*拖动块的样式*/
    input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none;/*清除系统默认样式*/
      margin-top -1rem
      height: 3.2rem/*拖动块高度*/
      width: 1.5rem/*拖动块宽度*/
      background: #fff;/*拖动块背景*/
      border-radius: 10px; /*外观设置为圆形*/
      border: solid 1px #ddd; /*设置边框*/
    }

  @keyframes upDownCloud1
    0% {
      transform translateY(20px)
    }
    50% {
      transform translateY(-80px)
    }
    100% {
      transform translateY(20px)
    }
  @keyframes upDownCloud2
    0% {
      transform translateY(0px)
    }
    50% {
      transform translateY(80px)
    }
    100% {
      transform translateY(0px)
    }

</style>
