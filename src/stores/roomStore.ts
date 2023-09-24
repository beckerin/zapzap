import { defineStore } from 'pinia'
import { UserInfo, useUserStore } from './userStore'
import { Ref, computed, ref } from 'vue'
import { MessageInfo } from './messageStore'

export const useRoomStore = defineStore('room', (): RoomInfo => {
  const authStore = useUserStore()

  const participants = ref([] as UserInfo[] | null)
  const messages = ref(null as MessageInfo[] | null)
  const isGroup = ref(false)
  const description = ref(null)

  const getRoomName = computed(() =>
    isClosedRoom.value ? getRoomReceiver.value[0].name : description
  )

  const isClosedRoom = computed(() => !isGroup.value && participants.value.length > 0)

  const getRoomReceiver = computed(() => {
    if (isClosedRoom.value)
      return participants.value.filter((participant) => participant.name !== authStore.user.name)
    else return participants.value
  })

  function selectRoom(p, m, isG, isC, d) {
    participants.value = p
    messages.value = m
    isGroup.value = isG
    description.value = d
  }

  function sendMessage(message: string) {
    const newMessage = {} as MessageInfo

    newMessage.content = message
    newMessage.owner = authStore.user
    newMessage.date = new Date().toLocaleString()
    newMessage.sent = true

    messages.value.unshift(newMessage)
  }

  return {
    participants,
    messages,
    isGroup,
    description,
    isClosedRoom,
    getRoomName,
    selectRoom,
    sendMessage
  }
})

export interface RoomInfo {
  participants: Ref<UserInfo[]>
  messages: Ref<MessageInfo[]>
  isGroup: Ref<boolean>
  description: Ref<string>
  getRoomName: Ref<string>
  isClosedRoom: Ref<boolean>
  selectRoom: Function
  sendMessage: Function
}
export { MessageInfo }
