<template>
  <div id="articleList" ref="articleContainer">
    <div class="card" v-for="a in articles" :key="a.id" @click="go(a.id)">
      <div class="cover" :style="setCover(a.cover)"></div>
      <div class="bottom">
        <div class="title"><h3>{{ a.title }}</h3></div>
        <div class="author"><p>{{ a.author }}</p></div>
        <div class="datetime">{{ $moment(a.update_time).format('YYYY年M月D日') }}</div>
      </div>
    </div>
    <center class="over" v-show="!over">滑动加载更多</center>
    <center class="over" v-show="over">我是有底线的</center>
  </div>
</template>

<script>
import { articleApi } from '@/utils/mixins'
export default {
  mixins: [articleApi],
  data () {
    return {
      articles: ['a', 'b', 'c'],
      page: 1,
      limit: 9,
      over: false
    }
  },
  methods: {
    go (id) {
      this.$router.push({
        name: 'ArticlePage',
        params: {id: id}
      })
    },
    setCover (cover) {
      return `
        background-image: url(${cover});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat
      `
    },
    loadMore () {
      var that = this
      this.getArticles(this.page + 1, this.limit).then(val => {
        if (val.data.data.items.length !== 0) {
          that.articles = this.articles.concat(val.data.data.items)
        } else if (val.data.data.items.length === 0) {
          that.over = true
          setTimeout(() => that.$Message.warning('没有更多文章了'), 200)
        }
      })
      this.page = this.page + 1
    },
    scroll () {
      const scrollTop = this.$refs.articleContainer.scrollTop
      const scrollHeight = this.$refs.articleContainer.scrollHeight
      const containerHeight = this.$refs.articleContainer.clientHeight
      const diff = scrollTop + containerHeight - scrollHeight
      console.log(diff)
      if (diff >= 0) {
        this.loadMore(this.page, this.limit)
      }
    }
  },
  created () {
    this.getArticles().then(val => {
      if (val.status === 200) {
        this.articles = val.data.data.items
      }
    })
  },
  mounted () {
    this.$refs.articleContainer.onscroll = this.scroll
  },
  destroyed () {
    this.$refs.articleContainer.onscroll = null
  }
}
</script>

<style lang="scss" scoped>
#articleList {
  height: 550px;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  .card {
    width: 190px;
    display: inline-block;
    vertical-align: top;
    margin: 5px;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 5px;
    .cover {
      width: 189px;
      height: 120px;
      border-radius: 5px 5px 0 0;
    }
    .bottom {
      padding: 10px;
      .title {
        h3 {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .datetime {
        color: #808695;
        font-size: 12px;
      }
    }
  }
}
#articleList::-webkit-scrollbar {
  display: none;
}
</style>
