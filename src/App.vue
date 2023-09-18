<script setup lang="ts">
import Chat from './components/ChatComponent.vue'
import Dashboard from './components/DashboardComponent.vue'
import ChatList from './components/ChatListComponent.vue'
import ConfigMenu from './components/ConfigMenuComponent.vue'
import Profile from './components/ProfileComponent.vue'
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
