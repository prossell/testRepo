<template lang="pug">
  .SecConsept#consept
    .container
      .consept_wrapper
        .final_pitch(v-if="$mq !== 'sm'")
          FinalPitchSvg.final_pitch__svg
          .final_pitch__box
        .consept
          .consept__box(v-if="$mq !== 'sm'")
          .consept__title(v-if="$i18n.locale === 'ja'") 
            .consept__title__txt {{ $t('concept.title_1') }}
            TimesSvg.consept__title__times
            .consept__title__txt {{ $t('concept.title_2') }}

          .consept__title(v-else) 
            .consept__title__entxt {{ $t('concept.title_1') }}
            TimesSvg.consept__title__times
            .consept__title__entxt {{ $t('concept.title_2') }}

          .consept__discription
            p
              span {{ $t('concept.discription_1') }} <br/>
              span {{ $t('concept.discription_2') }}
            p
              span {{ $t('concept.discription_3') }} <br/>
              span {{ $t('concept.discription_4') }}
            //- p 最終プレゼン後の評価で、優勝チームには賞金10万円！
</template>
<script>
import FinalPitchSvg from '~/assets/images/final_pitch_day.svg?inline'
import TimesSvg from '~/assets/images/times.svg?inline'

export default {
  components: {
    FinalPitchSvg,
    TimesSvg
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecConsept.scss';
</style>
