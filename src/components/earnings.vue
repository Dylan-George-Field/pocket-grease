<template>
  <div>
    <h5>Income</h5>
    <q-input v-model="income" label="Yearly Income" type="number" />
    <q-input v-model="startAge" label="Start Age" type=number />
    <q-input v-model="retirementAge" label="Retirement Age" type="number" />
    <h5>Deductions</h5>
    <q-input v-model="deductions" label="Yearly Deductions" type="number" />
    <q-btn v-on:click="$emit('submit', { income, deductions, startAge })" color="primary" label="Calculate" />
  </div>
</template>

<script>
export default {
  name: 'earnings',
  data () {
    return {
      income: 0,
      deductions: 0,
      startAge: 25,
      retirementAge: 65
    }
  }
}
</script>
