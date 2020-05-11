<template lang="pug">
  .about
    HeaderMenu()
    SubPageTopTitle(:title="'About Prossell'")
    .container
      .about_message {{ $t('about.message') }}
    SectionTitle(:title="'Members'")
    .container
      .main_wrapper
        .members_list
          .member_wrapper(v-for="(mem,mem_key) in  $t('about.members') " :key="`men_${mem_key}`")
            a.member_link(v-if="mem.link" :href="mem.link")
              .member_role {{mem.role}}
              img.member_icon(v-if="mem.icon" :src="require(`~/assets/member_imgs/${mem.icon}.png`)")
              .member_name {{mem.name}}
            .member_no_link(v-else)
              .member_role(v-if="mem.role") {{mem.role}}
              img.member_icon(v-if="mem.icon" :src="require(`~/assets/member_imgs/${mem.icon}.png`)")
              .member_name {{mem.name}}
    //- PosterDownload
    Footer
</template>
<script>
// components
import HeaderMenu from '~/components/molecules/HeaderMenu.vue'
import SubPageTopTitle from '~/components/atoms/SubPageTopTitle'
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import Footer from '~/components/organisms/Footer.vue'
import PosterDownload from '~/components/organisms/PosterDownload.vue'

export default {
  components: {
    HeaderMenu,
    SubPageTopTitle,
    SectionTitle,
    Footer,
    PosterDownload
  },

  head() {
    return {
      title: 'About',
      titleTemplate: '%s - ONLINE INTERN CONTEST 2020 #3'
    }
  }
}
</script>
<style lang="scss" scoped>
.about_message {
  margin: 24px 0 48px;
  width: 100%;
  text-align: center;
  font-size: 2rem;
}

.members_list {
  @include flex(
    $wrap: wrap,
    $justifyContent: space-around,
    $alignItems: flex-start
  );
}

.member_wrapper {
  min-width: 20%;
  text-align: center;
  font-size: 1.8rem;
  padding: 24px 0 48px;
}
.member_link {
  display: block;
  position: relative;
}
.member_no_link {
  display: block;
  position: relative;
}

.member_role {
  @include absolute($top: -36px);
  width: 100%;
  text-align: center;
  padding-bottom: 8px;
}

.member_icon {
  display: block;
  margin: 4px auto;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  transition: 0.4s $ease-out-1;
  transform: translateY(0);
  box-shadow: 0 4px 8px rgba($black, 0);
}
.member_name {
  white-space: pre-wrap;
  word-wrap: break-word;
  padding-top: 4px;
}

a:hover {
  .member_icon {
    transform: translateY(-6px);
    box-shadow: 0 4px 8px rgba($black, 0.4);
  }
}

a,
a:link,
a:visited {
  text-decoration: none;
  color: $black-txt;
}

@media screen and (max-width: $md) {
  .member_wrapper {
    min-width: 25%;
    font-size: 1.6rem;
  }
  .about_message {
    font-size: 1.8rem;
    text-align: left;
  }
  .member_icon {
    width: 100px;
    height: 100px;
  }
}
@media screen and (max-width: $sm) {
  .about_message {
    font-size: 1.6rem;
  }
  .member_wrapper {
    min-width: 30%;
  }
  .member_icon {
    width: 80px;
    height: 80px;
  }
}
</style>
