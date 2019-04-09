<template>
  <div class="choice-button" :class="{active: active}" @click="click">
    <div v-html="html"></div>
  </div>
</template>

<script>
  export default {
    name: "choiceButton",
    props: {
      "html": {
        type: String,
        default: '插入html'
      },
      "active": {
        type: Boolean,
        default: false
      }
    },
    methods: {
      click(){
        this.$emit('click', event)
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .choice-button
    user-select none
    border-radius 5px
    display inline-block
    text-align center
    border 1px solid gray
    cursor pointer
    min-width 4rem
    padding-left 1rem
    padding-right 1rem
    font-size .8rem
    height 1.2rem
  .active
    border-color #4fa1ff
    background-color rgba(79, 161, 255, .3)
    color black
</style>
