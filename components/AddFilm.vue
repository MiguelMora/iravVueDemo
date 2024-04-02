<script setup lang="ts">
const valid= ref(false)
const film = reactive({
  name: '',
  year: NaN,
  director: ''
})

const emits = defineEmits(['anyadir'])
function anyadir(){
  emits('anyadir', film)
  film.name=''
  film.year=NaN
  film.director=''
}

function required(v){
  return !!v || 'El campo es obligatorio'
}

</script>

<template>
  <v-form v-model="valid"  @submit.prevent="anyadir()">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="film.name"
            :counter="10"
            :rules="[required]"
            label="Nombre"
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="film.director"
            :counter="10"
            :rules="[required]"
            label="Director"
            hide-details
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model.number="film.year"
            :rules="[required]"
            label="Año"
            hide-details
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto">
          <v-btn class="mt-2" type="submit" block>Añadir</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<style scoped>

</style>
