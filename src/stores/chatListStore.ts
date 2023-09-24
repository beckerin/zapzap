import { defineStore } from 'pinia'

export const useChatListStore = defineStore('chatList', () => {
  const chatList = [] as ChatInfo[] | null

  function addChat(chat: ChatInfo): void {
    this.chatList.push(chat)
  }

  return {
    chatList,
    addChat
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
