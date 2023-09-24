import { defineStore } from 'pinia'
import { useUserStore } from './userStore'
import { Ref, ref } from 'vue'
import { randomUUID } from 'crypto'

export interface MessageInfo {
  guid: Ref<string | null>

  owner: Ref<string>
  content: Ref<string>
  date: Ref<string>
  sent: Ref<boolean>
  received: Ref<string[] | null>
  read: Ref<string[] | null>
  reacts: Ref<ReactsInfo[] | null>

  createMessage: Function
  parseMessage: Function
  updateMessage: Function
  deleteMessage: Function
}
export interface ReactsInfo {
  owner: string
  code: string
}

export const useMessageStore = defineStore('message', () => {
  const authStore = useUserStore()

  const owner = ref()
  const content = ref()
  const date = ref()
  const sent = ref()
  const received = ref()
  const read = ref()
  const reacts = ref()

  function createMessage(message: string) {
    const newMessage = {} as MessageInfo
    newMessage.guid.value = randomUUID().toString()
    newMessage.content.value = message
    newMessage.date.value = new Date().toLocaleString()
    newMessage.owner.value = authStore.user.guid
    newMessage.sent.value = true
  }
  function parseMessage() {}
  function updateMessage() {}
  function deleteMessage() {}

  return {
    owner,
    content,
    date,
    sent,
    received,
    read,
    reacts,

    createMessage,
    parseMessage,
    updateMessage,
    deleteMessage
  }
})
