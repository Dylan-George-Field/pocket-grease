<template>
  <div>
    <q-input v-model="income" label="Yearly Income" type="number" />
    <q-btn v-on:click="$emit('submit', income)" color="primary" label="Primary" />
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
