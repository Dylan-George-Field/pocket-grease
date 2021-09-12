<template>
  <div>
    <q-input v-model="income" label="Yearly Income" type="number" />
    <q-input v-model="startAge" label="Start Age" type=number />
    <q-btn v-on:click="$emit('submit', { income, startAge })" color="primary" label="Calculate" />
  </div>
</template>

<script>
export default {
  name: 'earnings',
  data () {
    return {
      income: 0,
      startAge: 25
    }
  }
}
</script>
