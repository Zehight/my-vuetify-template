<script lang="ts" setup>

</script>

<template>
  <v-app class="container">
    <TheHeader />
    <TheMenu />
    <TheMain><slot /></TheMain>
  </v-app>
</template>



<style scoped>

.container{
  /*background: top -20px left/12.077294686vw fixed url(/src/assets/image/test.svg),#A20000;*/
  /*background-size: 120px;*/
  /*will-change:tras*/
}
</style>

