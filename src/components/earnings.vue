<template>
  <div>
    <div class="row items-start q-gutter-lg">
      <div class="col">
        <h5 class="q-my-none">Income</h5>
        <q-input v-model="income" label="Yearly Income" type="number" />
        <q-input v-model="startAge" label="Start Age" type=number />
        <q-input v-model="retirementAge" label="Retirement Age" type="number" />
        <q-input v-model="interest" label="Savings Interest %" type="number" />
      </div>
      <div class="col">
        <h5 class="q-mb-none">Deductions</h5>
        <q-input v-model="incomeTax" label="Income Tax %" type="number" />
        <q-input v-model="deductions" label="Yearly Deductions" type="number" />
        <q-btn v-on:click="$emit('submit', { income, deductions, startAge, retirementAge, interest })" color="primary" label="Calculate" class="q-mt-md" />
      </div>
    </div>
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
  },
  computed: {
    incomeTax () {
      if (this.income < 18200) {
        return 0
      } else if (this.income > 18201 && this.income < 37000) {
        return 19
      } else if (this.income > 37001 && this.income < 90000) {
        return 32
      } else if (this.income > 90001 && this.income < 180000) {
        return 37
      } else {
        return 45
      }
    }
  }
}
</script>
