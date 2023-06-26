<script lang="ts" setup>
import { useKAComponent } from '@/modules/store'

/**
 * 1. 在 pinia(@/modules/store/keepAlive.ts) 中维护需要缓存 路由name
 * 2. 通过 keep-alive 的 include 缓存对应路由
 * 3. 动态操作: 使用 keepAlive.ts 中的方法增减 路由name, 即可改变缓存路由状态
 */
const store = useKAComponent()
</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="store.components">
      <component :is="Component" :key="$route.path"></component>
    </keep-alive>
  </router-view>
</template>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
}

body::-webkit-scrollbar {
  /*display: none;*/
}
</style>
