<template lang="pug">
  .SecSponsors#sponsors
    SectionTitle(:title="'Sponsor'")
    .container(v-if="publish")
      .sponsors_list(v-if="sponsors_A")
        .sponsor_box(v-for="(spA, spA_key) in sponsors_A" :key="`spA_key${spA_key}`").plan_A
          a(:href="spA.link")
            img.sp_logo(v-if="spA.logo" :src="require(`~/assets/sponsor_imgs/${spA.logo}.png`)")
            //- .sponsor_name <span>Plan A</span> {{spA.name}}
            .sponsor_name(v-if="$i18n.locale === 'ja'") {{spA.janame}}
            .sponsor_name(v-else) {{spA.enname}}
      //- .sponsors_list(v-if="sponsors_B")
      //-   .sponsor_box(v-for="(spB, spB_key) in sponsors_B" :key="`spB_key${spB_key}`").plan_B
      //-     a(:href="spB.link")
      //-       img.sp_logo(v-if="spB.logo" :src="require(`~/assets/sponsor_imgs/${spB.logo}.png`)")
      //-       .sponsor_name <span>Plan B</span> {{spB.name}}
      //- .sponsors_list(v-if="sponsors_C")
      //-   .sponsor_box(v-for="(spC, spC_key) in sponsors_C" :key="`spC_key${spC_key}`").plan_C
      //-     a(:href="spC.link")
      //-       img.sp_logo(v-if="spC.logo" :src="require(`~/assets/sponsor_imgs/${spC.logo}.png`)")
      //-       .sponsor_name <span>Plan C</span> {{spC.name}}

    .container(v-else)
      nuxt-link(to="/")
        CommingSoonSvg.comming_soon
      p.prease_weit {{ $t('sponsors.wait') }}
    //- .container
    //-   .sponsor_link
    //-     h3 【企業の皆様へ】
    //-     p スポンサーは随時募集しています。
    //-     p スポンサー用の情報については
    //-       nuxt-link(to="/corporates") 企業の方へ
    //-       | をご覧ください。
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
      publish: false,
      sponsors_A: [
        {
          link: 'https://www.excite.co.jp/',
          logo: 'excite',
          janame: 'エキサイト株式会社',
          enname: 'Excite Japan Co., Ltd.'
        }
      ],
      sponsors_B: [{}],
      sponsors_C: [{}]
    }
  }
}
</script>
<style lang="scss" scoped>
.sponsors_list {
  @include flex($wrap: wrap, $justifyContent: center, $alignItems: flex-start);
  width: 100%;
}
.sponsor_box {
  padding: 8px;
  margin-bottom: 36px;
}
.plan_A {
  width: 60%;
}
.plan_B {
  width: 33.3333%;
}
.plan_C {
  width: 25%;
}

.sp_logo {
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
.sponsor_name {
  text-align: center;
  color: $gray-txt;
  padding: 4px 0;
  font-size: 1.8rem;
  span {
    color: $gray;
    font-size: 1.5rem;
    padding-right: 12px;
  }
}

// a,
// a:link,
// a:visited {
//   text-decoration: none;
// }
@media screen and (max-width: $md) {
  .sponsor_box {
    padding: 4px;
  }
  .sponsor_name {
    font-size: 1.6rem;
    span {
      font-size: 1.3rem;
      padding-right: 8px;
    }
  }
}

@media screen and (max-width: $sm) {
  .plan_A {
    width: 100%;
  }
  .plan_B {
    width: 50%;
  }
  .plan_C {
    width: 33.3333%;
  }
  .plan_A .sponsor_name {
    font-size: 1.8rem;
    span {
      font-size: 1.5rem;
      padding-right: 12px;
    }
  }
  .plan_B .sponsor_name,
  .plan_C .sponsor_name {
    span {
      display: block;
      padding-right: 0;
    }
  }
}

// pre release
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
.sponsor_link {
  margin-top: 52px;
  h3 {
    margin: 12px 0;
  }
  a {
    text-decoration: underline;
    text-underline-position: under;
  }
}
</style>
