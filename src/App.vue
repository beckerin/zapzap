<script setup lang="ts">
import Chat from './components/ChatComponent.vue'
import Dashboard from './components/DashboardComponent.vue'
import ChatList from './components/ChatListComponent.vue'
import ConfigMenu from './components/ConfigMenuComponent.vue'
import Profile from './components/ProfileComponent.vue'
import { UserInfo, useUserStore } from './stores/userStore'

const userStore = useUserStore()
userStore.setUser({
  pp: 'https://media-lis1-1.cdn.whatsapp.net/v/t61.24694-24/345137231_548825390511657_3951930926494342112_n.jpg?ccb=11-4&oh=01_AdQl599ZgqGaPN1tNS1fB2K03ff4mo_eSLj4FFj0cpIrgQ&oe=6514F47B&_nc_sid=000000&_nc_cat=101',
  name: 'Paiva',
  note: 'Como o simples puxar de um buraco negro'
} as UserInfo)
</script>
<template>
  <main>
    <div>
      <Dashboard />
      <ChatList />
      <ConfigMenu />
    </div>
    <Chat />
    <Profile />
  </main>
</template>
