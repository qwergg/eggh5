<template>
  <div>
    <div id="mse"></div>
    <button @click="pl">点击一下</button>
  </div>
</template>

<script>
import Player from 'xgplayer';
export default {
  data(){
    return{
       xPLayer:''
    }
  },
  mounted(){
     this.xPLayer=new Player({
          id: 'mse',
          url:process.env.VUE_APP_API_BASE_URL+'/public/uploads/20204/c31ac7db8c750c477e01ccb3e3f3c690.mp4',
          poster:process.env.VUE_APP_API_BASE_URL+'/public/uploads/20204/c31ac7db8c750c477e01ccb3e3f3c690.png',
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
    pl(){
      console.log(this.xPLayer)
       this.xPLayer.play()
    }
  }
}
</script>

<style>

</style>

