<template>
  <van-row type="flex" justify="center">
    <van-col span="24" style="overflow-y:'auto'">
    <div 
        class="video-wrap"  
        v-for="(img,idx) in imageList"
        :key="idx">
          <div :style="{marginLeft:'8px'}">
            <van-image round width="30px" height="30px" src="https://img.yzcdn.cn/vant/cat.jpeg" style="vertical-align: middle"/>
            <span :style="{paddingLeft:'5px'}">{{img.userName}}</span>
            <h4>{{img.filename}}</h4>
          </div>
          <!-- <video
            :src="assetsUrl+img.url"
            :poster="assetsUrl+img.imgUrl"
            class="bg-video"
            webkit-playsinline
            controls
          ></video> -->
          <x-player :elId="'vi'+idx" :xPlayer="img"/>
    </div>
     
    </van-col>
  </van-row>
</template>

<script>
import { getReq } from "../api/index.js";
import xPlayer from '@/components/player';
// @ is an alias to /src
export default {
  name: "Home",
  components:{xPlayer},
  data() {
    return {
      imageList: []
    };
  },
  mounted() {
    getReq({ whiteRole: true }, "getVideoList").then(res => {
      this.imageList = res.data;
    });
  },
  computed: {
    assetsUrl() {
      return process.env.VUE_APP_API_BASE_URL;
    }
  }
};
</script>

<style scoped>
.video-wrap{
  width: 100%;
  background-color: white;
  box-shadow: 0 8px 12px #ebedf0;
  box-sizing: border-box;
  margin-bottom: 8px;
}
.bg-video {
  width: 100%;
  margin: 5px 0;
  object-fit: fill
}
</style>

