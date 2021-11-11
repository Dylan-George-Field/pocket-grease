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
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useStore } from 'vuex'
import { ref, watch } from 'vue'
import Deduction from 'src/models/deduction'

export default {
  name: 'BasicDeduction',
  setup (props, { emit }) {
    let deduction = ref(50000)
    let start = ref(25)
    let end = ref(100)
    let isEditing = false
    let selectedTask = {}

    const store = useStore()
    
    watch(() => store.state.graph.selectedTask, (value) => {
      if (value instanceof Deduction) {
        isEditing = true
        selectedTask = value
        deduction.value = value.deduction
        start.value = value.start
        end.value = value.end
      }
    })

    const cancel = function() {
      emit('cancel')
      reset()
    }

    const save = function() {
      const newTask = new Deduction('Basic Deduction', deduction.value, start.value, end.value)
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

      deduction.value = 50000
      start.value = 25
      end.value = 100
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
