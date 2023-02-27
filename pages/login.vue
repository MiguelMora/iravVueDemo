<template>
  <a-login :error="error" @signIn="login" @signUp="createUser"></a-login>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useUserStore } from '@/stores/user'

export default {
  data: () => ({
    error: '',
    errorCode: {
      'invalid-email': 'Invalid e-mail',
      'user-disabled': 'User account is disabled',
      'user-not-found': 'User not found, try to sign up instead',
      'wrong-password': 'Wrong password',
      'email-already-in-use': 'Email already in use, try to sign in instead'
    }
  }),
  created() {
    this.initAuth()
  },
  computed: {
    ...mapState(useUserStore, ['afterLogin', 'logged']),
  },
  watch: {
    logged: {
      immediate: true,
      handler(logged) {
        if (logged) {
          const router = useRouter();
          router.push(this.afterLogin)
        }
      },
    },
  },
  methods: {
    ...mapActions(useUserStore, ['signUserIn', 'initAuth', 'signUserUp']),
    async createUser(user) {
      await this.login(user, true)
    },
    async login(user, signUp = false) {
      try {
        this.error = ''
        if (signUp) await this.signUserUp(user)
        else await this.signUserIn(user)
      } catch (error) {
        const code = error.code.substring(5)
        this.error = this.errorCode[code] ? this.errorCode[code] : code
      }
    },
  },
}
</script>

<style scoped></style>
