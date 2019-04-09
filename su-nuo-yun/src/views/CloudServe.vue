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
      <div class="serve-content" >
        <choice-button
          id="c1"
          html="<p>test</p>"
          value="t1"
          :active="c1Active"
          @click="clicked"
        />
      </div>
    </div>
  </div>
</template>

<script>
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
        c1Active: false
      }
    },
    mounted() {
      console.log(document.getElementById('c1').getAttribute('value'))
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
