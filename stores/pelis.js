import { defineStore } from 'pinia'
import { useFirestoreCollection } from '~/composables/useFirestoreCollection.js'

export const usePelisStore = defineStore('pelis', () => {
  const {
    path,
      filter,
      documents,
      listener,
      listening,
      error,

      ids,
      docsArray: pelis,
      unsubscribe,
      subscribe,
      clearError,
      add,
      remove,
  }=useFirestoreCollection('films')
  /*
  const pelis = ref([
    { name: 'Openheimer', director: 'C. Nolan', year: 2023 },
    { name: 'Barbie', director: 'Greta Gerwig', year: 2023 },
    { name: 'Openheimer', director: 'C. Nolan', year: 2023 },
    { name: 'Barbie', director: 'Greta Gerwig', year: 2023 },

    { name: 'Openheimer', director: 'C. Nolan', year: 2023 },
    { name: 'Barbie', director: 'Greta Gerwig', year: 2023 },

    { name: 'Openheimer', director: 'C. Nolan', year: 2023 },
    { name: 'Barbie', director: 'Greta Gerwig', year: 2023 },
  ])

  function borrar(pos){
    pelis.value.splice(pos, 1)
  }
  function add(film){
    pelis.value.push({...film})
  }

  return ({pelis, borrar, add})

   */

  function borrar(pos){
    remove(pelis.value[pos].id)
  }
  return ({path,
    filter,
    documents,
    listener,
    listening,
    error, pelis, add, borrar, subscribe, unsubscribe})
})
