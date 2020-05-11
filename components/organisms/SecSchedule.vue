<template lang="pug">
  .SecSchedule#schedule
    SectionTitle(:title="'Schedule'")
    Slant3Svg.slant_3
    .container
      .main_wrapper
        .application_period
          .application_period_date 5/11 ~ 5/20
          .application_period_text {{ $t('schedule.application') }}
        .application_large
          Slant1Svg.slant.slant_1
          .application_large_date 5/22<sup>※1</sup>
          .application_large_text Kickoff
          .application_large_time ※1 17:00 ~ 18:00 (UTC+9)
          .explanation
            .explanation_text {{ $t('schedule.kickoff') }}
        .contest_periods(v-if="$mq !== 'sm'")
          .contest_period(v-for="(sch, sch_key) in $t('schedule.schedules')" :key="`sch_${sch_key}`" :style="`padding-left: ${sch_key * 22.4}px`")
            .contest_period_date {{sch.data}}
            .contest_period_text {{sch.content}}
        .contest_periods(v-else)
          .contest_period(v-for="(sch, sch_key) in $t('schedule.schedules')" :key="`sch_${sch_key}`")
            .contest_period_date {{sch.data}}
            .contest_period_text {{sch.content}}
        .application_large.application_large--final
          Slant2Svg.slant.slant_2
          .application_large_date 5/31<sup>※2</sup>
          .application_large_text Final pitch
          .application_large_time ※2 17:00 ~ 20:30 (UTC+9)
          .explanation.explanation--final
            .explanation_text {{ $t('schedule.final') }}


</template>
<script>
// components
import SectionTitle from '~/components/atoms/SectionTitle.vue'
// svg
import Slant1Svg from '~/assets/images/slant_1.svg?inline'
import Slant2Svg from '~/assets/images/slant_2.svg?inline'
import Slant3Svg from '~/assets/images/slant_3.svg?inline'
export default {
  components: {
    SectionTitle,
    Slant1Svg,
    Slant2Svg,
    Slant3Svg
  },
  data() {
    return {
      // schedules: [
      //   { data: 'Step 1', content: 'アイスブレーク、本質的課題の確認' },
      //   { data: 'Step 2', content: 'アイデア出し' },
      //   { data: 'Step 3', content: '解決案の提示' }
      // ]
      // schedules: [
      //   { data: 'Week1', content: 'アイスブレーク、本質的課題の確認' },
      //   { data: 'Week2', content: 'アイデア出し' },
      //   { data: 'Week3', content: '解決策の提示' },
      //   { data: 'Week4', content: '中間発表（動画の提出）、フィードバック' },
      //   { data: 'Week5,6', content: '事業計画、資金計画の作成' },
      //   { data: 'Week7', content: '最終発表準備、事業計画作成' }
      // ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecSchedule.scss';
</style>
