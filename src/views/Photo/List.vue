<template>
  <div id="photoList">
    <div class="preview" v-show="preview" @click="toPreview()">
      <img :src="previewSource" />
    </div>
    <waterfall
      :col="col"
      :height="height"
      :width="width"
      :gutterWidth="gWidth"
      :data="images"
      :loadDistance="0"
      @loadmore="loadMore"
      style="scrollbar-width:none;"
      class="noscrollwidth">
      <div
        class="cellItem"
        v-for="item in images"
        v-bind:key="item.id"
        @click="toPreview(item.source)">
        <template>
          <img
            :src="'https://mintforge-1252473272.cos.ap-nanjing.myqcloud.com/image/' + item.source.replace('JPG','jpg')"
            style="width:100%;height:100%;cursor:zoom-in;" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
          <div class="location">
            <Icon type="ios-navigate" /> {{ item.location }}
          </div>
          <div class="device">
            <Icon type="md-camera" /> {{ item.device }}
          </div>
        </template>
      </div>
    </waterfall>
    <!-- center class="over" v-show="!over">滑动加载更多</center -->
    <center class="over" v-show="over">我是有底线的</center>
  </div>
</template>

<script>
import { imageApi } from '@/utils/mixins'
export default {
  mixins: [imageApi],
  data () {
    return {
      images: [],
      col: 3,
      height: '550px',
      width: 195,
      gWidth: 5,
      page: 1,
      limit: 13,
      preview: false,
      previewSource: '',
      over: false
    }
  },
  methods: {
    loadMore (index) {
      const that = this
      this.page += 1
      this.getImages(this.page, this.limit).then(val => {
        if (val.status === 200 && val.data.data.items.length !== 0) {
          this.images = this.images.concat(val.data.data.items)
        } else {
          that.over = true
          that.$Message.warning('没有更多图片了')
          setTimeout(() => {
            this.over = false
          }, 2000)
        }
      })
    },
    toPreview (source) {
      if (this.preview) {
        this.preview = false
      } else {
        this.preview = true
        this.previewSource = source
      }
    }
  },
  created () {
    this.getImages(this.page, 9).then(val => {
      this.images = val.data.data.items
    })
  }
}
</script>

<style lang="scss" scoped>
#photoList {
  .preview {
    width: 600px;
    height: 550px;
    position: absolute;
    background-color: rgba(0,0,0,.8);
    z-index: 9;
    cursor: zoom-out;
    img {
      max-width: 90%;
      max-height: 500px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);
      z-index: 10;
    }
  }
  .cellItem {
    background-color: #fff;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 5px;
    img {
      border-radius: 5px 5px 0 0;
    }
    h3, p, .location, .device {
      padding: 0 10px;
    }
    .location, .device {
      font-size: 12px;
      color: #808695;
    }
    .location {
      margin-top: 5px;
    }
  }
  .noscrollwidth::-webkit-scrollbar {
    display: none
  }
}
</style>
