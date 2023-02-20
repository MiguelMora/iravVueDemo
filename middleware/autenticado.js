import { useUserStore } from '@/stores/user'

export default function({ $pinia, redirect, route }) {
  const userStore = useUserStore($pinia)
  const loginPage = '/login'
  if (!userStore.logged) {
    userStore.setAfterLogin(route.path)
    redirect(loginPage)
  }
}
