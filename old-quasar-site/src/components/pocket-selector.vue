<template>
  <div v-show="showNavigation()" class="row q-gutter-md">
    <q-btn color="primary" label="Income" @click="showIncome = !showIncome" />
    <q-btn color="primary" label="Basic Deduction" @click="showBasicDeduction = !showBasicDeduction" />
    <q-btn color="primary" label="Interest" @click="showInterest = !showInterest" />
  </div>
  <div v-show="showIncome">
    <income-menu @cancel="showIncome=false" />
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

import IncomeMenu from 'src/components/menus/income-menu.vue'
import BasicDeduction from 'src/components/basic-deduction.vue'
import CompoundInterest from 'src/components/compound-interest.vue'
import Income from 'src/models/income'
import Deduction from 'src/models/deduction'
import Interest from 'src/models/interest'

export default {
  name: 'PocketSelector',
  components: { IncomeMenu, BasicDeduction, CompoundInterest },
  setup () {
    const store = useStore()
    
    watch(() => store.state.graph.selectedTask, (task) => {
      if (task instanceof Income) {
        showIncome.value = true
        showBasicDeduction.value = false
        showInterest.value = false
      }
      else if (task instanceof Deduction) {
        showBasicDeduction.value = true
        showIncome.value = false
        showInterest.value = false
      }
      else if (task instanceof Interest) {
        showInterest.value = true
        showIncome.value = false
        showBasicDeduction.value = false
      }
    })

    let showIncome = ref(false)
    let showBasicDeduction = ref(false)
    let showInterest = ref(false)
    
    const showNavigation = function () {
      return !(showIncome.value || showBasicDeduction.value || showInterest.value)
    }

    return {
      showNavigation,
      showIncome,
      showBasicDeduction,
      showInterest
    }
  }
}
</script>
