<template>
    <h5 class="q-my-none">Basic Income</h5>
    <q-input v-model="income" label="Yearly Income" type="number" />
    <q-input v-model="startAge" label="Start Age" type=number />
    <q-input v-model="retirementAge" label="Retirement Age" type="number" />
    <q-input v-model="interest" label="Savings Interest %" type="number" />
    <q-btn color="primary" label="Save" @click="save" />
</template>

<script>
import { useStore } from 'vuex'
import { ref } from 'vue'
import Income from 'src/models/income'


export default {
  name: 'BasicIncome',
  setup () {
    const income = ref(60000)
    const startAge = ref(25)
    const retirementAge = ref(65)
    const interest = ref(2)
    
    const store = useStore()

    const save = function() {
      void store.dispatch('graph/setTask', new Income('Basic Income', income.value, startAge.value, retirementAge.value, interest.value))
    }

    return {
      income,
      startAge,
      retirementAge,
      interest,
      save
    }
  }
}
</script>
