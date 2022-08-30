<template>
    <h5 class="q-my-none">Compound Interest</h5>
  <q-input v-model.number="interest" label="Interest %" type="number" />
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
import Interest from 'src/models/interest'

export default {
  name: 'CompoundInterest',
  emits: ['saved'],
  setup (props, { emit }) {
    const interest = ref(2)
    let isEditing = false
    let selectedTask = {}

    const store = useStore()

    watch(() => store.state.graph.selectedTask, (value) => {
      if (value instanceof Interest) {
        isEditing = true
        selectedTask = value
        interest.value = value.interest
      }
    })

    const cancel = function() {
      emit('cancel')
      reset()
    }

    const save = function() {
      const newTask = new Interest('Interest', interest.value)
      if (isEditing) {
        void store.dispatch('graph/editTask', { newTask, oldTask: selectedTask })
      } else {
        void store.dispatch('graph/setTask', newTask)
      }
      emit('saved')
      reset()
    }

    const reset = function() {
      isEditing = false
      selectedTask = {}
      void store.dispatch('graph/unselectTask')

      interest.value = 2
    }

    return {
      interest,
      save,
      cancel
    }
  }
}
</script>
