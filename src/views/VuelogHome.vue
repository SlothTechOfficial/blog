<template>
  <div class="home">
    <div class="cards-container">
      <PostCard v-for="post in posts" :key="post.slug" v-bind="post" />
    </div>
  </div>
</template>

<script>
import PostCard from '../components/PostCard.vue'
export default {
  name: 'vuelog-home',

  computed: {
    categories () {
      return this.$store.getters.categories
    },
    posts () {
      return this.$store.getters.posts
    },
    system () {
      return this.$store.getters.system
    },
  },

  created () {
    this.$store.dispatch('documentTitle', this.title)
  },

  watch: {
    $route (to, from) {
      if (to.query.lang !== from.query.lang) {
        this.$store.dispatch('documentTitle', this.title)
      }
    }
  },
  components: {
    PostCard,
  }
}
</script>

<style lang="stylus" scoped>
  .home
    text-align center

  img
    display inline-block
    height 256px
    width 256px
    margin-top 75px

  h1
    font-weight 300
    font-size 60px
    margin-top 16px
    margin-bottom 36px

  p
    color #7f8c8d
    font-size 20px
    margin-bottom 24px

  .github
    background #fff
    color #4fc08d

    &:hover
      background #fcfcfc
      color #5dc596

  @media screen and (max-width: 999px)
    img
      height 192px
      width 192px
      margin-top 32px

    h1
    p
      margin-top 15px
      margin-bottom 15px

    .button
      margin-bottom .25em
</style>
