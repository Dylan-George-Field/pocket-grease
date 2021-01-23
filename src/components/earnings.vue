<template>
  <div>
    <q-input v-model="income" label="Income" type="number" />
  </div>
</template>

<script>
export default {
  name: 'earnings',
  data () {
    return {
      income: 0
    }
  }
}
</script>
