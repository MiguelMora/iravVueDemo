<template>
  <a-login
    :error="userStore.error"
    @sign-in="userStore.signUserIn"
    @sign-up="userStore.signUserUp"
  ></a-login>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const { logged } = storeToRefs(userStore)

onMounted(() => {
  userStore.initAuth()
  watch(
    logged,
    (logged) => {
      if (logged) {
        const newPath = userStore.afterLogin
        userStore.setAfterLogin('/')
        navigateTo(newPath)
      }
    },
    { immediate: true },
  )
})
</script>

<style scoped></style>
