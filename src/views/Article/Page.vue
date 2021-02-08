<template>
  <div id="articlePage">
    <h1 class="title">{{ current.title }}</h1>

    <div class="datetime">{{ $moment(current.updatetime).format('YYYY-MM-DD') }}</div>
    <div class="author">{{ current.author }}</div>
    <div class="cover" :style="setCover(current.cover)"></div>
    <mavon-editor
        class="content"
        v-model="current.content"
        :toolbarsFlag="false"
        :boxShadow="false"
        :editable="false"
        :subfield="false"
        :defaultOpen="'preview'"
        :previewBackground="'#ffffff'"
        :codeStyle="'arta'"
        style="border:0"/>
    <div class="paging">
      <div class="prev">
        <div v-if="prev" @click="go(prev.id)" style="cursor:pointer;">
          <Icon type="md-arrow-back" size="20" />&nbsp;{{ prev.title }}
        </div>
      </div
      ><div class="next">
        <div v-if="next" @click="go(next.id)" style="cursor:pointer;">
          {{ next.title }}&nbsp;<Icon type="md-arrow-forward" size="20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { articleApi } from '@/utils/mixins'
export default {
  mixins: [articleApi],
  data () {
    return {
      current: {},
      prev: null,
      next: null
    }
  },
  methods: {
    go (id) {
      var that = this
      this.getArticle(id).then(val => {
        if (val.status === 200) {
          that.current = val.data.data.current
          that.prev = val.data.data.prev
          that.next = val.data.data.next
        }
      })
    },
    setCover (cover) {
      return `
        background-image: url(${cover});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat
      `
    }
  },
  created () {
    const that = this
    this.getArticle(this.$route.params.id).then(val => {
      if (val.status === 200) {
        // console.log('success')
        that.current = val.data.data.current
        that.prev = val.data.data.prev
        that.next = val.data.data.next
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#articlePage {
  height: 550px;
  overflow-x: hidden;
  overflow-y: scroll;
  scrollbar-width: none;
  .title, .author, .datetime {
    padding: 0 30px;
    z-index: 1;
    background-color: #ffffff;
  }
  .cover {
    height: 300px;
    margin: 10px 30px 0 30px;
    position: sticky;
    top: 0;
    z-index: 0;
    border-radius: 5px;
  }
  .paging {
    padding: 0 30px 30px 30px;
    .prev, .next {
      width: 50%;
      display: inline-block;
      vertical-align: top;
    }
    .next {
      text-align: right;
    }
  }
}
#articlePage::-webkit-scrollbar {
  display: none;
}
</style>
