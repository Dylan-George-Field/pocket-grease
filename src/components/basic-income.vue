<template>
    <h5 class="q-my-none">Income</h5>
    <q-input v-model.number="income" label="Yearly Income" type="number" />
    <q-input v-model.number="startAge" label="Start Age" type=number />
    <q-input v-model.number="retirementAge" label="Retirement Age" type="number" />
    <q-btn color="primary" label="Save" @click="save" class="q-mt-sm" />
</template>

<script>
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { useStore } from 'vuex'
import { ref } from 'vue'
import Income from 'src/models/income'


export default {
  name: 'BasicIncome',
  emits: ['saved'],
  setup (props, { emit }) {
    const income = ref(60000)
    const startAge = ref(25)
    const retirementAge = ref(65)

    const store = useStore()

    const save = function() {
      void store.dispatch('graph/setTask', new Income('Basic Income', income.value, startAge.value, retirementAge.value))
      emit('saved')
    }

    return {
      income,
      startAge,
      retirementAge,
      save
    }
  }
}
</script>
