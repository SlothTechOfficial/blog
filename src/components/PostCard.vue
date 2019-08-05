<template>
  <article class="blog-card">
    <div class="blog-card__background">
      <div class="card__background--wrapper">
        <div class="card__background--main" :style="{ backgroundImage: `url(${bgImage})` }">
          <div class="card__background--layer"></div>
        </div>
      </div>
    </div>
    <div class="blog-card__head">
      <span class="date__box">
        <span class="date__day">{{ dateDay }}</span>
        <span class="date__month">{{ dateMonth }}</span>
      </span>
    </div>
    <div class="blog-card__info">
      <h5>{{ i18nify(title) }}</h5>
      <p>
        <a href="#" class="icon-link mr-3"><i class="fa fa-pencil-square-o"></i> {{ author }}</a>
        <a href="#" class="icon-link"><i class="fa fa-comments-o"></i> {{ comments }}</a>
      </p>
      <p>{{ i18nify(description) }}</p>
      <a :href="postUrl" class="btn btn--with-icon"><i class="btn-icon fa fa-long-arrow-right"></i>Leer más</a>
    </div>
  </article>
</template>

<script>
import { retrieveByLanguage } from '../utils'

export default {
  props: {
    bgImage: {
      type: String,
      required: true,
    },
    title: {
      type: Object,
      default: {},
    },
    author: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  name: 'PostCard',
  data () {
    return {
      tags: ['dev', 'testing'],
      comments: 150,
    }
  },
  computed: {
    active () {
      return this.$store.getters.lang
    },
    config () {
      return this.$store.getters.config
    },
    postUrl () {
      // TODO: replace this function with router resolve
      return `#/blog/${this.category}/${this.year}/${this.slug}`
    },
    dateDay () {
      return this.date.split('-')[2]
    },
    dateMonth () {
      const month = this.date.split('-')[1]
      const months = {
        '01': 'Ene',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Abr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Ago',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dic',
      }

      return months[month]
    },
  },
  methods: {
    i18nify (content) {
      return retrieveByLanguage(content, this.active, this.config.defaultLang)
    },
  },
}
</script>

<style lang="scss" scoped>
$primary: #48ab84;
$text-color: #363738;

.date__box {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ccc;
  border: 4px solid;
  font-weight: bold;
  padding: 5px 10px;
  .date__day{
    font-size: 22px;
  }
}
.blog-card {
  padding: 30px;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
  .date__box {
    opacity: 0;
    transform: scale(0.5);
    transition: 300ms ease-in-out;
  }
  .blog-card__background,
  .card__background--layer{
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .blog-card__background {
    padding: 15px;
    background: white;
  }
  .card__background--wrapper{
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 60%);
    position: relative;
    overflow: hidden;
  }
  .card__background--main{
    height: 100%;
    position: relative;
    transition: 300ms ease-in-out;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .card__background--layer {
    z-index: 0;
    opacity: 0;
    background: rgba(#333, 0.9);
    transition: 300ms ease-in-out;
  }
  .blog-card__head {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .blog-card__info{
    z-index: 10;
    background: white;
    padding: 20px 15px;
    h5 {
      transition: 300ms ease-in-out;
      text-transform: uppercase;
    }
  }
  &:hover {
    .date__box{
      opacity: 1;
      transform: scale(1);
    }
    .card__background--main {
      transform: scale(1.2) rotate(5deg);
    }
    .card__background--layer {
      opacity: 1;
    }
    .blog-card__info{
      h5{
        color: $primary; 
      }
    }
  }
}

a.icon-link {
  color: $text-color;
  transition: 200ms ease-in-out;
  i {
    color: $primary;
  }
  &:hover {
    color: $primary;
    text-decoration: none;
  }
}

.btn {
  background: white;
  color: $text-color;
  font-weight: bold;
  outline: none;
  box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 0;
  height: 50px;
  line-height: 50px;
  display: inline-block;
  padding: 0;
  border: none;
  &:focus {
    box-shadow: none;
  }
  &:hover {
    background: $primary;
    color: #fff;
  }
  &.btn--with-icon {
    padding-right: 20px;
    i {
      padding: 0px 30px 0px 15px;
      margin-right: 10px;
      height: 50px;
      line-height: 50px;
      vertical-align: bottom;
      color: white;
      background: $primary;
      clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
    }
  }
  &.btn--only-icon {
    width: 50px;
  }
}
</style>