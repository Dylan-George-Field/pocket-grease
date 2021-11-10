<template>
  <h5 class="q-my-none">Deduction</h5>
    <q-input v-model.number="deduction" label="Yearly Deductions" type="number" />
    <q-input v-model.number="start" label="Start Year" type="number" />
    <q-input v-model.number="end" label="End Year" type="number" />
    <div class="row q-mt-sm q-gutter-sm">
      <q-btn color="primary" label="save" @click="save" class="q-mt-sm" />
      <q-btn color="primary" label="cancel" @click="cancel" class="q-mt-sm" outline />
    </div>
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

    const cancel = function() {
      emit('cancel')
    }

    const save = function() {
      void store.dispatch('graph/setTask', new Deduction('Basic Deduction', deduction.value, start.value, end.value))
      emit('saved')
    }

    return {
      deduction,
      save,
      start,
      end,
      cancel
    }
  }
}
</script>
