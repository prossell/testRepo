<template lang="pug">
  .media_box
    SectionTitle(:title="'Media'")          
    .SlideMedia

      Carousel(:navigation-enabled="true" navigation-prev-label="〈" navigation-next-label="〉" :speed="1000" v-bind:per-page-custom="[[10,1],[640,1],[780,2],[1250,3]]" pagination-color='#ffffff' pagination-active-color=$black)
        Slide(v-for="(article,media_key) in mediaList" :key="`media_${media_key}`" v-if="article.pub === 'true'")
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
  data() {
    return {
      mediaList: null
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
  margin-top: 10px;
}

.SlideMedia {
  margin: auto;
  width: 80%;
}

.media_box {
  width: 100%;
  height: auto;
}

.media_pic {
  width: 100%;
  height: auto;
  flex-shrink: 0;
  align-self: flex-start;
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
  margin-bottom: 0;
  // padding-bottom: 10px;
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

  &_div {
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 6px 5%;
    width: 100%;
    align-items: center;

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
  }
}
</style>
