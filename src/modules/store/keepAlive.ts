import { defineStore } from 'pinia'

export const useKAComponent = defineStore('kaComponent', {
  state: () => ({
    components: [] as string[],
  }),
  getters: {},
  actions: {
    addComponent(key: string) {
      if (!this.components.includes(key)) this.components.push(key)
    },
    removeComponent(key: string) {
      const index = this.components.indexOf(key)
      if (index !== -1) this.components.splice(index, 1)
    }
  }
})
