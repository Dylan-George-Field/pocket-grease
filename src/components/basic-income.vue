<template>
    <h5 class="q-my-none">Income</h5>
    <q-input v-model.number="income" label="Yearly Income" type="number" />
    <q-input v-model.number="startAge" label="Start Age" type=number />
    <q-input v-model.number="retirementAge" label="Retirement Age" type="number" />
    <div class="row q-mt-sm q-gutter-sm">
      <q-btn color="primary" label="save" @click="save" class="q-mt-sm" />
      <q-btn color="primary" label="cancel" @click="cancel" class="q-mt-sm" outline />
    </div>
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
    
    const cancel = function() {
      emit('cancel')
    }

    const save = function() {
      void store.dispatch('graph/setTask', new Income('Basic Income', income.value, startAge.value, retirementAge.value))
      emit('saved')
    }

    return {
      income,
      startAge,
      retirementAge,
      save,
      cancel
    }
  }
}
</script>
