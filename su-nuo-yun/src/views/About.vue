<template>
  <div class="about">
    <collapse title="1" content="2" />
  </div>
</template>

<script>
  import FixedAside from '../components/FixedAside.vue'
  import Collapse from "../components/Collapse";
  export default {
    components: {Collapse, FixedAside}
  }
</script>

<style lang="stylus" scoped>
  .aside
    position fixed
    /*width 100px*/
    /*height 100px*/
    background-color #2c3e50
    /*display: inline-block;*/
    /*float: left;*/
    /*clear: both;*/

  .aside-nav
    background-color #0f9e5e
    max-width 12rem
    position: relative;
    left: 10rem;
    padding: 1rem 3rem 1rem 1rem;
    margin: .5rem;
    overflow hidden;
    text-overflow ellipsis;
    white-space nowrap;
    transition all 0.3s ease-in-out 0.1s
    &:hover
      left -1rem
</style>
