<template lang="pug">
  .SecVision#vision
    SectionTitle(:title="'Vision'")
    .container
      .main_wrapper
        .idea
          IdeaSvg.idea_svg
          .idea_txt {{ $t('vision.idea') }}
        .comment
          .comment_img
            img.comment_img_img(src="~/assets/images/yokoyama_kazuki.png")
            .comment_who(v-if="$mq === 'sm'")
              .comment_who--post {{ $t('vision.post') }}
              .comment_who--name {{ $t('vision.name') }}
          .comment_wrapper
            .comment_who(v-if="$mq !== 'sm'")
              .comment_who--post {{ $t('vision.post') }}
              .comment_who--name {{ $t('vision.name') }}
            .comment_txt
              p {{ $t('vision.comment_1') }}
              p {{ $t('vision.comment_2') }}
              p {{ $t('vision.comment_3') }}
              p {{ $t('vision.comment_4') }}
              p {{ $t('vision.comment_5') }}
        //- .matching
        //-   .matching_thinkings
        //-     .matching_thinkings_title: span 学生の<br>思い
        //-     .matching_thinkings_txt
        //-       p 企業に認められるような経験や実績を積みたい！
        //-       p 自分に合う企業へ就職したい！
        //-       p 地方でもビジコン等に挑戦できる機会が欲しい！
        //-   .matching_logo
        //-     MatchingSvg.matching_logo_svg
        //-   .matching_thinkings
        //-     .matching_thinkings_title: span 企業の<br>思い
        //-     .matching_thinkings_txt
        //-       p ハッカソンやアイデアソン、ビジネスコンテストなど、
        //-         | 様々なイベントに参加するアクティブな学生がほしい！
        //-       p 学生のプロジェクトの進め方を見てみたい！
</template>
<script>
// components
import SectionTitle from '~/components/atoms/SectionTitle.vue'
// svgs
import IdeaSvg from '~/assets/images/idea.svg?inline'
import MatchingSvg from '~/assets/images/matching.svg?inline'

export default {
  components: {
    SectionTitle,
    IdeaSvg,
    MatchingSvg
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecVision.scss';
</style>
