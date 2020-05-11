<template lang="pug">
  .toggle_locale
    .toggle_locale_btn(
      @mouseover="isOpened = true"
      @mouseleave="isOpened = false"
      :class="{'toggle_locale_btn--opened': isOpened}"
    ) JP / EN
      transition(name="fade")
        .locales(v-if="isOpened")
          button.locale_btn(
            v-for="(l, l_id) in locales"
            :key="`locale-${l_id}`"
            @click="changeLocale(l.lang)"
            :class="{'locale_btn--selected': l.lang === locale}"
          ) {{l.name}}
</template>
<script>
export default {
  data() {
    return {
      locale: 'ja',
      locales: [
        { lang: 'ja', name: '日本語' },
        { lang: 'en', name: 'English' }
      ],
      isOpened: false
    }
  },
  asyncData({ app }) {
    const cookieLocale = app.$cookies.get('locale') || 'ja'
    return {
      locale: cookieLocale
    }
  },
  methods: {
    changeLocale(loc) {
      this.locale = loc
      this.$cookies.set('locale', loc) // localeをCookieに保存
      this.$i18n.locale = loc // 言語を切り替え
    }
  }
}
</script>
<style lang="scss" scoped>
.toggle_locale {
  margin-left: 16px;
}
.toggle_locale_btn {
  position: relative;
  padding: 6px 12px;
  color: $link-txt;
  transition: 0.3s $ease-out-1;
  cursor: pointer;
  &--opened {
    background: $light-gray;
  }
}
.locales {
  @include absolute($top: 36px, $left: 0px);
  width: 100%;
  background: $light-gray;
  transition: 0.3s $ease-out-1;
  z-index: 3;
}
.locale_btn {
  display: block;
  width: 100%;
  color: darken($theme-blue, 22%);
  padding: 8px 0;
  border-top: 2px solid $white;
  transition: 0.3s $ease-out-1;
  &:focus {
    outline: none;
  }
  &:hover {
    background: $white;
  }
  &--selected {
    background: darken($theme-blue, 18%);
    color: $white;
    &:hover {
      background: darken($theme-blue, 18%);
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.3s $ease-out-1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
