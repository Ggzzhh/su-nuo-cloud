<template>
  <div id="describe" :class="bgStyle">
    <div class="title" :class="titleStyle">
      {{title}}
      <span class="sub" :class="subStyle">
        {{subTitle}}
      </span>
    </div>
    <div class="des-content">
      {{describe}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Describe',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    subTitle: {
      type: String,
      default: '副标题'
    },
    describe: {
      type: String,
      default: '描述'
    },
    styleModel: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {

    }
  },
  computed: {
    bgStyle () {
      if (this.styleModel === 'default') return 'bg-default-blue'
      else if (this.styleModel === 'transparent') return 'bg-transparent-des'
      return ''
    },
    titleStyle () {
      if (this.styleModel === 'default') return 'h1-white'
      else if (this.styleModel === 'transparent') return 'h1-white'
      return ''
    },
    subStyle () {
      if (this.styleModel === 'default') return 'h1-white-bold'
      else if (this.styleModel === 'transparent') return 'h1-blue-bold'
      return ''
    }
  }
}
</script>

<style lang="stylus" scoped>
  #describe
    width 100%
    height 45vh
    display flex
    flex-direction column
    justify-content center
    align-items center
  .title
    width 50%
  .des-content
    margin-top 2rem
    width 50%
    height 30%
    color #e4ecee
    font-size 1rem
  </style>
