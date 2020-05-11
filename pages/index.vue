<template lang="pug">
  .index
    BackgroundTriangleTop.background
    SecTopVisual.topvisual
    SecConsept
    SecThreeFeatures
    .tri_mid_wrapper
      BackgroundTriangleMiddle
      SecSchedule
      SecInformation
      SecVision
    .separator
      //- .separator_sankaoubo
      SankaOubo.sankaoubo_box_parent
      //- .next
      //-   a.next_event(href="https://note.com/prossell2019/n/n1c3a086b67dc") 最終結果はコチラ！
      //-   ArrowSvg.next_arrow
    SecTheme
    SecAward
    SecMedia
    SecShareSNS
    //- SecSponsors
    SecSupporters
    SecPastEvent
    Footer
</template>

<script>
// background triangle
import BackgroundTriangleTop from '~/components/atoms/BackgroundTriangleTop.vue'
import BackgroundTriangleMiddle from '~/components/atoms/BackgroundTriangleMiddle.vue'

// section
import SecTopVisual from '~/components/organisms/SecTopVisual.vue'
import SecConsept from '~/components/organisms/SecConsept.vue'
import SecThreeFeatures from '~/components/organisms/SecThreeFeatures.vue'
import SecSchedule from '~/components/organisms/SecSchedule.vue'
import SecInformation from '~/components/organisms/SecInformation.vue'
import SecVision from '~/components/organisms/SecVision.vue'
import SecTheme from '~/components/organisms/SecTheme.vue'
import SecAward from '~/components/organisms/SecAward.vue'
import SecShareSNS from '~/components/organisms/SecShareSNS.vue'
import SecSupporters from '~/components/organisms/SecSupporters.vue'
import SecSponsors from '~/components/organisms/SecSponsors.vue'
import SecPastEvent from '~/components/organisms/SecPastEvent.vue'
import Footer from '~/components/organisms/Footer.vue'
import SankaOubo from '~/components/atoms/SankaOubo.vue'
import SecMedia from '~/components/atoms/SecMedia.vue'

// svgs
import ArrowSvg from '~/assets/images/angle-right-solid.svg?inline'

export default {
  components: {
    BackgroundTriangleTop,
    SecTopVisual,
    SecConsept,
    SecThreeFeatures,
    BackgroundTriangleMiddle,
    SecSchedule,
    SecInformation,
    SecVision,
    SecTheme,
    SecAward,
    SecMedia,
    SecShareSNS,
    SecSupporters,
    SecSponsors,
    SecPastEvent,
    Footer,
    SankaOubo,
    ArrowSvg
  },
  head() {
    return {
      titleTemplate: null
    }
  }
}
</script>

<style lang="scss">
.index {
  min-height: 100vh;
}
.separator {
  position: relative;
  background: $theme-gradient;
  height: 200px;
  width: 100%;
  .next {
    padding-top: 154px;
  }
}

.tri_mid_wrapper {
  position: relative;
  overflow: hidden;
}

.sankaoubo_box_parent {
  @include absolute(0, 0, 0, 0);
  margin: auto;
  width: min-content;
  height: min-content;
  z-index: 0;
  box-shadow: 0 0 32px 8px $white;
  transition: 0.5s $ease-out-1;
  &:hover {
    box-shadow: 0 0 32px 0px $white;
  }
}

.next {
  // margin: 36px auto 0;
  text-align: center;
  // padding-top: 160px;
  width: 100%;
  display: block;
  font-family: 'Noto Sans JP';
  font-weight: $weight-bold;
  font-style: italic;
  font-size: 20px;
  .next_event {
    color: $black;
    display: inline;
    vertical-align: middle;
    text-decoration: none;
    &:hover {
      color: $dim-gray;
    }
  }

  &_arrow {
    transition: 0.3s $ease-out-1;
    transform: translateX(0);
    margin-left: 8px;
    display: inline;
    height: 18px;
    vertical-align: middle;
  }

  .next_event:hover + .next_arrow {
    transform: translateX(8px);
  }
}

@media screen and (max-width: $md) {
  .sankaoubo_box_parent {
    transform: scale(1.5);
  }
}

@media screen and (max-width: 840px) {
  .next {
    &_event {
      font-size: 2rem;
    }
    &_arrow {
      height: 14px;
    }
  }
}

@media screen and (max-width: $sm) {
  .sankaoubo_box_parent {
    transform: scale(1);
    width: 80%;
  }
  .separator {
    .next {
      &_event {
        font-size: 1.8rem;
      }
      &_arrow {
        height: 12px;
      }
    }
  }
}
</style>
