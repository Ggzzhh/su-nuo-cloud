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
        <div class="container flex-middle" style="margin-left: -12rem">
          <div class="input-group">
            <div class="input-group-prepend">
              <label for="line-select" class="input-group-text">线路</label>
            </div>
            <select class="custom-select" name="line-select" id="line-select" disabled>
              <option value="电信">电信</option>
            </select>
          </div>

          <div class="input-group">
            <div class="input-group-prepend">
              <label for="config-select" class="input-group-text">配置</label>
            </div>
            <select class="custom-select" name="config-select" id="config-select" disabled>
              <option value="60">60G单机防御</option>
            </select>
          </div>

          <div class="input-group">
            <div class="input-group-prepend">
              <label for="CPU-select" class="input-group-text">CPU</label>
            </div>
            <select class="custom-select" name="CPU-select" id="CPU-select">
              <option value="4">4 核</option>
              <option value="8">8 核</option>
              <option value="16">16 核</option>
            </select>
          </div>

          <div class="input-group">
            <div class="input-group-prepend">
              <label for="memory-select" class="input-group-text">内存</label>
            </div>
            <select class="custom-select" name="memory-select" id="memory-select">
              <option value="4">4 GB</option>
              <option value="8">8 GB</option>
              <option value="16">16 GB</option>
            </select>
          </div>

          <div class="input-group">
            <div class="input-group-prepend">
              <label for="store-select" class="input-group-text">存储</label>
            </div>
            <select class="custom-select" name="store-select" id="store-select">
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
                   min="0"
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
            <select class="custom-select" name="IP-select" id="IP-select">
              <option value="1">1 个</option>
              <option value="2">2 个</option>
              <option value="4">4 个</option>
              <option value="8">8 个</option>
              <option value="16">16 个</option>
            </select>
          </div>

          <div class="input-group">
            <div class="input-group-prepend">
              <label for="system-select" class="input-group-text">系统</label>
              <button type="button"
                      class="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                <span class="sr-only">Toggle Dropdown</span>
              </button>
            </div>
            <select class="custom-select" name="system-select" id="system-select">
              <option value="30">30 GB</option>
              <option value="60">60 GB</option>
              <option value="80">80 GB</option>
              <option value="100">100 GB</option>
              <option value="150">150 GB</option>
              <option value="300">300 GB</option>
            </select>
          </div>

        </div>
        <!--<choice-button-->
          <!--id="c1"-->
          <!--html="<p>test</p>"-->
          <!--value="t1"-->
          <!--:active="c1Active"-->
          <!--@click="clicked"-->
        <!--/>-->
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
      }
    },
    data(){
      return {
        c1Active: false,
        bandwidthValue: 10
      }
    },
    computed:{
      bandwidthNum: function(){
        return Number(this.bandwidthValue).toFixed(0)
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
    .input-group
      margin 1rem
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
