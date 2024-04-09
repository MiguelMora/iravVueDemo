<script setup>
  import { usePelisStore } from '~/stores/pelis.js'
  definePageMeta({
    middleware: ["autenticado"]
    // or middleware: 'auth'
  })
  const pelisStore = usePelisStore()
  import ListaPelis from '~/components/ListaPelis.vue'
  import AddFilm from '~/components/AddFilm.vue'

  pelisStore.subscribe()
</script>

<template>
  <v-container>
    <add-film @anyadir="p=>pelisStore.add(p)"></add-film>
    <lista-pelis :pelis="pelisStore.pelis" @borrar="v=>pelisStore.borrar(v)"></lista-pelis>
  </v-container>

</template>

<style scoped></style>
