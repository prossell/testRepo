<template lang="pug">
  .SecTopVisual
    HeaderMenu()
    .container
      .top_visual_box
        LogoSvg.logo
        .right_contents_wrapper
          .catch_copy {{ $t('index.catch_copy') }}
          SankaOubo
          .application_period
            .application_period_text {{ $t('index.application_period') }}
            .application_period_date 5/11 ~ 5/20
          //- .next
          //-   a.next_event(href="https://note.com/prossell2019/n/n1c3a086b67dc") 最終結果はコチラ！
          //-   ArrowSvg.next_arrow
      .scroll_down(v-if="$mq !== 'sm'")
        ScrollSvg.scroll_down_svg
        .scroll_line
</template>
<script>
// components
import HeaderMenu from '~/components/molecules/HeaderMenu.vue'
import SankaOubo from '~/components/atoms/SankaOubo.vue'
// svgs
import LogoSvg from '~/assets/images/oic2020_logo.svg?inline'
import CommingSoonSvg from '~/assets/images/comming_soon.svg?inline'
import ScrollSvg from '~/assets/images/scroll.svg?inline'
import ArrowSvg from '~/assets/images/angle-right-solid.svg?inline'

export default {
  components: {
    HeaderMenu,
    SankaOubo,
    LogoSvg,
    CommingSoonSvg,
    ScrollSvg,
    ArrowSvg
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecTopVisual.scss';
</style>
