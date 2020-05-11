<template lang="pug">
  .SecPastEvent#pastevent
    SectionTitle(:title="'Past events'")
    .container
      .event(v-for="(event, event_key) in events" :key="`event_key${event_key}`")
        a.event_content(:href="event.link")
          .event_data {{event.data}}
          .event_title {{event.title}}
</template>

<script>
import SectionTitle from '~/components/atoms/SectionTitle.vue'
export default {
  components: {
    SectionTitle
  },
  data() {
    return {
      events: [
        {
          link: 'https://oncon2020.prossell.jp/',
          data: ' 1/14 〜 3/ 3',
          title: 'ONLINE INTERN CONTEST 2020'
        },
        {
          link: 'https://oncon2020-2.prossell.jp/',
          data: ' 4/17 〜 4/24',
          title: 'ONLINE INTERN CONTEST 2020 #2'
        },
        {
          link: 'https://oncon2020-3.prossell.jp/',
          data: ' 5/ 1   〜 5/ 8 ',
          title: ' ONLINE INTERN CONTEST 2020 #3'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// .SecPastEvent {
//   position: relative;
// }
.container {
  margin: 0 auto;
  width: 488px;
}

.event {
  font-family: $PT-sans;
  text-align: left;
  position: relative;
  margin-bottom: 48px;
  a {
    color: $black-txt;
    text-decoration-line: none;
    border-bottom: 1px solid $black;
    &:hover {
      color: lighten($black, 20%);
      border-bottom: 1px solid lighten($black, 20%);
    }
  }
  &_data {
    font-size: 2rem;
    display: inline;
  }
  &_title {
    font-size: 2.4rem;
    display: inline;
    padding-left: 16px;
  }
}

@media screen and (max-width: $sm) {
  .container {
    width: 396px;
  }

  .event {
    &_data {
      font-size: 1.6rem;
    }
    &_title {
      font-size: 2rem;
    }
  }
}

@media screen and (max-width: 440px) {
  .container {
    width: 320px;
  }

  .event {
    &_data {
      font-size: 1.4rem;
    }
    &_title {
      font-size: 1.6rem;
      padding-left: 8px;
    }
  }
}
</style>
