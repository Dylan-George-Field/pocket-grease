<template>
  <h5 class="q-my-none">Interest</h5>
  <q-input v-model="interest" label="Interest" type="number" />
  <q-btn color="primary" label="Save" @click="save" />
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
import Interest from 'src/models/interest'

export default {
  name: 'SavingsInterest',
  setup () {
    const interest = ref(2)

    const store = useStore()

    const save = function() {
      void store.dispatch('graph/setTask', new Interest('Interest', interest.value))
    }

    return {
      save,
      interest
    }
  }
}
</script>
