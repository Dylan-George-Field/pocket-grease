<template>
  <h5 class="q-my-none">Basic Deduction</h5>
    <q-input v-model="deduction" label="Yearly Deductions" type="number" />
    <q-btn color="primary" label="Save" @click="save" />
</template>

<script>
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { useStore } from 'vuex'
import { ref } from 'vue'
import Deduction from 'src/models/deduction'

export default {
  name: 'BasicDeduction',
  setup () {
    const deduction = ref(0)

    const store = useStore()

    const save = function() {
      void store.dispatch('graph/setTask', new Deduction('Basic Deduction', deduction.value))
    }

    return {
      deduction,
      save
    }
  }
}
</script>
