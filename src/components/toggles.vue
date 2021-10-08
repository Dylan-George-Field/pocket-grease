<template>
  <div>
    <q-item>
              There's a bug that won't re-show the graph (refresh instead)
    </q-item>
    <q-item>
        <q-toggle v-model="toggleSavings" :false-value="true" :true-value="false" label="savings" />
    </q-item>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'toggles',
  setup () {
    const store = useStore()

    const toggleSavings = computed({
      get: () => {
        return store.state.graph.savingsToggle
      },
      set: () => {
        void store.dispatch('graph/savingsToggle')
      }
    })

    return {
      toggleSavings
    }
  }
})
</script>
