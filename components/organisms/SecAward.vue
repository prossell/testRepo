<template lang="pug">
  .SecAward#award
    SectionTitle(:title="'Award'")
    .container
      .award_img--sm(v-if="$mq === 'sm'")
        AwardSvg.award_img--sm__svg
        .award_img--sm__cap designed by Payungkead from Flaticon
      .main_wrapper
        .award_txt
          .award_txt__row
            .award_txt__row__property {{ $t('award.property') }}
            .award_txt__row__contents
              p {{ $t('award.content_1') }}
                a(href="https://zoom.us/jp-jp/meetings.html") Zoom
                span {{ $t('award.content_2') }}
              //- p 優秀者には交通費・宿泊費等、上限2万円の支給
          //- .award_txt__row
          //-   .award_txt__row__property 賞
          //-   .award_txt__row__contents
          //-     table: tbody
          //-       tr
          //-         td 最優秀賞：
          //-         td 賞金10万円
          //-       tr
          //-         td 企業賞：
          //-         td 当日までのお楽しみ
        .award_img(v-if="$mq !== 'sm'")
          AwardSvg.award_img__svg
          .award_img__cap designed by Payungkead from Flaticon
</template>
<script>
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import AwardSvg from '~/assets/images/award.svg?inline'
export default {
  components: {
    SectionTitle,
    AwardSvg
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecAward.scss';
</style>
