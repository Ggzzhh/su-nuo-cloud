<template>
  <div class="col-md-3 col-sm-6 ">
    <transition>
      <div class="could-price" v-on:mouseenter="enter" v-on:mouseleave="leave">
        <a :href="link">
          <img src="../assets/img/x.svg" width="60" height="60">
          <div class="h3">{{title}}</div>
          <p class="price">
            ¥
            <span>{{price}}</span>
            元/月
          </p>
          <div >{{bandwidth}}Mbps 带宽</div>
          <div class="pt-05">{{defense}}Gbps 防御</div>
          <div class="pt-05">{{core}}核心{{capacity}}GB 硬件</div>
        </a>

        <a :href="detail_link" class="could-detail pt-1 btn btn-primary" :style="{'opacity': opacity1}">查看详情</a>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "CouldView",
    props: {
      price: {
        type: Number,
        default: 0
      },
      bandwidth: {
        type: Number,
        default: 0
      },
      defense: {
        type: Number,
        default: 0
      },
      core: {
        type: Number,
        default: 0
      },
      capacity: {
        type: Number,
        default: 0
      },
      link: {
        type: String,
        default: '#'
      },
      detail_link: {
        type: String,
        default: '#'
      },
      title: {
        type: String,
        default: '服务器'
      }
    },

    data: function () {
      return {
        opacity1: 0
      }
    },

    methods: {
      enter: function (event) {
        this.opacity1 = 1
      },
      leave: function (event) {
        this.opacity1 = 0
      }
    }
  }
</script>
