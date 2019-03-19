<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <div class="slide">
          <div class="full-d flex-middle pt-7" style="background-color: #4fa1ff">
            <div class="c-img">
              <img src="../assets/img/banner-pic1.png" alt="" style="background-size:cover;width:100%;">
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="full-d flex-middle pt-7"  style="background-color: #7762ff">
            <div class="c-img">
              <img src="../assets/img/banner-pic2.png" alt="" style="background-size:cover;width:100%;">
            </div>
          </div>
        </div>
        <div class="slide">
          <div class="full-d flex-middle pt-7"  style="background-color: #4fa1ff">
            <div class="c-img">
              <img src="../assets/img/banner-pic3.png" alt="" style="background-size:cover;width:100%;">
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        Second section ...
      </div>
      <div class="section">
        First section ...
      </div>
      <div class="section">
        Second section ...
      </div>
      <div class="section">
        First section ...
      </div>
      <div class="section">
        Second section ...
      </div>
      <div class="section">
        First section ...
      </div>

    </full-page>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    components: {

    },
    data () {
      return {
        options: {
          licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
          'verticalCentered': false,
          'css3': true,
          'sectionsColor': ['#fff', '#f3f3f3', '#fff', 'rgba(1,1,1,0.3)', '#f3f3f3', '#fff', '#212121'],
          anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
          // 'navigation': true,
          'navigationPosition': 'right',
          // 'navigationColor': '#ff726f',
          'scrollingSpeed': 1200,
          // responsiveWidth: 1024,
          // responsiveHeight: 0,
          controlArrows: false,
          // controlArrowColor: 'rgba(1,1,1,0.2)',
          resetSliders: true,
        }
      }
    },
    methods: {
      afterLoad (anchor, index){
        console.log(index)
        // section 加载完毕后
        if (index === 1){
          // var count = 1;

          setTimeout(function () {
            fullpage_api.moveSlideRight();
          }, 2800);
        }

        if (index === 2) {
          vm.show = true;
        }

        if (index === 4){
          $('.choice-me').removeClass().addClass('choice-me animated lightSpeedIn')
        }

        if (index === 7){
          $('.foot-left').removeClass().addClass('foot-left animated slideInLeft');
          $('.foot-right').removeClass().addClass('foot-right animated slideInRight')
        }

      },

      onLeave (index, nextIndex, direction){

        if (index === 2) {
          vm.show = false;
        }

        if (index === 4){
          $('.choice-me').removeClass().addClass('choice-me animated lightSpeedOut')
        }

        if (index === 7){
          $('.foot-left').removeClass('slideInLeft').addClass('slideOutLeft');
          $('.foot-right').removeClass('slideInRight').addClass('slideOutRight')
        }
      },
      afterSlideLoad (anchorLink, index, slideIndex, direction) {
        console.log(1);
        if (index === 1){
          // var count = 1;
          setTimeout(function () {
            // count ++;
            // console.log(count);
            $.fn.fullpage.moveSlideRight();
          }, 2800);
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .full-d
    width: 100%
    height: 100%

</style>
