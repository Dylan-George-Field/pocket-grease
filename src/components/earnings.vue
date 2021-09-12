<template>
  <div>
    <h5>Income</h5>
    <q-input v-model="income" label="Yearly Income" type="number" />
    <q-input v-model="startAge" label="Start Age" type=number />
    <q-input v-model="retirementAge" label="Retirement Age" type="number" />
    <q-input v-model="interest" label="Savings Interest %" type="number" />
    <h5>Deductions</h5>
    <q-input v-model="deductions" label="Yearly Deductions" type="number" />
    <q-btn v-on:click="$emit('submit', { income, deductions, startAge, retirementAge, interest })" color="primary" label="Calculate" class="q-mt-md" />
  </div>
</template>

<script>
export default {
  name: 'earnings',
  data () {
    return {
      income: 60000,
      deductions: 50000,
      startAge: 25,
      retirementAge: 65,
      interest: 2
    }
  }
}
</script>
