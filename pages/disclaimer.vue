<template lang="pug">
  .disclaimer
    HeaderMenu()
    SubPageTopTitle(:title="'Rules'")
    .container
      .main_wrapper
        //- BoshushuryoSvg.boshushuryo
        //- .boshushuryo(v-if="this.$i18n.locale === 'en'")
        //-   .enfont Application have been closed
        .disclaimer_box
          .disclaimer_box_title: p {{ $t('disclaimer.please') }}
          .disclaimer_box_txt(v-html="disclaimer")
        .disclaimer_checkbox(@click="toggleAgreement()")
          .disclaimer_checkbox_icon
            CheckSvg.check_icon(v-if="agree")
          .disclaimer_checkbox_txt {{ $t('disclaimer.agree') }}
        button(:disabled="!agree" @click="goToForm()" :class="{'agree_button--disabled': !agree}").agree_button {{ $t('disclaimer.toform') }}
    Footer
</template>
<script>
// components
import DisclaimerJa from '~/assets/disclaimer-ja.md'
import DisclaimerEn from '~/assets/disclaimer-en.md'
import HeaderMenu from '~/components/molecules/HeaderMenu.vue'
import SubPageTopTitle from '~/components/atoms/SubPageTopTitle'
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import Footer from '~/components/organisms/Footer.vue'

import CheckSvg from '~/assets/images/check.svg?inline'
import BoshushuryoSvg from '~/assets/images/boshushuryo.svg?inline'

export default {
  components: {
    HeaderMenu,
    SubPageTopTitle,
    SectionTitle,
    Footer,
    CheckSvg,
    BoshushuryoSvg
  },
  data() {
    return {
      agree: false
    }
  },
  computed: {
    disclaimer() {
      let disclaimerlang = DisclaimerJa
      if (this.$i18n.locale === 'en') {
        disclaimerlang = DisclaimerEn
      }

      return disclaimerlang
    }
  },
  methods: {
    toggleAgreement() {
      // this.$scrollTo('#top')
      this.agree = this.agree !== true
    },
    goToForm() {
      window.location.href =
        'https://docs.google.com/forms/d/e/1FAIpQLSdVdIt4wTl3vaNVmUgZ8nvjGk1wly73XBQDpE0Q1cV_3qXkvA/viewform'
    }
  },
  head() {
    return {
      title: '応募の前にご確認ください',
      titleTemplate: '%s - ONLINE INTERN CONTEST 2020'
    }
  }
}
</script>
<style lang="scss" scoped>
.main_wrapper {
  text-align: center;
}
.enfont {
  color: $theme-green;
  text-align: center;
  font-family: $noto-sans;
  font-weight: 700;
  font-style: italic;
  font-size: 7.2rem;
  background: -webkit-linear-gradient(60deg, $theme-green, $theme-blue);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.disclaimer_box {
  position: relative;
  width: 100%;
  height: 600px;
  text-align: left;
  background: $white;
  padding: 48px;
  z-index: auto;
  &_title {
    @include absolute($top: -20px, $left: 0, $right: 0);
    width: 100%;
    z-index: 1;
    text-align: center;
    p {
      display: inline-block;
      width: auto;
      background-color: $black;
      padding: 8px 48px;
      font-size: 2.4rem;
      color: $white;
    }
  }
  &::before {
    content: '';
    display: block;
    @include absolute($top: -4px, $left: -4px);
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    background: $theme-gradient;
    z-index: -1;
  }
  &_txt {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    /deep/ h2,
    /deep/ h3,
    /deep/ p {
      margin: 1.2em 0 0.6em;
    }
  }
}
.disclaimer_checkbox {
  // opacity: 0.3;

  margin: 64px auto;
  @include flex($justifyContent: center);
  display: inline-flex;
  font-size: 2rem;
  cursor: pointer;
  &_icon {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    border: 4px solid $link;
    position: relative;
    .check_icon {
      @include absolute(0, 0, 0, 0);
      display: block;
      margin: auto;
      width: 20px;
      .check_cls-1 {
        fill: $link;
      }
    }
  }
  &_txt {
    margin-left: 16px;
  }
}
.agree_button {
  position: relative;
  width: 100%;
  height: 64px;
  text-align: center;
  z-index: auto;
  font-size: 2.4rem;
  background: $white;
  cursor: pointer;
  &::before {
    content: '';
    display: block;
    @include absolute($top: -4px, $left: -4px);
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    background: $theme-gradient;
    z-index: -1;
  }
  &--disabled {
    background: $light-gray;
    cursor: unset;
    outline: none;
    &::before {
      opacity: 0.4;
    }
  }
}

:active,
:focus {
  outline: none;
}

@media screen and (max-width: 1500px) {
  .enfont {
    font-size: 5.6rem;
  }
}

@media screen and (max-width: $md) {
  .disclaimer_box {
    margin-top: 64px;
    padding: 32px;
    &_title {
      p {
        padding: 8px 32px;
        font-size: 2.2rem;
      }
    }
  }
  .disclaimer_checkbox {
    font-size: 1.9rem;
  }
  .enfont {
    font-size: 4rem;
  }
}

@media screen and (max-width: 780px) {
  .enfont {
    font-size: 3.2rem;
  }
}

@media screen and (max-width: $sm) {
  .disclaimer_box {
    padding: 50px 16px;
    &_title {
      p {
        font-size: 2rem;
      }
    }
  }
  .disclaimer_checkbox {
    font-size: 1.7rem;
  }
}
</style>
