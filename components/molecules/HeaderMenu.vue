<template lang="pug">
  .HeaderMenu
    .container
      .header_menu
        .header_menu_links(v-if="$mq === 'sm'")
          .menu_open_btn(@click="OpenMenu()")
            MenuSvg.menu_svg
          .menu_close_btn(v-if="menu" @click="CloseMenu()")
          .menu_links_box(:class="{'menu_links_box--open':menu}")
            .header_menu_link
              nuxt-link(to="/" @click.native="CloseMenu()").header_menu_link_title トップページ
            .header_menu_link(v-for="(link,link_id) in links" :key="`header_menu_link_${link_id}`")
              nuxt-link(:to="link.to" @click.native="CloseMenu()").header_menu_link_title {{link.name}}
        .header_menu_links(v-else)
          .header_menu_link(v-for="(link,link_id) in links" :key="`header_menu_link_${link_id}`")
            nuxt-link(:to="link.to").header_menu_link_title {{link.name}}
        //- .header_menu_locale
        //-   ToggleLocale
        .header_menu_sns
          TopShareSNS
      .header_notify(v-if="$route.path === '/'")
        nuxt-link(to="awardCeremony").header_notify_box
          .title
            span.press プレスリリース
            span.content Final Pitch 見学者募集！
          .arrow
      //-   a(href="https://twitter.com/Prossell_JP").header_notify_box
      //-     .title
      //-       span.content Final Pitch 出場チーム決定！
      //-     .arrow
</template>
<script>
// components
import TopShareSNS from '~/components/molecules/TopShareSNS.vue'
import ToggleLocale from '~/components/atoms/ToggleLocale.vue'
// svg
import MenuSvg from '~/assets/images/menu.svg?inline'

export default {
  components: {
    TopShareSNS,
    ToggleLocale,
    MenuSvg
  },
  data() {
    return {
      menu: false,
      links: [
        { to: '/about', name: 'About' },
        { to: '/judges', name: 'Judges' },
        { to: '/news', name: 'News' }
        // { to: '/corporates', name: '企業の方へ' }
      ]
    }
  },
  mounted() {
    this.CloseMenu()
  },
  methods: {
    OpenMenu() {
      this.menu = true
    },
    CloseMenu() {
      this.menu = false
    }
  }
}
</script>
<style lang="scss" scoped>
$header-height: 80px;

.HeaderMenu {
  z-index: 200;
  width: 100%;
  height: $header-height;
}
.header_menu {
  width: 100%;
  height: $header-height;
  @include flex($justifyContent: flex-end, $alignItems: center);
}
.header_menu_links {
  width: 100%;
  @include flex($justifyContent: flex-end, $alignItems: center);
}
.header_menu_link {
  margin-right: 20px;
  &:last-child {
    margin-right: 0px;
  }
  &_title {
    display: block;
    width: 100%;
    position: relative;
    font-size: 1.8rem;
    padding: 0 4px;
    &::after {
      content: '';
      @include absolute($bottom: -4px, $left: 0, $right: 0);
      width: 0%;
      height: 4px;
      background: $theme-gradient;
    }
  }
  .nuxt-link-exact-active {
    &::after {
      width: 100%;
    }
  }
}

.header_notify {
  margin-top: 20px;
  z-index: 300;
  // text-align: right;
  display: block;
  &_box {
    color: $white;
    background-color: $link;
    padding: 12px 40px 12px 16px;
    margin-bottom: 12px;
    // margin-left: 16px;
    margin-left: auto;
    display: block;
    text-decoration: none;
    width: 392px;
    position: relative;
    .title {
      // display: inline;
      text-align: right;
      padding-right: 16px;
      .press {
        font-size: 1.2rem;
        padding-right: 16px;
      }
      .content {
        font-size: 1.8rem;
        padding-right: 16px;
      }
    }
    // .content {
    //   display: inline;
    //   font-size: 1.8rem;
    // }
    .arrow {
      @include absolute($top: 18px, $right: 40px);
      transition: 0.3s $ease-out-1;
      transform: translateX(0);
      display: inline-block;
      // font-size: 2rem;
      // vertical-align: middle;
      border-top: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid transparent;
      border-left: 8px solid;
      color: $white;
    }
    // .content:hover + .arrow {
    //   transform: translateX(8px);
    // }
  }
}
.title:hover + .arrow {
  transform: translateX(12px);
}

.menu_open_btn {
  z-index: 100;
  position: fixed;
  top: 22px;
  left: 22px;
  .menu_svg {
    width: 32px;
    filter: drop-shadow(0 0 4px rgba($black, 0.2));
  }
}
.menu_close_btn {
  z-index: 101;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.menu_links_box {
  z-index: 102;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba($black, 0.8);
  width: 72vw;
  height: 100vh;
  padding: 20px;
  transform: translateX(-72vw);
  transition: 0.3s $ease-out-1;
  &--open {
    transform: translateX(0);
  }
}

a.header_menu_link_title,
a.header_menu_link_title:visited,
a.header_menu_link_title:link {
  text-decoration-line: none;
}

.header_menu_locale {
  flex-shrink: 0;
}

@media screen and (max-width: $sm) {
  $header-height: 64px;
  .header_menu_link {
    margin: 0;
    display: block;
    padding: 12px 0;
    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 4px;
      background: $theme-gradient;
    }
  }
  .header_menu_link_title {
    font-size: 2.4rem;
    color: $white;
  }
  .nuxt-link-exact-active {
    color: lighten($link-txt, 20%);
  }

  .header_notify {
    text-align: center;
  }

  .header_notify_box {
    width: 100%;
    padding: 12px 0;
    margin: 12px auto;
    .title {
      margin-right: 32px;
    }
  }
}

@media screen and (max-width: 400px) {
  .header_notify_box {
    .arrow {
      border-top: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 6px solid;
    }

    .title {
      .press {
        padding-right: 8px;
      }
      .content {
        padding-right: 8px;
        font-size: 1.4rem;
      }
      // font-size: 1.2rem;
    }
  }
}
</style>
