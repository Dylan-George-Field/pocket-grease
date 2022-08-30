<template>
    <div v-show="!showBasicIncome && !showSalary" class="row q-mt-sm q-gutter-sm" >
      <q-btn color="primary" label="Basic Income" @click="showBasicIncome = !showBasicIncome" />
      <q-btn color="primary" label="Salary" @click="showSalary = !showSalary" />
      <q-btn color="primary" label="back" @click="cancel" class="q-mt-sm" outline />
    </div>
    <div v-show="showBasicIncome">
      <basic-income @saved="showBasicIncome=false" @cancel="showBasicIncome= false" />
    </div>
    <div v-show="showSalary">
      <salary @saved="showSalary=false" @cancel="showSalary=false" />
    </div>
</template>

<script>
import { ref } from 'vue'
import basicIncome from '../basic-income.vue'
import salary from '../salary.vue'
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
export default {
  components: { basicIncome, salary},
  name: 'IncomeMenu',
  emits: ['saved'],
  setup (props, { emit }) {
    const cancel = function() {
      emit('cancel')
    }

    let showBasicIncome = ref(false)
    let showSalary = ref(false)

    return {
      cancel,
      showBasicIncome,
      showSalary
    }
  }
}
</script>
