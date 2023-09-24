import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: null as UserInfo | null
    }
  },
  actions: {
    setUser(user: UserInfo) {
      this.user = user
    }
  }
})

export interface UserInfo {
  guid: string
  pp: string
  name: string
  note: string
}
