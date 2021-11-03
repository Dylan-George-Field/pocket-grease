<template>
  <h5 class="q-my-none">Deduction</h5>
    <q-input v-model.number="deduction" label="Yearly Deductions" type="number" />
    <q-input v-model.number="start" label="Start Year" type="number" />
    <q-input v-model.number="end" label="End Year" type="number" />
    <q-btn color="primary" label="Save" @click="save" class="q-mt-sm" />
</template>

<script>
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { useStore } from 'vuex'
import { ref } from 'vue'
import Deduction from 'src/models/deduction'

export default {
  name: 'BasicDeduction',
  setup (props, { emit }) {
    const deduction = ref(50000)
    const start = ref(25)
    const end = ref(100)

    const store = useStore()

    const save = function() {
      void store.dispatch('graph/setTask', new Deduction('Basic Deduction', deduction.value, start.value, end.value))
      emit('saved')
    }

    return {
      deduction,
      save,
      start,
      end
    }
  }
}
</script>
