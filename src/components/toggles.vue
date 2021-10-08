<template>
  <div>
    <q-item>
        <q-toggle v-model="value" label="savings" />
    </q-item>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue';
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'toggles',
  setup () {
    const store = useStore()

    const value = ref(true)

    return {
      value
    }
  }
})
</script>
