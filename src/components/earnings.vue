<template>
  <div>
    <h5>Income</h5>
    <q-input v-model="income" label="Yearly Income" type="number" />
    <q-input v-model="startAge" label="Start Age" type=number />
    <q-input v-model="retirementAge" label="Retirement Age" type="number" />
    <h5>Deductions</h5>
    <q-input v-model="deductions" label="Yearly Deductions" type="number" />
    <q-btn v-on:click="$emit('submit', { income, deductions, startAge, retirementAge })" color="primary" label="Calculate" />
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
      retirementAge: 65
    }
  }
}
</script>
