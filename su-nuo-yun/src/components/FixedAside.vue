<template>
  <div class="fixed-aside">
    <div class="aside">
      <div
        class="aside-nav"
        v-for="nav in navs"
        :key="nav.toSrc"
        :style="{backgroundColor:nav.bgColor}"
        @click="$scrollTo($event, nav.toSrc)"
      >
        <a :href="nav.toSrc" >{{nav.text}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FixedAside",
    props: ['navs']
  }
</script>

<style lang="stylus" scoped>
  .fixed-aside
    z-index 99
    position fixed
    top 8rem
    .aside
      display flex
      flex-direction column
    .aside-nav
      cursor pointer
      background-color #346aa7
      text-align center
      color white
      font-weight 500
      width 9rem
      position: relative;
      left: -7rem;
      padding: .8rem 2rem .8rem 1rem;
      margin: .5rem;
      overflow hidden;
      text-overflow ellipsis;
      white-space nowrap;
      box-shadow 8px 0 8px -8px rgba(0, 0, 0, .5)
      transition all 0.3s ease-in-out 0.1s
      a
        width 100%
        height 100%
        color white
        text-decoration none
        :hover
          text-decoration none
      &:hover
        left -1rem
        box-shadow 0 5px 10px 0 rgba(0, 0, 0, 0.5)
</style>
