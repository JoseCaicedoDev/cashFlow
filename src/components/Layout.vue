<template>
  <div class="header">
    <slot name="header"/>
  </div>
  <div class="resume">
    <slot name="resume"/>
  </div>
  <div class="movement">
    <div class="head" @click="showMovement = !showMovement">
      <div class="grip"></div>
    </div>
    <div class="body" v-show="showMovement">
      <slot name="movement"/>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const showMovement = ref(false);

</script>

<style scoped>
.header,
.resume,
.movement {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 14px 0;
  box-sizing: border-box;
}
.header{
  flex-direction: column;
}

.header {
  position: fixed;
  width: 100vw;
  padding: 5px 0;
}

.resume {
  min-height: 100vh;
}

.movement {
  z-index: 1;
  position: absolute;
  flex-direction: column;
  bottom: 0;
  width: 100vw;
  background-color: white;
  box-shadow: 0 -8px 16px #e5e5e5;
  border-radius: 24px;
}

.movement .head {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 100%;
  box-sizing: border-box;
}

.movement .body {
  height: 75vh;
  width: 100%;
}

.movement .head .grip {
  width: 120px;
  height: 8px;
  background-color: #e5e5e5;
  border-radius: 4px;
  cursor: pointer;
}
</style>