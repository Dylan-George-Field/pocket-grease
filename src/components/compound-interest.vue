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
import { useStore } from 'vuex'
import { ref } from 'vue'
import Interest from 'src/models/interest'

export default {
  name: 'CompoundInterest',
  emits: ['saved'],
  setup (props, { emit }) {
    const interest = ref(2)

    const store = useStore()

    const cancel = function() {
      emit('cancel')
    }

    const save = function() {
      void store.dispatch('graph/setTask', new Interest('Interest', interest.value))
      emit('saved')
    }
    return {
      interest,
      save,
      cancel
    }
  }
}
</script>
