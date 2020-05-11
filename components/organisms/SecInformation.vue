<template lang="pug">
  .SecInfomation#information
    SectionTitle(:title="'Information'")
    .container
      .information_lists
        .information_list.participate
          p.information_list_theme {{ $t('information.theme.whom') }}
          p.information_list_content {{ $t('information.content.whom') }}
        .information_list.view
          p.information_list_theme {{ $t('information.theme.what_evaluate') }}
          .information_list_content
            p.information_list_content--text {{ $t('information.content.what_evaluate_1') }}
              | <br>{{ $t('information.content.what_evaluate_2') }}<sup>※3</sup>
            p.information_list_content--caution ※3 {{ $t('information.content.caution') }}
        .information_list.judge
          p.information_list_theme {{ $t('information.theme.who_evaluate')}}
          nuxt-link(to="/judges").information_list_content {{ $t('information.content.who_evaluate') }}
          //- p.information_list_content {{ $t('information.content.who_evaluate') }}
        .information_list.management
          p.information_list_theme {{ $t('information.theme.powered_by') }}
          p.information_list_content
            span.information_list_content--sponsor
              span {{ $t('information.content.powered_by') }}
              nuxt-link(to="/about") Prossell
            //- span.information_list_content--coorporate
            //-   span {{ $t('information.content.coorporate') }}
            //-   a(href = "https://n-wakamonokikou.net/") {{ $t('information.content.coorporater') }}

</template>
<script>
import SectionTitle from '~/components/atoms/SectionTitle.vue'
export default {
  components: {
    SectionTitle
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/organisms/SecInformation.scss';
</style>
