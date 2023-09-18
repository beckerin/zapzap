import { defineStore } from 'pinia'

export const useChatListStore = defineStore('chatList', {
  state: () => {
    return {
      chatList: [] as ChatInfo[] | null
    }
  },
  actions: {
    addChat(chat: ChatInfo): void {
      this.chatList.push(chat)
    },
    selectChat(chat: ChatInfo): void {
      console.log(chat)
    }
  }
})

export interface ChatInfo {
  name: string
  pp: string
  lastMessage: string
  dateLastReply: string
  isArchived: boolean
  isPinned: boolean
  isSelected: boolean
}
