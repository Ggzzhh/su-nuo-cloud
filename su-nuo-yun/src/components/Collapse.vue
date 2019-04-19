<template>
  <div class="c-collapse" @click="showContent">
    <div class="title d-flex flex-row align-items-center justify-content-between">
      <div>
        {{title}}
      </div>
      <div class="icon-box" :style="{transform: iconT}">
        {{icon}}
      </div>
    </div>
    <div class="c-content text-black-50" :style="{height: h}">
      <p></p>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Collapse",
    props: {
      title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      }
    },
    data(){
      return {
        icon: '>',
        h: '0',
        iconT: 'rotate(0deg)'
      }
    },
    methods: {
      showContent(){
        if (this.h === '0') {
          const l = this.content.length
          if (l > 100)
            this.h = (l / 18 + 5) + 'rem'
          else
            this.h = (l / 18 + 3) + 'rem'
          this.iconT = 'rotate(90deg)'
        }
        else {
          this.h = '0'
          this.iconT = 'rotate(0deg)'
        }

      }
    }
  }
</script>

<style lang="stylus" scoped>
  .c-collapse
    margin 1rem
    cursor pointer
    width 100%
    height auto
    background-color #fbfbfb
    padding 1rem
    transition all .5s
    .icon-box
      font-family Arial, "Helvetica Neue", Helvetica, sans-serif
      width 2rem
      font-weight 300
      font-size 1.5rem
      text-align center
      transition transform .3s
  .c-collapse:hover
    box-shadow 1px 1px 5px 0 rgba(0,0,0,0.4)
  .c-content
    text-indent 2rem
    overflow hidden
    width 85%
    transition all .5s

</style>
