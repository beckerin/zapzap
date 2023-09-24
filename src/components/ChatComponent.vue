<script setup lang="ts">
import HamburguerIcon from './icons/HamburguerIcon.vue'
import SearchIcon from './icons/SearchIcon.vue'
import SmileIcon from './icons/SmileIcon.vue'
import PlusIcon from './icons/PlusIcon.vue'
import MicIcon from './icons/MicIcon.vue'
import SentIcon from './icons/SentIcon.vue'
import ReceivedIcon from './icons/ReceivedIcon.vue'
import ReadIcon from './icons/ReadIcon.vue'
import { useRoomStore } from '../stores/roomStore'
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'

const room = useRoomStore()
const authStore = useUserStore()
const message = ref('')
function sendMessage() {
  room.sendMessage(message.value)
  message.value = ''
}
function parsedTime(time: string): string {
  return time.substring(12, 17)
}
</script>
<template>
  <div class="border-l-2 border-slate-300 flex flex-col-reverse">
    <div class="flex justify-between gap-6 pr-4 py-4">
      <button class="ml-8">
        <SmileIcon />
      </button>
      <button>
        <PlusIcon />
      </button>
      <form class="w-full rounded-lg bg-slate-500" @submit.prevent="sendMessage">
        <input
          v-model="message"
          type="text"
          class="w-full bg-transparent py-2 px-4"
          placeholder="Digite uma mensagem"
        />
      </form>
      <button>
        <MicIcon />
      </button>
    </div>
    <div class="h-[80vh] bg-slate-700 flex flex-col-reverse px-14 overflow-scroll py-4 gap-1">
      <template v-for="(message, idx) in room.messages" :key="idx">
        <div
          v-if="message.owner.name != authStore.user.name"
          class="self-start px-4 py-2 bg-slate-800 rounded-lg flex"
        >
          {{ message.content }}
          <div class="text-xs mx-1 self-end">{{ parsedTime(message.date) }}</div>
        </div>
        <div v-else class="self-end px-4 py-2 bg-green-900 rounded-lg flex items-end">
          <div>
            {{ message.content }}
          </div>
          <div class="text-xs mx-1">{{ parsedTime(message.date) }}</div>
          <div class="w-2 py-1">
            <ReadIcon v-if="message.read" class="h-2 text-blue-500" />
            <ReceivedIcon v-else-if="message.received" class="h-2" />
            <SentIcon v-else-if="message.sent" class="h-2" />
          </div>
        </div>
      </template>
    </div>
    <div class="flex justify-between bg-slate-600 w-full py-2">
      <div class="flex items-center">
        <img src="" alt="" class="w-12 h-12 rounded-full" />
        <span class="ml-2">{{ room.getRoomName }}</span>
      </div>
      <div class="flex items-center justify-end">
        <SearchIcon class="w-8 h-8" />
        <HamburguerIcon class="w-8 h-8 ml-2" />
      </div>
    </div>
  </div>
</template>
