import { defineStore } from 'pinia'

import {
  initAuth,
  logIn,
  createUser,
  logOut,
  emailReset,
  emailVerification,
} from '~/services/fireinit'

export const useUserStore = defineStore('user', {
  state:() => ({
    user: null,
    authInit: false,
    afterLogin: '', // where to go after login completes
  }),
  getters: {
    uid: (state) => (state.user ? state.user.uid : ''),
    logged: (state) => state.user !== null,
    email: (state) => (state.user ? state.user.email : ''),
    name: (state) =>
      state.user
        ? state.user.displayName
          ? state.user.displayName
          : state.user.email
        : '',
  },
  actions: {
    setAfterLogin(url) {
      this.afterLogin = url
    },
    async signUserUp({ email, password }) {
      await createUser(email, password)
      return this.user
    },
    async signUserIn({ email, password }) {
      await logIn(email, password)
      return this.user
    },
    async resetPasswordWithEmail(email) {
      await emailReset(email)
    },
    async sendVerificationEmail() {
      return await emailVerification()
    },
    async logout() {
      await logOut()
    },
    initAuth() {
      if (!this.authInit) {
        this.authInit = true
        initAuth((user) => {
          if (user)
            this.user = {
              displayName: user.displayName,
              email: user.email,
              uid: user.uid,
              emailVerified: user.emailVerified,
            }
          else this.user = null
        })
      }
      return this.authInit
    },
  }
})

