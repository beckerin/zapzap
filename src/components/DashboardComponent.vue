<script setup lang="ts">
import CommunityIcon from './icons/CommunityIcon.vue'
import StatusIcon from './icons/StatusIcon.vue'
import NewChatIcon from './icons/NewChatIcon.vue'
import HamburguerIcon from './icons/HamburguerIcon.vue'
import SearchIcon from './icons/SearchIcon.vue'
import FilterIcon from './icons/FilterIcon.vue'
import { useUserStore } from '../stores/userStore'

const userStore = useUserStore()
</script>
<!-- 
    - [ ] Router to config/profile 
    - [ ] Router to community 
    - [ ] Router to Status 
    - [ ] Router to new Chat 
    - [ ] Route to Config 
    - [ ] Behavior to filter / new chat 
-->
<template>
  <div class="bg-slate-800">
    <div class="flex justify-end gap-[26px] pl-3 pr-6 py-3 bg-slate-600">
      <button class="w-10 mr-auto">
        <img class="rounded-full" :src="userStore.user.pp" alt="" />
      </button>
      <button>
        <CommunityIcon />
      </button>
      <button>
        <StatusIcon />
      </button>
      <button>
        <NewChatIcon />
      </button>
      <button>
        <HamburguerIcon />
      </button>
    </div>
    <div class="flex px-2">
      <div class="flex rounded w-full px-2 gap-3 py-1 bg-slate-600 my-1">
        <SearchIcon />
        <input
          class="w-full bg-transparent"
          type="text"
          name="search"
          value=""
          placeholder="Pesquisar ou começar uma nova conversa"
        />
      </div>
      <button class="mx-2">
        <FilterIcon />
      </button>
    </div>
  </div>
</template>
<style scoped></style>
