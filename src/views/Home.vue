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
          <x-player :elId="'vi'+idx" :xPlayer="img" ref="vi"/>
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
  })
  },
  methods:{
    getViewport() { //获取当前页面可视区大小
    if (document.compatMode == "BackCompat") {
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
    } else {
      return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    }
  },
    getXplayerLocation(){ //获取视频所在位置(默认获取第一个)
      let a = 0 // 设置一个初始值，
      let DOMobj = '' // 用了保存getElementById获取到的元素数据
      let clientData = this.getViewport() // 获取可视区的大小
      DOMobj=document.getElementById(`vi${a}`)
      let cliHeight = (clientData.height-DOMobj.offsetHeight)/2
    },

    getElementViewTop(element) { //获取当前元素的位置
      var actualTop = element.offsetTop;
      var current = element.offsetParent;

      while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
      }

      if (document.compatMode == "BackCompat") {
        var elementScrollTop = document.body.scrollTop;
      } else {
        var elementScrollTop = document.documentElement.scrollTop;
      }

      return actualTop - elementScrollTop;
    },
    winScroll(e) {
      let arr = this.getElementViewTop(DOMobj)
      console.log(arr)
      if (arr<=cliHeight && -arr<=DOMobj.offsetHeight/2) {
        this.$refs.vi[a].play()
      }else{
        this.$refs.vi[a].pause()
        if (-arr>DOMobj.offsetHeight/2) {
          a+=1
        }else if (-arr<0) {
          if (a === 1) {
            return
          }else{
            a-=1
          }
        }
        this.getXplayerLocation()
      }
    },
    xPlay(){
      this.$refs.vi[0].play()
    }

  
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
  margin: 0 0 8px;
}

</style>

