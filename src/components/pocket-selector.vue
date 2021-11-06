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
import { ref } from 'vue'
import BasicIncome from 'src/components/basic-income.vue'
import BasicDeduction from 'src/components/basic-deduction.vue'
import CompoundInterest from 'src/components/compound-interest.vue'

export default {
  name: 'PocketSelector',
  components: { BasicIncome, BasicDeduction, CompoundInterest },
  setup () {
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
