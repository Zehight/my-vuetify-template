<script lang="ts" setup>

import axios from '@/modules/service/axios'
const file:any = ref()
async function upload(a: any) {
  console.log(a, file.value[0])
  const formData = new FormData()
  formData.append('file', file)
  const res = await axios.post('/file/add', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  console.log(res)
}
</script>

<template>
  <TheContainer>
    <v-list>
      <v-file-input @change="upload" accept="image/*" v-model="file"/>
    </v-list>
  </TheContainer>
</template>

<style scoped>

</style>
