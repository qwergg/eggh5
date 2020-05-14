<template>
    <div :id="elId" class="x-player"></div>
</template>

<script>
export default {
  data() {
    return {
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
     new Player({
      id: this.elId,
      url:process.env.VUE_APP_API_BASE_URL+this.xPlayer.url,
      poster:process.env.VUE_APP_API_BASE_URL+this.xPlayer.imgUrl,
      playsinline: true,
      "x5-video-player-type": "h5",
      width: "100%",
      height:"auto",
      videoInit: true,
      fitVideoSize: 'fixWidth',
      cssFullscreen: true,
      playsinline: true,
    });
  }
};
</script>

<style scoped>
.x-player {
  width: 100%;
}
</style>

