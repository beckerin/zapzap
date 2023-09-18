<script setup lang="ts">
import { ref } from 'vue'
import { useChatListStore } from '../stores/chatListStore'
import ArchiveIcon from './icons/ArchiveIcon.vue'
import PinIcon from './icons/PinIcon.vue'
const haveArchived = ref(true)
const chatListStore = useChatListStore()
</script>
<!-- 
    - [ ] Router to config
    - [ ] Behavior to pin / open opts
-->
<template>
  <div class="max-h-[84vh] overflow-y-scroll flex-row">
    <div v-if="haveArchived" class="flex my-4 items-end">
      <ArchiveIcon class="w-2/12" />
      <div class="w-10/12 flex justify-between mr-5">
        <span>Arquivadas</span>
        <span>1</span>
      </div>
    </div>

    <button
      class="flex w-full"
      v-for="(chat, chatIdx) in chatListStore.chatList"
      :key="chatIdx"
      @click="chatListStore.selectChat(chat)"
    >
      <div class="w-2/12 flex items-center justify-center pt-3">
        <img :src="chat.pp" alt="" class="w-12 h-12 rounded-full" />
      </div>
      <div class="w-10/12 border-t-2 border-slate-300 pr-5 py-3">
        <div class="flex justify-between">
          <span class="font-semibold">{{ chat.name }}</span>
          <span class="text-xs">{{ chat.dateLastReply }}</span>
        </div>

        <div class="flex justify-between">
          <p class="truncate">{{ chat.lastMessage }}</p>
          <div class="ml-2">
            <PinIcon v-if="chat.isPinned" />
          </div>
        </div>
      </div>
    </button>
  </div>
</template>
