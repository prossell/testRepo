<template lang="pug">
  .SecSupporters#supporters
    SectionTitle(:title="'Supporters'")
    .container(v-if="publish")
      .supporters_list(v-if="supporters")
        .supporter_box(v-for="(sup, sup_key) in supporters" :key="`sup_key${sup_key}`")
          a(:href="sup.link")
            img.sup_logo(v-if="sup.logo" :src="require(`~/assets/sponsor_imgs/${sup.logo}.png`)")
            .supporter_name {{sup.jaName}}

    .container(v-else)
      nuxt-link(to="/")
        CommingSoonSvg.comming_soon
      p.prease_weit {{ $t('sponsors.wait') }}
</template>
<script>
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import CommingSoonSvg from '~/assets/images/comming_soon.svg?inline'

export default {
  components: {
    SectionTitle,
    CommingSoonSvg
  },
  data() {
    return {
      publish: true,
      supporters: [
        {
          link: 'https://kosen-career.tech/',
          logo: 'kosen_career',
          jaName: '株式会社 高専キャリア教育研究所',
          enName: 'Kosen Career Co., Ltd.'
        }
        // },
        // {
        //   link: 'https://academic-gangstar.com/',
        //   logo: 'academic_gangstar',
        //   jaName: '株式会社 アカデミックギャングスター',
        //   enName: 'Academic Gangstar Co., Ltd.'
        // },
        // {
        //   link: 'https://dena.com/jp/',
        //   logo: 'dena',
        //   jaName: '株式会社ディー・エヌ・エー',
        //   enName: 'DeNA Co., Ltd.'
        // }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.supporters_list {
  @include flex($wrap: wrap, $justifyContent: center, $alignItems: flex-start);
  width: 100%;
}
.supporter_box {
  padding: 8px;
  margin-bottom: 36px;
  width: 60%;
}

.sup_logo {
  display: block;
  width: 100%;
  height: 100%;
  background: $white;
  transition: 0.3s $ease-out-1;
  transform: translateY(0);
  &::before {
    content: '';
    display: block;
    padding-top: 50%;
    background: $white;
  }
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 4px 16px rgba($black, 0.1);
  }
}
.supporter_name {
  text-align: center;
  color: $gray-txt;
  padding: 4px 0;
  font-size: 1.8rem;
  // span {
  //   color: $gray;
  //   font-size: 1.5rem;
  //   padding-right: 12px;
  // }
}

.container {
  text-align: center;
}
.comming_soon {
  width: 260px;
  transition: 0.3s $ease-out-1;
  .comming_soon_cls-2 {
    fill: $gray;
  }
  &:hover {
    transform: scale(1.1);
  }
}
.prease_weit {
  margin-top: 8px;
  color: $gray-txt;
}

@media screen and (max-width: $md) {
  .supporter_box {
    padding: 4px;
  }
  .supporter_name {
    font-size: 1.6rem;
    span {
      font-size: 1.3rem;
      padding-right: 8px;
    }
  }
}

@media screen and (max-width: $sm) {
  .supporter_box {
    width: 100%;
  }
  .supporter_name {
    font-size: 1.8rem;
  }
}
</style>
