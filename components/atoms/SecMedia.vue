<template lang="pug">
  .media_box
    SectionTitle(:title="'Media'")
    //- .message {{media_message}}
    //- .media_container
    //-   .media_wrapper(v-for="(article,media_key) in mediaList" :key="`media_${media_key}`" v-if="article.pub === 'true'")
    //-     a.media(v-if="article.link" :href="article.link" target='_blank')
    //-       img.media_pic(v-if="article.image" :src="article.image")
    //-         .media_year {{ article.year }}
    //-         .media_times {{ article.times }}
    //-       .media_div
    //-          .media_div_title {{ article.title }}
    //-       .media_div
    //-         .media_div_content {{ article.content }}
    
            //- .media_div_auther {{ article.auther }}
          //- .media_div
          //-   .media_div_from {{ article.kind + '.com'}}
          
    .SlideMedia
      Carousel(:navigation-enabled="true" navigation-prev-label="〈" navigation-next-label="〉" :speed="1000" v-bind:per-page-custom="[[10,1],[640,1],[780,2],[1250,3]]")
        Slide.VueCarousel-slider(v-for="(article,media_key) in mediaList" :key="`media_${media_key}`" v-if="article.pub === 'true'")
          a.media(v-if="article.link" :href="article.link" target='_blank')
            img.media_pic(v-if="article.image" :src="article.image")

            .media_div
              .media_div_title {{ article.title }}
            .media_div
              .media_div_content {{ article.content }}

</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
import SectionTitle from '~/components/atoms/SectionTitle.vue'

export default {
  components: {
    SectionTitle,
    Carousel,
    Slide
  },
  head() {
    return {
      title: 'Judges',
      titleTemplate: '%s - ONLINE INTERN CONTEST 2020 #2'
    }
  },

  data() {
    return {
      mediaList: null,
      publish: true,
      media_message: '＊＊＊＊＊＊！',
      message: 'オンコン（略称）の審査員およびメンターの方々をご紹介します！'
    }
  },
  created() {
    fetch(
      'https://script.google.com/macros/s/AKfycbzOLFg0kaaR56PRGMwwvcWb8q3QY5tueQkkrMndMhyR0r1dvIg0/exec'
    )
      .then((res) => res.json())
      .then((res) => (this.mediaList = res))
  }
}
</script>
<style lang="scss" scoped>
.VueCarousel-slide {
  width: 70%;
}

.SlideMedia {
  margin: auto;
  width: 80%;
}

.media_box {
  width: 100%;
  height: auto;
}
.message {
  margin: 24px 0 48px;
  width: 100%;
  text-align: center;
  font-size: 2rem;
}
.media_pic {
  width: 100%;
}

.media_container {
  width: 80%;
  margin: auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.media {
  width: 90%;
  height: 100%;
  display: flex;
  text-decoration: none;
  color: $black;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  background: $white;
  transition: 0.3s $ease-out-1;
  transform: translateY(0);
  // padding: 0 0 32px 0;
  &::before {
    content: '';
    display: block;
    background: $white;
  }
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 4px 16px rgba($black, 0.1);
    color: $black;
  }
  &_pic {
    flex-shrink: 0;
    width: 100%;
  }
  &_div {
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 6px 5%;
    width: 100%;
    align-items: center;

    &_kind {
      // border-radius: 5px 5px 5px 5px;

      flex-shrink: 0;

      background: $black;
      color: white;
      width: 64px;
      padding: auto;
      margin-right: 12px;
      height: 25px;
    }
    &_title {
      width: 90%;
      text-align: left;
      font-weight: bold;
    }
    &_content {
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      font-size: 1.4rem;
    }
    &_auther {
      position: absolute;
      top: 0%;
      right: 0%;
    }
    &_from {
      font-size: 12px;
      color: gray;
      text-align: right;
      width: 100%;
    }
  }
}

@media screen and (max-width: $md) {
  .media_wrapper {
    background-color: white;
    text-align: center;
    margin: 48px 0 60px;
    width: 36vw;
    height: auto;
    position: relative;

    &::before {
      content: '';
      display: block;
      background: $white;
    }
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 4px 16px rgba($black, 0.1);
    }
  }
}
@media screen and (max-width: $tb) {
  .media {
    width: 90%;
    height: 100%;
    text-decoration: none;
    color: black;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: $white;
    transition: 0.3s $ease-out-1;
    transform: translateY(0);
    // padding: 0 0 32px 0;
    display: flex;
    justify-content: center;
    flex-direction: row;

    &_pic {
      flex-shrink: 0;
      width: 100%;
      // height: 23vw;
    }
  }
}
@media screen and (max-width: $sm) {
  .media_wrapper {
    background-color: white;
    text-align: center;
    margin: 20px 0 20px;
    width: 75vw;
    margin: 10px auto;
    height: 75vw;
    position: relative;

    &::before {
      content: '';
      display: block;
      background: $white;
    }
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 4px 16px rgba($black, 0.1);
    }
  }
}
</style>
