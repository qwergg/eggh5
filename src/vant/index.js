import Vue from 'vue';
import 
   {   
       Col,
       Row,
       Button,
       Lazyload,
       Image as VanImage
   } 
   from 'vant';


const regComponents={
    Col:Col,
    Row:Row,
    Button:Button,
    VanImage:VanImage
}
Object.keys(regComponents).forEach(key=>{
    Vue.use(regComponents[key])
})

Vue.use(Lazyload,{
    lazyComponent: true
})
