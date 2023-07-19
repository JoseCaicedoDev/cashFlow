<script>
import Splashscreen from './components/SplashScreen.vue'
import { defineAsyncComponent } from 'vue';

export default{
  components:{
    Splashscreen,
    Home: defineAsyncComponent(()=>
      new Promise((resolve) => {
        setTimeout(()=>{
          resolve(import("./components/Home.vue"))
        }, 2500)
    })
    )
  }
}
</script>

<template>
  <Suspense>
    <template #default>
      <Home/>
    </template>
    <template #fallback>
      <Splashscreen/>
    </template>
  </Suspense>
</template>

<style>
html,
body,
.app {
  min-height: 100vh;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
* {
  --brand-green: #2f9fa6;
  --brand-blue: #47688d;
  --color-font: #37434f;
  --color-white: #e6e6e6;
  --color-primary:#4c5d6d;
  --color-secundary: #61778b

}
</style>