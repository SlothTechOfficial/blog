/* DO NOT CHANGE THE GLOBAL VARIABLE NAME */

window.VUELOG_DATABASE = {
  config: {
    // The name of your site, will be displayed in browser tab and site header.
    brand: {
      'en-US': 'Blog Slothtech',
      'zh-CN': 'Blog Slothtech',
      'de-DE': 'Blog Slothtech',
      'pt-BR': 'Blog Slothtech',
      'es-MX': 'Blog Slothtech'
    },

    // Put the site brand behind current page in `document.title`.
    brandTrailing: false,

    // The image displayed in site header right beside the brand.
    logo: './static/slothtech-favicon.svg',

    // Path to the domain root that serves your site, starts and ends with slash (`/`).
    // Set to `'/'` if your site is under domain root.
    base: '/',

    // The path to route to when you visit `/`.
    // Set to `/home`, `/blog` or a valid path at your need.
    homePath: '/home',

    // Whether footer is visible on `homePath` or not.
    homeFooter: false,

    // Vuelog interface language. Currently supports 'en-US', 'zh-CN', 'de-DE', 'pt-BR' and 'es-MX'.
    defaultLang: 'es-MX',

    // Allow/disallow visitors to switch interface language.
    switchLang: true,

    // Available languages for switching. Must be a subset of supported languages, or leave empty.
    selectedLangs: [],

    // Number of posts listed in a blog/category view.
    postsCount: 3,

    // Fill in the shortname to integrate Disqus with your blog.
    disqusShortname: '',

    // Fill in the uid to integrate LiveRe with your blog.
    livereUid: '',

    // Options for marked, see https://github.com/chjj/marked#options-1 for detail
    markedOptions: {}
  },

  navigation: [
    {
      label: {
        'en-US': 'How to contribute',
        'es-MX': 'Como contribuir',
      },
      type: 'page',
      path: '/page/contribute'
    },
    {
      label: {
        'en-US': 'Archive',
        'zh-CN': '归档',
        'de-DE': 'Archiv',
        'pt-BR': 'Arquivo',
        'es-MX': 'Archivo'
      },
      type: 'archive',
      path: '/archive'
    },
  ],

  pages: [
    {
      // title: on the page
      title: {
        'en-US': 'How to Contribute',
        'es-MX': 'Cómo contribuir',
      },
      exclude: true, // (OPTIONAL) `true` to exclude the page from archive view
      titleless: false, // (OPTIONAL) `true` to hide the title in page view
      commentless: true, // (OPTIONAL) `true` to disable comments for the page
      draft: false, // (OPTIONAL) `true` to make the page temporarily inaccessible
      slug: 'contribute' // (REQUIRED) name of the MD file you want to link into this page
    }
  ],

  categories: [],

  posts: []
}
