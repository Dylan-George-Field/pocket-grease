<template>
    <h5 class="q-my-none">Compound Interest</h5>
  <q-input v-model.number="interest" label="Interest %" type="number" />
  <q-btn color="primary" label="Save" @click="save" class="q-mt-sm" />
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

    const save = function() {
      void store.dispatch('graph/setTask', new Interest('Interest', interest.value))
      emit('saved')
    }
    return {
      interest,
      save
    }
  }
}
</script>
