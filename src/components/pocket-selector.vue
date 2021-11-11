<template>
  <div v-show="showNavigation()" class="row q-gutter-md">
    <q-btn color="primary" label="Basic Income" @click="showBasicIncome = !showBasicIncome" />
    <q-btn color="primary" label="Basic Deduction" @click="showBasicDeduction = !showBasicDeduction" />
    <q-btn color="primary" label="Interest" @click="showInterest = !showInterest" />
  </div>
  <div v-show="showBasicIncome">
    <basic-income @saved="showBasicIncome = false" @cancel="showBasicIncome = false" />
  </div>
  <div v-show="showBasicDeduction">
    <basic-deduction @saved="showBasicDeduction = false" @cancel="showBasicDeduction = false" />
  </div>
  <div v-show="showInterest">
    <compound-interest @saved="showInterest = false" @cancel="showInterest = false" />
  </div>
</template>

<script>
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { ref, watch } from 'vue'
import { useStore } from 'vuex'

import BasicIncome from 'src/components/basic-income.vue'
import BasicDeduction from 'src/components/basic-deduction.vue'
import CompoundInterest from 'src/components/compound-interest.vue'
import Income from 'src/models/income'
import Deduction from 'src/models/deduction'
import Interest from 'src/models/interest'

export default {
  name: 'PocketSelector',
  components: { BasicIncome, BasicDeduction, CompoundInterest },
  setup () {
    const store = useStore()
    
    watch(() => store.state.graph.selectedTask, (task) => {
      if (task instanceof Income)
        showBasicIncome.value = true
      else if (task instanceof Deduction)
        showBasicDeduction.value = true
      else if (task instanceof Interest)
        showInterest.value = true
    })

    let showBasicIncome = ref(false)
    let showBasicDeduction = ref(false)
    let showInterest = ref(false)
    
    let showNavigation = function () {
      return !(showBasicIncome.value || showBasicDeduction.value || showInterest.value)
    }

    return {
      showNavigation,
      showBasicIncome,
      showBasicDeduction,
      showInterest
    }
  }
}
</script>
