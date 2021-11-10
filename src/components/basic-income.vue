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
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useStore } from 'vuex'
import { ref, watch } from 'vue'
import Income from 'src/models/income'

export default {
  name: 'BasicIncome',
  emits: ['saved'],
  setup (props, { emit }) {
    let income = ref(60000)
    let startAge = ref(25)
    let retirementAge = ref(65)
    let isEditing = false
    let selectedTask = {}

    const store = useStore()
    
    watch(() => store.state.graph.selectedTask, (value) => {
      if (value instanceof Income) {
        isEditing = true
        selectedTask = value
        income.value = value.income
        startAge.value = value.startAge
        retirementAge.value = value.retirementAge
      }
    })

    const cancel = function() {
      reset()
      emit('cancel')
    }

    const save = function() {
      const newTask = new Income('Basic Income', income.value, startAge.value, retirementAge.value)
      if (isEditing) {
        void store.dispatch('graph/editTask', { newTask, oldTask: selectedTask })
      } else {
        void store.dispatch('graph/setTask', newTask)
      }
      reset()
      emit('saved')
    }

    const reset = function() {
      isEditing = false
      selectedTask = {}
      void store.dispatch('graph/unselectTask')

      income.value = 60000
      startAge.value = 25
      retirementAge.value = 65
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
