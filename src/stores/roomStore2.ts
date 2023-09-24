import { defineStore } from 'pinia'
import { useUserStore } from './userStore'
import { MessageInfo } from './roomStore'
import { Ref, ref } from 'vue'
import { randomUUID } from 'crypto'

export interface RoomInfo {
  guid: Ref<string | null>

  participants: Ref<string[] | string | null>
  messages: Ref<MessageInfo[] | null>
  isGroupOrCommunity: Ref<boolean | false>
  groupName: Ref<string | null>
  profilePicture: Ref<string | null>
  groupNote: Ref<string | null>
  admins: Ref<string[] | null>

  createRoom: Function
  parseRoom: Function
  updateRoom: Function
  deleteRoom: Function

  selectRoom: Function
}

export const useRoomStore = defineStore('room', (): RoomInfo => {
  const authStore = useUserStore()

  const guid = ref(null)
  const participants = ref(null)
  const messages = ref(null)
  const isGroupOrCommunity = ref(null)
  const groupName = ref(null)
  const profilePicture = ref(null)
  const groupNote = ref(null)
  const admins = ref(null)

  function createRoom(members, name, profile) {
    guid.value = randomUUID()
    participants.value = members
    isGroupOrCommunity.value = name ? true : false
    profilePicture.value = profile
    groupName.value = name
    admins.value = authStore.user.guid
  }
  function parseRoom() {}
  function updateRoom() {}
  function deleteRoom() {}
  function selectRoom() {}

  return {
    guid,
    participants,
    messages,
    isGroupOrCommunity,
    groupName,
    profilePicture,
    groupNote,
    admins,

    createRoom,
    parseRoom,
    updateRoom,
    deleteRoom,

    selectRoom
  }
})
