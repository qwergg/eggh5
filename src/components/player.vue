<template>
  <div :id="elId" class="x-player"></div>
</template>

<script>
import Player from 'xgplayer';
export default {
  data() {
    return {
      xPLayer:null
    };
  },
  props: {
    elId: {
      type: String,
      default: 'vi1'
    },
    xPlayer:{
      type:Object,
      default:{
          url:'http://192.168.31.162:7000/public/uploads/20204/c31ac7db8c750c477e01ccb3e3f3c690.mp4',
          imgUrl:'http://192.168.31.162:7000/public/uploads/20204/c31ac7db8c750c477e01ccb3e3f3c690.png'
      }
    }
   
  },
  mounted() {
      this.xPLayer=new Player({
          id: this.elId,
          url:process.env.VUE_APP_API_BASE_URL+this.xPlayer.url,
          poster:process.env.VUE_APP_API_BASE_URL+this.xPlayer.imgUrl,
          playsinline: true,
          "x5-video-player-type": "h5",
          'x5-video-player-fullscreen': true,
          'x5-video-orientation': 'landscape' | 'portraint',
          width: "100%",
          height:"auto",
          videoInit: true,
          fitVideoSize: 'fixWidth',
          airplay: false
    });
    
  },
  methods:{
    play(){
      this.xPLayer.play()
    },
    pause(){
      this.xPLayer.pause()
    }
  }

};
</script>

<style scoped>
.x-player {
  width: 100%;
}
</style>

