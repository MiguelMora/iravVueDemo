<script setup lang="ts">
  const props = defineProps({
    pelis : {
      type: Array,
      default: () => []
    }
  })
  const emits = defineEmits(['borrar'])
  function borrar(pos){
    emits('borrar', pos)
  }


</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="(p, i) of pelis" :key="i" cols="auto">
        <v-card class="mx-auto"  hover>
          <v-card-item>
            <v-card-title>{{ p.name }}</v-card-title>
            <v-card-subtitle>{{ p.director }} </v-card-subtitle>
          </v-card-item>
          <v-card-text>{{p.year}} </v-card-text>
          <v-card-actions>
            <v-btn color="red" icon="mdi-delete" @click="borrar(i)"></v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>

</style>
